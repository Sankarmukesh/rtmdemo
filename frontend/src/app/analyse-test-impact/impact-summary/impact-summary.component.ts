import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CommonService} from '@app/shared/services/common.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import * as moment from 'moment';

HC_exporting(Highcharts);
const config = require('../../../assets/region/config-fields.json');
declare let require: any;
const noData = require('highcharts/modules/no-data-to-display');
noData(Highcharts);
import {ToastrService} from 'ngx-toastr';
import {TestMeasureService} from '@app/shared/services/testmeasure.service';

@Component({
  selector: 'app-impact-summary',
  templateUrl: './impact-summary.component.html',
  styleUrls: ['./impact-summary.component.scss']
})
export class ImpactSummaryComponent implements OnInit {

  showLifts = true;
  showActual = false;
  prekeys: any = [];
  postkeys: any = [];
  preperiod_line: any = [];
  postperiod_line: any = [];
  preperiod_line1: any = [];
  postperiod_line1: any = [];
  test_id: any;
  getTargetVariable: any;
  currencySymbol: any;
  @Input() testDetailsValue: any;
  list_drop: any = '';
  cost: any;
  earning: any;
  inc_rsv_lift: any;
  inc_mac_lift: any;
  ProbabiltyValue: any = '-';
  breakeven_list: any = 0;
  decisionValue: any = '-';
  showTargetTableCount: any = 0;
  Targetvals: MatTableDataSource<any>;
  barChartData: any = {
    controlstorePre: '',
    testStorePre: '',
    controlstorePost: '',
    testStorePost: ''
  };
  tableName: any = '';
  userRegion: any;
  disableChart = true;
  probabilityPerc = 0;
  break_even_lift = 0;
  costCheck = 0;
  earningCheck = 0;
  inc_rsv_liftCheck = 0;
  inc_mac_liftCheck = 0;
  testName = '';
  createdOn = '';
  test_type = '';

  gettargetvariable: any;
  territory_data: any = [];
  test_storedata: any = [];
  control_storedata: any = [];
  channel_data: any = [];
  // break_even_lift: any;
  category_name: any;
  confidence_lev: any;
  margin_oferror: any;
  pre_end: any;
  pre_start: any;
  store_grid: any;
  sales_pt_data: any = [];
  store_segments_data: any = [];
  store_segment: any;
  target_var: any;
  test_desc: any;
  test_desc1: any;
  test_name: any;
  testwin_end: any;
  testwin_start: any;
  testtype: any;
  cost_value: any;
  current_rsv: any;
  store_feature1: any;
  store_feature2: any;
  testApplicabilityFields: any;
  testStores: any = [];
  list_drop_number = 0;
  rtmImpact = false;
  perStore = 1;
  inc_rsv_liftCheckPerstore = 0;
  inc_mac_liftCheckPerStore = 0;
  costCheckPerStore = 0;
  earningCheckPerStore = 0;
  constructor(private testMeasureService: TestMeasureService, private commonservice: CommonService,
              public toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.userRegion = sessionStorage.getItem('region');
    if (config[this.userRegion]) {
      console.log('testDetailsValue-> ', this.testDetailsValue);
      this.test_id = this.testDetailsValue.testId;
      this.getTargetVariable = this.testDetailsValue.targetVariable;
      this.currencySymbol = config[this.userRegion]['currency'];
      this.loadTestStoreData(this.test_id);
      this.break_even_lift = this.testDetailsValue.break_even_lift;
      this.breakeven_list = this.break_even_lift;
      this.test_type = this.testDetailsValue.test_type;
      this.testName = this.testDetailsValue.testName;
      this.createdOn = this.testDetailsValue.created_on;
      this.testApplicabilityFields = config[this.userRegion].fields;
    }
    const testType = sessionStorage.getItem('test-type');
    if (testType !== undefined && testType === 'RTM Impact Test'){
      this.rtmImpact = true;
    } else {
      this.rtmImpact = false;
      this.getActualsPerStore();
    }

  }

  toYMD(date: Date) {
    return moment(date).format('DD, MMM YYYY');
  }

  trimData(value: any) {
    if (value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        value[i] = value[i].trim();
      }
      return value;
    } else {
      return value;
    }
  }

  targetVariableResults() {
    this.ProbabiltyValue = '-';
    this.decisionValue = '-';

    const preperiod_start: any = this.testDetailsValue.preTestStartDate;
    const preperiod_end: any = this.testDetailsValue.preTestEndDate;
    const postperiod_start: any = this.testDetailsValue.postTestStartDate;
    const postperiod_end: any = this.testDetailsValue.postTestEndDate;

    const data1: any = {
      test_id: this.test_id,
      preperiod_start,
      preperiod_end,
      postperiod_start,
      postperiod_end,
      target_variable: this.getTargetVariable,
      breakeven_lift: this.breakeven_list
    };
    // this.TestControlGraphs();
    console.log('calling the RTM Impact Test');
    if (this.testDetailsValue.test_type !== 'RTM Impact Test') {
      this.testMeasureService.getProbabilityValue(data1).subscribe((apiresponse: any) => {
        if (apiresponse.status === 'ok') {
          if (
            apiresponse.data.probability === 'NaN' ||
            apiresponse.data.probability === 'null' ||
            apiresponse.data.probability === '-Infinity' ||
            apiresponse.data.probability === 'Infinity'
          ) {
            this.ProbabiltyValue = '-';
            this.decisionValue = '-';
          } else {
            this.ProbabiltyValue = apiresponse.data.probability;
            const stringData = (this.ProbabiltyValue * 100).toFixed(0);
            this.probabilityPerc = Number(stringData);
            this.decisionValue = apiresponse.data.decision;
          }
          this.TargetAnalysisPreVsPost();
        } else {
          this.TargetAnalysisPreVsPost();
        }
      });
    } else if (this.testDetailsValue.test_type === 'RTM Impact Test') {
      this.TargetAnalysisPreVsPost();
    }
  }

  formatNumber(num: any) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  formatNumberWithoutDecimal(num: any) {
    let temp: any = num.toFixed(0);
    temp = JSON.parse(temp);
    return temp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  loadTestStoreData(test_id: any) {
    this.testMeasureService.GetTestStoreData(test_id).subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok') {
        for (let i = 0; i < apiresponse.data.records.length; i++) {
          if (apiresponse.data.records[i].stage_id == 1 && apiresponse.data.records[i].stepper_id) {
            const temp = JSON.parse(apiresponse.data.records[i].record_value);
            this.test_storedata = JSON.parse(apiresponse.data.records[i].record_value);
          }
          if (apiresponse.data.records[i].stage_id == 2 && apiresponse.data.records[i].stepper_id == 5) {
            this.control_storedata = JSON.parse(apiresponse.data.records[i].record_value);
          }
        }
        let banner = apiresponse.data['banners'].replace(/'/g, '');
        banner = banner.substring(1, banner.length - 1);
        this.channel_data = banner.split(',');
        this.break_even_lift = apiresponse.data['break_even_lift'];
        this.category_name = apiresponse.data['category_name'].replace(/'/g, '');
        this.category_name = this.category_name.substring(1, this.category_name.length - 1);
        this.confidence_lev = apiresponse.data['confidence_lev'];
        this.margin_oferror = apiresponse.data['margin_oferror'];
        this.pre_end = this.toYMD(apiresponse.data['pre_end']);
        this.pre_start = this.toYMD(apiresponse.data['pre_start']);
        this.store_grid = apiresponse.data['store_grid'].replace(/'/g, '');
        this.store_grid = this.store_grid.substring(1, this.store_grid.length - 1);
        this.sales_pt_data = this.store_grid.split(',');
        this.store_segment = apiresponse.data['store_segment'].replace(/'/g, '');
        this.store_segment = this.store_segment.substring(1, this.store_segment.length - 1);
        this.store_segments_data = this.store_segment.split(',');
        this.target_var = apiresponse.data['target_var'];
        let territory_name = apiresponse.data['territory_name'].replace(/'/g, '');
        territory_name = territory_name.substring(1, territory_name.length - 1);
        this.territory_data = territory_name.split(',');
        this.test_desc = apiresponse.data['test_desc'];
        this.test_desc1 = apiresponse.data['test_desc1'];
        this.test_name = apiresponse.data['test_name'];
        this.testwin_end = this.toYMD(apiresponse.data['testwin_end']);
        this.testwin_start = this.toYMD(apiresponse.data['testwin_start']);
        this.testtype = apiresponse.data['testtype'];
        this.cost_value = apiresponse.data['cost'];
        this.current_rsv = apiresponse.data['rsv_estimate'];
        this.store_feature1 = apiresponse.data['store_feature1'];
        this.store_feature2 = apiresponse.data['store_feature2'];
        this.targetVariableResults();
      } else if (apiresponse.status === 'not_ok') {
        this.toastr.warning(apiresponse.data);
      }
    });
  }

  TargetAnalysisPreVsPost() {
    // console.log(localStorage.getItem('target_analysis_results'))
    this.list_drop = '';
    const preperiod_start: any = this.testDetailsValue.preTestStartDate;
    const preperiod_end: any = this.testDetailsValue.preTestEndDate;
    const postperiod_start: any = this.testDetailsValue.postTestStartDate;
    const postperiod_end: any = this.testDetailsValue.postTestEndDate;

    const data: any = {
      test_id: this.test_id,
      preperiod_start,
      preperiod_end,
      postperiod_start,
      postperiod_end,
      mesmetric_name: this.getTargetVariable,
      test_stores: this.testStores,
      test_type: this.testDetailsValue.test_type
    };
    let yAxisText: any = '';
    if (this.getTargetVariable === 'RSV') {
      yAxisText = 'Target variable (Weekly RSV in ' + this.currencySymbol + ')';
    } else if (this.getTargetVariable === 'Volume') {
      yAxisText = 'Target variable (Weekly volume in units)';
    } else {
      yAxisText = 'Target variable';
    }
    // if(localStorage.getItem('target_analysis_results') === 'undefined' || localStorage.getItem('target_analysis_results') === null){
      this.testMeasureService.getTargetAnalyzedResults(data).subscribe((apiresponse: any) => {
        console.log(apiresponse, apiresponse.data);
        // localStorage.setItem('target_analysis_results',JSON.stringify(apiresponse))
        if (apiresponse.status === 'ok') {
          // this.testMeasureService.setTestAnalysis(apiresponse);
          let controlstorePre: any = apiresponse.data['target_variable_actual'].control_pre_mean;
          let controlstorePost: any = apiresponse.data['target_variable_actual'].control_post_mean;
          let testStorePre: any = apiresponse.data['target_variable_actual'].test_pre_mean;
          let testStorePost: any = apiresponse.data['target_variable_actual'].test_post_mean;
          this.list_drop = apiresponse.data['target_variable_actual'].test_vs_control_change;
          this.list_drop_number = apiresponse.data['target_variable_actual'].test_vs_control_change;
          if (this.test_type !== 'RTM Impact Test'){
            this.cost = this.formatNumber(apiresponse.data['target_variable_actual'].cost);
            this.earning = this.formatNumberWithoutDecimal(apiresponse.data['target_variable_actual'].earnings);
            this.inc_mac_lift = this.formatNumberWithoutDecimal(apiresponse.data['target_variable_actual'].inc_mac_lift);
            this.inc_rsv_lift = this.formatNumberWithoutDecimal(apiresponse.data['target_variable_actual'].inc_rsv_lift);
            this.costCheck = apiresponse.data['target_variable_actual'].cost;
            this.earningCheck = apiresponse.data['target_variable_actual'].earnings;
            this.inc_mac_liftCheck = apiresponse.data['target_variable_actual'].inc_mac_lift;
            this.inc_rsv_liftCheck = apiresponse.data['target_variable_actual'].inc_rsv_lift;
          }
          this.calculateActualsStore();
          let controlPercen: any = apiresponse.data['target_variable_actual'].control_change_percentage;
          let testPercen: any = apiresponse.data['target_variable_actual'].test_change_percentage;
          if (this.test_type !== 'RTM Impact Test'){
            const excelStatisticalValue: any = {
              actualsLift : this.list_drop+'%',
              breakevenTargetLift: this.break_even_lift+'%',
              probability: this.probabilityPerc+'%',
              inRSV: this.inc_rsv_lift,
              incMac: this.inc_mac_lift,
              rtmCost: this.cost_value,
              earnings: this.earning.replace(',','')
            };
            this.commonservice.setExcelData(excelStatisticalValue);
          } else {
            const excelStatisticalValue: any = {
              actualsLift : this.list_drop+'%',
              breakevenTargetLift: '-',
              probability: '-',
              inRSV: '-',
              incMac: '-',
              rtmCost: '-',
              earnings: '-'
            };
            this.commonservice.setExcelData(excelStatisticalValue);
          }

          if (
            this.list_drop === 'none' ||
            this.list_drop === 'null' ||
            this.list_drop === 'NaN' ||
            this.list_drop === '-Infinity' ||
            this.list_drop === 'Infinity'
          ) {
            this.list_drop = '-';
          } else {
            if (Math.sign(this.list_drop) == 1) {
              this.list_drop = this.list_drop + '%';
            } else if (Math.sign(this.list_drop) === -1) {
              this.list_drop = this.list_drop + '%';
            }
          }
          let probabilityPercentage: any = '-';
          if (this.ProbabiltyValue !== '-') {
            probabilityPercentage = (this.ProbabiltyValue * 100).toFixed(2) + '%';
          }

          const tempData: any = [
            {
              targetvar: 'Test vs Control change',
              trgtvarvalue: this.list_drop
            },
            {
              targetvar: 'Breakeven lift',
              trgtvarvalue: this.breakeven_list + '%'
            },
            {
              targetvar: 'Probabilty (Lift > Breakeven)',
              trgtvarvalue: probabilityPercentage
            },
            {
              targetvar: 'Decision',
              trgtvarvalue: this.decisionValue
            }
          ];

          this.showTargetTableCount = tempData.length;
          this.Targetvals = new MatTableDataSource(tempData);

          if (
            controlstorePre == 'none' ||
            controlstorePre == 'null' ||
            controlstorePre == 'NaN' ||
            controlstorePre == '-Infinity' ||
            controlstorePre == 'Infinity'
          ) {
            controlstorePre = 0;
          }

          if (
            controlstorePost == 'none' ||
            controlstorePost == 'null' ||
            controlstorePost == 'NaN' ||
            controlstorePost == '-Infinity' ||
            controlstorePost == 'Infinity'
          ) {
            controlstorePost = 0;
          }

          if (
            testStorePre == 'none' ||
            testStorePre == 'null' ||
            testStorePre == 'NaN' ||
            testStorePre == '-Infinity' ||
            testStorePre == 'Infinity'
          ) {
            testStorePre = 0;
          }

          if (
            testStorePost == 'none' ||
            testStorePost == 'null' ||
            testStorePost == 'NaN' ||
            testStorePost == '-Infinity' ||
            testStorePost == 'Infinity'
          ) {
            testStorePost = 0;
          }

          if (
            testStorePost == 'none' ||
            testStorePost == 'null' ||
            testStorePost == 'NaN' ||
            testStorePost == '-Infinity' ||
            testStorePost == 'Infinity'
          ) {
            testStorePost = 0;
          }

          if (
            controlPercen == 'none' ||
            controlPercen == 'null' ||
            controlPercen == 'NaN' ||
            controlPercen == '-Infinity' ||
            controlPercen == 'Infinity'
          ) {
            controlPercen = 0;
          } else {
            if (Math.sign(controlPercen) === 1) {
              controlPercen = '+' + controlPercen + '%';
            } else if (Math.sign(controlPercen) === -1) {
              controlPercen = controlPercen + '%';
            }
          }

          if (
            testPercen === 'none' ||
            testPercen === 'null' ||
            testPercen === 'NaN' ||
            testPercen === '-Infinity' ||
            testPercen === 'Infinity'
          ) {
            testPercen = 0;
          } else {
            if (Math.sign(testPercen) === 1) {
              testPercen = '+' + testPercen + '%';
            } else if (Math.sign(testPercen) === -1) {
              testPercen = testPercen + '%';
            }
          }

          this.barChartData.controlstorePre = controlstorePre;
          this.barChartData.testStorePre = testStorePre;
          this.barChartData.controlstorePost = controlstorePost;
          this.barChartData.testStorePost = testStorePost;

          var colors = [];
          colors[0] = 'green';
          colors[1] = 'orange';
          colors[2] = 'red';

          if (this.ProbabiltyValue !== '-') {
            let Tooltipvalue1: any = '';
            let Tooltipvalue2: any = '';
            let Tooltipvalue3: any = '';

            let tempArr: any = [
              'Breakeven Lift : ' + this.breakeven_list + '% ',
              ' Probabilty (Lift > Breakeven) : ' + (this.ProbabiltyValue * 100).toFixed(2) + '%'
            ];
            tempArr = tempArr.join();

            if (this.ProbabiltyValue * 100 <= 60) {
              Tooltipvalue1 = tempArr;
            } else if (this.ProbabiltyValue * 100 <= 85) {
              Tooltipvalue2 = tempArr;
            } else {
              Tooltipvalue3 = tempArr;
            }

            (Highcharts as any).chart('target-probability', {
              chart: {
                type: 'bar',
              },
              style: {
                fontFamily: 'Mulish_regular'
              },
              title: {
                text: ''
              },
              xAxis: {
                categories: [],
                visible: false
              },
              tooltip: {
                positioner() {
                  return {
                    x: 0,
                    y: 0
                  };
                },
                shadow: false,
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.8)',
                formatter() {
                  if (this.point.tip !== '') {
                    return this.point.tip;
                    // return  this.point.tip[0] +'<br/>' + this.point.tip[1];
                  } else {
                    return false;
                  }
                }
              },
              exporting: {
                enabled: false
              },
              yAxis: {
                tickInterval: 5,
                min: 0,
                max: 100,
                gridLineWidth: 0,
                title: {
                  text: 'Probability Scale',
                  style: {
                    fontFamily: 'Mulish_regular'
                  }
                },
                labels: {
                  allowOverlap: true,
                  formatter() {
                    if (this.value === 0 || this.value === 60 || this.value === 85 || this.value === 100) {
                      return this.value + '%';
                    }
                  }
                }
              },
              credits: {
                enabled: false
              },
              colors,
              legend: {
                enabled: true,
                reversed: true
              },
              plotOptions: {
                series: {
                  stacking: 'normal',
                  pointWidth: 35
                }
              },
              series: [
                {
                  name: '>= 85',
                  style: {
                    fontFamily: 'Mulish_regular'
                  },
                  data: [
                    {
                      y: 15,
                      tip: Tooltipvalue3
                    }
                  ]
                },
                {
                  name: '>= 60 and < 85',
                  style: {
                    fontFamily: 'Mulish_regular'
                  },
                  data: [
                    {
                      y: 25,
                      tip: Tooltipvalue2
                    }
                  ]
                },
                {
                  name: '< 60',
                  style: {
                    fontFamily: 'Mulish_regular'
                  },
                  data: [
                    {
                      y: 60,
                      tip: Tooltipvalue1
                    }
                  ]
                },
                {
                  name: 'indicator',
                  showInLegend: false,
                  data: [this.ProbabiltyValue * 100],
                  type: 'scatter',
                  color: 'blue',
                  marker: {
                    symbol: 'circle',
                    radius: 7
                  }
                }
              ]
            });
          } else {
            (Highcharts as any).chart('target-probability', {
              chart: {
                type: 'bar',
                // spacingRight: 80,
                // spacingLeft: 80
              },
              style: {
                fontFamily: 'Mulish_regular'
              },
              title: {
                text: ''
              },
              xAxis: {
                categories: [],
                visible: false
              },
              tooltip: {
                formatter() {
                  if (this.point.tip != '') {
                    return this.point.tip[0] + '<br/>' + this.point.tip[1];
                  } else {
                    return false;
                  }
                }
              },
              exporting: {
                enabled: false
              },
              yAxis: {
                tickInterval: 5,
                min: 0,
                max: 100,
                gridLineWidth: 0,
                title: {
                  text: 'Probability Scale',
                  style: {
                    fontFamily: 'Mulish_regular'
                  }
                },
                labels: {
                  formatter() {
                    if (this.value == 0 || this.value == 60 || this.value == 85 || this.value == 100) {
                      return this.value + '%';
                    }
                  }
                }
              },
              credits: {
                enabled: false
              },
              colors,
              legend: {
                enabled: false,
                reversed: true
              },
              plotOptions: {
                series: {
                  stacking: 'normal',
                  pointWidth: 35
                }
              },
              series: []
            });
          }

          if (controlstorePre == 0 && controlstorePost == 0 && testStorePre == 0 && testStorePost == 0) {
            Highcharts.chart('trgt-prepost', {
              chart: {
                type: 'column',
                height: 400,
              },
              title: {
                text: ''
              },
              subtitle: {
                text: ''
              },
              yAxis: {
                title: {
                  text: 'Target Variable',
                  style: {
                    fontFamily: 'Mulish_regular'
                  }
                }
              },
              xAxis: {
                categories: []
              },
              credits: {
                enabled: false
              },
              series: []
            });
          } else {
            Highcharts.chart('trgt-prepost', {
              chart: {
                type: 'column',
                height: 400,
              },
              title: {
                text: ''
              },
              subtitle: {
                text: ''
              },
              exporting: {
                buttons: {
                  contextButton: {
                    menuItems: ['printChart', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
                  }
                }
              },
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.assignee}',
                    x: 80,
                    y: -100
                  }
                }
              },
              yAxis: {
                title: {
                  text: yAxisText,
                  style: {
                    fontFamily: 'Mulish_regular'
                  }
                },
                maxPadding: 0.6
              },
              xAxis: {
                categories: ['Control Stores', 'Test Stores']
              },
              credits: {
                enabled: false
              },
              series: [
                {
                  name: 'Pre-Test',
                  color: '#ff70b0',
                  data: [
                    {
                      y: controlstorePre,
                      assignee: controlPercen
                    },
                    {
                      y: testStorePre,
                      assignee: testPercen
                    }
                  ],
                  type: undefined
                },
                {
                  name: 'Post-Test',
                  color: '#fecd72',
                  data: [
                    {
                      y: controlstorePost,
                      assignee: ''
                    },
                    {
                      y: testStorePost,
                      assignee: ''
                    }
                  ],
                  type: undefined
                }
              ]
            });
          }

          let test_vs_control: any = [];
          test_vs_control = apiresponse.data.test_vs_control;

          for (let j = 0; j < test_vs_control; j++) {
            if (
              test_vs_control[j] == 'null' ||
              test_vs_control[j] == 'NaN' ||
              test_vs_control[j] == 'Infinity' ||
              test_vs_control[j] == '-Infinity'
            ) {
              test_vs_control[j] = 0;
            }
          }

          Highcharts.chart('trgt-testcntrl', {
            chart: {
              type: 'column',
              height: 400,
            },
            title: {
              text: ''
            },
            subtitle: {
              text: ''
            },
            yAxis: {
              title: {
                text: 'Test vs Control Change (in %)',
                style: {
                  fontFamily: 'Mulish_regular'
                }
              }
            },
            exporting: {
              buttons: {
                contextButton: {
                  menuItems: ['printChart', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
                }
              }
            },
            legend: {
              squareSymbol: false,
              symbolHeight: 0,
              symbolWidth: 0,
              symbolRadius: 0
            },
            xAxis: {
              categories: apiresponse.data.Test_store_Partner_ID_backup,
              title: {
                text: this.tableName.test_store_id,
                style: {
                  fontFamily: 'Mulish_regular'
                }
              }
            },
            credits: {
              enabled: false
            },
            series: [
              {
                showInLegend: false,
                name: 'Test vs Control Change',
                data: test_vs_control,
                type: undefined,
                style: {
                  fontFamily: 'Mulish_regular'
                }
              }
            ]
          });
          this.setReportData();
        } else {

          Highcharts.chart('trgt-prepost', {
            chart: {
              type: 'column',
              height: 400,
            },
            title: {
              text: ''
            },
            subtitle: {
              text: ''
            },
            yAxis: {
              title: {
                text: 'Target Variable',
                style: {
                  fontFamily: 'Mulish_regular'
                }
              }
            },
            xAxis: {
              categories: []
            },
            credits: {
              enabled: false
            },
            series: []
          });

          Highcharts.chart('trgt-testcntrl', {
            chart: {
              type: 'column',
              height: 400,
            },
            title: {
              text: ''
            },
            subtitle: {
              text: ''
            },
            yAxis: {
              title: {
                text: 'Test vs Control Change',
                style: {
                  fontFamily: 'Mulish_regular'
                }
              }
            },
            xAxis: {
              categories: []
            },
            credits: {
              enabled: false
            },
            series: []
          });

          (Highcharts as any).chart('target-probability', {
            chart: {
              type: 'bar',
              // spacingRight: 80,
              // spacingLeft: 80
            },
            style: {
              fontFamily: 'Mulish_regular'
            },
            title: {
              text: ''
            },
            xAxis: {
              categories: [],
              visible: false
            },
            tooltip: {
              formatter() {
                if (this.point.tip != '') {
                  return this.point.tip[0] + '<br/>' + this.point.tip[1];
                } else {
                  return false;
                }
              }
            },
            exporting: {
              enabled: false
            },
            yAxis: {
              tickInterval: 5,
              min: 0,
              max: 100,
              gridLineWidth: 0,
              title: {
                text: 'Probability Scale',
                style: {
                  fontFamily: 'Mulish_regular'
                }
              },
              labels: {
                formatter() {
                  if (this.value == 0 || this.value == 60 || this.value == 85 || this.value == 100) {
                    return this.value + '%';
                  }
                }
              }
            },
            credits: {
              enabled: false
            },
            colors,
            legend: {
              enabled: false,
              reversed: true
            },
            plotOptions: {
              series: {
                stacking: 'normal',
                pointWidth: 35
              }
            },
            series: []
          });

          const tempData: any = [];
          this.showTargetTableCount = tempData.length;
          this.Targetvals = new MatTableDataSource(tempData);
          this.toastr.warning(apiresponse.data);
        }
      });
  }

  checkPositive(data: any) {
    const positive = Math.sign(data);
    return positive;
  }

  setReportData() {
    console.log(this.confidence_lev, 'confidence_lev');
    const lichartData = {};
    let probabilityValue;
    let yAxisText_temp = '';
    let lineChartyAxisText = '';
    let store_feature2 = '';
    let breakeven_lift;
    let cost;
    let earnings;
    let incremental_rsv;
    let incremental_mac;
    let cost_value;
    if (this.gettargetvariable == 'RSV') {
      yAxisText_temp = 'Target variable (Weekly RSV in AUD)';
    } else if (this.gettargetvariable == 'Volume') {
      yAxisText_temp = 'Target variable (Weekly volume in units)';
    } else {
      yAxisText_temp = 'Target variable';
    }

    if (this.gettargetvariable == 'RSV') {
      lineChartyAxisText = 'Avg of Weekly RSV in ' + this.currencySymbol;
    } else if (this.gettargetvariable == 'Volume') {
      lineChartyAxisText = 'Avg of Weekly volume in units';
    } else {
      lineChartyAxisText = 'Target variable';
    }
    const now = new Date();
    let datetime = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    datetime += ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    console.log(this.preperiod_line.filter((x: any) => x !== undefined));
    if (this.prekeys.length > 0 && this.postkeys.length > 0) {
      lichartData['prePeriod'] = this.preperiod_line.filter((x: any) => x !== undefined);
      lichartData['prePeriod1'] = this.preperiod_line1.filter((x: any) => x !== undefined);
      lichartData['postPeriod'] = this.postperiod_line.filter((x: any) => x !== undefined);
      lichartData['postPeriod1'] = this.postperiod_line1.filter((x: any) => x !== undefined);
      lichartData['prekeys'] = this.prekeys;
      lichartData['postkeys'] = this.postkeys;
    }
    const test_id = this.test_id;
    if (this.store_feature2 !== 0) {
      store_feature2 = this.testApplicabilityFields[3].storegrid;
    } else {
      store_feature2 = this.testApplicabilityFields[1].segment;
    }

    if (!this.rtmImpact) {
      probabilityValue = JSON.parse((this.ProbabiltyValue * 100).toFixed(2));
      breakeven_lift = this.break_even_lift;
      cost = this.cost;
      earnings = this.earning;
      incremental_rsv =  this.inc_rsv_lift;
      incremental_mac = this.inc_mac_lift;
      cost_value = this.cost_value;
    } else {
      probabilityValue = '-';
      breakeven_lift = '-';
      cost = '-';
      earnings = '-';
      incremental_rsv =  '-';
      incremental_mac = '-';
      cost_value = '-'
    }

    const data: any = {
      test_name: this.test_name,
      test_type: this.testtype,
      test_desc: this.test_desc,
      pre_test_start: this.pre_start,
      date_time: datetime,
      pre_test_end: this.pre_end,
      post_test_start: this.testwin_start,
      post_test_end: this.testwin_end,
      channel: this.trimData(this.channel_data),
      sales_potential: this.trimData(this.sales_pt_data),
      territory: this.trimData(this.territory_data),
      store_segments: this.trimData(this.store_segments_data),
      confidence_level: this.confidence_lev,
      margin_of_err: this.margin_oferror,
      target_variable: this.target_var,
      lift_drop: this.list_drop.replace('%', ''),
      incremental_rsv: incremental_rsv,
      incremental_mac: incremental_mac,
      cost_impact: cost,
      earnings: earnings,
      test_vs_control_change: this.list_drop.replace('%', ''),
      breakeven_lift: breakeven_lift,
      probabilty: probabilityValue,
      decision: this.decisionValue,
      yaxis_text: [yAxisText_temp],
      series1_chart_data: {
        controlstorePre: this.barChartData.controlstorePre,
        testStorePre: this.barChartData.testStorePre
      },
      series2_chart_data: {
        controlstorePost: this.barChartData.controlstorePost,
        testStorePost: this.barChartData.testStorePost
      },
      test_stores: this.test_storedata.selectedteststore,
      controlstores: this.control_storedata.teststores,
      linechartData: lichartData,
      lineChartyAxisText: [lineChartyAxisText],
      test_id,
      cost: cost_value,
      current_rsv: parseFloat(this.current_rsv),
      store_feature2
    };
    console.log(data, 'setExcelReportData')
    this.commonservice.setReportData(data);
  }

  TestControlGraphs() {
    this.prekeys = [];
    this.postkeys = [];
    this.preperiod_line = [];
    this.postperiod_line = [];
    this.preperiod_line1 = [];
    this.postperiod_line1 = [];
    let category: any = [];
    if (localStorage.getItem('category') !== undefined && localStorage.getItem('category') != null) {
      const categoryvalue = localStorage.getItem('category');
      category = eval(categoryvalue);
    }
    const data: any = {
      test_id: this.test_id,
      category_name: category,
      teststores: this.testStores,
      targetVariable: this.getTargetVariable
    };
    this.testMeasureService.TestControlGraph(data).subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok') {
        this.prekeys = apiresponse.data['Test Preperiod'][0].sort();
        this.postkeys = apiresponse.data['Test Postperiod'][0].sort();

        for (var i = 0; i <= apiresponse.data['Test Preperiod'][1].length; i++) {
          this.preperiod_line.push(apiresponse.data['Test Preperiod'][1][i]);
        }

        for (var i = 0; i <= apiresponse.data['Test Postperiod'][1].length; i++) {
          this.postperiod_line.push(apiresponse.data['Test Postperiod'][1][i]);
        }

        for (var i = 0; i <= apiresponse.data['Control Preperiod'][1].length; i++) {
          this.preperiod_line1.push(apiresponse.data['Control Preperiod'][1][i]);
        }

        for (var i = 0; i <= apiresponse.data['Control Postperiod'][1].length; i++) {
          this.postperiod_line1.push(apiresponse.data['Control Postperiod'][1][i]);
        }
      }
    });
  }
  getActualsPerStore() {
    const data = {
      data:{
        banners: this.testDetailsValue.banner,
        segments: this.testDetailsValue.storegrid,
        store_segments: this.testDetailsValue.segment,
        territories: this.testDetailsValue.territory,
        type_of_test: this.testDetailsValue.test_type
      }
    };
    console.log(this.testDetailsValue, 'testDetailsvalue');
    this.testMeasureService.getActualperStores(data).subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok') {
          this.perStore = apiresponse.data;
      }
    });
  }

  calculateActualsStore() {
    this.inc_rsv_liftCheckPerstore = Math.round(this.inc_rsv_liftCheck/this.perStore);
    this.inc_mac_liftCheckPerStore = Math.round(this.inc_mac_liftCheck/this.perStore);
    this.earningCheckPerStore = Math.round(this.earningCheck/this.perStore);
    this.costCheckPerStore = Math.round(this.costCheck/this.perStore);
  }
}
