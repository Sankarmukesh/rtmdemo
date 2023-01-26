import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef, HostListener, AfterViewInit, TemplateRef
} from '@angular/core';
import {map} from 'rxjs/operators';
import {combineLatest, Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Sort} from '@angular/material/sort';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '@app/shared/services/common.service';
import {SidenavService} from '@app/shared/services/sidenav.service';
import {GlobalEventsService} from '@app/shared/services/global-events.service';
import {TestConfigService} from '@app/shared/services/testconfig.service';
import {ApicallService} from '@app/shared/services/apicall.service';
import {MatDialog} from '@angular/material/dialog';
import {isNullOrUndefined} from 'util';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import * as moment from 'moment';
const config = require('../../assets/region/config-fields.json');
declare let $: any;

export interface Storevalues {
  store_name: any;
  store_sk: any;
  state_long: any;
  store_type: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('deleteDialog') deleteDlg: TemplateRef<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  user_name: string;
  testvalue: any = '';
  isShow = false;
  show_testplan_store = false;
  plantestdrpdown = false;
  hide_back = true;
  stepindex: any = 1;
  CompletedStep: any = false;
  value: any;
  index: any;
  loaddatas = false;
  uncheck: boolean;
  Margin: any = 0;
  height: any;
  LOAD_DATA: any = [];
  displayedColumnsLoadSaved: string[] = [
    'test_name',
    'test_window',
    'test_type',
    'details',
    'Created',
    'Modified',
    'status',
    'Actions'
  ];

  confGrid: string[] = [
    'test_name',
    'test_window',
    'test_type',
    'details',
    'Created',
    'Modified',
    'status',
    'Actions'
  ];
  TestSummary = new MatTableDataSource<any>(this.LOAD_DATA);
  filterSubscription: Subscription = Subscription.EMPTY;
  testApplicabilityFields: any;
  currencySymbol: any;
  isinSqFt: any = '';
  userRegion: any;
  tableName: any = '';
  selectedRegion = '';
  testSummaryDataCount: any = 0;
  lastRecordCompleted: any;
  completedCount = 0;
  ongoingCount = 0;
  draftCount = 0;
  regionNames: any = [];
  hideTestNamesColumns: boolean;
  hideTestWindowColumns: boolean;
  hideDetailsColumns: boolean;
  hideCreatedColumn: boolean;
  hideModifiedColumn: boolean;
  hideStatusColumn: boolean;
  hideActionsColumns: boolean;
  hideIcon: boolean[] = [false];
  hideTestTypeColumns: boolean;
  tempFilter: any = [];
  listItems: any = [];
  deleteDialogRef: any;
  test_Id_delete: any = '';
  test_name_delete: any = '';
  originalData: any = [];
  testImpactId: any;
  gross_sales: any;
  test_window: any;
  dialogRef: any;

  dashboard: any = 'dashboard';
  public configPerfect: PerfectScrollbarConfigInterface = {};
  columnHeader1 = {test_name: 'Test Names', test_window: 'Test Window', details: 'Details', Created: 'Created At', test_type: 'Test Type' , Modified:'Last Modified At',status:'Status',actions: 'Actions'};

  @ViewChild('content') private content: any;
  test_name: any;
  firstName: string;
  isFilter = false;
  filerApplied: any = [];

  /*-------------------------FILE UPLOAD-------------------*/
  constructor(
    private apiservice: ApicallService,
    private homeservice: TestConfigService,
    public toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectorRefs: ChangeDetectorRef,
    private commonservice: CommonService,
    private dialog: MatDialog,
    private sideNavservice: SidenavService,
    private globalEventService: GlobalEventsService
  ) {
    this.apiservice.updatedProfile();
    this.filterSubscription = this.globalEventService.subscribe('FILLTER_APPLIED', obj => {
      if (obj.module === 'FILTERED_COMPONENT' && obj.component === 'Dashboard') {
        this.formatfilteredData(obj.data);
      }
    });
  }

  ngOnInit() {
    sessionStorage.setItem('test-type', '');
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      // window.location.reload();
    } else {
      localStorage.removeItem('foo');
    }
    this.selectedRegion = sessionStorage.getItem('region');
    console.log(this.selectedRegion);
    this.user_name = localStorage.getItem('username');
    this.userRegion = sessionStorage.getItem('region');
    const firstname = this.user_name.split('.');
    this.firstName = firstname[0];
    if (localStorage.getItem('dropdown_value') !== undefined && localStorage.getItem('dropdown_value') != null && localStorage.getItem('dropdown_value') != 'null') {
      this.regionNames = JSON.parse(localStorage.getItem('dropdown_value'));
    }

    if (config[this.userRegion]) {
      console.log(config[this.userRegion]);
      this.testApplicabilityFields = config[this.userRegion].fields;
      this.currencySymbol = config[this.userRegion]['currency'];
      this.isinSqFt = config[this.userRegion]['OutletSurfaceAreaUnit'];
      this.tableName = config[this.userRegion];
    }
    // localStorage.setItem('breakenvalue',this.breakenlist)
    this.GetSavedTestdata();
    this.uncheck = false;
    const testid = localStorage.getItem('testid');
    if (sessionStorage.getItem('index') == null) {
      this.stepindex = 0;
    } else {
      const newMyObjectJSON = sessionStorage.getItem('index');
      const newMyObject = JSON.parse(newMyObjectJSON);
      this.stepindex = newMyObject.stepval;
      this.isShow = true;
      this.CompletedStep = true;
    }
    combineLatest(this.route.params, this.route.queryParams)
      .pipe(
        map(results => ({
          params: results[0],
          query: results[1]
        }))
      )
      .subscribe(results => {
        if (results) {
          if (results.query) {
            if (results.query.trial) {
              this.homeservice.LoadSavedTest(results.query.trial).subscribe((apiresponse: any) => {
                if (apiresponse.status === 'ok') {
                  const parseData = JSON.parse(apiresponse.data.records[0].record_value);
                  this.plantestdrpdown = true;
                  this.hide_back = false;
                  this.show_testplan_store = true;
                  this.testvalue = parseData.test_name;
                  this.loaddatas = true;
                }
              });
            }
          }
        }
      });
    this.getLastRecord();
  }

  ngOnDestroy(){
    if(!isNullOrUndefined(this.filterSubscription)){
      this.filterSubscription.unsubscribe();
      }
  }

  getLastRecord() {
    this.commonservice.getLastTestCompleted().subscribe((response: any) => {
      if (response.status === 'ok') {
        this.lastRecordCompleted = response.data;
      }
    });
  }

  dateConvert(time: any) {
    // console.log('Working --> ', new Date(time*1000))
    return new Date(time * 1000);
  }

  gotoaparticularstep(data: any, edit: any) {
    localStorage.setItem('stepId', '');
    console.log('data.stepper_id', data);
    this.commonservice.Get_Editvalues(data).subscribe((apiresponse: any) => {
      console.log('apiresponse.data.stepper_id', apiresponse.data);
      if (apiresponse.status === 'ok') {
        localStorage.setItem('category', apiresponse.data['category_name']);
        sessionStorage.setItem('test-type', apiresponse.data['testtype']);
        if (apiresponse.data.stepper_id < 6) {
          const stepperID = apiresponse.data.stepper_id;
          const data = apiresponse.data;
          console.log(data);
          const changedData = {
            test_name: data.test_name,
            test_type: data.testtype,
            target_variable: data.target_var,
            desc: data.test_desc,
            additional_det: data.test_desc1,
            pretest_startdt: data.pre_start,
            pretest_enddt: data.pre_end,
            testwin_startdt: data.testwin_start,
            testwin_enddt: data.testwin_end,
            stepindex: data.stepindex,
            stage_id: data.stage_id,
            test_id: data.test_id,
            banner: eval(data.banners),
            segment: eval(data.store_segment),
            territory: eval(data.territory_name),
            store_grid: eval(data.store_grid),
            category: eval(data.category_name),
            strfeature1: data.store_feature1,
            strfeature2: data.store_feature2,
            break_even_lift: data.break_even_lift,
            cost: data.cost,
            rsv_estimate: data.rsv_estimate,
            is_checkconf: data.is_checkconf,
            is_checkmarg: data.is_checkmarg,
            is_checknum: data.is_checknum,
            confidence_lvl: data.confidence_lev,
            margin_error: data.margin_oferror,
            no_of_teststores: data.no_of_teststore,
            records: data.records,
            selectTestStores: data.select_test_stores,
            is_finalize : data.is_finalize,
            control_stores: data.control_stores,
            required_control_stores: data.required_control_stores
          };
          localStorage.setItem('testid', data.test_id);
          localStorage.setItem('testidstage2', data.test_id);
          console.log(changedData);
          console.log(stepperID);
          this.commonservice.setCurrentComponentSubject(stepperID, changedData, edit, 'fromEdit');
          this.router.navigate(['./createTest']);
        } else if (apiresponse.data.stepper_id == 6) {
          localStorage.setItem('stepId', '');
          console.log(apiresponse.data.test_name);
          localStorage.setItem('testname', apiresponse.data.test_name);
          this.router.navigate(['./analyseImpact']);
        } else if (apiresponse.data.stepper_id === 7) {
          console.log(apiresponse.data.test_name);
          localStorage.setItem('testname', apiresponse.data.test_name);
          localStorage.setItem('stepId', '7');
          this.router.navigate(['./analyseImpact']);
        }
      }
    });
  }

  getAnalyseImpactButton(stepId: any) {
    if (stepId <= 5) {
      return 'button_deactivate';
    } else {
      return 'button_activate';
    }
  }

  getAICursor(stepId: any) {
    if (stepId <= 5) {
      return 'cursor_deactivate';
    } else {
      return 'cursor_activate';
    }
  }

  gotoAnalyseStep(row: any) {
    // console.log(row,"row")
    // console.log(row.stepId,"stepId")
    if (row.stepId < 5) {
      return;
    } else {
      localStorage.setItem('stepId', '');
      localStorage.setItem('testname', row.test_name);
      this.router.navigate(['./analyseImpact']);
    }
  }

  status(search_id: any) {
    const record = this.originalData.filter((x: any) => x.test_id === search_id)[0];
    const date = new Date(new Date().toDateString()).getTime();
    if (date >= new Date(record.testwin_start).getTime() &&
      date <= new Date(record.testwin_end).getTime() && record.is_finalize === false) {
      return 'Test Running';
    } else if (!(date >= new Date(record.testwin_start).getTime() &&
      date <= new Date(record.testwin_end).getTime()) && record.is_finalize === true) {
      return 'Test Analysis';
    } else if (record.is_finalize === true) {
      return 'Test Planned';
    }
    return 'Draft Saved';
  }

  addStatusInList(ary: any) {
    // Resetting the Values
    this.ongoingCount = 0;
    this.completedCount = 0;
    this.draftCount = 0;
    // end
    const date = new Date(new Date().toDateString()).getTime();
    ary.forEach((element: any) => {
      if (date >= new Date(element.testwin_start).getTime() &&
        date <= new Date(element.testwin_end).getTime() && element.is_finalize === false) {
        element.test_status = 'Test Running';
        this.ongoingCount = this.ongoingCount + 1;
      } else if (!(date >= new Date(element.testwin_start).getTime() &&
        date <= new Date(element.testwin_end).getTime()) && element.is_finalize === true) {
        element.test_status = 'Test Analysis';
        this.completedCount = this.completedCount + 1;
      } else if (element.is_finalize === true) {
        element.test_status = 'Test Planned';
        this.ongoingCount = this.ongoingCount + 1;
      } else {
        element.test_status = 'Draft Saved';
        this.draftCount = this.draftCount + 1;
      }
    });
    return ary;
  }

  /*Delete Test summary data*/
  DeleteTest() {
    console.log(this.test_name);
    const ary: any = [];
    this.homeservice.DeleteSavedData(this.test_Id_delete).subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok') {
        this.toastr.success('','Test #' + this.test_name + ' deleted Successfully!');
        this.GetSavedTestdata();
      } else {
      }
    });
  }

  hideOrShowColumns(data: any, index: any) {
    console.log('data', data, this.hideIcon[data]);
    if (this.hideIcon[data] === true) {
      this.hideIcon[data] = false;
    } else {
      this.hideIcon[data] = true;
    }
    if (data === 'test_name') {
      this.hideTestNamesColumns = !this.hideTestNamesColumns;
    } else if (data === 'test_window') {
      this.hideTestWindowColumns = !this.hideTestWindowColumns;
    } else if (data === 'details') {
      this.hideDetailsColumns = !this.hideDetailsColumns;
    } else if (data === 'Created') {
      this.hideCreatedColumn = !this.hideCreatedColumn;
    } else if (data === 'Modified') {
      this.hideModifiedColumn = !this.hideModifiedColumn;
    } else if (data === 'status') {
      this.hideStatusColumn = !this.hideStatusColumn;
    } else if (data === 'Actions') {
      this.hideActionsColumns = !this.hideActionsColumns;
    } else if (data === 'test_type') {
      this.hideTestTypeColumns = !this.hideTestTypeColumns;
    }
  }

  valueShown(data: any) {
    if (data === 'test_name') {
      return 'Test Name';
    } else if (data === 'test_window') {
      return 'Test Window';
    } else if (data === 'test_type') {
      return 'Test Type';
    } else if (data === 'details') {
      return 'Description';
    } else if (data === 'Created') {
      return 'Created At';
    } else if (data === 'Modified') {
      return 'Last Modified At';
    } else if (data === 'status') {
      return 'Status';
    } else if (data === 'Actions') {
      return 'Actions';
    }
  }

  /*Sort Data for the Saved Data*/
  sortDataLoadSavedsummary(sort: Sort) {
    console.log(this.isFilter, 'filter');
    if (!this.isFilter) {
      this.LOAD_DATA = this.filerApplied;
      this.TestSummary = new MatTableDataSource<any>(this.LOAD_DATA);
    } else {
      this.TestSummary = new MatTableDataSource<any>(this.LOAD_DATA);
    }
    const data = this.LOAD_DATA.slice();
    setTimeout(() => this.TestSummary.paginator = this.paginator);
    setTimeout(() => this.TestSummary.sort = this.sort);

    if (!sort.active || sort.direction === '') {
      this.LOAD_DATA = data;
      return;
    }
    console.log(sort.active, 'sort data');
    this.LOAD_DATA = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'status':
          return compare_loadsaved_storesummary(a.test_status, b.test_status, isAsc);
        case 'test_name':
          return compare_loadsaved_storesummary(a.test_name.toLowerCase(), b.test_name.toLowerCase(), isAsc);
        case 'details':
          return compare_loadsaved_storesummary(a.details.toLowerCase(), b.details.toLowerCase(), isAsc);
        case 'test_window':
          return sort_range_date(a.test_window, b.test_window, isAsc);
        case 'Created':
          return sort_by_date(new Date(a.Created), new Date(b.Created), isAsc);
        case 'Modified':
          return sort_by_date(new Date(a.Modified), new Date(b.Modified), isAsc);
        case 'test_type':
          return compare_loadsaved_storesummary(a.test_type.toLowerCase(), b.test_type.toLowerCase(), isAsc);
        default:
          return 0;
      }
    });
    if (!this.isFilter){
      this.filerApplied = this.LOAD_DATA;
    }
  }

  ngAfterViewInit() {
    this.TestSummary.sort = this.sort;
    this.onResize();
  }

  openDailog(templateRef: TemplateRef<any>) {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeDailog() {
    this.dialogRef.close();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.height = window.innerHeight - 64;
  }

  openDeleteDailog(templateRef: TemplateRef<any>, row: any) {
    console.log(row);
    this.deleteDialogRef = this.dialog.open(templateRef);
    this.test_Id_delete = row.test_id;
    this.test_name = row.test_name;
    this.test_name_delete = this.originalData.filter((element: any) => element.test_id == row.test_id)[0].test_name;
    // this.DeleteData()
  }

  closeDeleteDailog(event: any) {
    // this.deleteDialogRef.close();
    if (event === 1) {
      this.DeleteTest();
      this.deleteDialogRef.close();
    } else {
      this.deleteDialogRef.close();
    }

  }

  filterCall() {
    this.sideNavservice.toggleFilter('Filter');
    setTimeout(() => {
      this.globalEventService.publish('FILTER_OPEN_METHOD', {
        module: 'Dashboard',
        data: this.originalData
      });
    });
  }

  GetSavedTestdata() {
    // this.testSummaryDataCount = 0;
    this.homeservice.GetSaved_Testdata().subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok') {
        let ary: any = [];
        this.originalData = apiresponse.data;
        for (let i = 0; i < apiresponse.data.length; i++) {
          // if(apiresponse.data[i]['is_own'] == true){
          let start_Date: any;
          let end_Date: any;
          if (apiresponse.data[i]['testwin_start'] != null) {
            start_Date = new Date(apiresponse.data[i]['testwin_start']);
            start_Date = this.toYMD(start_Date);
          } else {
            start_Date = '';
          }
          if (apiresponse.data[i]['testwin_end'] != null) {
            end_Date = new Date(apiresponse.data[i]['testwin_end']);
            end_Date = this.toYMD(end_Date);
          } else {
            end_Date = '';
          }

          ary.push({
            test_id: apiresponse.data[i].test_id,
            test_name: apiresponse.data[i]['test_name'],
            test_type: apiresponse.data[i]['testtype'],
            status: this.getStatusName(apiresponse.data[i]['testwin_start'], apiresponse.data[i]['testwin_end']),
            details: apiresponse.data[i]['test_desc'],
            Created: this.format(apiresponse.data[i]['created_on']),
            is_own: apiresponse.data[i]['is_own'],
            start_date: start_Date,
            end_date: end_Date,
            test_window: start_Date + ' - ' + end_Date,
            Modified: this.format(apiresponse.data[i]['modified_on']),
            testwin_start: apiresponse.data[i].testwin_start,
            testwin_end: apiresponse.data[i].testwin_end,
            is_finalize: apiresponse.data[i].is_finalize,
            stepId: apiresponse.data[i].stepper_id,
          });
          if (apiresponse.data[i]['is_finalize'] === true) {
            let gross_sales = 0;
            if (!isNullOrUndefined(apiresponse.data[i].test_control_change)) {
              gross_sales = apiresponse.data[i].test_control_change;
              this.listItems.push({
                test_id: apiresponse.data[i].test_id,
                test_name: apiresponse.data[i]['test_name'],
                gross_sales,
                test_window: start_Date + ' - ' + end_Date
              });
            }
          }
          // }
        }
        ary = this.addStatusInList(ary);
        this.testSummaryDataCount = ary.length;
        this.LOAD_DATA = ary;
        this.filerApplied = ary;
        this.TestSummary = new MatTableDataSource(this.LOAD_DATA);
        setTimeout(() => this.TestSummary.paginator = this.paginator);
        setTimeout(() => this.TestSummary.sort = this.sort);
        this.changeDetectorRefs.detectChanges();
        if (this.listItems.length > 0) {
          this.gross_sales = this.listItems[0].gross_sales;
          this.testImpactId = this.listItems[0].test_name;
          this.test_window = this.listItems[0].test_window;
        }
      }
    });
  }

  historyCall(test_id: any) {
    this.sideNavservice.toggleFilter('History');
    setTimeout(() => {
      this.globalEventService.publish('history_id', test_id);
    });
  }

  getColor(id: any) {
    const value = this.status(id);
    if (value === 'Draft Saved') {
      return 'status_purple';
    } else if (value === 'Test Running' || value === 'Test Analysis' || value === 'Test Planned') {
      return 'status_yellow';
    }
  }

  // filter Apply based on the filter selected
  formatfilteredData(dataValue: any) {
    const data = [];
    const tempData = this.filerApplied;
    this.filterApply(dataValue, tempData);
  }

  filterApply(dataValue: any, tempData: any) {
    this.TestSummary = new MatTableDataSource<any>(this.filerApplied);
    const keyValues: any = [];
    const valuesArray: any = [];
    for (let i = 0; i < dataValue.length; i++) {
      keyValues.push(dataValue[i]['name']);
      for (let j = 0; j < dataValue[i]['data'].length; j++) {
        console.log(dataValue[i], dataValue[i]['data'][j]);
        valuesArray.push(dataValue[i]['data'][j]);
      }
    }
    console.log(keyValues, 'keyvalues', valuesArray);
    const result = tempData.filter((e: any) =>
          keyValues.every((a: any) =>
          !valuesArray.includes(e[a])));
    tempData = result;
    console.log(result, 'tempDatavalue filter');
    if (valuesArray.length > 0) {
    this.LOAD_DATA = tempData;
    this.testSummaryDataCount = tempData.length;
    this.TestSummary = new MatTableDataSource<any>(tempData);
    this.isFilter = true;
    } else{
      this.LOAD_DATA = this.filerApplied;
      this.testSummaryDataCount = this.filerApplied.length;
      this.TestSummary = new MatTableDataSource<any>(this.filerApplied);
      this.isFilter = false;
    }
    setTimeout(() => this.TestSummary.paginator = this.paginator);
  }

  FilterLoadSavedTestsummary(event: string) {
    const val = event.toLowerCase();
    this.tempFilter = this.LOAD_DATA;
    const temp = this.tempFilter.filter((d: any) => (
      d.test_name
        .toString()
        .toLowerCase()
        .indexOf(val) !== -1 ||
      d.status
        .toString()
        .toLowerCase()
        .indexOf(val) !== -1 ||
      d.details
        .toString()
        .toLowerCase()
        .indexOf(val) !== -1 ||
      d.test_type
        .toString()
        .toLowerCase()
        .indexOf(val) !== -1 ||
      d.test_window
        .toString()
        .toLowerCase()
        .indexOf(val) !== -1 ||
      d.Created.toString()
        .toLowerCase()
        .indexOf(val) !== -1 ||
      d.Modified.toString()
        .toLowerCase()
        .indexOf(val) !== -1 ||
      !val
    ));
    if (this.tempFilter.length > 0) {
      this.testSummaryDataCount = temp.length;
      this.TestSummary = new MatTableDataSource<any>(temp);
      setTimeout(() => this.TestSummary.paginator = this.paginator);
      setTimeout(() => this.TestSummary.sort = this.sort);
    } else {
      this.LOAD_DATA = this.LOAD_DATA;
      this.testSummaryDataCount = this.LOAD_DATA.length;
      this.TestSummary = new MatTableDataSource<any>(this.LOAD_DATA);
      setTimeout(() => this.TestSummary.paginator = this.paginator);
      setTimeout(() => this.TestSummary.sort = this.sort);
    }
  }

  getStatusName(startDate: any, endDate: any) {
    if (
      startDate != null &&
      startDate !== '' &&
      startDate !== undefined &&
      endDate != null &&
      endDate !== '' &&
      endDate !== undefined
    ) {
      const now = new Date();
      if (now > new Date(startDate) && now < new Date(endDate)) {
        return 'In progress';
      }
      if (new Date(endDate) <= now) {
        return 'Measurement phase';
      }
      if (new Date(startDate) >= now) {
        return 'Planning phase';
      }
    } else {
      return '-';
    }
  }

  format(date: any) {
    if (date !== 0 && date != null && date !== undefined) {
      const dd = moment(date * 1000).format('DD, MMM YYYY');
      const time = moment(date * 1000).format('hh:mm A');
      // return dd + ' ' + time;
      return dd;
    } else {
      return '-';
    }
  }

  toYMD(date: Date) {
    return moment(date).format('DD, MMM YYYY');
  }

  getGrossSales(data: any) {
    const index = this.listItems.findIndex((x: any) => x.test_id === data);
    if (index !== -1) {
      this.testImpactId = this.listItems[index].test_name;
      this.gross_sales = this.listItems[index].gross_sales;
      this.test_window = this.listItems[index].test_window;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumnsLoadSaved, event.previousIndex, event.currentIndex);
  }

  receivedData(testId: any, action: any) {
    console.log(testId);
    console.log(action);
    if (action === 'edit') {
      this.gotoaparticularstep(testId, 'edit');
    } else if (action === 'history') {
      this.historyCall(testId);
    }
  }

  deleteData(row: any) {
  this.openDeleteDailog(this.deleteDlg, row);

}
}

/*Sort functions*/
function compare_loadsaved_storesummary(a: string, b: string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function sort_by_date(a: Date, b: Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function sort_range_date(a: any, b: any, isAsc: boolean) {
  let aSplit =[];
  let bSplit = [];
  aSplit = a.split('-');
  bSplit = b.split('-');
  const aStart = new Date(aSplit[0]);
  const bStart =new Date( bSplit[0]);
  const aEnd = new Date(aSplit[1]);
  const bEnd = new Date(bSplit[1]);
  console.log(aEnd, bEnd, 'DateFormat');
  return (aStart < bStart  ? -1 : 1) * (isAsc ? 1 : -1);
}

