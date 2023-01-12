import {SelectionModel} from '@angular/cdk/collections';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit,
  TemplateRef
} from '@angular/core';
import {GlobalEventsService} from '@app/shared/services/global-events.service';
import {Subscription} from 'rxjs';
const config = require('../../../assets/region/config-fields.json');
import {MatTableDataSource} from '@angular/material/table';
import {Sort} from '@angular/material/sort';
import {ToastrService} from 'ngx-toastr';
import * as moment from 'moment';
import {CommonService} from '@app/shared/services/common.service';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {SidenavService} from '@app/shared/services/sidenav.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
HC_exporting(Highcharts);
declare let require: any;
const noData = require('highcharts/modules/no-data-to-display');
noData(Highcharts);
const More = require('highcharts/highcharts-more');
import {isNullOrUndefined} from 'util';
import {TestMeasureService} from '@app/shared/services/testmeasure.service';
import {ControlStoreService} from '@app/shared/services/controlstore.service';
import { TestConfigService } from '@app/shared/services/testconfig.service';

interface ControlStore {
  test_storeno: any;
  control_mapped: any;
  test_storedetails: any;
  select: any;
  similar_value: any;
  corr_value: any;
  store_segment: any;
  avg_duration: any;
  act_perform: any;
  others: any;
}

interface SelectTest {
  test_name: string;
  status: string;
  details: string;
  test_window: string;
  Created: string;
  Modified: string;
}

export interface AdvSettingvalues {
  TestStore: any;
}

@Component({
  selector: 'app-control-store-mapping',
  templateUrl: './control-store-mapping.component.html',
  styleUrls: ['./control-store-mapping.component.scss']
})
export class ControlStoreMappingComponent implements OnInit, OnDestroy, AfterViewInit {
  defaultChecked = '1';
  selectedFeaturescount = 0;
  testApplicabilityFields: any;
  userRegion: any = '';
  matchingCriteria: any = [];
  targetVariableValue = 'RSV';
  control_pertest = 1;
  @Output('moveNextStep') moveNextStep = new EventEmitter();
  @Output() tipsData: EventEmitter<any> = new EventEmitter<any>();
  showControlStores = false;
  controlStoreView = false;
  generateSubscrption: Subscription = Subscription.EMPTY;
  controlstoredata: any = [];
  SelectedTestStores: any = [];
  selectedBanner: any = [];
  selectedSegments: any = [];
  selectedStoreSegment: any = [];
  selectedTerritory: any = [];
  selectedCategory: any = [];
  ELEMENT_DATA1: any = [];
  ControlStoreTable = new MatTableDataSource<any>(this.ELEMENT_DATA1);
  testStoreDataCount: any = 0;
  selection1 = new SelectionModel<ControlStore>(true, []);
  selselection = new SelectionModel<SelectTest>(true, []);
  selection = new SelectionModel<AdvSettingvalues>(true, []);
  uncheckedItems: any = [];
  freeze_compute = false;
  data: any;
  ELEMENT_DATA2: any = [];
  testAvailabilityDataCount: any = 0;
  SelectTestTable: MatTableDataSource<any>;
  currentComponent: any;
  displayedColumnsControlStore: string[] = [
    'select',
    'test_storeno',
    'control_mapped',
    'test_storedetails',
    'similar_value',
    'corr_value',
    'store_segment',
    'correlation',
    // 'avg_duration',
    // 'act_perform',
    'others'
  ];
  displayedColumnsControlStoreDEMO: string[] = [
    'select',
    'test_storeno',
    'control_mapped',
    // 'test_storedetails',
    'similar_value',
    'corr_value',
    // 'store_segment',
    'correlation',
    // 'avg_duration',
    // 'act_perform',
    'others'
  ];
  confGrid: string[] = [
    'select',
    'test_storeno',
    'control_mapped',
    'test_storedetails',
    'similar_value',
    'corr_value',
    'store_segment',
    'correlation',
    // 'avg_duration',
    // 'act_perform',
    'others'
  ];
  displayedColumnsTestStore: string[] = [
    'select',
    'test_name',
    // 'status',
    'details',
    'test_window',
    'Created',
    'Modified'
  ];
  tableName: any = '';
  isTableData: any = false;

  csv_pop: any;
  csv_popstd: any;
  csv_poptestmean: any;
  csv_testdev: any;
  influence_pop: any;
  influence_popstd: any;
  influence_poptestmean: any;
  influence_testdev: any;
  out_pop: any;
  out_popstd: any;
  out_poptestmean: any;
  out_testdev: any;
  shelf_cat_pop: any;
  shelf_cat_popstd: any;
  shelf_cat_poptestmean: any;
  shelf_cat_testdev: any;
  shelf_choc_pop: any;
  shelf_choc_popstd: any;
  shelf_choc_poptestmean: any;
  shelf_choc_testdev: any;
  shelf_dog_poptestmean: any = '';
  shelf_dog_pop: any = '';
  shelf_dog_popstd: any = '';
  shelf_dog_testdev: any = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  breakeven_list: any = 0;
  isDateValid = true;
  recomputeSubscription: Subscription = Subscription.EMPTY;
  initiateSubscription: Subscription = Subscription.EMPTY;
  comprasionSubscription: Subscription = Subscription.EMPTY;
  saveasDraft = false;
  avg_test_control: any;
  sales_test_control: any;
  seriesData: any = [];
  categories: any = [];
  testId: any;
  tempFilter: any;
  currencySymbol: any;
  isinSqFt: any = '';
  uploadMessage = '';
  uploadedData: any = [];
  uploaded = false;
  uploadSelectedTestStores: any = [];
  columnHeader1: {};
  columnHeaderDEMO: {};
  dialogRef: any;
  hideIcon: boolean[] = [false];
  hideOthersColumns: boolean;
  hideCorrelationColumns: boolean;
  hideStoreSegmentColumns: boolean;
  hideCorrValueColumn: boolean;
  hideSimilarValueColumn: boolean;
  hideTestStoreDetailsColumn: boolean;
  hideControlMappedColumns: boolean;
  hideTestStorenoColumns: boolean;
  hideSelectColumns: boolean;
  control: any = 'control';
  tempsortDirection = '';
  isRTMImpactTest = false;
  uploadedControl = false;
  controlStorePoolData: any = [];
  uploadeControlData: any;
  uploadMessageControl = '';
  controlStoreMessage: string;
  statusFail = false;
  statusFailPool = false;
  searchFilter = false;
  drop(event: CdkDragDrop<string[]>) {
    console.log('drop event fired');
    moveItemInArray(this.displayedColumnsControlStore, event.previousIndex, event.currentIndex);
  }

  constructor(public globalService: GlobalEventsService,
              private wizard2service: ControlStoreService,
              private ref: ChangeDetectorRef,
              private toastr: ToastrService,
              private commonservice: CommonService,
              private testMeasureService: TestMeasureService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    if(sessionStorage.getItem('test-type') === 'RTM Impact Test'){
      this.controlStoreMessage = 'Note: Each test store will be mapped to mutiple control stores based on the input provided in this field.';
    }else{
      this.controlStoreMessage = 'Note: Each test store will only be mapped to one control store. Control store aggregation not available for this test.';
    }


    const componentDetails = this.commonservice.getCurrentComponentSubject();
    this.currentComponent = componentDetails.currentComponent;
    this.data = componentDetails.data;
    console.log(componentDetails.currentComponent, this.data, 'control store component');
    if (!isNullOrUndefined(this.data.is_finalize) && this.data.is_finalize){
      localStorage.setItem('testname', this.data.test_name);
      this.router.navigate(['./analyseImpact']);
      return;
    }
    console.log(this.data['control_stores']);
    if (this.data.hasOwnProperty('control_stores') && !isNullOrUndefined(this.data['control_stores'])) {
      this.defaultChecked = this.data['control_stores'];
      this.control_pertest = this.data['required_control_stores'];
    }
    sessionStorage.setItem('control_feature', this.defaultChecked);
    if (componentDetails.currentComponent === 5) {
      const tips = ['Significance level indicates how significant a feature/variable is [0-100%]. Higher value indicates higher significance'];
      this.tipstoParent(tips);
      this.showControlStores = true;
      this.identifyControlStores();
      this.globalService.publish('SHOW_RECOMPUTE_BUTTON', {
        module: 'CREATE_TEST',
        show: true
      });

      this.globalService.publish('SHOW_HIDE_INITIATE_BUTTON', {
        module: 'CONTROL_STORES_SUMMARY',
        enable: true
      });
    }
    this.testId = localStorage.getItem('testid');
    if (this.data === undefined || this.data === 'undefined') {
      const test_id = localStorage.getItem('testid');
      this.wizard2service.GetSelectedStores(test_id).subscribe((apiresponse: any) => {
        this.targetVariableValue = apiresponse.data.target_var;
        const data = [];
        this.selectedBanner = apiresponse.data.banners.replace(/'/g, '');
        this.selectedBanner = this.selectedBanner.substring(1, this.selectedBanner.length - 1);
        this.selectedBanner = this.selectedBanner.split(',');
        for (let i = 0; i < this.selectedBanner.length; i++) {
          this.selectedBanner[i] = this.selectedBanner[i].trim();
        }
        this.selectedSegments = apiresponse.data.store_grid.replace(/'/g, '');
        this.selectedSegments = this.selectedSegments.substring(1, this.selectedSegments.length - 1);
        this.selectedSegments = this.selectedSegments.split(',');
        for (let i = 0; i < this.selectedSegments.length; i++) {
          this.selectedSegments[i] = this.selectedSegments[i].trim();
        }

        this.selectedStoreSegment = apiresponse.data.store_segment.replace(/'/g, '');
        this.selectedStoreSegment = this.selectedStoreSegment.substring(1, this.selectedStoreSegment.length - 1);
        this.selectedStoreSegment = this.selectedStoreSegment.split(',');
        for (let i = 0; i < this.selectedStoreSegment.length; i++) {
          this.selectedStoreSegment[i] = this.selectedStoreSegment[i].trim();
        }

        this.selectedTerritory = apiresponse.data.territory_name.replace(/'/g, '');
        this.selectedTerritory = this.selectedTerritory.substring(1, this.selectedTerritory.length - 1);
        this.selectedTerritory = this.selectedTerritory.split(',');
        for (let i = 0; i < this.selectedTerritory.length; i++) {
          this.selectedTerritory[i] = this.selectedTerritory[i].trim();
        }

        this.selectedCategory = apiresponse.data.category_name.replace(/'/g, '');
        this.selectedCategory = this.selectedCategory.substring(1, this.selectedCategory.length - 1);
        this.selectedCategory = this.selectedCategory.split(',');
        for (let i = 0; i < this.selectedCategory.length; i++) {
          if (this.selectedCategory[i] !== '') {
            this.selectedCategory[i] = this.selectedCategory[i].trim();
          } else {
            this.selectedCategory.splice(i, 1);
          }
        }
        console.log(this.selectedCategory, 'selected Category');
        this.freeze_compute = apiresponse.data['freeze_compute'];
      });
    } else {
      this.selectedBanner = this.data.banner;
      this.selectedSegments = this.data.store_grid;
      this.selectedStoreSegment = this.data.segment;
      this.selectedTerritory = this.data.territory;
      this.selectedCategory = this.data.category;
      if(this.data.test_type === 'RTM Impact Test') {
        this.isRTMImpactTest = true;
      }
    }
    this.userRegion = sessionStorage.getItem('region');
    this.testApplicabilityFields = config[this.userRegion].fields;
    this.tableName = config[this.userRegion];
    this.columnHeader1 = {
      select_csm: 'Select',
      test_storeno: this.tableName.test_store_id,
      control_mapped: this.testApplicabilityFields[0].banner,
      test_storedetails: this.testApplicabilityFields[1].segment,
      similar_value: this.tableName.control_store_id,
      corr_value: this.testApplicabilityFields[0].banner,
      store_segment: this.testApplicabilityFields[1].segment,
      correlation: 'Sales Correlation',
      others: 'Similarity Value'
    };
    this.columnHeaderDEMO = {
      select_csm: 'Select',
      test_storeno: this.tableName.test_store_id,
      control_mapped: this.testApplicabilityFields[0].banner,
      similar_value: this.tableName.control_store_id,
      corr_value: this.testApplicabilityFields[0].banner,
      correlation: 'Sales Correlation',
      others: 'Similarity Value'
    };
    if (this.data.test_type === 'RTM Impact Test') {
      delete this.columnHeaderDEMO['select_csm'];
    };
    this.currencySymbol = config[this.userRegion]['currency'];
    this.isinSqFt = config[this.userRegion]['OutletSurfaceAreaUnit'];
    console.log(this.tableName, 'TableName changes ');
    this.selectedMatchingCriteria();
    this.eanbleGenerate();
    this.generateSubscrption = this.globalService.subscribe('SHOW_CONTROL_STORES', obj => {
      if (obj.module === 'CREATE_TEST') {
        if (obj.enable) {
          const tips = ['Significance level indicates how significant a feature/variable is [0-100%]. Higher value indicates higher significance'];
          this.tipstoParent(tips);
        }
        if (obj.method === 'SUGGESTED_BY_TOOL') {
          this.showControlStores = obj.enable;
          this.controlStoreView = false;
          this.identifyControlStores();
        } else {
          let uploadedData;
          const checkedData = sessionStorage.getItem('control_feature');
          if(checkedData === '2') {
            uploadedData = this.uploadedData;
          } else if(checkedData === '3'){
            uploadedData = this.uploadeControlData;
          }
          if (uploadedData.length > 0) {
            this.showControlStores = obj.enable;
            this.controlStoreView = false;
            this.tableConstructControl(uploadedData, sessionStorage.getItem('region'));
          } else {
             this.toastr.warning('There is no Data to generate control stores');
          }
        }
      }
    });
    let hideRecompute = false;
    this.comprasionSubscription = this.globalService.subscribe('CONTROL_STORES_VIEW', obj => {
      if (obj.module === 'CREATE_TEST') {
        if (obj.view === 'Control_Store') {
          this.controlStoreView = false;
          hideRecompute = !this.controlStoreView;
        } else {
          this.controlStoreView = true;
          hideRecompute = !this.controlStoreView;
          // localStorage.setItem('saveOneTime')
          this.saveControlStore(this.currentComponent, false);
          this.test_analysis_result(false);
        }
        const tips = ['Significance level indicates how significant a feature/variable is [0-100%]. Higher value indicates higher significance'];
        this.tipstoParent(tips);
        this.showControlStores = true;
        this.globalService.publish('SHOW_RECOMPUTE_BUTTON', {
          module: 'CREATE_TEST',
          show: hideRecompute
        });
        console.log(this.controlStoreView, 'controlstore');
      }
    });
    this.globalService.publish('ERROR_VALIDATION', {
      valid: true
    });
    this.ControlStoreTable.paginator = this.paginator;
    console.log(this.ControlStoreTable.paginator, 'check pagination');
    this.recomputeSubscription = this.globalService.subscribe('CALL_RECOMPUTE_METHOD', obj => {
      if (obj.module === 'CREATE_TEST') {
        this.Recompute();
      }
    });
    this.globalService.subscribe('HIDE_CONTROL_STORES', obj => {
      if (obj.module === 'CREATE_TEST') {
        if (obj.enable) {
          const tips = ['Significance level indicates how significant a feature/variable is [0-100%]. Higher value indicates higher significance'];
          this.tipstoParent(tips);
        }
        this.showControlStores = obj.enable;
        this.globalService.publish('SHOW_RECOMPUTE_BUTTON', {
          module: 'CREATE_TEST',
          show: false,
          initiateButton: false
        });
      }
    });
    this.initiateSubscription = this.globalService.subscribe('MOVE_NEXT_CONTROL_STORES', obj => {
      console.log(obj.currentComponent, 'currentComponent');
      if (obj.module === 'CREATE_TEST' && (obj.currentComponent === 3 || obj.currentComponent === 4)) {
        //this.validateDropDowns();
        this.saveasDraft = obj.saveDraft;
        if (!this.saveasDraft) {
          this.test_analysis_result(obj.initate);
        }
        this.saveControlStore(obj.currentComponent, true);
      }
    });
    if (this.userRegion === 'DEMO') {
      this.displayedColumnsControlStore = this.displayedColumnsControlStoreDEMO;
      this.columnHeader1 = this.columnHeaderDEMO;
    }
  }

  ngAfterViewInit() {
    this.ControlStoreTable.paginator = this.paginator;
    const tips = ['The user can either choose the option for the tool to recommend the control stores based on the matching features or can manually upload the test-control stores in the provided excel template or can manually upload just the control store pool in the provided excel template.','Note: For RTM Impact Test, Control Stores will be only from store population with Customer Status	"Holdout Store" or "Not on call Cycle" unless the user upload control store pool.', 'The user can also select the number of control stores that he wants the tool to suggest for each test store', 'A higher sales correlation between a test store and a control store indicates a strong relationship between the weekly sales', 'Similarity measure between a test store and a control store indicates how well a test store resembles the control store'];
    setTimeout(() => {
this.tipstoParent(tips);
});
  }

  tipstoParent(data: any) {
    console.log(data, 'data');
    this.tipsData.emit(data);
  }

  selectedMatchingCriteria() {
    const netherLandData = ['Customer Group', 'Territory', 'Touchability Score'];
    this.matchingCriteria = netherLandData;
    this.selectedFeaturescount = this.matchingCriteria.length;
  }

  identifyControlStores() {
    const test_id = [];
    test_id.push(localStorage.getItem('testid'));
    this.wizard2service.GetStores_list(test_id).subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok' && apiresponse.data !== '') {
        for (var i = apiresponse.data.length - 1; i >= 0; i--) {
          let record_date: any;
          if (apiresponse.data[i].records.length === 1) {
            record_date = JSON.parse(apiresponse.data[i].records[0].record_value);
          } else {
            for (let j = 0; j < apiresponse.data[i].records.length; j++) {
              if (apiresponse.data[i].records[j].stage_id === 1) {
                record_date = JSON.parse(apiresponse.data[i].records[j].record_value);
              }
            }
          }
          const temp: any = [];
          this.SelectedTestStores = [];
          console.log(record_date);
          for (var i = record_date['selectedteststore'].length - 1; i >= 0; i--) {
            this.SelectedTestStores.push(record_date['selectedteststore'][i]);
          }
        }
        let target_variable = localStorage.getItem('targetvariable');
        if (isNullOrUndefined(target_variable)) {
          target_variable = this.data.target_variable;
        }
        const data = {
          teststores: this.SelectedTestStores,
          target_variable,
          test_id: localStorage.getItem('testid'),
          banners: this.selectedBanner,
          segments: this.selectedSegments,
          store_segments: this.selectedStoreSegment,
          territories: this.selectedTerritory,
          categories: this.selectedCategory,
          reqcontrolstores: this.control_pertest,
          prewindow_start: this.data.pretest_startdt,
          prewindow_end: this.data.pretest_enddt,
          postwindow_start: this.data.testwin_startdt,
          postwindow_end: this.data.testwin_enddt,
          test_type: this.data.test_type
        };

        if (this.defaultChecked === '3') {
          data['control_store_pool'] = this.controlStorePoolData;
        } else {
          data['control_store_pool'] = [];
        }
        let containSavedData: any = false;
        if (apiresponse.data.length === 1) {
          if (apiresponse.data[0].records.length > 1) {
            for (let j = 0; j < apiresponse.data[0].records.length; j++) {
              if (apiresponse.data[0].records[j].stage_id === 2) {
                if (apiresponse.data[0].records[j].stepindex === 5) {
                  containSavedData = true;
                }
              }
            }
          }
        }
        console.log(data, 'Data values');
        if (containSavedData === false) {
          this.wizard2service.Identifyctrlstore(data).subscribe((apiresponse: any) => {
            this.statusFailPool = false;
            if (apiresponse.status === 'ok') {
              if (this.defaultChecked === '3') {
                if (apiresponse.data.hasOwnProperty('finalcontrol_stores')){
                  this.uploadeControlData = apiresponse.data.finalcontrol_stores;
                  this.uploadMessageControl = apiresponse.data.message;
                  this.uploadedControl = true;
                  this.eanbleGenerate();
                } else if (apiresponse.data.includes
                  ('No valid control stores satisfying the criteria to proceed further')) {
                    this.toastr.warning(apiresponse.data);
                }
              } else {
                this.uploadedControl = false;
                this.tableConstructControl(apiresponse.data, sessionStorage.getItem('region'));
              }
            } else if (apiresponse.data.includes
              ('No valid control stores satisfying the criteria to proceed further')) {
              if(this.defaultChecked === '3') {
                this.uploadMessageControl = apiresponse.data;
                this.statusFailPool = true;
              } else {
                this.toastr.warning(apiresponse.data);
              }
            }
          });
        } else {
        }
      }
    });
  }

  test_analysis_result(initate: boolean) {
    let breakEvenlift;
    const preperiod_start: any = this.data.pretest_startdt;
    const preperiod_end: any = this.data.pretest_enddt;
    const postperiod_start: any = this.data.testwin_startdt;
    const postperiod_end: any = this.data.testwin_enddt;
    if (this.data.test_type !== 'RTM Impact Test'){
      this.breakeven_list = this.data.break_even_lift;
      breakEvenlift = JSON.stringify(JSON.parse(this.breakeven_list));
    } else {
      breakEvenlift = 0;
    };
    const selectedTargetVariable = this.data.target_variable;
    const test_id = this.data.test_id;
    const data: any = {
      test_id,
      preperiod_start,
      preperiod_end,
      postperiod_start,
      postperiod_end,
      mesmetric_name: selectedTargetVariable,
      break_even_lift: breakEvenlift,
    };
    this.testMeasureService.controlStoreMeasurementpost(data).subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok') {
        if (!initate && this.showControlStores) {
          setTimeout(() => {
            this.Validate();
          }, 100);
      }
      } else if (apiresponse.status === 'not_ok') {

      }
    });
  }

  sortprogramatic() {
    let srt: any;
    let showInitiate = false;
    let direction: any;
    if(this.tempsortDirection != ''){
      direction = this.tempsortDirection;
    }else{
      direction = 'asc';
    }
    srt = {
      active: 'test_storeno',
      direction
    };
    console.log(srt, 'calling sort method');
    this.sortDatacontrolStore(srt);
    this.ControlStoreTable = new MatTableDataSource<any>(this.ELEMENT_DATA1);
    this.ref.detectChanges();
    this.ControlStoreTable.paginator = this.paginator;
    if (this.ELEMENT_DATA1.length > 0) {
      this.globalService.publish('SHOW_RECOMPUTE_BUTTON', {
        module: 'CREATE_TEST',
        show: true
      });
      showInitiate = true;
    }
    this.globalService.publish('SHOW_HIDE_INITIATE_BUTTON', {
      module: 'CONTROL_STORES_SUMMARY',
      enable: showInitiate
    });
  }

  hideOrShowColumns(data: any, index: any) {
    console.log('data', data, this.hideIcon[data]);
    if (this.hideIcon[data] === true) {
      this.hideIcon[data] = false;
    } else {
      this.hideIcon[data] = true;
    }
    if (data === 'select') {
      this.hideSelectColumns = !this.hideSelectColumns;
    } else if (data === 'test_storeno') {
      this.hideTestStorenoColumns = !this.hideTestStorenoColumns;
    } else if (data === 'control_mapped') {
      this.hideControlMappedColumns = !this.hideControlMappedColumns;
    } else if (data === 'test_storedetails') {
      this.hideTestStoreDetailsColumn = !this.hideTestStoreDetailsColumn;
    } else if (data === 'similar_value') {
      this.hideSimilarValueColumn = !this.hideSimilarValueColumn;
    } else if (data === 'corr_value') {
      this.hideCorrValueColumn = !this.hideCorrValueColumn;
    } else if (data === 'store_segment') {
      this.hideStoreSegmentColumns = !this.hideStoreSegmentColumns;
    } else if (data === 'correlation') {
      this.hideCorrelationColumns = !this.hideCorrelationColumns;
    } else if (data === 'others') {
      this.hideOthersColumns = !this.hideOthersColumns;
    }
  }

  valueShown(data: any) {
    if (data === 'select') {
      return 'Select';
    } else if (data === 'test_storeno') {
      return this.tableName.test_store_id;
    } else if (data === 'control_mapped') {
      return this.testApplicabilityFields[0].banner;
    } else if (data === 'test_storedetails') {
      return this.testApplicabilityFields[1].segment;
    } else if (data === 'similar_value') {
      return this.tableName.control_store_id;
    } else if (data === 'corr_value') {
      return this.testApplicabilityFields[0].banner;
    } else if (data === 'store_segment') {
      return this.testApplicabilityFields[1].segment;
    } else if (data === 'correlation') {
      return 'Sales Correlation';
    } else if (data === 'others') {
      return 'Similarity Value';
    }
  }


  sortDatacontrolStore(sort: Sort) {
    let data;
    if (!this.searchFilter){
      data =  this.ELEMENT_DATA1.slice();
    } else {
      data = this.ControlStoreTable.data.slice();
    }
    this.ControlStoreTable = new MatTableDataSource<any>(data);
    this.ControlStoreTable.paginator = this.paginator;

    if (!sort.active || sort.direction === '') {
      this.ELEMENT_DATA1 = data;
      return;
    }

    this.tempsortDirection = sort.direction;

    const sortData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'test_storeno':
          return compare_seletedstore(a.test_storeno, b.test_storeno, isAsc);
        case 'control_mapped':
          return compare_seletedstore(a.control_mapped, b.control_mapped, isAsc);
        case 'test_storedetails':
          return compare_seletedstore(a.test_storedetails, b.test_storedetails, isAsc);
        case 'similar_value':
          return compare_seletedstore(a.similar_value, b.similar_value, isAsc);
        case 'corr_value':
          return compare_seletedstore(a.corr_value, b.corr_value, isAsc);
        case 'store_segment':
          return compare_seletedstore(a.store_segment, b.store_segment, isAsc);
        case 'others':
          return compare_seletedstore(a.others, b.others, isAsc);
        default:
          return 0;
      }
    });
    let filterData;
    if (this.searchFilter) {
      filterData = sortData;
    } else {
      filterData = sortData;
      this.ELEMENT_DATA1 = sortData;
    }
    this.ControlStoreTable = new MatTableDataSource<any>(filterData);
    // this.ControlStoreTable.paginator = this.paginator;
  }

  Recompute() {
    this.recomputeSubscription = Subscription.EMPTY;
    this.uncheckedItems = [];
    const mystres = this.selection1.selected;
    console.log('selected items', mystres);

    const temp_array = [];
    for (var i = 0; i <= mystres.length - 1; i++) {
      temp_array.push(mystres[i]['test_storeno']);
    }

    const tempPartIdArr: any = [];
    for (var i = 0; i <= mystres.length - 1; i++) {
      tempPartIdArr.push(mystres[i]['similar_value']);
    }

    if (this.controlstoredata.length === mystres.length) {
      this.toastr.warning('Please unselect the control store to recompute');
      return;
    } else {

      const uniqueIDList1: any = [];

      temp_array.forEach((element: any) => {
        if (!uniqueIDList1.includes(element)) {
          uniqueIDList1.push(element);
        }
      });

      const storeIdFrmControlData: any = [];

      for (let a = 0; a < this.controlstoredata.length; a++) {
        storeIdFrmControlData.push(this.controlstoredata[a]['Test_store_' + this.tableName['partner_id']]);
      }

      const counts = {};

      for (var i = 0; i < storeIdFrmControlData.length; i++) {
        const num = storeIdFrmControlData[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }

      const counts1 = {};

      for (var i = 0; i < temp_array.length; i++) {
        const num1 = temp_array[i];
        counts1[num1] = counts1[num1] ? counts1[num1] + 1 : 1;
      }

      for (let c = 0; c < uniqueIDList1.length; c++) {
        const value: any = uniqueIDList1[c];
        if (counts[value] > 1) {
          if (counts1[value] != 1) {
            this.toastr.warning('Please unselect the control store to recompute');
            return;
          }
        }
      }
      const showtoaster = this.getRecomputemessage(counts, counts1);
      if (showtoaster) {
        this.toastr.warning('Please unselect the control store to recompute');
        return;
      }
    }
    const newarr = [];
    const temp_checked: any = [];
    const temp_data: any = [];
    for (let k = 0; k < mystres.length; k++) {
      const data: any = {
        test_store_id: mystres[k]['test_storeno'],
        control_str_id: mystres[k]['similar_value']
      };
      temp_data.push(data);
    }
    if (temp_data.length > 0) {
      for (var i = 0; i < this.controlstoredata.length; i++) {
        let isAvail: any = false;
        let arrayValue = [];
        arrayValue = temp_data.filter((x: any) => x.test_store_id === this.controlstoredata[i]['Test_store_' + this.tableName['partner_id']]
          && x.control_str_id === this.controlstoredata[i][this.tableName['partner_id']]);
        if (arrayValue.length > 0) {
          isAvail = true;
        }
        if (isAvail === true) {
          this.controlstoredata[i].Checked_Flag = 1;
        } else {
          this.controlstoredata[i].Checked_Flag = 0;
          this.uncheckedItems.push(this.controlstoredata[i]);
        }
      }
    } else {
      for (var i = 0; i < this.controlstoredata.length; i++) {
        if (this.controlstoredata[i].Checked_Flag === 1) {
          this.controlstoredata[i].Checked_Flag = 0;
          this.uncheckedItems.push(this.controlstoredata[i]);
        } else {
          this.uncheckedItems.push(this.controlstoredata[i]);
        }
      }
    }
    let target_variable = localStorage.getItem('targetvariable');
    if (isNullOrUndefined(target_variable)) {
      target_variable = this.data.target_variable;
    }
    const data = {
      teststores: this.controlstoredata,
      target_variable,
      banners: this.selectedBanner,
      segments: this.selectedSegments,
      store_segments: this.selectedStoreSegment,
      territories: this.selectedTerritory,
      reqcontrolstores: this.control_pertest,
      prewindow_start: this.data.pretest_startdt,
      prewindow_end: this.data.pretest_enddt,
      postwindow_start: this.data.testwin_startdt,
      postwindow_end: this.data.testwin_enddt
    };
    if (this.uncheckedItems.length > 0) {
      this.wizard2service.Recompute(data).subscribe((apiresponse: any) => {
        if (apiresponse.status === 'ok') {
          const recomputeResponse: any = JSON.parse(apiresponse.data);
          for (let y = 0; y < recomputeResponse.length; y++) {
            delete recomputeResponse[y].level_0;
          }
          this.controlstoredata = recomputeResponse;
          const controlstore: any = [];
          for (var i = 0; i <= this.controlstoredata.length - 1; i++) {
            this.controlstoredata[i][this.tableName['partner_id']] = parseInt(this.controlstoredata[i][this.tableName['partner_id']]);
            controlstore.push({
              test_storeno: this.controlstoredata[i]['Test_store_' + this.tableName['partner_id']],
              test_storedetails: this.controlstoredata[i]['Test_store_' + this.tableName['segment']],
              control_mapped: this.controlstoredata[i]['Test_store_' + this.tableName['banner']],
              select: this.controlstoredata[i]['Test_store_' + this.tableName['partner_id_name']],
              similar_value: this.controlstoredata[i][this.tableName['partner_id']],
              corr_value: this.controlstoredata[i][this.tableName['banner']],
              store_segment: this.controlstoredata[i][this.tableName['segment']],
              avg_duration: '1 Week',
              act_perform: 'Activi1ty1',
              others: this.controlstoredata[i]['Similarity_Measure'],
              correlation: this.controlstoredata[i]['Correlation']
            });
          }
          this.ELEMENT_DATA1 = [];
          this.ELEMENT_DATA1 = controlstore;
          this.ControlStoreTable = this.ELEMENT_DATA1;
          this.testStoreDataCount = this.ELEMENT_DATA1.length;
          this.sortprogramatic();
          const temp: any = [];
          for (var i = 0; i < controlstore.length; i++) {
            let isAvail: any = false;
            for (let j = 0; j < this.uncheckedItems.length; j++) {
              if (this.uncheckedItems[j][this.tableName['partner_id']] === controlstore[i].similar_value && this.uncheckedItems[j]['Test_store_' + this.tableName['partner_id']] === controlstore[i].test_storeno) {
                isAvail = true;
              }
            }
            if (isAvail === false) {
              temp.push(controlstore[i]);
            }
          }
          this.selection1 = new SelectionModel<ControlStore>(true, temp);
        }
      });
    } else {
      this.toastr.warning('Please unselect the control store to recompute');
    }
  }

  getRecomputemessage(counts: any, counts1: any) {
    const totalData = [];
    const selectData = [];
    let showMessage = false;
    for (const t in counts) {
      totalData.push(counts[t]);
    }
    for (const selected in counts1) {
      selectData.push(counts1[selected]);
    }
    if (totalData.length === selectData.length) {
      showMessage = true;
      console.log('length are same');
      return showMessage;
    } else {
      showMessage = false;
      console.log('length are different');
      return showMessage;
    }
  }

  ngOnDestroy() {
    this.globalService.publish('ENABLE_GENERATE_BUTTON', {
      module: 'SELECT_TEST_STORES',
      enable: false
    });
    if(!isNullOrUndefined(this.generateSubscrption)){
      this.generateSubscrption.unsubscribe();
      }
      if(!isNullOrUndefined(this.recomputeSubscription)){
        this.recomputeSubscription.unsubscribe();
        }
        if(!isNullOrUndefined(this.initiateSubscription)){
          this.initiateSubscription.unsubscribe();
          }
          if(!isNullOrUndefined(this.comprasionSubscription)){
            this.comprasionSubscription.unsubscribe();
            }
  }

  format(date: any) {
    if (date != 0 && date != null && date != undefined) {
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

  checkboxLabel(row?: SelectTest): string {
    if (!row) {
      return `${this.isTestAllSelected() ? 'select' : 'deselect'} all`;
    }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.test_name + 1}`;
  }

  isTestAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.SelectTestTable.data.length;
    return numSelected === numRows;
  }

  showValue(evt: any) {
    console.log(evt);
  }

  Validate() {
    this.comprasionSubscription = Subscription.EMPTY;
    console.log(this.controlstoredata);
    this.isTableData = false;
    const mystres = this.selection1.selected;
    const temp_array = [];
    for (var i = 0; i <= mystres.length - 1; i++) {
      temp_array.push(mystres[i]['test_storeno']);
    }

    const uniqueIDList1: any = [];

    temp_array.forEach((element: any) => {
      if (!uniqueIDList1.includes(element)) {
        uniqueIDList1.push(element);
      }
    });
    const TestStoreID: any = [];
    for (let j = 0; j < this.controlstoredata.length; j++) {
      TestStoreID.push(this.controlstoredata[j]['Test_store_' + this.tableName['partner_id']]);
    }
    const uniqueIDList: any = [];

    TestStoreID.forEach((element: any) => {
      if (!uniqueIDList.includes(element)) {
        uniqueIDList.push(element);
      }
    });

    if (uniqueIDList1.length === uniqueIDList.length) {
      const storeIdFrmControlData: any = [];
      for (let a = 0; a < this.controlstoredata.length; a++) {
        storeIdFrmControlData.push(this.controlstoredata[a]['Test_store_' + this.tableName['partner_id']]);
      }
      const counts = {};

      for (var i = 0; i < storeIdFrmControlData.length; i++) {
        const num = storeIdFrmControlData[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
      const counts1 = {};

      for (var i = 0; i < temp_array.length; i++) {
        const num1 = temp_array[i];
        counts1[num1] = counts1[num1] ? counts1[num1] + 1 : 1;
      }
      for (let c = 0; c < uniqueIDList1.length; c++) {
        const value: any = uniqueIDList1[c];
        if (counts[value] > 1) {
          if (counts1[value] != 1) {
            this.toastr.warning('Please select one control store for each test store');
            return;
          }
        }
      }
      const mystress = this.selection1.selected;
      const tempPartIdArr: any = [];
      const newarr: any = [];
      for (var i = 0; i <= mystress.length - 1; i++) {
        tempPartIdArr.push(mystress[i]['similar_value']);
      }
      const temp_data: any = [];
      for (let k = 0; k < mystress.length; k++) {
        const data: any = {
          test_store_name: mystress[k]['test_storeno'],
          control_str_name: mystress[k]['similar_value']
        };
        temp_data.push(data);
      }

      for (var i = 0; i < this.controlstoredata.length; i++) {
        let isAvail: any = false;
        for (let j = 0; j < temp_data.length; j++) {
          if (this.controlstoredata[i]['Test_store_Customer_Number'] === temp_data[j].test_store_name) {
            if (this.controlstoredata[i]['Customer_Number'] === temp_data[j].control_str_name) {
              isAvail = true;
            }
          }
        }
        if (isAvail == true) {
          this.controlstoredata[i].Checked_Flag = 1;
          newarr.push(this.controlstoredata[i]);
        }
      }
      if (newarr.length > 0) {
        for (let j = 0; j < newarr.length; j++) {
          newarr[j]['Customer_Number'] = newarr[j]['Customer_Number'];
        }
      }

      let comp_var: any = [];
        comp_var = ['Store_Size_Sq_Ft'];
      let target_variable = localStorage.getItem('targetvariable');
      if (isNullOrUndefined(target_variable)) {
        target_variable = this.data.target_variable;
      }
      const data = {
        teststores: newarr,
        compare_variables: comp_var,
        target_variable,
        prewindow_start: this.data.pretest_startdt,
        prewindow_end: this.data.pretest_enddt,
        postwindow_start: this.data.testwin_startdt,
        postwindow_end: this.data.testwin_enddt
      };
      setTimeout(() => {
        this.getCorrelation();
      }, 100);
      this.getControlsummaryTable(data);
    } else {
      this.toastr.warning('Please select one control store for each test store');
    }
  }

  roundOffWithComma(val: any) {
    const tempVal: any = Math.round(val);
    return tempVal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  roundOff(val: any) {
    const tempVal: any = Math.round(val);
    return tempVal;
  }

  saveControlStore(currentComponent: any, initate: boolean) {
    const mystres = this.selection1.selected;
    const temp_array = [];
    for (var i = 0; i <= mystres.length - 1; i++) {
      temp_array.push(mystres[i]['test_storeno']);
    }

    const uniqueIDList1: any = [];

    temp_array.forEach((element: any) => {
      if (!uniqueIDList1.includes(element)) {
        uniqueIDList1.push(element);
      }
    });

    const TestStoreID: any = [];
    for (let j = 0; j < this.controlstoredata.length; j++) {
      TestStoreID.push(this.controlstoredata[j]['Test_store_' + this.tableName['partner_id']]);
    }

    const uniqueIDList: any = [];

    TestStoreID.forEach((element: any) => {
      if (!uniqueIDList.includes(element)) {
        uniqueIDList.push(element);
      }
    });

    if (uniqueIDList1.length === uniqueIDList.length) {
      const storeIdFrmControlData: any = [];
      for (let a = 0; a < this.controlstoredata.length; a++) {
        storeIdFrmControlData.push(this.controlstoredata[a]['Test_store_' + this.tableName['partner_id']]);
      }
      const counts = {};

      for (var i = 0; i < storeIdFrmControlData.length; i++) {
        const num = storeIdFrmControlData[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }

      const counts1 = {};

      for (var i = 0; i < temp_array.length; i++) {
        const num1 = temp_array[i];
        counts1[num1] = counts1[num1] ? counts1[num1] + 1 : 1;
      }

      if (this.data.test_type !== 'RTM Impact Test'){
        for (let c = 0; c < uniqueIDList1.length; c++) {
          const value: any = uniqueIDList1[c];
          if (counts[value] > 1) {
            if (counts1[value] != 1) {
              this.toastr.warning('Please select one control store for each test store');
              return;
            }
          }
        }

      }

      const mystress = this.selection1.selected;

      const tempPartIdArr: any = [];
      const newarr = [];

      for (var i = 0; i <= mystress.length - 1; i++) {
        tempPartIdArr.push(mystress[i]['similar_value']);
      }

      const temp_data: any = [];
      for (let k = 0; k < mystres.length; k++) {
        const data: any = {
          test_store_id: mystres[k]['test_storeno'],
          control_str_id: mystres[k]['similar_value']
        };
        temp_data.push(data);
      }
      console.log(temp_data, 'selected data');
      for (var i = 0; i < this.controlstoredata.length; i++) {
        let isAvail: any = false;
        let arrayValue = [];
        arrayValue = temp_data.filter((x: any) => x.test_store_id === this.controlstoredata[i]['Test_store_' + this.tableName['partner_id']]
          && x.control_str_id === this.controlstoredata[i][this.tableName['partner_id']]);
        if (arrayValue.length > 0) {
          isAvail = true;
        }
        if (isAvail == true) {
          this.controlstoredata[i].Checked_Flag = 1;
          newarr.push(this.controlstoredata[i]);
        } else {
          this.controlstoredata[i].Checked_Flag = 0;
          newarr.push(this.controlstoredata[i]);
        }
      }
      let features: any;
        features = [];
      let comp_var: any = [];
      comp_var = ['Baycount_Total'];
      const stringify_data: any = {
        compare_variables: comp_var,
        store_features: features,
        teststores: newarr
      };

      let TestId: any = '';
      const temp = JSON.parse(localStorage.getItem('testid'));
      TestId = temp;
      localStorage.setItem('testid', TestId);
      localStorage.setItem('stepper5', 'true');
      let frezzeData = 0;
      let isFinalize = 0;
      let stepIndex = 5;
      console.log(this.controlStoreView || initate, initate, this.controlStoreView );
      if (!this.saveasDraft && initate) {
        frezzeData = 1;
        isFinalize = 1;
      }
      if(!this.showControlStores){
        stepIndex = 4;
      }
      const reqData: any = {
        stage_id: 2,
        stepindex: stepIndex,
        stringified_data: JSON.stringify(stringify_data),
        w_stringified_data: stringify_data,
        trial: JSON.parse(TestId),
        freeze_compute: frezzeData,
        is_finalize : isFinalize,
        controlStores: this.defaultChecked,
        requiredControlStores: this.control_pertest,
      };
      this.wizard2service.setSavedrecords(null);
      this.wizard2service.setSavedselected(null);
      this.wizard2service.controlMatchDataSave(reqData).subscribe((apiresponse: any) => {
        if (apiresponse.status === 'ok') {
          // this.wizard2service.getcontrolStoreData(localStorage.getItem('testid'))
          if (this.showControlStores) {
            if (apiresponse.data[0].records.length === 3) {
              for (let k = 0; k < apiresponse.data[0].records.length; k++) {
                if (apiresponse.data[0].records[k].stepper_id === 6) {
                  console.log(apiresponse.data[0].records[k]);
                  const temp = JSON.parse(apiresponse.data[0].records[k].record_value);
                  const predata: any = {
                    pre_end: temp.preperiod_end,
                    pre_start: temp.preperiod_start,
                    testwin_end: temp.postperiod_end,
                    testwin_start: temp.postperiod_start,
                    test_id: temp.test_id,
                    target_variable: temp.mesmetric_name,
                    break_even_lift: temp.break_even_lift
                  };
                  const testmeasurePreDetails: any = JSON.stringify(predata);
                  localStorage.setItem('testmeasure_pre_details', testmeasurePreDetails);
                  this.toastr.success('Control Store Saved Sucessfully');
                  localStorage.removeItem('from_test_store');
                }
              }
            } else {
              const predata: any = {
                pre_end: apiresponse.data[0].pre_end,
                pre_start: apiresponse.data[0].pre_start,
                testwin_end: apiresponse.data[0].testwin_end,
                testwin_start: apiresponse.data[0].testwin_start,
                test_id: apiresponse.data[0].test_id,
                target_variable: apiresponse.data[0].target_var,
                break_even_lift: apiresponse.data[0].break_even_lift
              };
              const testmeasurePreDetails: any = JSON.stringify(predata);
              localStorage.setItem('testmeasure_pre_details', testmeasurePreDetails);
              this.toastr.success('Control Store Saved Sucessfully');
              localStorage.removeItem('from_test_store');
            }
            if ((!this.saveasDraft && !this.controlStoreView) || (!this.saveasDraft && initate)) {
              localStorage.setItem('testname', apiresponse.data[0].test_name);
              this.router.navigate(['./analyseImpact']);
            }
          }
        }
      });
    } else {
      this.toastr.warning('Please select one control store for each test store');
    }
  }

  getCorrelation() {
    const data = {
      test_id: this.testId,
      categories: this.selectedCategory,
      test_control: this.controlstoredata,
    };
    // reseting every time when its called
    this.seriesData = [];
    this.categories = [];
    this.wizard2service.GetControlSummaryCorrelation(data).subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok') {
        const avgTest = apiresponse.data.metrics_dict['Avg_Similarity'];
        this.avg_test_control = (avgTest * 100).toFixed();
        const salesTest = apiresponse.data.metrics_dict['Avg_Correlation'];
        this.sales_test_control = (salesTest * 100).toFixed();
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
            datValue.push(data[i]['Average_' + this.targetVariableValue]);
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
              datValue.push(data[i]['Average_' + this.targetVariableValue]);
              obj['data'] = datValue;
              this.seriesData.push(obj);
            } else {
              this.seriesData[index].data.push(data[i]['Average_' + this.targetVariableValue]);
            }
          }
        }
        const uniqueData = Array.from(new Set(this.categories));
        this.categories = uniqueData;
        console.log(this.seriesData, this.categories, 'chart Datas');
        this.generateHighCharts(this.seriesData, this.categories);
      }
    });
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
    Highcharts.chart('control_charts', options);
  }

  getControlsummaryTable(data: any) {
    this.wizard2service.GetControlSummary(data).subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok') {
        this.isTableData = true;
          if (apiresponse['data']['variable_metric'].hasOwnProperty('Store_Size_Sq_Ft')) {
            this.csv_pop = apiresponse['data']['variable_metric']['Store_Size_Sq_Ft']['Control Mean'];
            this.csv_poptestmean = apiresponse['data']['variable_metric']['Store_Size_Sq_Ft']['Test Mean'];
          }
          if (apiresponse['data']['variable_metric'].hasOwnProperty('RSV')) {
            this.out_pop = apiresponse['data']['variable_metric']['RSV']['Control Mean'];
            this.out_poptestmean = apiresponse['data']['variable_metric']['RSV']['Test Mean'];
          }
        }
    });
  }

  openDailog(templateRef: TemplateRef<any>) {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeDailog() {
    this.dialogRef.close();
  }

  FilterLoadSavedTest(event: string) {
    console.log('filerr Dfska');
    const val = event.toLowerCase();
    this.tempFilter = this.ELEMENT_DATA1;
    if (event === '') {
      this.searchFilter = false;
    } else {
      this.searchFilter = true;
    }
    let temp;
    temp = this.tempFilter.filter(function(d: any) {
        if (d.others != null) {
          return (
            d.test_storeno
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            d.control_mapped
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            d.similar_value
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            d.corr_value
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            d.store_segment
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            d.others
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            d.correlation
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 ||
            !val
          );
        }
      });
    if (this.tempFilter.length > 0) {
      this.testStoreDataCount = temp.length;
      this.ControlStoreTable = new MatTableDataSource<any>(temp);
    } else {
      this.testStoreDataCount = this.ELEMENT_DATA1.length;
      this.ControlStoreTable = new MatTableDataSource<any>(this.ELEMENT_DATA1);
    }
    // this.ControlStoreTable = temp;
  }

  convertPercentage(value: number) {
    if (value !== undefined) {
      const convertedValue = (1 - value) * 100;
      return Math.floor(convertedValue) + '%';
    } else {
      return '-';
    }

  }

  downloadTemplate(value: any) {
    let selecteTestStores;
    const keyName = '';
    this.uploadSelectedTestStores = [];
    if (this.data !== undefined && this.data.hasOwnProperty('selectedteststore')) {
      selecteTestStores = this.data.selectedteststore;
      for (let i = 0; i < selecteTestStores.length; i++) {
        this.uploadSelectedTestStores.push(selecteTestStores[i][this.tableName['partner_id_name']]);
      }
    }
    const data = {};
    let filename: any = 'TestSummaryReport';
    if(value === 'testControlPairs') {
      data['testStores'] = this.uploadSelectedTestStores;
      data['templateType'] = 'TestControlPairs';
      filename = 'Test_Control_Pairs_Upload_Template_' + this.userRegion;
    } else {
      data['testStores'] = this.SelectedTestStores;
      data['templateType'] = 'ControlPairs';
      filename = 'Control_Pairs_Pool_Upload_Template_' + this.userRegion;
    }
    this.wizard2service.downladControlStoreTemplate(data).subscribe((response: any) => {
      const blob = new Blob([response], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const downloadURL = window.URL.createObjectURL(response);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = filename + '.xlsx';
      link.click();
    });
  }

  handleFileInput(files: FileList) {
    console.log('files-> ', files.item(0));
    const file = files.item(0);
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f));
    console.log(formData, 'twovalues');
    formData.append('banner', this.selectedBanner);
    formData.append('store_segments', this.selectedStoreSegment);
    formData.append('segments', this.selectedSegments);
    formData.append('territories', this.selectedTerritory);
    formData.append('categories', this.selectedCategory);
    formData.append('target_variable', this.targetVariableValue);
    formData.append('test_id', this.testId);
    formData.append('prewindow_start', this.data.pretest_startdt,);
    formData.append('prewindow_end', this.data.pretest_enddt);
    formData.append('postwindow_start', this.data.testwin_startdt);
    formData.append('postwindow_end', this.data.testwin_enddt);
    this.wizard2service.uploadControlStore(formData).subscribe(response => {
      if (response.status === 'ok') {
        this.uploadMessage = response.data.message;
        this.uploadedData = response.data.control_pairs;
        this.uploaded = true;
        this.statusFail = false;
        this.eanbleGenerate();
      } else if (response.status === 'not_ok') {
        this.uploaded = false;
        this.statusFail = true;
        this.uploadMessage = response.data;
        // this.toastr.warning(response.data);
      }
    }, (error: any) => {
      this.toastr.error('Something went wrong while upload please try again later');
    });
  }

  cancelUpload() {
    this.uploaded = false;
    this.uploadedData = [];
    this.eanbleGenerate();
  }

  contineUpload() {
    if (this.uploadedData.length !== 0) {
      this.globalService.publish('SHOW_CONTROL_STORES', {
        module: 'CREATE_TEST',
        method: 'FILE_UPLOAD',
        enable: true
      });
      // this.tableConstruct(this.uploadedData)
    }
  }

  tableConstructControl(data: any, region: any) {
    const controlstore: any = [];
    if (data !== '' && data.length > 0) {
      this.controlstoredata = JSON.parse(data);
      for (var i = 0; i <= this.controlstoredata.length - 1; i++) {
        this.controlstoredata[i][this.tableName['partner_id']] = JSON.parse(this.controlstoredata[i][this.tableName['partner_id']]);
        controlstore.push({
          test_storeno: this.controlstoredata[i]['Test_store_' + this.tableName['partner_id']],
          test_storedetails: this.controlstoredata[i]['Test_store_' + this.tableName['segment']],
          control_mapped: this.controlstoredata[i]['Test_store_' + this.tableName['banner']],
          select: this.controlstoredata[i]['Test_store_' + this.tableName['partner_id']],
          similar_value: this.controlstoredata[i][this.tableName['partner_id_name']],
          corr_value: this.controlstoredata[i][this.tableName['banner']],
          store_segment: this.controlstoredata[i][this.tableName['segment']],
          avg_duration: '1 Week',
          act_perform: 'Activi1ty1',
          others: this.controlstoredata[i]['Similarity_Measure'],
          correlation: this.controlstoredata[i]['Correlation']
        });
      }
      this.ELEMENT_DATA1 = [];
      this.ELEMENT_DATA1 = controlstore;
      this.ControlStoreTable = this.ELEMENT_DATA1;
      this.testStoreDataCount = this.ELEMENT_DATA1.length;
      this.ControlStoreTable.paginator = this.paginator;
    }
    const temp: any = [];
    for (var i = 0; i < controlstore.length; i++) {
      temp.push(controlstore[i]);
    }
    this.selection1 = new SelectionModel<ControlStore>(true, temp);
    this.sortprogramatic();
    // this.saveDatastep4();
  }

  handleFileInputControlStore(files: FileList) {
    console.log('files-> ', files.item(0));
    const file = files.item(0);
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f));
    formData.append('test_id', this.testId);
    this.wizard2service.uploadControlStorePool(formData).subscribe(response => {
      if (response.status === 'ok') {
        const data = JSON.parse(response.data);
        data.forEach((x: any)=>{
          this.controlStorePoolData.push(x['Control_store_Customer_Number']);
        });
        this.identifyControlStores();
      } else {
        this.uploadedControl = false;
        this.toastr.warning(response.data);
      }
    }, (error: any) => {
      this.uploadedControl = false;
      this.toastr.error('Something went wrong while upload please try again later');
    });
  }

  cancelUploadControl() {
    this.uploadedControl = false;
    this.uploadeControlData = [];
    this.eanbleGenerate();
  }

  contineUploadControl() {
    if (this.uploadeControlData.length !== 0) {
      this.globalService.publish('SHOW_CONTROL_STORES', {
        module: 'CREATE_TEST',
        method: 'FILE_UPLOAD',
        enable: true
      });
      // this.tableConstruct(this.uploadedData)
    }
  }

  callChecked(event: any) {
    sessionStorage.setItem('control_feature', event);
    this.resetData(event);
    this.eanbleGenerate();
  }

  eanbleGenerate() {
    console.log('calling Common Generate enable');
    let disableButton = false;
    let dataValue = [];
    if(!isNullOrUndefined(this.uploadedData) && this.uploadedData.length > 0){
      dataValue = this.uploadedData;
    } else if(!isNullOrUndefined(this.uploadeControlData) && this.uploadeControlData.length >0){
      dataValue = this.uploadeControlData;
    }
    if ((this.defaultChecked === '2' || this.defaultChecked === '3') && dataValue.length === 0){
      disableButton = true;
    }
    this.globalService.publish('ENABLE_GENERATE_BUTTON', {
      module: 'SELECT_TEST_STORES',
      enable: true,
      disable: disableButton
    });
  }

  resetData(evenData: any){
    this.uploadedData = [];
    this.uploadeControlData = [];
    this.statusFail = false;
    this.statusFailPool = false;
    this.uploaded = false;
    this.uploadedControl = false;
  }

}

function compare_seletedstore(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
