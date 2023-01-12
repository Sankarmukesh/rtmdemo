import {SelectionModel} from '@angular/cdk/collections';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CommonService} from '@app/shared/services/common.service';
import {GlobalEventsService} from '@app/shared/services/global-events.service';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';
const config = require('../../../assets/region/config-fields.json');
import {TooltipPosition} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog';
import {SidenavService} from '@app/shared/services/sidenav.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {isNullOrUndefined} from 'util';
import {TestMeasureService} from '@app/shared/services/testmeasure.service';
import {TestConfigService} from '@app/shared/services/testconfig.service';

HC_exporting(Highcharts);
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
noData(Highcharts);
const More = require('highcharts/highcharts-more');

export interface TestStore {
  store_no: any;
  store_name: any;
  banner: any;
  segment: any;
  store_segment: any;
  avg_duration: any;
  act_perform: any;
  others: any;
}

function compare_seletedstore(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function compare_suggestion(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

@Component({
  selector: 'app-select-test-stores',
  templateUrl: './select-test-stores.component.html',
  styleUrls: ['./select-test-stores.component.scss']
})
export class SelectTestStoresComponent implements OnInit, AfterViewInit, OnChanges {
  showSuggestedByTool = true;
  testStoreSelectedDataCount: any = 0;
  totalTestStores: any = 0;
  confshow: boolean;
  NoofError: any;
  errorshow: boolean;
  teststoreshow: boolean;
  data: any;
  generateValidationMessage: any = '';
  nextStepSubscription: Subscription = Subscription.EMPTY;
  currentComponent: any;
  ConfLevel: any;
  NoofTestStore: any;
  @Output('moveNextStep') moveNextStep = new EventEmitter();
  @Output() tipsData: EventEmitter<any> = new EventEmitter<any>();
  selectTestStores = '1';
  ELEMENT_DATA3: any = [];
  TestStoreSelectTable = new MatTableDataSource<any>(this.ELEMENT_DATA3);
  strselection = new SelectionModel<TestStore>(true, []);
  loadsize = 10;
  displayedColumnsTestStoreDEMO: string[] = [
    'select',
    'store_no',
    'banner',
    'Territory',
    'segment',
    'store_segment'
  ];
  displayedColumnsTestStore: string[] = [
    'select',
    'store_no',
    'banner',
    'Territory',
    'segment',
    'store_segment'
  ];


  // confGrid = [
  //   'select',
  //   'store_no',
  //   'banner',
  //   'Territory',
  //   'segment',
  //   'store_segment',
  // ];

  // confGridDEMO = [
  //   'select',
  //   'store_no',
  //   'banner',
  //   // 'Street',
  //   // 'city',
  //   'Territory',
  //   'segment',
  //   'store_segment',
  //   // 'csvoutletShow',
  //   // 'Influenceoverall',
  //   // 'Outletsurface'
  // ];

  testApplicabilityFields: any;
  currencySymbol: any;
  isinSqFt: any = '';
  userRegion: any;
  tableName: any = '';
  storeselection = new SelectionModel<TestStore>(true, []);
  latitude: number;
  longitude: number;
  showMapList = '1';
  agmusePan = true;
  zoom: number;
  userLocationMarkerAnimation: string;
  tableView: any = true;
  markers: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tempFilter: any = [];
  temp_valufilter: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  saveasDraft = false;
  ConfLev: any = 0;
  uncheck: boolean;
  Margin: any = 0;
  cnfcheck = true;
  mrgerrheck = true;
  testrheck = true;
  TestStore: any = 0;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  uncheck1: boolean;
  uncheck2: boolean;
  validate_teststore: any = false;
  formError = false;
  @ViewChild(MatSort) sort: MatSort;
  confrangeshow: boolean;
  testperashow: boolean;
  testStore_Errormsg: any = '';
  Banner: any;
  Segment: any;
  Territory: any;
  StoreGrid: any;
  Category: any;
  TargetVariable: any;
  currentComponentData: any;
  dialogRef: any;
  dialogRefConfirm: any;
  @Input('testStore_population') testStore_population = true;
  showInsights = true;
  hideIcon: boolean[] = [false];
  hideSelectColumns: boolean;
  hideStoreNoColumns: boolean;
  hideBannerColumns: boolean;
  hideTerritoryColumn: boolean;
  hideSegmentColumn: any;
  hideStoreSegmentColumn: boolean;
  columnHeader2: {};
  comprassion: any = 'comprassion';
  uploaded = false;
  uploadMessage = '';
  uploadedData: any;
  uploadShow = false;
  suggestionView = false;
  selectTargetVariableRadio: any;
  alreadyKnowRadio: any;
  knownMarginOfError: any;
  knownNoOfError: any;
  suggestionResultView = false;
  resultNoOfStore: any;
  resultMarginOfError: any;
  resultPowerNoOfStores: any = [];
  resultPowerPower: any = [];
  displayedColumnsLoadSaved: string[] = [
    'power',
    'number_of_stores'
  ];
  LOAD_DATA: any = [];
  powerTable = new MatTableDataSource<any>(this.LOAD_DATA);
  suggestionViewResult = false;
  showComprassion = false;
  COMPRASSION_ELEMENT_DATA3: any = [];
  @ViewChild(MatPaginator) paginatorComprassion: MatPaginator;
  comprassionSelectedStores = new MatTableDataSource<any>(this.COMPRASSION_ELEMENT_DATA3);
  @Output('showComprassionView') showComprassionView = new EventEmitter();
  displayedComprassionTestStore: string[] = [
    'store_no',
    'Street',
    'similarity_value',
    'sales_corelation'
  ];
  avg_test_population = '';
  sales_test_population = '';
  selectStoreView = true;
  totalComprassionTestStores = 0;
  tempComprassionFilter: any = [];
  mapTableData: any = [];
  seriesData: any = [];
  categories: any = [];

  // Modal Box
  csv_pop: any;
  csv_poptestmean: any;
  out_pop: any;
  out: any;
  out_poptestmean: any;
  out_testPvalue: any;
  testresplit: any = [];
  csv_pvalue: any;
  title: any;
  touch_ability: any;
  touch_ability_mean: any;
  touch_pValue: any;
  power_test = '';
  showMessage = false;
  columnHeader1 = {};
  @ViewChild('confirmDialog') confirmDialog: TemplateRef<any>;
  isIntermediate = false;
  isChecked = false;
  filterSubscription: Subscription = Subscription.EMPTY;
  filterApplied = false;
  tempFiteredArray: any = [];
  hideComprassion: Subscription = Subscription.EMPTY;
  tempsortDirection = '';
  isRTMImpactTest = false;
  totalCheckout: any;
  totalCheckoutMean: any;
  totalCheckoutpValue: any;
  uploadMessageFailed: any = '';
  statusFail = false;
  showRSV = true;
  showsizeSqft = true;
  showManned = true;
  showTotal = true;
  searchFilter = false;
  searchComprassion = false;

  constructor(
    private homeService: TestConfigService,
    public toastr: ToastrService,
    private changeDetectorRefs: ChangeDetectorRef,
    private commonService: CommonService,
    public globalService: GlobalEventsService,
    private dialog: MatDialog,
    private sideNavservice: SidenavService,
    private testMeasureService: TestMeasureService
  ) {
    const componentDetails = this.commonService.getCurrentComponentSubject();
    this.currentComponent = componentDetails.currentComponent;
    this.data = componentDetails.data;
    this.setData(this.data);
    console.log('this.data: ', this.data);
    if(this.data !== undefined) {
      if(this.data.test_type === 'RTM Impact Test') {
        this.isRTMImpactTest = true;
      }
    }

    this.nextStepSubscription = this.globalService.subscribe('MOVE_NEXT_SELECT_TEST_STORES', obj => {
      if (obj.module === 'CREATE_TEST' && obj.currentComponent === 2) {
        console.log('start', this.showComprassion);
        console.log('start', this.suggestionView);
        if (!this.showComprassion && this.suggestionView) {
          console.log('this.suggestionView');
          this.suggestionView = false;
          this.showComprassion = false;
          this.TestStore = true;
          this.NoofTestStore = parseInt(this.resultNoOfStore);
          this.NoofError = this.resultMarginOfError;
          this.Margin = true;
          this.callCompute();
        }else if (!this.showComprassion && sessionStorage.getItem('test-type') === 'RTM Impact Test') {
          console.log('!this.showComprassion && sessionStorage.getItem test-type === RTM Impact Test');
          this.showConfirm(obj);
          this.moveNextStep.emit({currentComponent: this.currentComponent, data: this.data});
          this.showComprassionView.emit(false);
        } else if (!this.showComprassion) {
          console.log('!this.showComprassion');
          this.showConfirm(obj);
        } else {
          console.log('else');
          this.moveNextStep.emit({currentComponent: this.currentComponent, data: this.data});
          this.showComprassionView.emit(false);
        }
      }
    });
    this.filterSubscription = this.globalService.subscribe('FILLTER_APPLIED', obj => {
      if (obj.module === 'FILTERED_COMPONENT' && obj.component === 'Select_Test_Stores') {
        this.formatfilteredData(obj.data);
      }
    });

    this.hideComprassion = this.globalService.subscribe('HIDE_TEST_STORE_COMPRASSION', obj => {
      console.log('calling the Data HIDE_TEST_STORE_COMPRASSION');
      if (obj.module === 'CREATE_TEST') {
        this.showComprassion = false;
        this.selectStoreView = true;
        this.previuosData(this.ELEMENT_DATA3);
        console.log(this.ELEMENT_DATA3, 'when gone previous ');
      }
    });
  }

  ngOnInit(): void {

    console.log(localStorage.getItem('TargetVariableValue'));
    if (localStorage.getItem('TargetVariableValue') === 'RSV') {
      this.selectTargetVariableRadio = '1';
    } else {
      this.selectTargetVariableRadio = '2';
    }
    this.userRegion = sessionStorage.getItem('region');
    if (config[this.userRegion]) {
      console.log(config[this.userRegion]);
      this.testApplicabilityFields = config[this.userRegion].fields;
      this.currencySymbol = config[this.userRegion]['currency'];
      this.isinSqFt = config[this.userRegion]['OutletSurfaceAreaUnit'];
      this.tableName = config[this.userRegion];
      this.latitude = 51.678418;
      this.longitude = 7.809007;
      this.zoom = 8;
      if (this.data.test_type !== 'RTM Impact Test'){
        this.columnHeader1 = {
          select: 'Select Store',
          store_no: this.tableName.test_store_id,
          banner: this.testApplicabilityFields[0].banner,
          Territory: this.tableName.territory,
          store_segment: this.testApplicabilityFields[3].storegrid
        };
      } else {
        this.columnHeader1 = {
          store_no: this.tableName.test_store_id,
          banner: this.testApplicabilityFields[0].banner,
          Territory: this.tableName.territory,
          store_segment: this.testApplicabilityFields[3].storegrid
        };
      }
      this.columnHeader2 = {
        store_no: this.tableName.test_store_id,
        Street: 'Outlet Address',
        similarity_value: 'Similarity value to population',
        sales_corelation: 'Sales correlation'
      };
    }

    this.displayedColumnsTestStore = this.displayedColumnsTestStoreDEMO;
    this.TestStoreSelectTable.paginator = this.paginator;
    //Edit
    this.currentComponentData = this.commonService.getCurrentComponentSubject().data;
    console.log(this.currentComponentData);
    if (this.currentComponentData !== undefined) {
      if (this.currentComponentData.confidence_lvl !== null) {
        if (this.currentComponentData.hasOwnProperty('is_checkconf')) {
          this.ConfLev = this.currentComponentData.is_checkconf;
          console.log(this.currentComponentData.is_checkconf);
          // this.ConfLev = this.currentComponent.is_checkconf;
          this.ConfLevel = this.currentComponentData.confidence_lvl;
        }
      }
      if (this.currentComponentData.no_of_teststores !== null) {
        if (this.currentComponentData.hasOwnProperty('is_checknum')) {

          console.log(this.currentComponentData.is_checknum);
          this.TestStore = this.currentComponentData.is_checknum;
          this.NoofTestStore = this.currentComponentData.no_of_teststores;
        }
      }
      if (this.currentComponentData.margin_error !== null) {
        if (this.currentComponentData.hasOwnProperty('is_checkmarg')) {
          // this.Margin = this.currentComponent.is_checkmarg

          this.Margin = this.currentComponentData.is_checkmarg;
          console.log(this.currentComponentData.is_checkmarg);
          this.NoofError = this.currentComponentData.margin_error;
        }
      }
      console.log(this.currentComponentData.selectTestStores, 'testchange');
      if (!isNullOrUndefined(this.currentComponentData.selectTestStores)) {
        console.log(this.currentComponentData.selectTestStores, 'selecteTestStoresSelection');
        this.selectTestStores = this.currentComponentData.selectTestStores;
        if (this.selectTestStores !== '1') {
          this.showSuggestedByTool = false;
        }
        setTimeout(()=>{
          this.showGenerate(false);
        },10);
      }
      if (this.isRTMImpactTest && isNullOrUndefined(this.currentComponentData.selectTestStores)){
        this.ConfLevel=0;
        this.NoofError = 0;
        this.NoofTestStore = 0;
        setTimeout(()=>{
        this.identifyTestStore();
        },10);
      }
    }
  }

  ngAfterViewInit() {
    this.TestStoreSelectTable.paginator = this.paginator;
    this.comprassionSelectedStores.paginator = this.paginatorComprassion;
    const tips = ['The user can either select test stores as suggested by the tool or manually select the suggested no of test stores from the population or upload them manually in the provided excel template.', 'To generate test stores from the tool, the user must enter any two of the following three metrics - confidence level, margin of error, number of test stores', 'Margin of error tells you how many percentage points your results will differ from the real population value', 'Confidence level tells you the percentage of the time the results to be accurate to within margin of error percentage points Ex: Confidence level = 95%, Margin of Error = 2% Results calculated to be accurate to within 2 percentages points (+/- 2) 95% of the time', 'Power of test is the probability of suggesting there is a change in sales (lift/drop) when actually there is one','Note: For RTM Impact Test all valid stores with Customer Status as “Active” will be used as Test Stores once the user has applied the filters based on channel, territory, segment, and store grid. No manual upload or selection of Test stores will be available.'];
    setTimeout(() => {
this.tipstoParent(tips);
});
  }

  ngOnDestroy() {
    if(!isNullOrUndefined(this.nextStepSubscription)){
      this.nextStepSubscription.unsubscribe();
      }
      if(!isNullOrUndefined(this.filterSubscription)){
        this.filterSubscription.unsubscribe();
        }
        if(!isNullOrUndefined(this.hideComprassion)){
          this.hideComprassion.unsubscribe();
          }
  }


  tipstoParent(data: any) {
    console.log(data, 'data');
    this.tipsData.emit(data);
  }

  ConfShow() {
    this.confshow = false;
  }

  ErrorShow() {
    this.errorshow = false;
  }

  TestStoreShow() {
    this.teststoreshow = false;
  }

  navigateSuggestedTool() {
    this.suggestionView = true;
  }

  generateSuggestion() {
    if (this.selectTargetVariableRadio == undefined) {
      this.generateValidationMessage = 'Choose the target variable';
      return;
    } else if (this.alreadyKnowRadio == undefined) {
      this.generateValidationMessage = 'Select Already know option';
      return;
    } else if ((this.knownMarginOfError == '' || this.knownMarginOfError == undefined) && (this.knownNoOfError == '' || this.knownNoOfError == undefined)) {
      this.generateValidationMessage = 'Give input values for chosen field';
      return;
    } else {
      this.generateValidationMessage = '';
    }
    //this.data = JSON.parse('{"margin_of_error":6,"banners":["Albert Heijn","Jumbo"],"segments":["Supermarket Small","Supermarket Medium","Supermarket Large"],"store_segments":["Low CSV - Medium Influence","Medium CSV - Low Influence","Low CSV - Low Influence","Medium CSV - Medium Influence","High CSV - Low Influence","Medium CSV - High Influence","Low CSV - High Influence","High CSV - Medium Influence","High CSV - High Influence"],"segment_variables":["Overall_Segment"],"territories":["1","2","3","4","5","6","7","8","9","10","11","12","23","27"],"categories":["Chocolate","Petcare"],"target_variable":"RSV"}')
    let marginOfError: any;
    let noOfTestStore: any;
    if (this.alreadyKnowRadio === '1') {
      marginOfError = this.knownMarginOfError;
      noOfTestStore = '';
    } else if (this.alreadyKnowRadio == '2') {
      marginOfError = '';
      noOfTestStore = this.knownNoOfError;
    }
    const segment_variables: any[] = [config[this.userRegion]['overall_segment']];
    const data = {
      margin_of_error: parseInt(this.knownMarginOfError),
      noOfTestStore,
      banners: this.data.banner,
      segments: this.data.segment,
      store_segments: this.data.store_grid,
      segment_variables,
      territories: this.data.territory,
      categories: this.data.category,
      target_variable: this.selectTargetVariableRadio == 1 ? 'RSV' : 'Volume',
      prewindow_start: this.data.pretest_startdt,
      prewindow_end: this.data.pretest_enddt,
      postwindow_start: this.data.testwin_startdt,
      postwindow_end: this.data.testwin_enddt
    };
    data['num_test_stores'] = parseInt(noOfTestStore);
    data['margin_of_error'] = parseInt(marginOfError);
    if (noOfTestStore == '') {
      this.homeService.generateSuggestionForNoOfTestStore(data).subscribe(response => {
        if (response.status == 'ok') {
          this.resultMarginOfError = marginOfError;
          this.suggestionResultView = true;
          this.resultNoOfStore = response.data['no_of_teststores'];
          const resultPower = JSON.parse(response.data['power_stores']);
          this.resultPowerPower = resultPower['Power %'];
          this.resultPowerNoOfStores = resultPower['Number of Stores'];
          this.showCharts(true);
        }
      });
    } else {
      this.homeService.generateSuggestionForMarginOfError(data).subscribe((response: any) => {
        if (response.status === 'ok') {
          this.suggestionResultView = true;
          this.resultNoOfStore = noOfTestStore;
          this.resultMarginOfError = response.data['margin_of_error'];
          const resultPower = JSON.parse(response.data['power_stores']);
          this.resultPowerPower = resultPower['Power %'];
          this.resultPowerNoOfStores = resultPower['Margin of Error'];
          this.showCharts(false);
        }
      });
    }
  }

  showCharts(isTestStore: boolean) {
    this.title = isTestStore ? 'Number of test stores' : 'Margin of error';
    const yAxisValue = isTestStore ? '{value}' : '{value}%';
    const ary: any = [];

    const power = [];
    for (const key in this.resultPowerPower) {
      power.push(this.resultPowerPower[key]);
    }
    const noOfStore = [];
    for (const key in this.resultPowerNoOfStores) {
      noOfStore.push(this.resultPowerNoOfStores[key]);
    }
    console.log(power);
    console.log(noOfStore);
    for (const i in power) {
      ary.push({
        power: power[i],
        noOfStore: noOfStore[i]
      });
    }

    this.LOAD_DATA = ary;
    this.powerTable = new MatTableDataSource(this.LOAD_DATA);
    setTimeout(() => this.powerTable.paginator = this.paginator);
    this.suggestionViewResult = true;
    const options: any = {
      chart: {
        type: 'areaspline',
        height: 400,
      },
      title: null,
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        borderWidth: 1,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
      },
      exporting: {
        chartOptions: {
          title: {
            text: null
          }
        }
      },
      xAxis: {
        categories: power,
        title: {
          text: 'Power %'
        },
        style: {
          fontFamily: 'Mulish_regular'
        }
      },
      yAxis: {
        title: {
          text: this.title
        },
        labels: {
          format: yAxisValue
        },
        style: {
          fontFamily: 'Mulish_regular'
        }
      },
      plotOptions: {

        area: {
          fillOpacity: 0.5,
        },
        series: {
          lineColor: 'black',
        },
      },
      credits: {
        enabled: false
      },
      series: [{
        name: this.title,
        showIDEMOegend: false,
        data: noOfStore,
        color: 'black',
        zoneAxis: 'x',
        zones: [{
          fillColor: '#FFFFFF',
          value: noOfStore.indexOf(this.resultNoOfStore),
        }, {
          fillColor: 'palegreen',
          color: 'green',
          value: noOfStore.length,
        }]
      }]
    };
    const options2: any = {
      chart: {
        type: 'areaspline',
        height: 400,
      },
      title: null,
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        borderWidth: 1,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
      },
      exporting: {
        chartOptions: {
          title: {
            text: null
          }
        }
      },
      xAxis: {
        categories: power,
        title: {
          text: 'Power %'
        },
        style: {
          fontFamily: 'Mulish_regular'
        }
      },
      yAxis: {
        title: {
          text: this.title
        },
        labels: {
          format: yAxisValue
        },
        style: {
          fontFamily: 'Mulish_regular'
        }
      },
      plotOptions: {

        area: {
          fillOpacity: 0.5,
        },
        series: {
          lineColor: 'black',
        },
      },
      credits: {
        enabled: false
      },
      series: [{
        name: this.title,
        showIDEMOegend: false,
        data: noOfStore,
        color: 'black',
        zoneAxis: 'x',
        zones: [{
          fillColor: '#FFFFFF',
          value: noOfStore.indexOf(this.resultMarginOfError)
        }, {
          fillColor: 'palegreen',
          color: 'green',
          value: noOfStore.length
        }]
      }]
    };
    if (this.alreadyKnowRadio === '1') {
      Highcharts.chart('power-chart', options);
    } else if (this.alreadyKnowRadio === '2') {
      Highcharts.chart('power-chart', options2);
    }
  }

  selectAKRadioChange() {
    this.suggestionViewResult = false;
  }

  sortDataQuickSuggestionTable(sort: Sort) {
    const data = this.LOAD_DATA.slice();
    this.powerTable = new MatTableDataSource<any>(this.LOAD_DATA);

    if (!sort.active || sort.direction === '') {
      this.LOAD_DATA = data;
      return;
    }

    this.LOAD_DATA = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'power':
          return compare_suggestion(a.power, b.power, isAsc);
        case 'number_of_stores':
          return compare_suggestion(a.banner, b.banner, isAsc);
        default:
          return 0;
      }
    });
  }


  sortDataTeststoreSelected(sort: Sort) {
    console.log('sort Function');
    let data ;
    if (!this.searchFilter){
      data = this.ELEMENT_DATA3.slice();
    } else {
      data = this.TestStoreSelectTable.data.slice();
    }
    this.TestStoreSelectTable = new MatTableDataSource<any>(data);
    this.TestStoreSelectTable.paginator = this.paginator;


    if (!sort.active || sort.direction === '') {
      this.ELEMENT_DATA3 = data;
      return;
    }
    this.tempsortDirection = sort.direction;
    const tempData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'store_no':
          return compare_seletedstore(a.store_no, b.store_no, isAsc);
        case 'banner':
          return compare_seletedstore(a.banner, b.banner, isAsc);
        case 'Territory':
          return compare_seletedstore(a.Territory, b.Territory, isAsc);
        case 'segment':
          return compare_seletedstore(a.segment, b.segment, isAsc);
        case 'store_segment':
          return compare_seletedstore(a.store_segment, b.store_segment, isAsc);
        case 'Street':
          return compare_seletedstore(a.Street, b.Street, isAsc);
        default:
          return 0;
      }
    });
    let filterData;
    if (this.searchFilter) {
      filterData = tempData;
    } else {
      filterData = tempData;
      this.ELEMENT_DATA3 = tempData;
    }
    this.TestStoreSelectTable = new MatTableDataSource<any>(filterData);
    this.TestStoreSelectTable.paginator = this.paginator;
  }

  isAllSelectedTestStore() {
    const numSelected = this.storeselection.selected.length;
    const numRows = this.TestStoreSelectTable.data.length;
    return numSelected === numRows;
  }

  checkboxLabelTeststore(row?: TestStore): string {
    if (!row) {
      return `${this.isAllSelectedTestStore() ? 'select' : 'deselect'} all`;
    }
    return `${this.storeselection.isSelected(row) ? 'deselect' : 'select'} row ${row.store_name + 1}`;
  }

  identifyTestStore() {
    let segment_variables: any[];
    segment_variables = [config[this.userRegion]['banner']];
    const dataStore = this.data;
    const newData = {
      data: {
        test_name: this.data.test_name,
        test_id: this.data.test_id,
        type_of_test: this.data.test_type,
        banners: this.data.banner,
        segments: this.data.store_grid,
        store_segments: this.data.segment,
        segment_variables,
        territories: this.data.territory,
        categories: this.data.category,
        no_of_teststores: this.NoofTestStore,
        target_variable: this.data.target_variable,
        prewindow_start: this.data.pretest_startdt,
        prewindow_end: this.data.pretest_enddt,
        postwindow_start: this.data.testwin_startdt,
        postwindow_end: this.data.testwin_enddt
      }
    };
    this.homeService.IdentifyTest(newData).subscribe((apiResponse4: any) => {
      if (apiResponse4.status === 'ok') {
        if(apiResponse4.data === ''){
          this.toastr.error('No test stores pair satisfying the criteria to proceed further.');
        }else {
          this.tableConstruct(apiResponse4.data);
        }
      } else {
        this.toastr.error('Something went wrong please try again later.');
      }
    });
  }

  getTerritoryData(value: any) {
    return value;
  }

  dowDEMOoadTemplate() {
    const link = document.createElement('a');
    link.download = 'Upload_Teststores_Template_' + this.userRegion + '.xlsx';
    link.href = 'assets/excel_files/Upload_Teststores_Template_' + this.userRegion + '.xlsx';
    link.click();
  }

  handleFileInput(files: FileList) {
    console.log('files-> ', files.item(0));
    const file = files.item(0);
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f));
    console.log(formData, 'twovalues');
    const data = {
      FILES: formData,
      banner: this.Banner
    };
    formData.append('banner', this.Banner);
    formData.append('store_segments', this.StoreGrid);
    formData.append('segments', this.Segment);
    formData.append('territories', this.Territory);
    formData.append('categories', this.Category);
    formData.append('target_variable', this.TargetVariable);
    formData.append('prewindow_start', this.data.pretest_startdt);
    formData.append('prewindow_end', this.data.pretest_enddt);
    formData.append('postwindow_start', this.data.testwin_startdt);
    formData.append('postwindow_end', this.data.testwin_enddt);
    this.homeService.uploadTestStore(formData).subscribe((response: any) => {
      if (response.status === 'ok') {
        this.uploadMessage = response.data.message2;
        this.uploadedData = response.data.filtered_teststores;
        this.uploaded = true;
        this.NoofError = response.data.margin_of_error;
        this.ConfLev = response.data.confidence_level;
        this.NoofTestStore = response.data.num_test_stores;
        this.power_test = response.data.power_test;
        this.statusFail = false;
      } else {
        this.uploaded = false;
        this.uploadMessageFailed = response.data;
        this.statusFail = true;
        // this.toastr.warning(response.data);
      }
    }, (error: any) => {
      this.toastr.error('Something went wrong while upload please try again later');
    });
  }

  formatNumber(num: any) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  getTestStoreName(row: any) {
    return row.store_no;
  }


  tableConstruct(apiresponse: any) {
    const dt = JSON.parse(apiresponse);
    console.log(dt);
    let allArray: any = [];
    allArray = dt;
    const ary: any = [];
      for (var i = 0; i < dt.length; i++) {
        let correlation = 0;
        let similarity_value = 0;
        if (dt[i].hasOwnProperty('Correlation')) {
          correlation = dt[i]['Correlation'];
        }
        if (dt[i].hasOwnProperty('Similarity_Measure')) {
          similarity_value = dt[i]['Similarity_Measure'];
        }
        ary.push({
          store_no: dt[i]['Customer_Number'],
          banner: dt[i]['Customer_Group'],
          city: dt[i]['City'],
          Street: dt[i]['Outlet_Address'],
          store_segment: dt[i]['Store_Number'],
          Territory: dt[i]['Territory'],
          csvoutletShow: dt[i]['Store_Size_Sq_Ft'],
          index: dt[i]['index'],
          teststre_flg: dt[i]['is_teststore'],
          zipcode: dt[i]['Postcode'],
          sales_corelation: correlation,
          similarity_value,
          latitude: dt[i]['Latitude'],
          longitude: dt[i]['Longitude'],
          customer_name: dt[i]['Customer_Name'],
          customer_status: dt[i]['Customer_Status'],
          touchability_score: dt[i]['Touchability_Score'],
          icon: 'assets/images/map_icon.png',
          selected_icon: 'assets/images/active_map.png',
          active_icon: 'assets/images/map_icon.png',
          store_id: dt[i]['store_id'],
          region: dt[i]['Region'],
          division: dt[i]['Division'],
          sales_represtative: dt[i]['Sales_Representative'],
          total_checkout_locations: dt[i]['total_checkout_locations'],
          Manned_Checkouts: dt[i]['Manned_Checkouts'],
          customerChain: dt[i]['Customer_Chain']
        });
      }

    if (this.showComprassion) {
      this.COMPRASSION_ELEMENT_DATA3 = ary;
      var temp: any = [];
      for (var i = 0; i < this.COMPRASSION_ELEMENT_DATA3.length; i++) {
        if (this.COMPRASSION_ELEMENT_DATA3[i].teststre_flg == 1) {
          temp.push(this.COMPRASSION_ELEMENT_DATA3[i]);
        }
      }
      console.log(this.COMPRASSION_ELEMENT_DATA3);
      this.testStoreSelectedDataCount = temp.length;
      this.totalComprassionTestStores = ary.length;
      this.comprassionSelectedStores = new MatTableDataSource(this.COMPRASSION_ELEMENT_DATA3);
      this.comprassionSelectedStores.paginator = this.paginatorComprassion;
      this.changeDetectorRefs.detectChanges();
      this.strselection = new SelectionModel<TestStore>(true, temp);
      this.loadsize = 10;
    } else {
      this.ELEMENT_DATA3 = ary;
      var temp: any = [];
      for (var i = 0; i < this.ELEMENT_DATA3.length; i++) {
        if (this.ELEMENT_DATA3[i].teststre_flg == 1) {
          temp.push(this.ELEMENT_DATA3[i]);
        }
      }
      console.log(this.ELEMENT_DATA3);
      this.testStoreSelectedDataCount = temp.length;
      this.totalTestStores = ary.length;
      this.TestStoreSelectTable = new MatTableDataSource(this.ELEMENT_DATA3);
      this.TestStoreSelectTable.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
      this.strselection = new SelectionModel<TestStore>(true, temp);
      this.loadsize = 10;
    }

    if (this.selectTestStores === '3') {
      this.NoofError = 0;
      this.ConfLevel = 0;
      this.NoofTestStore = this.ELEMENT_DATA3.length;
    }
  }

  showGenerate(click: boolean) {
    if (click) {
      if (this.selectTestStores === '1' && (this.Margin == 0 || this.Margin == false || !this.NoofError) && (this.TestStore == 0 || this.TestStore == false || !this.NoofTestStore)) {
        console.log('Margin and Number of test store is empty');
        this.formError = true;
        return;
      }
    }

    this.formError = false;
    console.log('Firing Generate');
    this.ELEMENT_DATA3 = [];
    this.testStoreSelectedDataCount = 0;
    this.totalTestStores = 0;
    this.TestStoreSelectTable = new MatTableDataSource(this.ELEMENT_DATA3);
    this.TestStoreSelectTable.paginator = this.paginator;
    if (this.selectTestStores === '1' && !isNullOrUndefined(this.selectTestStores)) {
      this.identifyTestStore();
    } else if (this.selectTestStores === '2' && !isNullOrUndefined(this.selectTestStores)) {
      this.identifyMannually();
    } else if (this.selectTestStores === '3' && !isNullOrUndefined(this.selectTestStores)) {
      let records;
      const index  = this.data.records.findIndex((x: any)=> x.stepper_id === 3);
      if(index !== -1){
        if(this.data.records.length > 0 && this.data.records[index].stepper_id === 3){
          records = JSON.parse(this.data.records[index].record_value);
          console.log(records, 'recordsvalue');
          this.tableConstruct(JSON.stringify(records.selectedteststore));
        }
      }
    }

  }


  omit_char(event: any) {
    const keyChar = event.key;
    let allowCharacter: boolean;
    if (keyChar === '-' && event.target.selectionStart !== 0) {
      allowCharacter = false;
    } else if (
      keyChar === 'Tab' ||
      keyChar === '+' ||
      keyChar === 'Enter' ||
      keyChar === 'Backspace' ||
      keyChar === 'ArrowLeft' ||
      keyChar === 'ArrowRight' ||
      keyChar === 'Delete'
    ) {
      allowCharacter = true;
    } else {
      allowCharacter = (keyChar >= '0' && keyChar <= '9') || keyChar === '.';
    }
    if (this.NoofError !== undefined && this.NoofError !== null && (this.NoofError).toString().length >= 10) {
      event.preventDefault();
    }
    if (!allowCharacter) {
      event.preventDefault();
    }
  }

  mapReading() {
    this.userLocationMarkerAnimation = 'DROP';
  }

  toggleView(change: any) {
    console.log(change, 'toogle change value');
  }

  getMarkerList() {
    const data = this.ELEMENT_DATA3;
    let count = 0;
    this.mapTableData = [];
    if (this.showMapList === '1') {
      count = this.ELEMENT_DATA3.length;
    } else if (this.showMapList === '2') {
      count = 10;
    } else if (this.showMapList === '3') {
      count = 20;
    }
    this.markers = [];
    const arry = [];
    for (let i = 0; i < count; i++) {
      if (data[i]['teststre_flg'] === 1) {
        data[i]['active_icon'] = data[i]['selected_icon'];
        data[i]['teststre_flg'] = 1;
      } else {
        data[i]['active_icon'] = data[i]['icon'];
        data[i]['teststre_flg'] = 0;
      }
      arry.push(data[i]);
    }
    this.markers = arry;
  }

  selectedMarker(storeNumber: any, teststre_flg: any) {
    console.log(this.markers, 'markersData');
    if (teststre_flg === 0) {
      const index = this.markers.findIndex((x: any) => x.store_no === storeNumber);
      if (index !== -1) {
        this.markers[index]['active_icon'] = this.markers[index]['selected_icon'];
        this.markers[index]['teststre_flg'] = 1;
      }
    } else if (teststre_flg === 1) {
      const index = this.markers.findIndex((x: any) => x.store_no === storeNumber);
      if (index !== -1) {
        this.markers[index]['active_icon'] = this.markers[index]['icon'];
        this.markers[index]['teststre_flg'] = 0;
      }
    }
    this.mapTableData = this.markers;
    const selectedCount = this.mapTableData.filter((x: any) => x.teststre_flg === 1);
    this.testStoreSelectedDataCount = selectedCount.length;
  }

  selectedstrtable(store_id: any) {
    console.log(this.ELEMENT_DATA3, 'data');
    for (let i = 0; i < this.ELEMENT_DATA3.length; i++) {
      if (this.ELEMENT_DATA3[i]['store_no'] === store_id) {
        if (this.ELEMENT_DATA3[i]['teststre_flg'] === 1) {
          this.ELEMENT_DATA3[i]['teststre_flg'] = 0;
        } else {
          this.ELEMENT_DATA3[i]['teststre_flg'] = 1;
        }
      }
    }

    if (this.temp_valufilter != undefined) {
      const val = this.temp_valufilter;

      this.tempFilter = this.ELEMENT_DATA3;

      const temp = this.tempFilter.filter(function(d: any) {
        return (
          d['store_no'].toString().indexOf(val) !== -1 ||
          d['banner']
            .toString()
            .toLowerCase()
            .indexOf(val) !== -1 ||
          d['segment']
            .toString()
            .toLowerCase()
            .indexOf(val) !== -1 ||
          d['store_segment']
            .toString()
            .toLowerCase()
            .indexOf(val) !== -1 ||
          d['Territory']
            .toString()
            .toLowerCase()
            .indexOf(val) !== -1 ||
          d['segment']
            .toString()
            .toLowerCase()
            .indexOf(val) !== -1 ||
          d['store_segment']
            .toString()
            .toLowerCase()
            .indexOf(val) !== -1 ||
          !val
        );
      });
      if (this.tempFilter.length > 0) {
        console.log(this.tempFilter, 'if condition');
        this.testStoreSelectedDataCount = temp.length;
        this.totalTestStores = temp.length;
        this.TestStoreSelectTable = new MatTableDataSource<any>(temp);
        this.TestStoreSelectTable.paginator = this.paginator;
      } else {
        console.log(this.tempFilter, 'else condition');
        this.testStoreSelectedDataCount = this.ELEMENT_DATA3.length;
        this.ELEMENT_DATA3 = this.ELEMENT_DATA3;
        this.totalTestStores = temp.length;
        this.TestStoreSelectTable = new MatTableDataSource<any>(this.ELEMENT_DATA3);
        this.TestStoreSelectTable.paginator = this.paginator;
      }
    } else if (!this.filterApplied) {
      const data = this.ELEMENT_DATA3.filter((x: any) => x.teststre_flg === 1);
      if (data.length > 0) {
        this.testStoreSelectedDataCount = data.length;
        if (this.ELEMENT_DATA3.length === data.length) {
          this.isChecked = true;
        } else {
          this.isIntermediate = true;
        }
      } else {
        this.testStoreSelectedDataCount = data.length;
      }
      this.TestStoreSelectTable = new MatTableDataSource(this.ELEMENT_DATA3);
      this.TestStoreSelectTable.paginator = this.paginator;
    } else if (this.filterApplied) {
      const data = this.tempFiteredArray.filter((x: any) => x.teststre_flg === 1);
      if (data.length > 0) {
        this.testStoreSelectedDataCount = data.length;
        if (this.ELEMENT_DATA3.length === data.length) {
          this.isChecked = true;
        } else {
          this.isIntermediate = true;
        }
      } else {
        this.testStoreSelectedDataCount = data.length;
      }
      this.totalTestStores = this.tempFiteredArray.length;
      this.TestStoreSelectTable = new MatTableDataSource<any>(this.tempFiteredArray);
      this.TestStoreSelectTable.paginator = this.paginator;
    }
  }

  Savestep3One(currentComponent: any) {
    /*Covert date format*/
    const pretest_start = this.data.pretest_startdt;
    const pretest_end = this.data.pretest_enddt;
    const test_start = this.data.testwin_startdt;
    const test_end = this.data.testwin_enddt;
    const mystres = this.strselection.selected;
    const storessel = [];
    if (this.selectTestStores === '2'&& this.testStoreSelectedDataCount < Number(this.NoofTestStore)) {
      this.closeDailogConfirm();
    }
    if (mystres.length === 0) {
      this.toastr.warning('Please select atleast one test stores');
      return;
    }
    for (let i = 0; i < mystres.length; i++) {
      storessel.push({
        Customer_Number: mystres[i]['store_no'],
        Customer_Group: mystres[i]['banner'],
        City: mystres[i]['City'],
        Customer_Name: mystres[i]['customer_name'],
        Outlet_Address: mystres[i]['Street'],
        Store_Number: mystres[i]['store_segment'],
        Territory: mystres[i]['Territory'],
        Customer_Status: mystres[i]['customer_status'],
        Latitude: mystres[i]['latitude'],
        Longitude: mystres[i]['longitude'],
        Store_Size_Sq_Ft: mystres[i]['csvoutletShow'],
        Postcode: mystres[i]['zipcode'],
        store_id: mystres[i]['store_id'],
        Region: mystres[i]['region'],
        Division: mystres[i]['division'],
        Sales_Representative: mystres[i]['sales_represtative'],
        Manned_Checkouts: mystres[i]['Manned_Checkouts'],
        total_checkout_locations: mystres[i]['total_checkout_locations'],
        Customer_Chain: mystres[i]['customerChain'],
        index: mystres[i]['index'],
        is_teststore: mystres[i]['teststre_flg'],
        touchability_score: mystres[i]['touchability_score']
      });
    }
    let data: any;
    let record: any;
    this.data.stepindex = 4;
    this.data.selectedteststore = storessel;
    localStorage.setItem('testid', this.data.test_id);
    localStorage.setItem('test_type', this.data.test_type);

    const stringified_data = JSON.stringify(this.data);

    record = {
      strfeature1: this.data.strfeature1,
      strfeature2: this.data.strfeature2,
      selectedteststore: this.data.selectedteststore,
      test_name: this.data.test_name,
      test_type: this.data.test_type,
      target_variable: this.data.target_variable,
      desc: this.data.desc,
      additional_det: this.data.additional_det,
      banner: this.Banner,
      segment: this.StoreGrid,
      territory: this.Territory,
      store_grid: this.Segment,
      category: this.Category,
      pretest_startdt: this.data.pretest_startdt,
      pretest_enddt: this.data.pretest_enddt,
      testwin_startdt: this.data.testwin_startdt,
      testwin_enddt: this.data.testwin_enddt,
      confidence_lvl: this.ConfLevel,
      margin_error: this.NoofError,
      break_even_lift: this.data.break_even_lift,
      no_of_teststores: this.NoofTestStore,
      records: stringified_data,
      stepindex: 3,
      stage_id: 1,
      is_checkconf: this.ConfLev,
      is_checkmarg: this.Margin,
      is_checknum: this.TestStore,
      selectTestStores: this.selectTestStores,
      test_id: this.data.test_id //remove before push
    };
    localStorage.setItem('testidmatch', this.data.test_id);
    const dataTemp: any = [];
    dataTemp.push(this.data.test_id);
    localStorage.setItem('testidstage2', JSON.stringify(dataTemp));
    localStorage.setItem('from_test_store', 'true');
    // Setting the Selected Stores
    console.log(record);
    this.homeService.Save_stage(record).subscribe((apiresponse: any) => {
      if (apiresponse.status == 'ok') {
        this.toastr.success('', 'Selected Test Stores saved successfully');
        if (!this.saveasDraft) {
          console.log(sessionStorage.getItem('test-type'), 'testType changes');
          if(sessionStorage.getItem('test-type') !== 'RTM Impact Test'){
            console.log('RTM Impact Test Not');
            const tips = ['A higher sales correlation between a test store and stores in the entire population indicates a strong directional relationship between their weekly sales', 'Similarity measure between a test store and stores in the entire population indicates how well a test store resembles the stores in the population'];
            this.tipstoParent(tips);
            this.showComprassion = true;
            this.showComprassionView.emit(true);
            this.getComprassionTable();
          }
        }
      }
    });
  }

  ConfLevels(event: any) {
    if (event == 'A') {
      if ((this.Margin == 1 && this.ConfLev == true) || (this.Margin == true && this.ConfLev == 1)) {
        this.uncheck = true;
        this.testrheck = false;
      }
      if ((this.TestStore == 1 && this.ConfLev == true) || (this.TestStore == true && this.ConfLev == 1)) {
        this.uncheck = true;
        this.mrgerrheck = false;
      }

      if (this.ConfLev == true || this.ConfLev == 1) {
        this.uncheck = true;
      }
    } else if (event == 'B') {
      if ((this.Margin == 1 && this.ConfLev == false) || (this.Margin == true && this.ConfLev == false)) {
        this.uncheck = true;
        this.testrheck = true;
      }
      if ((this.TestStore == 1 && this.ConfLev == false) || (this.TestStore == true && this.ConfLev == false)) {
        this.uncheck = true;
        this.mrgerrheck = true;
      }
      if (this.Margin == false || this.ConfLev == 0) {
        this.uncheck = false;
        this.ConfLevel = '';
      }
    }
  }

  MarginError(event: any) {
    if (event == 'C') {
      if ((this.ConfLev == 1 && this.Margin == true) || (this.ConfLev == true && this.Margin == 1)) {
        this.uncheck1 = true;
        this.testrheck = false;
      }
      if ((this.TestStore == 1 && this.Margin == true) || (this.TestStore == true && this.Margin == 1)) {
        this.uncheck1 = true;
        this.cnfcheck = false;
      }
      if (this.Margin == true || this.Margin == 1) {
        this.uncheck1 = true;
      }
    } else if (event == 'D') {
      if ((this.ConfLev == 1 && this.Margin == false) || (this.ConfLev == true && this.Margin == false)) {
        this.uncheck1 = true;
        this.testrheck = true;
      }
      if ((this.TestStore == 1 && this.Margin == false) || (this.TestStore == true && this.Margin == false)) {
        this.uncheck1 = true;
        this.cnfcheck = true;
      }
      if (this.Margin == false || this.Margin == 0) {
        this.uncheck1 = false;
        this.NoofError = '';
      }
    }
  }

  TestStores(event: any) {
    if (event == 'E') {
      if ((this.ConfLev == 1 && this.TestStore == true) || (this.ConfLev == true && this.TestStore == 1)) {
        this.uncheck2 = true;
        this.mrgerrheck = false;
      }
      if ((this.Margin == 1 && this.TestStore == true) || (this.Margin == true && this.TestStore == 1)) {
        this.uncheck2 = true;
        this.cnfcheck = false;
      }
      if (this.TestStore == true || this.TestStore == 1) {
        this.uncheck2 = true;
      }
    } else if (event == 'F') {
      if ((this.ConfLev == 1 && this.TestStore == false) || (this.ConfLev == true && this.TestStore == false)) {
        this.uncheck2 = true;
        this.mrgerrheck = true;
      }
      if ((this.Margin == 1 && this.TestStore == false) || (this.Margin == true && this.TestStore == false)) {
        this.uncheck2 = true;
        this.cnfcheck = true;
      }
      if (this.TestStore == false || this.TestStore == 0) {
        this.uncheck2 = false;
        this.NoofTestStore = '';
        this.validate_teststore = false;
      }
    }
  }

  selectRadioChange() {
    this.ConfLev = 0;
    this.NoofError = 0;
    this.NoofTestStore = 0;
    this.ConfLevel = '';
    this.NoofError = '';
    this.NoofTestStore = '';
    this.TestStoreSelectTable = new MatTableDataSource([]);
    this.ELEMENT_DATA3 = [];
    this.testStoreSelectedDataCount = 0;
    this.mapTableData = [];
    this.markers = [];
    this.totalTestStores = 0;
    this.showMessage = false;
    if (this.selectTestStores === '1') {
      this.showSuggestedByTool = true;
    } else if (this.selectTestStores === '2') {
      this.showSuggestedByTool = false;
      this.formError = false;
    } else if (this.selectTestStores === '3') {
      this.showSuggestedByTool = false;
      this.formError = false;
      this.uploaded = false;
      this.uploadShow = false;
      this.uploadMessageFailed = '';
      this.statusFail = false;
    }
  }

  hideOrShowColumns(data: any, index: any) {
    console.log('data', data, this.hideIcon[data]);
    if (this.hideIcon[data] == true) {
      this.hideIcon[data] = false;
    } else {
      this.hideIcon[data] = true;
    }
    if (data == 'select') {
      this.hideSelectColumns = !this.hideSelectColumns;
    } else if (data == 'store_no') {
      this.hideStoreNoColumns = !this.hideStoreNoColumns;
    } else if (data == 'banner') {
      this.hideBannerColumns = !this.hideBannerColumns;
    } else if (data == 'Territory') {
      this.hideTerritoryColumn = !this.hideTerritoryColumn;
    } else if (data == 'segment') {
      this.hideSegmentColumn = !this.hideSegmentColumn;
    } else if (data == 'store_segment') {
      this.hideStoreSegmentColumn = !this.hideStoreSegmentColumn;
    }
  }

  valueShown(data: any) {
    if (data == 'select') {
      return 'Select Store';
    } else if (data == 'store_no') {
      return this.tableName.test_store_id;
    } else if (data == 'banner') {
      return this.testApplicabilityFields[0].banner;
    } else if (data == 'Territory') {
      return this.tableName.territory;
    } else if (data == 'segment') {
      return this.testApplicabilityFields[1].segment;
    } else if (data == 'store_segment') {
      return this.testApplicabilityFields[3].storegrid;
    }
  }

  identifyMannually() {
    const segment_variables: any[] = [config[this.userRegion]['overall_segment']];
    const newData = {
      data: {
        test_name: this.data.test_name,
        test_id: this.data.test_id,
        type_of_test: this.data.test_type,
        banners: this.data.banner,
        segments: this.data.store_grid,
        store_segments: this.data.segment,
        segment_variables,
        territories: this.data.territory,
        categories: this.data.category,
        no_of_teststores: this.NoofTestStore,
        target_variable: this.data.target_variable,
        prewindow_start: this.data.pretest_startdt,
        prewindow_end: this.data.pretest_enddt,
        postwindow_start: this.data.testwin_startdt,
        postwindow_end: this.data.testwin_enddt
      }
    };
    this.homeService.IdentifyTestManually(newData).subscribe((apiResponse: any) => {
      if (apiResponse.status == 'ok') {
        this.showMessage = true;
        this.NoofError = apiResponse.data.margin_of_error;
        this.ConfLev = apiResponse.data.confidence_level;
        this.NoofTestStore = apiResponse.data.num_test_stores;
        this.tableConstruct(apiResponse.data.teststores);
        this.power_test = apiResponse.data.power_test;
        this.ConfLevel = this.ConfLev;
      }
    });
  }


  setData(data: any) {
    if (this.data !== undefined) {
      this.Territory = this.data.territory;
      this.Category = this.data.category;
      this.Segment = this.data.store_grid;
      this.StoreGrid = this.data.segment;
      this.TargetVariable = this.data.target_variable;
      this.Banner = this.data.banner;
    }
  }

  // Calculate Confidence level and margin of error

  callCompute() {
    if (this.NoofError || this.NoofTestStore || this.ConfLev) {
      this.Compute();
    }
  }

  Compute() {

    this.formError = false;
    const prewinstrt = this.data.pretest_startdt;
    const prewinend = this.data.pretest_enddt;
    const testwinstrt = this.data.testwin_startdt;
    const testwinend = this.data.testwin_enddt;
    let data: any;
    console.log(testwinstrt);
    if (this.ConfLev && this.TestStore) {
      data = {
        data: {
          confidence_level: parseInt(this.ConfLevel) / 100,
          num_test_stores: this.NoofTestStore,
          testwindow_start: testwinstrt,
          testwindow_end: testwinend,
          prewinstrt,
          prewinend,
          target_variable: this.TargetVariable,
          banners: this.Banner,
          segments: this.StoreGrid,
          store_segments: this.Segment,
          territories: this.Territory,
          categories: this.Category
        }
      };
      if (!isNullOrUndefined(this.NoofTestStore) && JSON.parse(this.NoofTestStore) < 30) {
        this.validate_teststore = true;
        this.testStore_Errormsg = 'Given samplesize is less than 30 (Minimum required samplesize).Please modify the sample size and try again';
        return;
      } else {
        this.validate_teststore = false;
      }
    } else if (this.ConfLev && this.Margin) {
      data = {
        data: {
          confidence_level: parseInt(this.ConfLevel) / 100,
          margin_of_error: (Number(parseFloat(this.NoofError).toFixed(2))) / 100,
          testwindow_start: testwinstrt,
          testwindow_end: testwinend,
          prewinstrt,
          prewinend,
          target_variable: this.TargetVariable,
          banners: this.Banner,
          segments: this.StoreGrid,
          store_segments: this.Segment,
          territories: this.Territory,
          categories: this.Category
        }
      };
    } else if (this.TestStore && this.Margin) {
      data = {
        data: {
          margin_of_error: (Number(parseFloat(this.NoofError).toFixed(2))) / 100,
          num_test_stores: this.NoofTestStore,
          testwindow_start: testwinstrt,
          testwindow_end: testwinend,
          prewinstrt,
          prewinend,
          target_variable: this.TargetVariable,
          banners: this.Banner,
          segments: this.StoreGrid,
          store_segments: this.Segment,
          territories: this.Territory,
          categories: this.Category,

        }
      };
      if (!isNullOrUndefined(this.NoofTestStore) && JSON.parse(this.NoofTestStore) < 30) {
        this.validate_teststore = true;
        return;
      } else {
        this.validate_teststore = false;
      }
    }

    let flag_conf: any;

    if (this.ConfLev == 1) {
      if (this.ConfLevel < 70 || this.ConfLevel > 99) {
        flag_conf = 'invalid';
      } else {
        flag_conf = 'valid';
      }
    }

    if (
      (this.ConfLev == 1 && this.TestStore == 1 && this.ConfLevel && this.NoofTestStore && flag_conf == 'valid') ||
      (this.TestStore == 1 && this.Margin == 1 && this.NoofError && this.NoofTestStore) ||
      (this.ConfLev == 1 && this.Margin == 1 && this.ConfLevel && this.NoofError && flag_conf == 'valid')
    ) {
      this.homeService.Testparam(data).subscribe((apiresponse: any) => {
        if (apiresponse.status == 'ok') {
          this.validate_teststore = false;
          if (this.ConfLev && this.TestStore && flag == 'valid') {
            this.NoofError = (((apiresponse.data * 100) * 100 + Number.EPSILON) / 100).toFixed(2);
            this.toastr.success('', 'Margin of error computed');
          } else if (this.ConfLev && this.Margin && flag == 'valid') {
            this.NoofTestStore = apiresponse.data;
            this.toastr.success('', 'Number  of Teststores computed');
          } else if (this.TestStore && this.Margin) {
            const apicnflevel = apiresponse.data * 100;
            if (apicnflevel < 70 || apicnflevel > 99) {
              this.ConfLevel = apiresponse.data * 100;
              this.toastr.error('', 'Confidence level not in range');
              this.confrangeshow = true;
            } else {
              this.ConfLevel = apiresponse.data * 100;
              this.toastr.success('', 'Confidence level computed');
              this.confrangeshow = false;
            }
          }
        } else {
          if (apiresponse.data) {
            if (apiresponse.data != '') {
              this.validate_teststore = true;
              this.testStore_Errormsg = 'Calculated samplesize is less than 30 (Minimum required samplesize).Hence we suggest 30 as the sample size.';
              // this.toastr.error('', apiresponse.data);
            } else {
              this.toastr.error('', 'Computation failed for given value!');
            }
          } else {
            this.toastr.error('', 'Computation failed for given value!');
          }
        }
      });
      if (
        (this.ConfLev == 1 && this.TestStore == 1 && this.ConfLevel && this.NoofTestStore) ||
        (this.TestStore == 1 && this.Margin == 1 && this.NoofError && this.NoofTestStore) ||
        (this.ConfLev == 1 && this.Margin == 1 && this.ConfLevel && this.NoofError)
      ) {
        var flag: any;
        if (this.ConfLev == 1) {
          if (this.ConfLevel < 70 || this.ConfLevel > 99) {
            flag = 'invalid';
            this.confrangeshow = true;
          } else {
            this.confrangeshow = false;
            // this.show_required_metrics = true;
            flag = 'valid';
          }
        } else {
          // this.show_required_metrics = true;
        }
      }
    } else if (flag_conf == 'invalid') {
      this.confrangeshow = true;
    } else {
      //ivalid meesgae
      // this.show_required_metrics = false;
    }
  }

  filterCall() {
    this.sideNavservice.toggleFilter('Filter');
    setTimeout(() => {
      this.globalService.publish('FILTER_OPEN_METHOD', {
        module: 'Select_Test_Stores',
        data: this.ELEMENT_DATA3
      });
    });
  }

  FilterLoadTestStoreSelect(event: string) {
    const val = event.toLowerCase();
    this.tempFilter = this.ELEMENT_DATA3;
    let temp;
    if (event === '') {
      this.searchFilter = false;
    } else {
      this.searchFilter = true;
    }
    console.log(this.tempFilter, this.ELEMENT_DATA3,'Filter Search');
    temp = this.tempFilter.filter(function(d: any) {
      return (
        d.store_no
          .toString()
          .toLowerCase()
          .indexOf(val) !== -1 ||
        d.banner
          .toString()
          .toLowerCase()
          .indexOf(val) !== -1 ||
        d.Territory
          .toString()
          .toLowerCase()
          .indexOf(val) !== -1 ||
        d.store_segment
          .toString()
          .toLowerCase()
          .indexOf(val) !== -1 ||
        !val
      );
    });
    if (this.tempFilter.length > 0) {
      const data = temp.filter((x: any) => x.teststre_flg === 1);
      this.testStoreSelectedDataCount = data.length;
      this.TestStoreSelectTable = new MatTableDataSource<any>(temp);
      // setTimeout(() => this.TestStoreSelectTable.paginator = this.paginator);
    } else {
      this.ELEMENT_DATA3 = this.ELEMENT_DATA3;
      const data = this.ELEMENT_DATA3.filter((x: any) => x.teststre_flg === 1);
      this.testStoreSelectedDataCount = data.length;
      this.TestStoreSelectTable = new MatTableDataSource<any>(this.ELEMENT_DATA3);
      // setTimeout(() => this.TestStoreSelectTable.paginator = this.paginator);
    }
  }

  openDailog(templateRef: TemplateRef<any>) {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeDailog() {
    this.dialogRef.close();
  }

  // getCheckboxValues(data: any) {
  //   if (sessionStorage.getItem('region') == 'DEMO') {
  //     const el = this.confGridDEMO.find((itm: any) => itm === data);

  //     if (el) {
  //       this.confGridDEMO.splice(this.confGridDEMO.indexOf(el), 1);
  //     }
  //     this.displayedColumnsTestStoreDEMO = this.confGridDEMO;
  //     console.log(this.confGridDEMO);
  //   } else {
  //     const el = this.confGrid.find((itm: any) => itm === data);

  //     if (el) {
  //       this.confGrid.splice(this.confGrid.indexOf(el), 1);
  //     }
  //     this.displayedColumnsTestStore = this.confGrid;
  //     console.log(this.confGrid);
  //   }
  // }

  cancelUpload() {
    this.uploaded = false;
  }

  contineUpload() {
    if (this.uploadedData.length !== 0) {
      this.uploadShow = true;
      this.tableConstruct(this.uploadedData);
    }
  }

  sortComprassionTeststoreSelected(sort: Sort) {
    const data = this.ELEMENT_DATA3.slice();
    this.TestStoreSelectTable = new MatTableDataSource<any>(this.ELEMENT_DATA3);
    this.TestStoreSelectTable.paginator = this.paginator;
    if (!sort.active || sort.direction === '') {
      this.ELEMENT_DATA3 = data;
      return;
    }
    this.ELEMENT_DATA3 = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'store_no':
          return compare_seletedstore(a.store_no, b.store_no, isAsc);
        case 'banner':
          return compare_seletedstore(a.banner, b.banner, isAsc);
        // case 'city':
        //   return compare_seletedstore(a.city, b.city, isAsc);
        case 'Territory':
          return compare_seletedstore(a.Territory, b.Territory, isAsc);
        case 'segment':
          return compare_seletedstore(a.segment, b.segment, isAsc);
        case 'store_segment':
          return compare_seletedstore(a.store_segment, b.store_segment, isAsc);
        case 'Street':
          return compare_seletedstore(a.Street, b.Street, isAsc);
        default:
          return 0;
      }
    });
    this.TestStoreSelectTable.paginator = this.paginator;
  }

  sortPopulationMapping(sort: Sort) {
    let data;
    if (!this.searchComprassion){
      data =  this.COMPRASSION_ELEMENT_DATA3.slice();
    } else {
      data = this.comprassionSelectedStores.data.slice();
    }
    this.comprassionSelectedStores = new MatTableDataSource<any>(data);
    this.comprassionSelectedStores.paginator = this.paginatorComprassion;
    if (!sort.active || sort.direction === '') {
      this.COMPRASSION_ELEMENT_DATA3 = data;
      return;
    }
    const comprassionData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'store_no':
          return compare_seletedstore(a.store_no, b.store_no, isAsc);
        case 'Street':
          return compare_seletedstore(a.Street, b.Street, isAsc);
        // case 'city':
        //   return compare_seletedstore(a.city, b.city, isAsc);
        case 'similarity_value':
          return compare_seletedstore(a.similarity_value, b.similarity_value, isAsc);
        case 'sales_corelation':
          return compare_seletedstore(a.sales_corelation, b.sales_corelation, isAsc);
        default:
          return 0;
      }
    });
    let filterData;
    if (this.searchComprassion) {
      filterData = comprassionData;
    } else {
      filterData = comprassionData;
      this.ELEMENT_DATA3 = comprassionData;
    }
    this.comprassionSelectedStores = new MatTableDataSource<any>(filterData);
    // this.comprassionSelectedStores.paginator = this.paginator;
  }

  getComprassionTable() {
    const data = {
      test_id: this.data.test_id,
      banners: this.data.banner,
      segments: this.data.store_grid,
      store_segments: this.data.segment,
      territories: this.data.territory,
      categories: this.data.category,
      target_variable: this.data.target_variable,
      selected_test_stores: this.data.selectedteststore,
      prewindow_start: this.data.pretest_startdt,
      prewindow_end: this.data.pretest_enddt,
      postwindow_start: this.data.testwin_startdt,
      postwindow_end: this.data.testwin_enddt
    };
    this.homeService.selected_testStore_comprassion(data).subscribe((apiresponse: any) => {
      if (apiresponse.status == 'ok') {
        this.tableConstruct(apiresponse.data);
      }
    });
  }

  viewInsights() {
    this.showInsights = !this.showInsights;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.testStore_population) {
      this.selectStoreView = this.testStore_population;
      console.log(this.selectStoreView, 'when go previous');
      if (!this.selectStoreView) {
        this.showTestSummaryTable();
        this.test_analysis_result();
      }
    }
  }

  FilterComprassionStoreSelect(event: string) {
    const val = event.toLowerCase();
    this.tempComprassionFilter = this.COMPRASSION_ELEMENT_DATA3;
    console.log(this.tempComprassionFilter);
    if (event === '') {
      this.searchComprassion = false;
    } else {
      this.searchComprassion = true;
    }
    let temp;
      temp = this.tempComprassionFilter.filter(function(d: any) {
        console.log(d);
        if (d.similarity_value != null) {
          return (
            d.store_no
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            d.Street
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            d.similarity_value
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            d.sales_corelation
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            !val
          );
        }
      });
    if (this.tempComprassionFilter.length > 0) {
      this.totalComprassionTestStores = temp.length;
      this.comprassionSelectedStores = new MatTableDataSource<any>(temp);
    } else {
      this.COMPRASSION_ELEMENT_DATA3 = this.COMPRASSION_ELEMENT_DATA3;
      this.totalComprassionTestStores = this.COMPRASSION_ELEMENT_DATA3.length;
      this.comprassionSelectedStores = new MatTableDataSource<any>(this.COMPRASSION_ELEMENT_DATA3);
    }
  }

  showTestSummaryTable() {
    const data = {
      test_id: this.data.test_id,
      banners: this.data.banner,
      segments: this.data.store_grid,
      store_segments: this.data.segment,
      territories: this.data.territory,
      categories: this.data.category,
      target_variable: this.data.target_variable,
      selected_test_stores: this.selectTestStoresFormat(),
      prewindow_start: this.data.pretest_startdt,
      prewindow_end: this.data.pretest_enddt,
      postwindow_start: this.data.testwin_startdt,
      postwindow_end: this.data.testwin_enddt
    };
    this.homeService.testStore_population_summary(data).subscribe((apiresponse: any) => {
      if (apiresponse.status == 'ok') {
          if (apiresponse['data']['variables_metrics_dict'].hasOwnProperty('RSV')) {
            this.showRSV = true;
            this.csv_pop = apiresponse['data']['variables_metrics_dict']['RSV']['Population Mean'];
            this.csv_poptestmean = apiresponse['data']['variables_metrics_dict']['RSV']['Test Mean'];
            this.csv_pvalue = this.convertPercentage(apiresponse['data']['pvalue_dict']['RSV']);
          } else {
            this.showRSV = false;
          }
          if (apiresponse['data']['variables_metrics_dict'].hasOwnProperty('Store_Size_Sq_Ft')) {
            this.showsizeSqft = true;
            this.out_pop = apiresponse['data']['variables_metrics_dict']['Store_Size_Sq_Ft']['Population Mean'];
            this.out_poptestmean = apiresponse['data']['variables_metrics_dict']['Store_Size_Sq_Ft']['Test Mean'];
            this.out_testPvalue = this.convertPercentage(apiresponse['data']['pvalue_dict']['Store_Size_Sq_Ft']);
          } else{
            this.showsizeSqft = false;
          }
          if (apiresponse['data']['variables_metrics_dict'].hasOwnProperty('Manned_Checkouts')) {
            this.showManned = true;
            this.touch_ability = apiresponse['data']['variables_metrics_dict']['Manned_Checkouts']['Population Mean'];
            this.touch_ability_mean = apiresponse['data']['variables_metrics_dict']['Manned_Checkouts']['Test Mean'];
            this.touch_pValue = this.convertPercentage(apiresponse['data']['pvalue_dict']['Manned_Checkouts']);
          } else {
            this.showManned = false;
          }
          if (apiresponse['data']['variables_metrics_dict'].hasOwnProperty('total_checkout_locations')) {
            this.showTotal = true;
            this.totalCheckout = apiresponse['data']['variables_metrics_dict']['total_checkout_locations']['Population Mean'];
            this.totalCheckoutMean = apiresponse['data']['variables_metrics_dict']['total_checkout_locations']['Test Mean'];
            this.totalCheckoutpValue = this.convertPercentage(apiresponse['data']['pvalue_dict']['total_checkout_locations']);
          } else {
            this.showTotal = false;
          }
      }
    });
  }

  showComprassionChart() {
    const data = {
      test_id: this.data.test_id,
      banners: this.data.banner,
      segments: this.data.store_grid,
      store_segments: this.data.segment,
      territories: this.data.territory,
      categories: this.data.category,
      target_variable: this.data.target_variable,
      selected_test_stores: this.selectTestStoresFormat(),
      prewindow_start: this.data.pretest_startdt,
      prewindow_end: this.data.pretest_enddt,
      postwindow_start: this.data.testwin_startdt,
      postwindow_end: this.data.testwin_enddt
    };
    this.homeService.testStore_population_correlation(data).subscribe((apiresponse: any) => {
      if (apiresponse.status == 'ok') {
        console.log(apiresponse.data);
        this.seriesData = [];
        this.categories = [];
        const targetVariableValue = this.data.target_variable;
        const avgTest = apiresponse.data.metrics_dict['Avg_Similarity'];
        this.avg_test_population = (avgTest * 100).toFixed();
        const salesTest = apiresponse.data.metrics_dict['Avg_Correlation'];
        this.sales_test_population = (salesTest * 100).toFixed();
        const data = JSON.parse(apiresponse.data.combined_avg);
        for (let i = 0; i < data.length; i++) {
          const obj = {name: '', color: ''};
          this.categories.push(data[i]['Week'].toString());
          if (this.seriesData.length === 0) {
            obj.name = data[i]['Group'];
            if (data[i]['Group'] === 'Test') {
              obj.color = '#d40061';
            } else {
              obj.color = '#ec9b02';
            }
            const datValue = [];
            datValue.push(data[i]['Average_' + targetVariableValue]);
            obj['data'] = datValue;
            this.seriesData.push(obj);
          } else {
            const index = this.seriesData.findIndex((x: any) => x.name === data[i]['Group']);
            if (index === -1) {
              obj.name = data[i]['Group'];
              if (data[i]['Group'] === 'Test') {
                obj.color = '#d40061';
              } else {
                obj.color = '#ec9b02';
              }
              const datValue = [];
              datValue.push(data[i]['Average_' + targetVariableValue]);
              obj['data'] = datValue;
              this.seriesData.push(obj);
            } else {
              this.seriesData[index].data.push(data[i]['Average_' + targetVariableValue]);
            }
          }
        }
        const uniqueData = Array.from(new Set(this.categories));
        this.categories = uniqueData;
        console.log(this.seriesData, this.categories, 'chart Datas');
        setTimeout(() => this.generateHighCharts(this.seriesData, this.categories));
      }
    });
  }

  test_analysis_result() {
    const preperiod_start: any = this.data.pretest_startdt;
    const preperiod_end: any = this.data.pretest_enddt;
    const postperiod_start: any = this.data.testwin_startdt;
    const postperiod_end: any = this.data.testwin_enddt;
    const breakeven_list = this.data.break_even_lift;
    const selectedTargetVariable = this.data.target_variable;
    const test_id = this.data.test_id;
    const data: any = {
      test_id,
      preperiod_start,
      preperiod_end,
      postperiod_start,
      postperiod_end,
      mesmetric_name: selectedTargetVariable,
      break_even_lift: JSON.stringify(JSON.parse(breakeven_list)),
      // stringified_data: JSON.stringify(stringifiedData)
    };
    this.testMeasureService.controlStoreMeasurementpost(data).subscribe((apiresponse: any) => {
      if (apiresponse.status == 'ok') {
        this.showComprassionChart();
      } else if (apiresponse.status == 'not_ok') {

      }
    });
  }

  selectTestStoresFormat() {
    const mystres = this.comprassionSelectedStores.data;
    const finalisedData = [];
    for (let i = 0; i < mystres.length; i++) {
      finalisedData.push({
        Customer_Number: mystres[i]['store_no'],
        Customer_Status: mystres[i]['customer_status'],
        Customer_Group: mystres[i]['banner'],
        City: mystres[i]['city'],
        Outlet_Address: mystres[i]['Street'],
        Postcode: mystres[i]['zipcode'],
        is_teststore: mystres[i]['teststre_flg'],
        Correlation: mystres[i]['sales_corelation'],
        Similarity_Measure: mystres[i]['similarity_value'],
        Customer_Name: mystres[i]['customer_name'],
        index: mystres[i]['index'],
        Store_Size_Sq_Ft: mystres[i]['csvoutletShow'],
        Territory_Geocode: this.getTerritoryData(mystres[i]['Territory']),
        Store_Number: mystres[i]['store_segment'],
        Touchability_Score: mystres[i]['touchability_score'],
        store_id: mystres[i]['store_id'],
        Region: mystres[i]['region'],
        Division: mystres[i]['division'],
        Sales_Representative: mystres[i]['sales_represtative'],
        total_checkout_locations: mystres[i]['total_checkout_locations'],
        Manned_Checkouts: mystres[i]['Manned_Checkouts']
      });
    }
    console.log(finalisedData, 'finalisedData');
    return finalisedData;
  }

  generateHighCharts(seriesData: [], category: []) {
    const options: any = {
      chart: {
        type: 'areaspline',
        height: 400,
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        y: 0,
        padding: 0,
        itemMarginTop: 0,
        itemMarginBottom: 0,
        itemStyle: {
          fontSize: '10px'
        }
      },
      xAxis: {
        categories: category,
        style: {
          fontFamily: 'Mulish_regular'
        }
      },
      yAxis: {
        title: {
          text: 'Standardised sales'
        },
        style: {
          fontFamily: 'Mulish_regular'
        }
      },
      tooltip: {
        shared: true,
        valueSuffix: ''
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.1
        }
      },
      series: seriesData
    };
    Highcharts.chart('test_population_charts', options);
  }

  convertPercentage(value: number) {
    if (value !== undefined) {
      const convertedValue = (1 - value) * 100;
      return Math.floor(convertedValue) + '%';
    } else {
      return '-';
    }
  }

  roundOff(val: any) {
    const tempVal: any = Math.round(val);
    return tempVal;
  }

  roundOffWithComma(val: any) {
    const tempVal: any = Math.round(val);
    return tempVal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  getDataUpdated() {
    this.TestStoreSelectTable = new MatTableDataSource([]);
    if (!this.tableView) {
      this.mapTableData = this.TestStoreSelectTable.data;
      this.getMarkerList();
    } else {
      // ODEMOy To make the teststore Flag true
      const filteredData = this.mapTableData.filter((x: any) => x.teststre_flg === 1);
      if (filteredData.length > 0) {
        for (let i = 0; i < filteredData.length; i++) {
          const index = this.ELEMENT_DATA3.findIndex((x: any) => x.store_no === filteredData[i]['store_no']);
          if (index !== -1) {
            this.ELEMENT_DATA3[index]['teststre_flg'] = 1;
          }
        }
      }
      const temp: any = [];
      for (let i = 0; i < this.ELEMENT_DATA3.length; i++) {
        if (this.ELEMENT_DATA3[i].teststre_flg == 1) {
          temp.push(this.ELEMENT_DATA3[i]);
        }
      }
      this.testStoreSelectedDataCount = temp.length;
      this.totalTestStores = this.ELEMENT_DATA3.length;
      this.TestStoreSelectTable = new MatTableDataSource(this.ELEMENT_DATA3);
      setTimeout(() => this.TestStoreSelectTable.paginator = this.paginator);
      console.log(this.TestStoreSelectTable.paginator, 'pagintorset');
      // this.changeDetectorRefs.detectChanges();
      this.strselection = new SelectionModel<TestStore>(true, temp);
      // this.loadsize = 10;
    }
  }

  onMouseOver(infoWindow: any, $event: MouseEvent) {
    infoWindow.open();
  }

  onMouseOut(infoWindow: any, $event: MouseEvent) {
    infoWindow.close();
  }

  showConfirm(obj: any) {
    if (this.selectTestStores === '2' && this.testStoreSelectedDataCount < Number(this.NoofTestStore)) {
      this.openDailogConfirm(this.confirmDialog);
    } else {
      this.Savestep3One(obj.currentComponent);
    }

  }

  openDailogConfirm(template: TemplateRef<any>) {
    this.dialogRefConfirm = this.dialog.open(template);
  }

  closeDailogConfirm() {
    this.dialogRefConfirm.close();
  }

  isAllSelected() {
    const numSelected = this.strselection.selected.length;
    const numRows = this.TestStoreSelectTable.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected() === false){
      this.masterChecked(false);
    } else {
      this.masterChecked(true);
    }
  }


  sellectAllStores(event: any) {
    console.log('callin when SelectAllStores', event);
    for (let i = 0; i < this.ELEMENT_DATA3.length; i++) {
      if (event === true) {
        this.ELEMENT_DATA3[i]['teststre_flg'] = 1;
      } else {
        this.ELEMENT_DATA3[i]['teststre_flg'] = 0;
      }
    }
    const data = this.ELEMENT_DATA3.filter((x: any) => x.teststre_flg === 1);
    if (data.length > 0) {
      this.testStoreSelectedDataCount = data.length;
    } else {
      this.testStoreSelectedDataCount = 0;
    }
    this.TestStoreSelectTable = new MatTableDataSource(this.ELEMENT_DATA3);
    this.TestStoreSelectTable.paginator = this.paginator;
    this.isChecked = true;
  }

  masterChecked(event: boolean) {
    if(!event){
      this.TestStoreSelectTable.data.forEach(row => {
        this.strselection.select(row);
      });
      this.sellectAllStores(!event);
    } else {
      this.strselection.clear();
      this.sellectAllStores(!event);
    }
  }

  formatfilteredData(dataValue: any) {
    const data = [];
    const tempData = this.ELEMENT_DATA3;
    this.filterApply(dataValue, tempData);
  }

  filterApply(dataValue: any, tempData: any) {
    const keyValues: any = [];
    const valuesArray: any = [];
    for (let i = 0; i < dataValue.length; i++) {
      keyValues.push(dataValue[i]['name']);
      for (let j = 0; j < dataValue[i]['data'].length; j++) {
        // console.log(dataValue[i], dataValue[i]['data'][j])
        valuesArray.push(dataValue[i]['data'][j]);
      }
    }
    if (valuesArray.length > 0) {
      this.filterApplied = true;
    } else {
      this.filterApplied = false;
    }
    const result = tempData.filter(function(e: any) {
      return keyValues.every(function(a: any) {
        return !valuesArray.includes(e[a]);
      });
    });
    tempData = result;
    console.log(result, 'tempDatavalue filter');
    this.tempFiteredArray = tempData;
    this.TestStoreSelectTable = new MatTableDataSource<any>(tempData);
    this.TestStoreSelectTable.paginator = this.paginator;
  }

// When click previous the Checked flag are reset
  previuosData(ary: any) {
    this.ELEMENT_DATA3 = ary;
    const temp: any = [];
    for (let i = 0; i < this.ELEMENT_DATA3.length; i++) {
      if (this.ELEMENT_DATA3[i].teststre_flg == 1) {
        temp.push(this.ELEMENT_DATA3[i]);
      }
    }
    console.log(this.ELEMENT_DATA3);
    this.testStoreSelectedDataCount = temp.length;
    this.totalTestStores = ary.length;
    this.TestStoreSelectTable = new MatTableDataSource(this.ELEMENT_DATA3);
    setTimeout(() => this.TestStoreSelectTable.paginator = this.paginator);
    this.changeDetectorRefs.detectChanges();
    this.strselection = new SelectionModel<TestStore>(true, temp);
    this.loadsize = 10;
  }
}
