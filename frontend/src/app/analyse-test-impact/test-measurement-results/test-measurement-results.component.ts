import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {GlobalEventsService} from '@app/shared/services/global-events.service';
import {SidenavService} from '@app/shared/services/sidenav.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import {Subscription} from 'rxjs';
import {TestMeasureService} from '@app/shared/services/testmeasure.service';
import { isNullOrUndefined } from 'util';
const config = require('../../../assets/region/config-fields.json');

export interface Liftanalysisvalues {
  teststoreid: any;
  banner: any;
  cntrlstreid: any;
  cntrlbanner: any;
  variable: any;
  testgrppreavg: any;
  testgrppostavg: any;
  cntrlgrppreavg: any;
  cntrlgrppostavg: any;
  testprepost: any;
  cntrlprepost: any;
  testvscntrl: any;
}

const TestMeaureData: Liftanalysisvalues[] = [];

@Component({
  selector: 'app-test-measurement-results',
  templateUrl: './test-measurement-results.component.html',
  styleUrls: ['./test-measurement-results.component.scss']
})
export class TestMeasurementResultsComponent implements OnInit, AfterViewInit {

  @Output() callFullScreen: EventEmitter<any> = new EventEmitter<any>();
  isCardExpanded = false;
  testMeasurementResults: any = 'testMeasurementResults';
  testNames: any[] = [];
  @Input() testDetailsValue: any;
  userRegion: any;
  test_id: any;
  //getTargetVariable: any;
  currencySymbol: any;
  TargetVariable: any;
  TargetVariable1: any;
  displayedLiftCols: string[] = [
    'teststoreid',
    'testgrppreavg',
    'testgrppostavg',
    'testprepost',
    'testgroup_postEstimated',
    // 'banner',
    'cntrlstreid',
    // 'cntrlbanner',
    // 'variable',
    'cntrlgrppreavg',
    'cntrlgrppostavg',
    'cntrlprepost',
    // 'testvscntrl',
    'incremantal_rsv',
    'testgroup_estimatepercentage'
  ];

  confGrid = [
    'teststoreid',
    'testgrppreavg',
    'testgrppostavg',
    'testprepost',
    // 'banner',
    // 'cntrlstreid',
    // 'cntrlbanner',
    // 'variable',
    'cntrlgrppreavg',
    'cntrlgrppostavg',
    'cntrlprepost',
    'testvscntrl'
  ];
  Testmeasureresults: MatTableDataSource<any>;
  TempTestAnalysisArr: any = [];
  breakeven_list: any = 0;
  is_breakeven_valid: any = true;
  isDateValid = true;
  testAnalysisDataCount: any = 0;
  tableName: any = '';
  testApplicabilityFields: any;
  public targetVariableItems: any[] = ['RSV', 'Volume'];
  selectedTargetVariable = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tempFilter: any;
  dialogRef: any;
  testName='';
  createdOn = '';
  test_type = '';
  category: any = [];
  columnHeader1: {};
  testStores: any =[];
  hideIcon: boolean[] = [false];
  filterSubscription: Subscription = Subscription.EMPTY;
  hideTestStoreIdColumns: boolean;
  hideTestGrpPreAvgColumns: boolean;
  hideTestGrpPostAvgColumns: boolean;
  hideTestPrePostColumn: boolean;
  hideCntrlStreIdColumn: boolean;
  hideCntrlGrpPreAvgColumn: boolean;
  hideCntrlGrpPostAvgColumns: boolean;
  hideCntrlPrePostColumns: boolean;
  hideTestvsCntrlColumns: boolean;
  openSideNav: boolean;
  searchFilter = false;

  drop(event: CdkDragDrop<string[]>) {
    console.log('drop event fired');
    moveItemInArray(this.displayedLiftCols, event.previousIndex, event.currentIndex);
  }

  constructor(private testMeasureService: TestMeasureService,
              private sideNavservice: SidenavService,
              private dialog: MatDialog, private globalService: GlobalEventsService) {
    this.filterSubscription = this.globalService.subscribe('FILLTER_APPLIED', obj => {
      if (obj.module === 'FILTERED_COMPONENT' && obj.component === 'Analyse_Impact' && obj.componentPage === 'Test_Measurement') {
        this.formatfilteredData(obj.data);
      }
    });
  }

  ngOnInit(): void {
    this.userRegion = sessionStorage.getItem('region');
    if (config[this.userRegion]) {
      console.log('testDetailsValue-> ', this.testDetailsValue);
      this.test_id = this.testDetailsValue.testId;
      this.selectedTargetVariable = this.testDetailsValue.targetVariable;
      this.testApplicabilityFields = config[this.userRegion].fields;
      this.tableName = config[this.userRegion];
      this.currencySymbol = config[this.userRegion]['currency'];
      this.Testmeasureresults = new MatTableDataSource(TestMeaureData);
      this.Testmeasureresults.paginator = this.paginator;
      this.breakeven_list = this.testDetailsValue.break_even_lift;
      this.test_type = this.testDetailsValue.test_type;
      this.testName = this.testDetailsValue.testName;
      this.createdOn = this.testDetailsValue.created_on;
      this.category = this.getCategory(this.testDetailsValue.category);
      if (this.test_type !== 'RTM Impact Test'){
        this.columnHeader1 = {teststoreid: 'Test Store '+ this.tableName.test_store_id, testgrppreavg: 'Test Store Pre Period Avg/Week (£)',
        testgrppostavg: 'Test Store Post Period Avg/Week (£)', testprepost: 'Test Store Pre Vs Post Lift (%)', testgroup_postEstimated: 'Test Store Post period Estimated Avg/Week (£)',banner: 'Test Store Customer Group' , testStoreCustomerChain: 'Test Store Customer Chain',cntrlstreid: 'Control Store Customer Number',cntrlgrppreavg:'Control Store Pre Period Avg/Week (£)',
        cntrlgrppostavg: 'Control Store Post Period Avg/Week (£)',cntrlprepost:'Control Store Pre Vs Post Lift (%)',cntrlbanner: 'Control Store Customer Group', controlStoreCustomerChain: 'Control Store Customer Chain', testvscntrl:'Test vs Control Lift %', incremantal_rsv: 'Incremental RSV',
        };
      } else {
        this.columnHeader1 = {teststoreid: 'Test Store '+ this.tableName.test_store_id, testgrppreavg: 'Test Store Pre Period Avg/Week (£)',
        testgrppostavg: 'Test Store Post Period Avg/Week (£)', testprepost: 'Test Store Pre Vs Post Lift (%)', testgroup_postEstimated: 'Test Store Post period Estimated Avg/Week (£)',banner: 'Test Store Customer Group', testStoreCustomerChain: 'Test Store Customer Chain',cntrlgrppreavg:'Control Store Pre Period Avg/Week (£)',
        cntrlgrppostavg: 'Control Store Post Period Avg/Week (£)',cntrlprepost:'Control Store Pre Vs Post Lift (%)',testvscntrl:'Test vs Control Lift %', incremantal_rsv: 'Incremental RSV',
        controlStoreCount: 'Control Store Count'};
      }
      this.test_analysis_result();
    }
  }

  ngOnDestroy(){
    if(!isNullOrUndefined(this.filterSubscription)){
      this.filterSubscription.unsubscribe();
      }
  }

  ngAfterViewInit() {
    this.Testmeasureresults.paginator = this.paginator;
  }

  test_analysis_result() {
    const preperiod_start: any = this.testDetailsValue.preTestStartDate;
    const preperiod_end: any = this.testDetailsValue.preTestEndDate;
    const postperiod_start: any = this.testDetailsValue.postTestStartDate;
    const postperiod_end: any = this.testDetailsValue.postTestEndDate;
    let break_even_lift = '';
    if (this.test_type !== 'RTM Impact Test') {
      if (this.breakeven_list === '' || this.breakeven_list == null || this.breakeven_list == undefined) {
        this.is_breakeven_valid = false;
        this.isDateValid = false;
        return;
      } else {
        let TempValue = this.is_breakeven_valid;
        TempValue = Math.abs(TempValue);
        if (TempValue != NaN) {
          this.is_breakeven_valid = true;
          this.isDateValid = true;
        } else {
          this.is_breakeven_valid = false;
          this.isDateValid = false;
          return;
        }
      }
      break_even_lift = JSON.parse(this.breakeven_list);
    } else {
      break_even_lift = '';
    }

    const stringifiedData = {
      test_id: this.test_id,
      preperiod_start,
      preperiod_end,
      postperiod_start,
      postperiod_end,
      mesmetric_name: this.selectedTargetVariable,
      break_even_lift,
      stage_id: 3,
      stepindex: 6
    };

    const data: any = {
      test_id: this.test_id,
      preperiod_start,
      preperiod_end,
      postperiod_start,
      postperiod_end,
      mesmetric_name: this.selectedTargetVariable,
      stage_id: 3,
      stepindex: 6,
      stringified_data: JSON.stringify(stringifiedData),
      category: this.category,
      test_stores: this.testStores,
      test_type: this.test_type
    };
    this.testMeasureService.getAnalyzedResults(data).subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok') {
        const predata: any = {
          pre_end: preperiod_end,
          pre_start: preperiod_start,
          testwin_end: postperiod_end,
          testwin_start: postperiod_start,
          test_id: this.test_id,
          target_variable: this.selectedTargetVariable,
          break_even_lift: this.breakeven_list
        };
        const testmeasurePreDetails: any = JSON.stringify(predata);
        localStorage.setItem('testmeasure_pre_details', testmeasurePreDetails);

        let TestIdArr: any;
        TestIdArr = apiresponse.data['test_id_id'];
        TestIdArr = Object.keys(TestIdArr);

        this.TempTestAnalysisArr = [];
        for (let i = 0; i < TestIdArr.length; i++) {
          let testprepost: any;
          let cntrlprepost: any;
          let testvscntrl: any;
          let testprepostSort: any;
          let cntrlprepostSort: any;
          let testvscntrlSort: any;
          let banner: any;
          let controlStoreBanner: any;
          let testgrppreavg: any;
          let testgrppostavg: any;
          let cntrlgrppreavg: any;
          let cntrlgrppostavg: any;
          let cntrlstreid: any;
          let cntrlTerritory: any;
          let controlStoresizesqft: any;
          let controlStoreCount: any;
          let testStoreTerriotry: any;
          let controlStoreCustomerChain: any;
          let testStoreCustomerChain: any;

          if (
            apiresponse.data['Test group - Pre vs Post change(in %)'][i] == 'null' ||
            apiresponse.data['Test group - Pre vs Post change(in %)'][i] == 'NaN' ||
            apiresponse.data['Test group - Pre vs Post change(in %)'][i] == 'Infinity' ||
            apiresponse.data['Test group - Pre vs Post change(in %)'][i] == '-Infinity'
          ) {
            testprepost = '-';
            testprepostSort = '-';
          } else {
            testprepostSort = apiresponse.data['Test group - Pre vs Post change(in %)'][i];
            testprepost = apiresponse.data['Test group - Pre vs Post change(in %)'][i] + '%';
          }

          if (
            apiresponse.data['Control group - Pre vs Post change(in %)'][i] == 'null' ||
            apiresponse.data['Control group - Pre vs Post change(in %)'][i] == 'NaN' ||
            apiresponse.data['Control group - Pre vs Post change(in %)'][i] == 'Infinity' ||
            apiresponse.data['Control group - Pre vs Post change(in %)'][i] == '-Infinity'
          ) {
            cntrlprepost = '-';
            cntrlprepostSort = '-';
          } else {
            cntrlprepostSort = apiresponse.data['Control group - Pre vs Post change(in %)'][i];
            cntrlprepost = apiresponse.data['Control group - Pre vs Post change(in %)'][i] + '%';
          }

          if (
            apiresponse.data['Test vs Control change(in %)'][i] == 'null' ||
            apiresponse.data['Test vs Control change(in %)'][i] == 'NaN' ||
            apiresponse.data['Test vs Control change(in %)'][i] == 'Infinity' ||
            apiresponse.data['Test vs Control change(in %)'][i] == '-Infinity'
          ) {
            testvscntrl = '-';
            testvscntrlSort = '-';
          } else {
            testvscntrl = apiresponse.data['Test vs Control change(in %)'][i] + '%';
            testvscntrlSort = apiresponse.data['Test vs Control change(in %)'][i];
          }

          if (
            apiresponse.data['Test_store_Customer_Group'][i] == 'null' ||
            apiresponse.data['Test_store_Customer_Group'][i] == 'NaN' ||
            apiresponse.data['Test_store_Customer_Group'][i] == 'Infinity' ||
            apiresponse.data['Test_store_Customer_Group'][i] == '-Infinity'
          ) {
            banner = '-';
          } else {
            banner = apiresponse.data['Test_store_Customer_Group'][i];
          }

          if ( this.test_type === 'RTM Impact Test' ||
            apiresponse.data['Customer_Group'][i] == 'null' ||
            apiresponse.data['Customer_Group'][i] == 'NaN' ||
            apiresponse.data['Customer_Group'][i] == 'Infinity' ||
            apiresponse.data['Customer_Group'][i] == '-Infinity'
          ) {
            controlStoreBanner = '-';
          } else {
            controlStoreBanner = apiresponse.data['Customer_Group'][i];
          }

          if (
            apiresponse.data['Test group - Pre Period Average'][i] == 'null' ||
            apiresponse.data['Test group - Pre Period Average'][i] == 'NaN' ||
            apiresponse.data['Test group - Pre Period Average'][i] == 'Infinity' ||
            apiresponse.data['Test group - Pre Period Average'][i] == '-Infinity'
          ) {
            testgrppreavg = '-';
          } else {
            testgrppreavg = apiresponse.data['Test group - Pre Period Average'][i];
          }

          if (
            apiresponse.data['Test group - Post Period Average'][i] == 'null' ||
            apiresponse.data['Test group - Post Period Average'][i] == 'NaN' ||
            apiresponse.data['Test group - Post Period Average'][i] == 'Infinity' ||
            apiresponse.data['Test group - Post Period Average'][i] == '-Infinity'
          ) {
            testgrppostavg = '-';
          } else {
            testgrppostavg = apiresponse.data['Test group - Post Period Average'][i];
          }

          if (
            apiresponse.data['Control group - Pre Period Average'][i] == 'null' ||
            apiresponse.data['Control group - Pre Period Average'][i] == 'NaN' ||
            apiresponse.data['Control group - Pre Period Average'][i] == 'Infinity' ||
            apiresponse.data['Control group - Pre Period Average'][i] == '-Infinity'
          ) {
            cntrlgrppreavg = '-';
          } else {
            cntrlgrppreavg = apiresponse.data['Control group - Pre Period Average'][i];
          }

          if (
            apiresponse.data['Control group - Post Period Average'][i] == 'null' ||
            apiresponse.data['Control group - Post Period Average'][i] == 'NaN' ||
            apiresponse.data['Control group - Post Period Average'][i] == 'Infinity' ||
            apiresponse.data['Control group - Post Period Average'][i] == '-Infinity'
          ) {
            cntrlgrppostavg = '-';
          } else {
            cntrlgrppostavg = apiresponse.data['Control group - Post Period Average'][i];
          }
          if (this.test_type !== 'RTM Impact Test') {
            cntrlstreid = apiresponse.data['Customer_Number'][i];
            cntrlTerritory = apiresponse.data['Controlstore Territory'][i];
            controlStoresizesqft = apiresponse.data['Controlstore Store_Size_Sq_Ft'][i];
            controlStoreCount = '-';
            testStoreTerriotry = apiresponse.data['Teststore Territory'][i];
            controlStoreCustomerChain = apiresponse.data['Controlstore Customer_Chain'][i];
          } else {
            cntrlstreid = '-';
            cntrlTerritory = '-';
            controlStoresizesqft = '-';
            controlStoreCount = apiresponse.data['Control Store Count'][i];
            testStoreTerriotry = '-';
            controlStoreCustomerChain = '-';
}

          this.TempTestAnalysisArr.push({
            teststoreid: apiresponse.data['Test_store_Customer_Number'][i],
            banner,
            testStoreCustomerChain: apiresponse.data['Teststore Customer_Chain'][i],
            test_territory: testStoreTerriotry,
            cntrlstreid,
            cntrlbanner: controlStoreBanner,
            controlStoreCustomerChain,
            cntrlTerritory,
            testgrppreavg,
            testgrppostavg,
            testgroup_postEstimated: apiresponse.data['Test group - Post Period Estimated'][i],
            test_storesize_sqft: apiresponse.data['Teststore Store_Size_Sq_Ft'][i],
            cntrlgrppreavg,
            cntrlgrppostavg,
            controlStoresizesqft,
            testprepost,
            cntrlprepost,
            testvscntrl,
            cntrlprepostSort,
            testprepostSort,
            testvscntrlSort,
            controlStoreCount,
            incremantal_rsv: apiresponse.data['Incremental RSV'][i],
            // testgroup_estimatepercentage: apiresponse.data['Test vs Control change(in %)'][i],
          });
        }
        this.testAnalysisDataCount = this.TempTestAnalysisArr.length;
        this.Testmeasureresults = new MatTableDataSource(this.TempTestAnalysisArr);
        this.Testmeasureresults.paginator = this.paginator;
      } else if (apiresponse.status == 'not_ok') {
        if (apiresponse.data.includes('Couldn\'t find target variable data in the given timeframes')) {
          // this.toastr.warning('Couldn\'t find target variable data in the given timeframes', '', {disableTimeOut: true, closeButton:true})
          //this.validatorError = 'Sales information is not available during the selected timeframe.'
          //this.openValidateError()
        } else {
          //this.toastr.warning(apiresponse.data)
          //this.MoveToNextStep()
        }
      }
    });
  }

  expand() {
    this.isCardExpanded = !this.isCardExpanded;
    // localStorage.setItem('openSideNav', this.openSideNav.toString());
    this.sideNavservice.toggle();
    this.callFullScreen.emit();
  }

  hideOrShowColumns(data: any, index: any) {
    console.log('data', data, this.hideIcon[data]);
    if (this.hideIcon[data] == true) {
      this.hideIcon[data] = false;
    } else {
      this.hideIcon[data] = true;
    }
    if (data == 'teststoreid') {
      this.hideTestStoreIdColumns = !this.hideTestStoreIdColumns;
    } else if (data == 'testgrppreavg') {
      this.hideTestGrpPreAvgColumns = !this.hideTestGrpPreAvgColumns;
    } else if (data == 'testgrppostavg') {
      this.hideTestGrpPostAvgColumns = !this.hideTestGrpPostAvgColumns;
    } else if (data == 'testprepost') {
      this.hideTestPrePostColumn = !this.hideTestPrePostColumn;
    } else if (data == 'cntrlstreid') {
      this.hideCntrlStreIdColumn = !this.hideCntrlStreIdColumn;
    } else if (data == 'cntrlgrppreavg') {
      this.hideCntrlGrpPreAvgColumn = !this.hideCntrlGrpPreAvgColumn;
    } else if (data == 'cntrlgrppostavg') {
      this.hideCntrlGrpPostAvgColumns = !this.hideCntrlGrpPostAvgColumns;
    } else if (data == 'cntrlprepost') {
      this.hideCntrlPrePostColumns = !this.hideCntrlPrePostColumns;
    } else if (data == 'testvscntrl') {
      this.hideTestvsCntrlColumns = !this.hideTestvsCntrlColumns;
    }
  }

  valueShown(data: any) {
    if (data == 'teststoreid') {
      return this.tableName.test_store_id;
    } else if (data == 'testgrppreavg') {
      return 'Test Pre Period Average ($)';
    } else if (data == 'testgrppostavg') {
      return 'Test Post Period Average ($)';
    } else if (data == 'testprepost') {
      return 'Test Pre vs Post YoY % change';
    } else if (data == 'cntrlstreid') {
      return this.tableName.control_store_id;
    } else if (data == 'cntrlgrppreavg') {
      return 'Control Pre Period Average ($)';
    } else if (data == 'cntrlgrppostavg') {
      return 'Control Post Period Average ($)';
    } else if (data == 'cntrlprepost') {
      return 'Control Pre vs Post YoY % change';
    } else if (data == 'testvscntrl') {
      return 'Test vs Control Lift %';
    }
  }

  sortDataMatchvals(sort: Sort) {
    let data;
    if (!this.searchFilter){
      data =  this.TempTestAnalysisArr.slice();
    } else {
      data = this.Testmeasureresults.data.slice();
    }

    this.Testmeasureresults = new MatTableDataSource<any>(data);

    if (!sort.active || sort.direction === '') {
      this.TempTestAnalysisArr = data;
      return;
    }

    const sortData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'teststoreid':
          return compare_store(a.teststoreid, b.teststoreid, isAsc);
        case 'banner':
          return compare_store(a.banner, b.banner, isAsc);
        case 'cntrlstreid':
          return compare_store(a.cntrlstreid, b.cntrlstreid, isAsc);
        case 'cntrlbanner':
          return compare_store(a.cntrlbanner, b.cntrlbanner, isAsc);
        case 'variable':
          return compare_store(a.variable, b.variable, isAsc);
        case 'testgrppreavg':
          return compare_store(a.testgrppreavg, b.testgrppreavg, isAsc);
        case 'testgrppostavg':
          return compare_store(a.testgrppostavg, b.testgrppostavg, isAsc);
        case 'cntrlgrppreavg':
          return compare_store(a.cntrlgrppreavg, b.cntrlgrppreavg, isAsc);
        case 'cntrlgrppostavg':
          return compare_store(a.cntrlgrppostavg, b.cntrlgrppostavg, isAsc);
        case 'testprepost':
          return compare_store(a.testprepostSort, b.testprepostSort, isAsc);
        case 'cntrlprepost':
          return compare_store(a.cntrlprepostSort, b.cntrlprepostSort, isAsc);
        case 'testvscntrl':
          return compare_store(a.testvscntrlSort, b.testvscntrlSort, isAsc);
        default:
          return 0;
      }
    });
    let filterData;
    if (this.searchFilter) {
      filterData = sortData;
    } else {
      filterData = sortData;
      this.TempTestAnalysisArr = sortData;
    }
    this.Testmeasureresults = new MatTableDataSource<any>(filterData);
  }

  loadGraph(event: any): any {
    if (event[0].value !== this.selectedTargetVariable) {
      this.selectedTargetVariable = event[0].value;
      this.test_analysis_result();
    }
  }

  FilterLiftanalysis(event: string) {
    const val = event.toLowerCase();
    this.tempFilter = this.TempTestAnalysisArr;
    if (event === '') {
      this.searchFilter = false;
    } else {
      this.searchFilter = true;
    }
    const temp = this.tempFilter.filter(function(d: any) {
      return (
        d.teststoreid.toString().toLowerCase().indexOf(val) !== -1 ||
        // d.banner
        //   .toString()
        //   .toLowerCase()
        //   .indexOf(val) !== -1 ||
        d.cntrlstreid.toString().indexOf(val) !== -1 ||
        // d.cntrlbanner
        //   .toString()
        //   .toLowerCase()
        //   .indexOf(val) !== -1 ||
        // d.variable
        //   .toString()
        //   .toLowerCase()
        //   .indexOf(val) !== -1 ||
        d.testgrppreavg.toString().indexOf(val) !== -1 ||
        d.testgrppostavg.toString().indexOf(val) !== -1 ||
        d.cntrlgrppreavg.toString().indexOf(val) !== -1 ||
        d.cntrlgrppostavg.toString().indexOf(val) !== -1 ||
        d.testprepost.toString().indexOf(val) !== -1 ||
        d.cntrlprepost.toString().indexOf(val) !== -1 ||
        d.testvscntrl.toString().indexOf(val) !== -1 ||
        !val
      );
    });
    if (this.tempFilter.length > 0) {
      this.testAnalysisDataCount = temp.length;
      this.Testmeasureresults = new MatTableDataSource<any>(temp);
      // this.Testmeasureresults.paginator = this.paginator;
    } else {
      this.testAnalysisDataCount = this.TempTestAnalysisArr.length;
      this.Testmeasureresults = new MatTableDataSource<any>(this.TempTestAnalysisArr);
      // this.Testmeasureresults.paginator = this.paginator;
    }
  }

  getColor(value: any) {
    const NumberSplit = value.split('%');
    const valueNumber = Number(NumberSplit[0]);
    if (valueNumber > 0) {
      return 'color_green';
    } else {
      return 'color_red';
    }
  }

  filterCall() {
    this.sideNavservice.toggleFilter('Filter');
    setTimeout(() => {
      this.globalService.publish('FILTER_OPEN_METHOD', {
        module: 'Analyse_Impact',
        component: 'Test_Measurement'
      });
    });
  }

  openDailog(templateRef: TemplateRef<any>) {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeDailog() {
    this.dialogRef.close();
  }

  getCheckboxValues(data: any) {

    const el = this.confGrid.find((itm: any) => itm === data);
    if (el) {
      this.confGrid.splice(this.confGrid.indexOf(el), 1);
    }
    this.displayedLiftCols = this.confGrid;
    console.log(this.confGrid);


  }

  getCategory(data: any) {
    let selectedCategory = data.replace(/'/g, '');
    selectedCategory = selectedCategory.substring(1, selectedCategory.length - 1);
    selectedCategory = selectedCategory.split(',');
    for (let i = 0; i < selectedCategory.length; i++) {
      if (selectedCategory[i] !== '') {
        selectedCategory[i] = selectedCategory[i].trim();
      } else {
        selectedCategory.splice(i, 1);
      }
    }
    return selectedCategory;
  }

  formatfilteredData(dataValue: any) {
    const testName = config[this.userRegion]['partner_id_name'];
    for (let i = 0; i < dataValue.length; i++) {
      if (dataValue[i]['name'] === testName) {
        this.testStores = dataValue[i]['data'];
      }
    }
    console.log(this.testStores, 'stores Data');
    this.testMeasureService.setTestMeasurement(null);
    setTimeout(()=>{
      if (this.testStores.length > 0) {
        this.test_analysis_result();
      }
    }, 10);
  }

  downloadCSV() {
    let headerData: any = [];
    if (sessionStorage.getItem('region') == 'DEMO') {
      headerData = [
        this.tableName.test_store_id,
        'Test Store ' + this.testApplicabilityFields[0].banner,
        // 'Test Store '+this.testApplicabilityFields[3].storegrid,
        // 'Test Store '+this.testApplicabilityFields[1].segment,
        'Test Store ' + this.testApplicabilityFields[1].segment,
        // 'Test Store CSV of Outlet',
        // 'Test Store Outlet Surface',
        // 'Test Store Shelf_Meters_Cat',
        // 'Test Store Shelf_meters_Chocolate',
        // 'Test Store Shelf_Meters_Dog',
        this.tableName.control_store_id,
        'Control Store ' + this.testApplicabilityFields[0].banner,
        // 'Control Store '+this.testApplicabilityFields[3].storegrid,
        // 'Control Store '+this.testApplicabilityFields[1].segment,
        'Control Store ' + this.testApplicabilityFields[1].segment,
        // 'Control Store CSV of Outlet',
        // 'Control Store Outlet Surface',
        // 'Control Store Shelf_Meters_Cat',
        // 'Control Store Shelf_meters_Chocolate',
        // 'Control Store Shelf_Meters_Dog',
        // 'Variable',
        'Test group - Pre Period Average',
        'Test group - Post Period Average',
        'Test group - Post Period Estimated',
        'Teststore Store_Size_Sq_Ft',
        'Control group - Pre Period Average',
        'Control group - Post Period Average',
        'Controlstore Store_Size_Sq_Ft',
        'Test group - Pre vs Post change(in %)',
        'Control group - Pre vs Post change(in %)',
        'Test vs Control change(in %)',
        'Incremental RSV',
        'Test group - Estimated vs Post change(in %)'
      ];
    } else {
      headerData = [
        this.tableName.test_store_id,
        'Test Store ' + this.testApplicabilityFields[0].banner,
        'Test Store ' + this.testApplicabilityFields[3].storegrid,
        'Test Store ' + this.testApplicabilityFields[1].segment,
        'Test Store ' + this.testApplicabilityFields[2].territory,
        this.tableName.control_store_id,
        'Control Store ' + this.testApplicabilityFields[0].banner,
        'Control Store ' + this.testApplicabilityFields[3].storegrid,
        'Control Store ' + this.testApplicabilityFields[1].segment,
        'Control Store ' + this.testApplicabilityFields[2].territory,
        'Variable',
        'Test group - Pre Period Average',
        'Test group - Post Period Average',
        'Control group - Pre Period Average',
        'Control group - Post Period Average',
        'Test group - Pre vs Post change(in %)',
        'Control group - Pre vs Post change(in %)',
        'Test vs Control change(in %)'
      ];
    }
    const trai_name = localStorage.getItem('trial_name');
    const options = {
      headers: headerData,
      nullToEmptyString: true
    };
    const result: any = this.TempTestAnalysisArr;
    result.forEach(function(item: any) {
      if (item.hasOwnProperty('cntrlprepostSort')) {
        delete item.cntrlprepostSort;
      }
      if (item.hasOwnProperty('testprepostSort')) {
        delete item.testprepostSort;
      }
      if (item.hasOwnProperty('testvscntrlSort')) {
        delete item.testvscntrlSort;
      }
      if (item.hasOwnProperty('testoverall_segment')) {
        delete item.testoverall_segment;
      }
      if (item.hasOwnProperty('test_territory')) {
        delete item.test_territory;
      }
      if (item.hasOwnProperty('cntrlTerritory')) {
        delete item.cntrlTerritory;
      }
      if (item.hasOwnProperty('cntrlprepostSort')) {
        delete item.cntrlprepostSort;
      }
      if (item.hasOwnProperty('testprepostSort')) {
        delete item.testprepostSort;
      }
      if (item.hasOwnProperty('testvscntrlSort')) {
        delete item.testvscntrlSort;
      }
      if (item.hasOwnProperty('controlStoreCount')) {
        delete item.controlStoreCount;
      }
    });
    console.log(result, 'results');
    new Angular5Csv(result, 'Test Analysis', options);
  }
}

function compare_store(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
