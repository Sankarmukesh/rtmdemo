import numpy as np
import pandas as pd
from scipy import stats
from scipy.stats import t

from api.common_utilities import get_total_weekly_target_data, filter_population
from api.helpers import getRowResults
from api.serializers import *
from api.models import *
import os
from api import json
from datetime import datetime
from rest_framework import generics
import traceback
import config.config_data as config
import datetime

import pdfkit
import jinja2

from django.http import HttpResponse
# from api.teststores import get_total_weekly_target_data
import logging

logger = logging.getLogger(__name__)

config_data = config.data

def GetAllSavedData(request):

	import json as j
	data = j.loads(request.body)
	data = data['data']
	gettestStore = TestMstr.objects.get(test_name=data,is_active=True,is_deleted=False)
	results  = gettestStoreSerializer(gettestStore)
	return json.Response(results.data,True)

def Get_StoresDetails(request):

	import json as j
	data = j.loads(request.body)
	data = data['data']
	gettestStore = StoreMstr.objects.filter(store_sk__in=data)
	results  = MatchTestStoreSerializer(gettestStore,many=True)
	return json.Response(results.data,True)

def startEnd(date, end=False):
	import datetime
	day = -1
	if end:
		day = 5
	date = datetime.datetime.strptime(date, '%Y-%m-%d')
	if end:
		if(date.weekday()<=6):
			date = date + datetime.timedelta(days=7)
		if(date.weekday()==5):
			date = date - datetime.timedelta(days=7)
	if(end==False):
		if(date.weekday()!=6):
			return  date - datetime.timedelta(days=7)
	return date - datetime.timedelta(days=(date.weekday() - day) % 7)


class SaveWeeklyData(generics.ListCreateAPIView):

	def post(self, request):
		filename = request.FILES['week_data']
		if filename:
			filename_check = filename.name
			ext = [".xlsx", ".csv", ".xls"]
			if filename_check.endswith(tuple(ext)):
				extesnion = os.path.splitext(filename_check)[1]
				if (extesnion == '.csv'):
					data = pd.read_csv(filename, engine='python')
				else:
					data = pd.read_excel(filename)
				# try:
				for i in data.index:
					if(data['Partner_ID'][i]==None):
							break;
					else:
						Save_weekly = WeeklyStrMst(
							banner                        = data['Banner'][i],
							chocolate_rsv                 = data['Chocolate RSV'][i],
							chocolate_units               = data['Chocolate Units'][i],
							outlet_banner                 = data['Outlet Banner Code'][i],
							partner_ID                    = data['Partner_ID'][i],
							petcare_RSV                   = data['Petcare RSV'][i],
							petcate_units                 = data['Petcare Units'][i],
							rsv                        	  = data['RSV'][i],
							volume                        = data['Volume'][i],
							week                          = data['Week'][i],
							year                          = data['Year'][i],
							segment                       = data['Segment'][i],
							territory                     = data['Territory'][i],
							csv_outlet_segment            = data['CSV of outlet Segment'][i],
							influence_segment             = data['Influence Segment'][i],
							overall_segment               = data['Overall_Segment'][i]
							)
						Save_weekly.save()

	# return "Ssf"


def find_weeks(start,end):
	import datetime
	l = []
	for i in range((end-start).days + 1):
		d = (start+datetime.timedelta(days=i)).isocalendar()[:2] # e.g. (2011, 52)
		yearweek = '{}{:02}'.format(*d) # e.g. "201152"
		l.append(yearweek)
	return sorted(set(l))


def get_valid_weekly_target_data(target_variable=None):

	if target_variable is not None:

		sql_query_wk = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(config_data['AUS']['tables']['weekly_mstr']))
		weekly_target_variables_file = getRowResults(sql_query_wk, (1,0))
		weekly_target_variables_file = pd.DataFrame(weekly_target_variables_file)


		yearweeks = weekly_target_variables_file["Week"].unique().tolist()
		yearweeks.sort(reverse=True)
		consideryearweeks = yearweeks[:104]
		consideryearweeks.sort(reverse=False)

		#Remove stores which have zero sales in any of the weeks
		weekly_target_variables_file = weekly_target_variables_file[weekly_target_variables_file["Week"].isin(consideryearweeks)]
		eliminatestores1 = weekly_target_variables_file[weekly_target_variables_file[target_variable]==0]["Customer_Name"].unique().tolist()
		weekly_target_variables_file = weekly_target_variables_file[~(weekly_target_variables_file["Customer_Name"].isin(eliminatestores1))]

		#Remove stores which dont have sales in any of the weeks
		weekcountsdf = weekly_target_variables_file.groupby("Customer_Name")["Week"].nunique().reset_index().rename(columns={"Week":"Week_Count"})
		eliminatestores2 = weekcountsdf[weekcountsdf["Week_Count"]<104]["Customer_Name"].unique().tolist()
		weekly_target_variables_file = weekly_target_variables_file[~(weekly_target_variables_file["Customer_Name"].isin(eliminatestores2))]
		aggdf = weekly_target_variables_file.groupby('Customer_Name')[
			target_variable].sum().reset_index()
		aggdf = aggdf.sort_values(target_variable, ascending=True)
		aggdf["Reference"] = aggdf[target_variable].shift(1)
		aggdf["Difference_Percentage"] = aggdf[target_variable] - aggdf["Reference"]
		aggdf["Difference_Percentage"] = (aggdf["Difference_Percentage"] / aggdf["Reference"]) * 100
		aggdf["Difference_Percentage"] = aggdf["Difference_Percentage"].round()
		eliminatestores3 = aggdf[aggdf["Difference_Percentage"] > 10]["Customer_Name"].unique().tolist()
		weekly_target_variables_file = weekly_target_variables_file[
			~(weekly_target_variables_file['Customer_Name'].isin(eliminatestores3))]

		return weekly_target_variables_file,consideryearweeks


def get_feature_thresholds(teststores,controlstores,features):

    threshold_dict = dict()
    for feature in features:
        std1 = teststores[feature].std()
        std2 = controlstores[feature].std()
        samples1 = teststores[feature].shape[0]
        samples2 = controlstores[feature].shape[0]
        numerator = np.power((std1*std1/samples1 + std2*std2/samples2),2)
        denominator = (np.power((std1*std1/samples1),2)/(samples1-1) + np.power((std2*std2/samples2),2)/(samples2-1))
        degfreedom = numerator/denominator
        pval = 0.8
        criticalvalue = t.ppf(1-pval/2,degfreedom)
        difference_in_means = criticalvalue*np.sqrt((std1*std1/samples1 + std2*std2/samples2))
        threshold_dict[feature] = round(difference_in_means,2)

    return threshold_dict


def get_annual_rsv_lifts(target_variable=None,region_data=None):

    config_cols = config_data[region_data]
    # Getting the the target varaibles file
    weekly_target_variables_file,consideryearweeks = get_valid_weekly_target_data(target_variable=target_variable)

    weeks1 = consideryearweeks[:52]
    weeks2 = consideryearweeks[52:]
    weeklyrsvdatayear1 = weekly_target_variables_file[weekly_target_variables_file["Week"].isin(weeks1)]
    weeklyrsvdatayear2 = weekly_target_variables_file[weekly_target_variables_file["Week"].isin(weeks2)]
    weeklyrsvdatayear1["Year"] = "Year1"
    weeklyrsvdatayear2["Year"] = "Year2"

    aggdict = {k:sum for k in ['RSV','Volume']}
    groupbycolumns = [config_cols['weekly_target_variable']["partner_id"]]+[config_cols['store_mstr_columns']["banner"],config_cols['store_mstr_columns']["storegrid"],config_cols['store_mstr_columns']["segment"],config_cols['store_mstr_columns']["territory"],config_cols['store_mstr_columns']["baycount"]]+["Year"]

    annualrsvdatayear1 =  weeklyrsvdatayear1.groupby(groupbycolumns).agg(aggdict).reset_index()
    annualrsvdatayear2 =  weeklyrsvdatayear2.groupby(groupbycolumns).agg(aggdict).reset_index()

    annualrsvdatayear1.rename(columns={'RSV':'RSV Year 1','Volume':'Volume Year 1'},inplace=True)
    annualrsvdatayear2.rename(columns={'RSV':'RSV Year 2','Volume':'Volume Year 2'},inplace=True)

    mergecols = [config_cols['weekly_target_variable']["partner_id"]]+[config_cols['store_mstr_columns']["banner"],config_cols['store_mstr_columns']["storegrid"],config_cols['store_mstr_columns']["segment"],config_cols['store_mstr_columns']["territory"],config_cols['store_mstr_columns']["baycount"]]

    annualrsvdatamerged = annualrsvdatayear1.merge(annualrsvdatayear2,on=mergecols)
    annualrsvdatamerged.drop(["Year_x","Year_y"],axis=1,inplace=True)

    rsvfilter = ((annualrsvdatamerged["RSV Year 1"]>0) & (annualrsvdatamerged["RSV Year 2"]>0))
    volumefilter = ((annualrsvdatamerged["Volume Year 1"]>0) & (annualrsvdatamerged["Volume Year 2"]>0))
    annualrsvdatamerged = annualrsvdatamerged[rsvfilter & volumefilter]

    annualrsvdatamerged["RSV Lift"] = (annualrsvdatamerged["RSV Year 2"]-annualrsvdatamerged["RSV Year 1"])/annualrsvdatamerged["RSV Year 1"]
    annualrsvdatamerged["Volume Lift"] = (annualrsvdatamerged["Volume Year 2"]-annualrsvdatamerged["Volume Year 1"])/annualrsvdatamerged["Volume Year 1"]

    return annualrsvdatamerged


class StoreSummaryDownload(generics.ListCreateAPIView):

	def post(self, request):
		try:
			import json as j
			region_name = request.META['HTTP_COUNTRY']
			config_cols = config_data[region_name]

			requestData = j.loads(request.body.decode('utf-8'))
			channel_data = ' , '.join(requestData['channel'])
			territory_data = ' , '.join(requestData['territory'])
			store_segments_data = ' , '.join(requestData['store_segments'])
			sales_potential_data = ' , '.join(requestData['sales_potential'])
			store_feature2 = requestData['store_feature2']
			population_size = 0
			sample_size = 0
			is_testmeasurement = False
			is_percentageChange = False
			is_impact = False
			reportType = requestData['reportType']
			prewindow_start = requestData['preperiod_start']
			prewindow_end = requestData['preperiod_end']
			postwindow_start = requestData['postperiod_start']
			postwindow_end = requestData['postperiod_end']
			# Get Control Store Summary Data
			stores = requestData['controlstores']
			categories = []
			test_control_mapping_stores = pd.DataFrame.from_dict(stores, orient='columns')
			results = getVariableDict(test_control_mapping_stores=test_control_mapping_stores, config_cols=config_cols, region_name=region_name, population=False, targetVariable= requestData['target_variable'], categories=categories,
									  prewindow_end=prewindow_end, prewindow_start=prewindow_start, postwindow_start=postwindow_start, postwindow_end=postwindow_end)
			teststore_results = getVariableDict(test_control_mapping_stores=test_control_mapping_stores, config_cols=config_cols,region_name=region_name,population=True, targetVariable= requestData['target_variable'],categories=categories,
												prewindow_end=prewindow_end, prewindow_start=prewindow_start, postwindow_start=postwindow_start, postwindow_end=postwindow_end)

			# to get Population size and sample size
			for k in teststore_results["variable_metric"].items():
				if k[0] == 'Test stores split':
					test_stores_list = list(k[1].values())
					sample_size = sum(test_stores_list)
				elif k[0] == 'Population stores split':
					population_stores_list = list(k[1].values())
					population_size = sum(population_stores_list)
			yearValue = datetime.datetime.now()

			test_store_summary = {
				"rsv": {
					"test_rsv_mean": "{:,.0f}".format(teststore_results['variable_metric']['RSV']['Test Mean']),
					"test_rsv_pop_mean": "{:,.0f}".format(
						teststore_results['variable_metric']['RSV']['Population Mean']),
					"test_rsv_test_stdmean": "{:,.0f}".format(
						teststore_results['variable_metric']['RSV']['Test Std Dev']),
					"test_rsv_pop_stdmean": "{:,.0f}".format(
						teststore_results['variable_metric']['RSV']['Population Std Dev'])
				}
			}
			control_store_summary = {
				"rsv": {
					"contrl_summary_rsv_mean": "{:,.0f}".format(results['variable_metric']['RSV']['Test Mean']),
					"contrl_summary_rsv_pop_mean": "{:,.0f}".format(
						results['variable_metric']['RSV']['Population Mean']),
					"contrl_summary_rsv_test_stdmean": "{:,.0f}".format(
						results['variable_metric']['RSV']['Test Std Dev']),
					"contrl_summary_rsv_pop_stdmean": "{:,.0f}".format(
						results['variable_metric']['RSV']['Population Std Dev'])
				}
			}

			store_feature = config_cols['report_generate']['store_feature']
			store_feature.append(store_feature2)
			matching_criteria = config_cols['report_generate']['matching_criteria']
			for index in range(len(matching_criteria)):
				if matching_criteria[index] == 'Annual':
					matching_criteria[index] = matching_criteria[index] + requestData['target_variable']
				elif matching_criteria[index] == 'Lift':
					matching_criteria[index] = requestData['target_variable'] + matching_criteria[index]
			report_for = requestData['report_for']
			for k in report_for:
				if k == 'Impact summary':
					is_impact = True
				elif k == 'Percentage change':
					is_percentageChange = True
				elif k == 'Test measurement results':
					is_testmeasurement = True
			if requestData['test_type'] != 'RTM Impact Test':
				cost = "{:,}".format(int(requestData['cost']))
				current_rsv = "{:,}".format(int(requestData['current_rsv']))
			else:
				cost = '-'
				current_rsv = '-'
			pdf_data = {
				"test_vs_control_change": requestData['test_vs_control_change'],
				"breakeven_lift": requestData['breakeven_lift'],
				"probabilty": requestData['probabilty'],
				"decision": requestData['decision'],
				"target_variable": requestData['target_variable'],
				"incremental_rsv": requestData['incremental_rsv'],
				"incremental_mac": requestData['incremental_mac'],
				"cost_impact": requestData['cost_impact'],
				"earnings": requestData['earnings'],
				"test_name": requestData['test_name'],
				"test_type": requestData['test_type'],
				"test_desc": requestData['test_desc'],
				"pre_test_start": requestData['pre_test_start'],
				"pre_test_end": requestData['pre_test_end'],
				"post_test_start": requestData['post_test_start'],
				"post_test_end": requestData['post_test_end'],
				"channel": channel_data,
				"sales_potential": sales_potential_data,
				"store_segments": store_segments_data,
				"territory": territory_data,
				"confidence_level": requestData['confidence_level'],
				"margin_of_err": requestData['margin_of_err'],
				"t_test_store_split": teststore_results['variable_metric']['Test stores split'],
				"t_population_store_split": teststore_results['variable_metric']['Population stores split'],
				"test_store_summary": test_store_summary,
				"control_store_summary": control_store_summary,
				"yaxis_text": requestData['yaxis_text'],
				"pre_data": requestData['series1_chart_data'],
				"post_data": requestData['series2_chart_data'],
				"date_time": requestData['date_time'],
				"config_col": config_cols,
				"region_name": region_name,
				"year": yearValue.year,
				"sales_potential_data": sales_potential_data,
				"linechartData": requestData['linechartData'],
				"lineChartyAxisText": requestData['lineChartyAxisText'],
				"current_rsv": current_rsv,
				"cost": cost,
				"sample_size": sample_size,
				"population_size": population_size,
				"store_feature": store_feature,
				"matching_criteria": matching_criteria,
				"rowSpan": config_cols['report_generate']['row_span'],
				"is_impact": is_impact,
				"is_percentageChange": is_percentageChange,
				"is_testmeasurement": is_testmeasurement
			}
			response = getPdfData(pdf_data, reportType)
			return response
		except:
			traceback.print_exc()

def getPdfData(jsonData, reportType):
	try:
		curr_date_tme = datetime.datetime.now()
		options = {
			'dpi': 300,
			'page-size': 'A4',
			'margin-top': '0.25in',
			'margin-right': '0.20in',
			'margin-bottom': '0.25in',
			'margin-left': '0.25in',
			'encoding': "UTF-8",
			'javascript-delay': 25000,
			'no-stop-slow-scripts': None,
			'custom-header': [
				('Accept-Encoding', 'gzip')
			],
			'no-outline': None,
			'quiet': ''
		}
		url = 'templates/temp/summary_report/'
		filename = "{0}_{1}".format("Store_Summary_Report", curr_date_tme.strftime("%d_%b_%Y_%H_%M_%S"))
		config = pdfkit.configuration(wkhtmltopdf="/usr/local/bin/wkhtmltopdf")

		pdf_data = jsonData
		templateLoader = jinja2.FileSystemLoader(searchpath="./")
		templateEnv = jinja2.Environment(loader=templateLoader)
		TEMPLATE_FILE = "templates/summary_report/{0}.html".format('test_config')
		template = templateEnv.get_template(TEMPLATE_FILE)
		outputText = template.render(pdf_data)
		html_file = open(url + '{0}.html'.format('test_config'), 'w', encoding='utf-8')
		html_file.write(outputText)
		html_file.close()

		if reportType == 'ppt':
			pdfkit.from_file([url + '{0}.html'.format('test_config')], '{0}.pdf'.format(filename), configuration=config,
								options=options)
			pickup_file = '{0}.pdf'.format(filename)
			os.system('pdf2pptx '+pickup_file)
			ppt_file = '{0}.pptx'.format(filename)
			response = HttpResponse(open(ppt_file, 'rb').read(), content_type='application/vnd.openxmlformats-officedocument.presentationml.presentation')
			try:
				os.remove(pickup_file)
				os.remove(ppt_file)
			except BaseException as error:
				logger.debug('An exception occurred: {}'.format(error))
		else:
			pdf = pdfkit.PDFKit([url + '{0}.html'.format('test_config')], '{0}.pdf'.format(filename), configuration=config,
								options=options).to_pdf()
			response = HttpResponse(pdf, content_type='application/pdf')
		response['Content-Disposition'] = 'attachment; filename="' + filename + '"'

		return response
	except:
		traceback.print_exc()

def getVariableDict(test_control_mapping_stores: None, config_cols: None, region_name: None, population:False, targetVariable: None, categories:None,
					prewindow_start=None,prewindow_end=None, postwindow_start=None,postwindow_end=None):
	try:
		compare_variables = config_cols['report_generate']['test_compare_variable']
		if (test_control_mapping_stores is not None) & (compare_variables is not None) & (len(compare_variables) != 0):
			# Converting list of jsons to Dataframe
			null = np.nan
			# Create variables
			variables_metrics_dict = {}
			feature_thresholds_dict = {}
			feature_bounds_dict = {}
			# Stores Master File

			stores_master_df = StoreMstr.objects.filter(is_active=True, is_deleted=False).values()
			# sql_query = ('''SELECT * FROM {} WHERE is_active = ? and is_deleted = ? '''.format(
			# 	config_data[region_name]['tables']['store_mstr']))
			# stores_master_df = getRowResults(sql_query, (1, 0))
			stores_master_df = pd.DataFrame(stores_master_df)

			# stores_master_df = check_if_store_valid(storesfile=stores_master_df, region_data=region_name)

			test_stores = stores_master_df[stores_master_df[config_cols['store_mstr_columns']["partner_id"]].isin(
				test_control_mapping_stores['Test_store_' + config_cols['store_mstr_columns']["partner_id"]])]
			control_stores = stores_master_df.merge(test_control_mapping_stores[
														[config_cols['store_mstr_columns']["partner_id"],
														 config_cols['store_mstr_columns']['banner']]],
													on=[config_cols['store_mstr_columns']["partner_id"],
														config_cols['store_mstr_columns']['banner']])

			weekly_target_variables_file, consideryearweeks = get_total_weekly_target_data(config=config_cols, business_categories=[],
																						   prewindow_start=prewindow_start,
																						   prewindow_end=prewindow_end,
																						   postwindow_start=postwindow_start,
																						   postwindow_end=postwindow_end)
			weeks = consideryearweeks[config_cols["metadata"]["test_planning"]["summary_sales_weeks"]:]
			weeklyrsvdatayear = weekly_target_variables_file[
				weekly_target_variables_file[config_cols['weekly_target_variable']["week"]].isin(weeks)]
			weeklyrsvdatayear["Year"] = "Year1"

			aggdict = {k: sum for k in [config_cols['weekly_target_variable']['rsv'],
										config_cols['weekly_target_variable']['volume']]}
			groupbycolumns = [config_cols['weekly_target_variable']["partner_id"]] + [
				config_cols['weekly_target_variable']["banner"]] + [config_cols['weekly_target_variable']['year']]
			annualrsvdatayear = weeklyrsvdatayear.groupby(groupbycolumns).agg(aggdict).reset_index()

			mergecolumns = [config_cols['weekly_target_variable']["partner_id"]] + [
				config_cols['weekly_target_variable']['rsv'], config_cols['weekly_target_variable']['volume']]
			test_stores = test_stores.merge(annualrsvdatayear[mergecolumns],
											left_on=config_cols['store_mstr_columns']["partner_id"],
											right_on=config_cols['weekly_target_variable']["partner_id"])
			control_stores = control_stores.merge(annualrsvdatayear[mergecolumns],
												  left_on=config_cols['store_mstr_columns']["partner_id"],
												  right_on=config_cols['weekly_target_variable']["partner_id"])
			metadata = config_cols["metadata"]
			compare_variables = metadata["test_planning"]["test_vs_control_compare_summary"]
			if (len(categories) != 0) & (len(categories) < metadata["test_planning"]["business_categories_count"]):
				common_category_specific = list(
					set(metadata["test_planning"]["business_category_specific_compare"]) & set(compare_variables))
				if len(common_category_specific) > 0:
					features_list = [[j + "_" + i for j in common_category_specific] for i in categories]
					category_specific_features = [item for elem in features_list for item in elem]
					compare_variables.extend(category_specific_features)
			compare_variables.append(targetVariable)

			for col in compare_variables:
				variables_metrics_dict[col] = {}
				test_stores[col] = test_stores[col].astype(float)
				control_stores[col] = control_stores[col].astype(float)
				tStat, pVal = stats.ttest_ind(test_stores[col], control_stores[col], nan_policy='omit')
				variables_metrics_dict[col]["Test Mean"] = round(test_stores[col].mean(), 2)
				variables_metrics_dict[col]["Population Mean"] = round(control_stores[col].mean(), 2)
				variables_metrics_dict[col]["Test Std Dev"] = round(test_stores[col].std(), 2)
				variables_metrics_dict[col]["Population Std Dev"] = round(control_stores[col].std(), 2)
			if population == True:
				variables_metrics_dict["Test stores split"] = test_stores.groupby([config_cols['store_mstr_columns']['banner']])[config_cols['store_mstr_columns']['partner_id']].count().to_dict()
				variables_metrics_dict["Population stores split"] = stores_master_df.groupby([config_cols['store_mstr_columns']['banner']])[config_cols['store_mstr_columns']['partner_id']].count().to_dict()
			# Calculate feature thresholds
			feature_thresholds_dict = get_feature_thresholds(test_stores, control_stores, compare_variables)

			for key, value in feature_thresholds_dict.items():
				feature_bounds_dict[key] = [variables_metrics_dict[key]["Population Mean"] - value,
											variables_metrics_dict[key]["Population Mean"] + value]

			results = {
				"variable_metric": variables_metrics_dict,
				"feature_metric": feature_bounds_dict
			}
			return results
	except:
		traceback.print_exc()


class actuals_teststore(generics.ListCreateAPIView):

	def post(self, request):
		try:
			import json as j
			region_name = request.META['HTTP_COUNTRY']
			config_cols = config_data[region_name]
			data = j.loads(request.body)
			datas = data['data']
			banners = datas['banners']
			segments = datas['segments']
			store_segments = datas['store_segments']
			territories = datas['territories']
			test_type = datas['type_of_test']

			stores_master_df = filter_population(banners=banners, segments=segments, store_segments=store_segments,
												 territories=territories, config=config_cols, regionName=region_name,
												 test_type=test_type)
			print(stores_master_df.shape, '551')
			stores_master_df = stores_master_df[stores_master_df.Customer_Status.isin(['Active'])]
			return json.Response(len(stores_master_df), True)
		except:
			traceback.print_exc()