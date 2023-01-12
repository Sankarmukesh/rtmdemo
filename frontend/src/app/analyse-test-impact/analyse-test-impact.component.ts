import {AfterViewInit, Component, HostListener, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {CommonService} from '@app/shared/services/common.service';
import {TestConfigService} from '@app/shared/services/testconfig.service';
import {TestMeasureService} from '@app/shared/services/testmeasure.service';
const config = require('../../assets/region/config-fields.json');
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-analyse-test-impact',
  templateUrl: './analyse-test-impact.component.html',
  styleUrls: ['./analyse-test-impact.component.scss']
})
export class AnalyseTestImpactComponent implements OnInit, AfterViewInit, OnDestroy {
  showFilter = false;
  dropdownSettings: any = {};
  public config: PerfectScrollbarConfigInterface = {};
  height = 500;
  height2 = 475;
  public banner: any[] = ['Impact summary', 'Percentage change', 'Test measurement results'];
  public testNames: any[] = [];
  isinSqFt: any = '';
  tableName: any = '';
  showDetails = true;
  showComparisonSummary: boolean;
  testToolRadioChecked = true;
  showAnalyseIp = true;
  showAnalyseOp = false;
  showImpactSummaryView: boolean;
  showPercentageChangeView: boolean;
  showTestMeasurementResultsView: boolean;
  showKeyDriversOfLiftView: boolean;
  dataList: any[];
  selectedTestId: '';
  testDetailsValue = {
    testId: '',
    testName: '',
    typeTest: '',
    targetVariable: '',
    description: '',
    AddDetails: '',
    preTestStartDate: '',
    preTestEndDate: '',
    postTestStartDate: '',
    postTestEndDate: '',
    break_even_lift: '',
    created_on: '',
    test_type: '',
    banner: '',
    territory: '',
    segment: '',
    storegrid: '',
    category: '',
  };
  Banner: any;
  Segment: any;
  Territory: any;
  StoreGrid: any;
  Category: any;
  dateRangePre: Date[];
  dateRangePost: Date[];
  generate_store = 'Impact';
  showDownloadReport = false;
  downloadReportDialogRef: any;
  testNamesDD: string;
  userRegion: string;
  testApplicabilityFields: any;
  currencySymbol: any;
  dropdownSettingsbanner = {};
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  testDataValue: any;
  reportSelect: any;
  reportType = 'PDF';
  @ViewChild('footer') footer: any;
  RtmImpact = '';
  reportFormat: string;
  showAnalyseOpSide = true;
  cost: any;
  rsv_estimate: any;
  breakenlist: any;

  constructor(private testConfigService: TestConfigService, private testMeasureService: TestMeasureService,
              private dialogReport: MatDialog, private ngxService: NgxUiLoaderService, public commonService: CommonService,
              private toastr: ToastrService) {
    this.dropdownSettingsbanner = {
      itemsShowLimit: 1,
    };
  }

  ngOnInit(): void {
    // localStorage.setItem('target_analysis_results','undefined');
    this.loadAnalyseData();
    this.reportSelect = this.banner;
    this.userRegion = sessionStorage.getItem('region');
    if (config[this.userRegion]) {
      console.log(config[this.userRegion]);
      this.testApplicabilityFields = config[this.userRegion].fields;
      this.currencySymbol = config[this.userRegion]['currency'];
      this.isinSqFt = config[this.userRegion]['OutletSurfaceAreaUnit'];
      this.tableName = config[this.userRegion];
    }
    this.testNamesDD = localStorage.getItem('testname');
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 1,
      allowSearchFilter: this.showFilter
    };
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onResize();
    }, 100);
    this.ngxService.start();
    if (localStorage.getItem('stepId') === '7') {
      console.log('stepId 7');
      this.testNamesDD = localStorage.getItem('testname');
      setTimeout(() => {
        this.callAnalyse();
      }, 100);
      this.ngxService.stop();
    }
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }

  closeDRModal() {
    this.downloadReportDialogRef.close();
  }

  loadAnalyseData() {
    this.testMeasureService.loadAnalyseData().subscribe((response: any) => {
      if (response.status === 'ok') {
        this.dataList = response.data;
        this.dataList.forEach(data => {
          this.testNames.push(data.test_name);
        });
        console.log('testName: ', this.testNames);
      }
    });
  }

  onMetricSelectAll(event: any) {
    // console.log(event);
  }

  selectTestName(selectedItem: any) {
    const selectedTestItem = this.dataList.filter(test => test.test_name === selectedItem[0].text)[0];
    this.selectedTestId = selectedTestItem.test_id;
    this.testConfigService.load_saved_test(selectedTestItem.test_id).subscribe(response => {
      if (response.status === 'ok') {
        const loadedTest = response.data;
        this.testDataValue = response.data;
        this.testDetailsValue.testId = loadedTest.test_id;
        this.testDetailsValue.targetVariable = loadedTest.target_var;
        this.testDetailsValue.testName = loadedTest.test_name;
        this.testDetailsValue.description = loadedTest.test_desc;
        this.dateRangePre = [new Date(loadedTest.pre_start), new Date(loadedTest.pre_end)];
        this.dateRangePost = [new Date(loadedTest.testwin_start), new Date(loadedTest.testwin_end)];
        this.testDetailsValue.preTestStartDate = loadedTest.pre_start;
        this.testDetailsValue.preTestEndDate = loadedTest.pre_end;
        this.testDetailsValue.postTestStartDate = loadedTest.testwin_start;
        this.testDetailsValue.postTestEndDate = loadedTest.testwin_end;
        this.testDetailsValue.break_even_lift = loadedTest.break_even_lift;
        const d = new Date(loadedTest.created_on * 1000);
        this.testDetailsValue.created_on = d.getMonth() + 1 + ' ' + d.getFullYear();
        this.testDetailsValue.test_type = loadedTest.testtype;
        this.testDetailsValue.banner = eval(loadedTest.banners);
        this.Banner = eval(loadedTest.banners);
        this.testDetailsValue.territory = eval(loadedTest.territory_name);
        this.Territory = eval(loadedTest.territory_name);
        this.testDetailsValue.segment = eval(loadedTest.store_segment);
        this.Segment = eval(loadedTest.store_segment);
        this.testDetailsValue.storegrid = eval(loadedTest.store_grid);
        this.StoreGrid = eval(loadedTest.store_grid);
        this.testDetailsValue.category = loadedTest.category_name;
        this.Category = loadedTest.category_name.split(',');
        this.cost = loadedTest.cost;
        this.rsv_estimate = (loadedTest.rsv_estimate/100000);
        this.breakenlist = loadedTest.break_even_lift;
        const predata: any = {
          pre_end: loadedTest.pre_end,
          pre_start: loadedTest.pre_start,
          testwin_end: loadedTest.testwin_end,
          testwin_start: loadedTest.testwin_start,
          test_id: loadedTest.test_id,
          target_variable: loadedTest.target_var,
          break_even_lift: loadedTest.break_even_lift
        };
        this.setFilterValue(loadedTest.records);
        const testmeasurePreDetails: any = JSON.stringify(predata);
        localStorage.setItem('testmeasure_pre_details', testmeasurePreDetails);
        this.RtmImpact = loadedTest.testtype;
        sessionStorage.setItem('test-type', this.RtmImpact);
      }
    });
  }

  callAnalyse() {
    if (this.testDetailsValue.testId !== undefined && this.testDetailsValue.testId !== '') {
      this.showAnalyseIp = false;
      this.showAnalyseOp = true;
      this.showImpactSummaryView = true;
    }
  }

  callFullScreen(){
    this.showAnalyseOpSide = !this.showAnalyseOpSide;
  }

  showImpactSummary() {
    this.showImpactSummaryView = true;
    this.showPercentageChangeView = false;
    this.showTestMeasurementResultsView = false;
    this.showKeyDriversOfLiftView = false;
  }

  showPercentageChange() {
    this.showImpactSummaryView = false;
    this.showPercentageChangeView = true;
    this.showTestMeasurementResultsView = false;
    this.showKeyDriversOfLiftView = false;
  }

  showTestMeasurementResults() {
    this.showImpactSummaryView = false;
    this.showPercentageChangeView = false;
    this.showTestMeasurementResultsView = true;
    this.showKeyDriversOfLiftView = false;
  }

  callDownloadReport(templateRef: TemplateRef<any>) {
    this.downloadReportDialogRef = this.dialogReport.open(templateRef);
    this.reportFormat = '';
  }

  nextButton() {
    if (this.generate_store === 'Impact') {
      this.showPercentageChange();
      this.changeActive('Percentage');
    } else if (this.generate_store === 'Percentage') {
      this.showTestMeasurementResults();
      this.changeActive('Measurement');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.height = window.innerHeight - (64 + this.footer.nativeElement.offsetHeight);
    this.height2 = window.innerHeight - (64 + this.footer.nativeElement.offsetHeight);
  }

  changeActive(event: string) {
    this.generate_store = event;
  }

  setFilterValue(records: any) {
    this.commonService.setTestStoresFilter(null);
    let arrayData = [];
    if (records.length > 0) {
      const record_value = JSON.parse(records[0].record_value);
      if (record_value.hasOwnProperty('teststores')) {
        arrayData = record_value.teststores;
      } else if (record_value.hasOwnProperty('selectedteststore')) {
        arrayData = record_value.selectedteststore;
      }
      console.log(arrayData, 'arrayData');
      this.commonService.setTestStoresFilter(arrayData);
    }
  }

  downloadReport() {
    if (this.reportFormat === ''){
      this.toastr.warning('Please select the report format');
      return;
    }

    const dataValue = this.commonService.getReportData();
    dataValue['report_for'] = this.reportSelect;
    dataValue['reportType'] = this.reportFormat;
    dataValue['preperiod_start'] = this.testDetailsValue.preTestStartDate;
    dataValue['preperiod_end'] = this.testDetailsValue.preTestEndDate;
    dataValue['postperiod_start'] = this.testDetailsValue.postTestStartDate;
    dataValue['postperiod_end'] = this.testDetailsValue.postTestEndDate;
    this.closeDRModal();
    if(this.reportFormat == 'xls') {
      const testMeasureResultData: any = {
        test_id: this.testDetailsValue.testId,
        preperiod_start: this.testDetailsValue.preTestStartDate,
        preperiod_end: this.testDetailsValue.preTestEndDate,
        postperiod_start: this.testDetailsValue.postTestStartDate,
        postperiod_end: this.testDetailsValue.postTestEndDate,
        mesmetric_name: this.testDetailsValue.targetVariable,
        break_even_lift: this.testDetailsValue.break_even_lift,
        stage_id: 3,
        stepindex: 6,
        category: [],
        test_stores: [],
        test_type: this.RtmImpact
      };
      testMeasureResultData['stringified_data'] = JSON.stringify(testMeasureResultData);
      testMeasureResultData['excelData'] = this.commonService.getExcelData();
      this.testMeasureService.getTestSummaryReportExcel(testMeasureResultData).subscribe((apiresponse: any) => {
        this.downLoadFile(apiresponse, 'xlsx');
      });
    } else {
      this.testMeasureService.get_StoreSummary_Report(dataValue).subscribe((apiresponse: any) => {
        this.downLoadFile(apiresponse, dataValue['reportType']);
      });
    }
}

downLoadFile(data: any, extension: any) {
  const downloadURL = window.URL.createObjectURL(data);
  const link = document.createElement('a');
  link.href = downloadURL;
  const filename: any = 'TestSummaryReport';
  link.download = filename + '.'+extension;
  link.click();
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

  getreportType(type: string) {
    console.log(type, 'select type report format');
    this.reportType = type;
  }

  ngOnDestroy(){
    this.testMeasureService.setControlGraph(null);
    this.testMeasureService.setDecidego(null);
    this.testMeasureService.setTestAnalysis(null);
    this.testMeasureService.setTestMeasurement(null);
  }
}
