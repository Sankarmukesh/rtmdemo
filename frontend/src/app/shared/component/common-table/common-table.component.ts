import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, Input, OnInit, ViewChild, EventEmitter, Output, TemplateRef} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {isNullOrUndefined} from 'util';
import {MatTableDataSource} from '@angular/material/table';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  dialogRef: any;
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  @Input() tableData: any;
  @Input() columnHeader: any;
  @Input() tableHeader: any;
  @Input() originalData: any;
  @Input() stringSelection: any;
  @Input() stringSelectionControlStore: any;
  @Input() tableType: any;
  @Input() tableName: any;

  @Output() editData: EventEmitter<any> = new EventEmitter<any>();

  @Output() analyseData: EventEmitter<any> = new EventEmitter<any>();

  @Output() deleteData: EventEmitter<any> = new EventEmitter<any>();

  @Output() historyData: EventEmitter<any> = new EventEmitter<any>();

  @Output() callFilterData: EventEmitter<any> = new EventEmitter<any>();

  @Output() callFullScreen: EventEmitter<any> = new EventEmitter<any>();

  @Output() callSortData: EventEmitter<any> = new EventEmitter<any>();

  @Output() selectedStrTableData: EventEmitter<any> = new EventEmitter<any>();

  @Output() checkboxLabelTeststoreData: EventEmitter<any> = new EventEmitter<any>();

  @Output() showValueData: EventEmitter<any> = new EventEmitter<any>();

  @Output() checkboxLabelControlStoreData: EventEmitter<any> = new EventEmitter<any>();

  @Output() masterToggleData: EventEmitter<any> = new EventEmitter<any>();

  @Output() isAllSelectedData: EventEmitter<any> = new EventEmitter<any>();

  @Output() selectAllStoresData: EventEmitter<any> = new EventEmitter<any>();

  @Output() searchFilter: EventEmitter<any> = new EventEmitter<any>();

  // @Output() callConfigureData:EventEmitter<any> = new EventEmitter<any>();
  objectKeys = Object.keys;
  LOAD_DATA: any = [];
  hideColumns: boolean;
  hideTestNamesColumns: boolean;
  hideTestWindowColumns: boolean;
  hideDetailsColumns: boolean;
  hideCreatedColumn: boolean;
  hideModifiedColumn: boolean;
  hideStatusColumn: boolean;
  hideActionsColumns: boolean;
  hideIcon: boolean[] = [false];
  tempData: any = [];
  tempHideArray: any = [];
  showExpand = false;
  tempFilter: any = [];

  dataSource: { paginator: MatPaginator; filter: string };
  // dataSource = this.LOAD_DATA;

  @ViewChild(MatSort) sort: MatSort;
  hideFilter = false;
  hideSettings = false;
  displayColumns: any[];
  array: string[];
  public configPerfect: PerfectScrollbarConfigInterface = {};

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.array = this.objectKeys(this.columnHeader);
    this.displayColumns = this.objectKeys(this.columnHeader);
    this.tempData = this.objectKeys(this.columnHeader);
    if (this.tableType === 'comprassion') {
      console.log('comprassion table');
      this.hideFilter = true;
      this.hideSettings = true;
    } else if (this.tableType === 'control') {
      this.hideFilter = true;
      this.hideSettings = false;
    } else if(this.tableType === 'testMeasurementResults') {
      this.showExpand = true;
    }
  }


  ngOnChanges() {
    console.log(this.tableData);
    this.dataSource = this.tableData;
    this.LOAD_DATA = this.tableData.data;
    if (!isNullOrUndefined(this.paginator2) && this.tableType !== 'control' && this.tableType !== 'dashboard') {
      this.tableData.paginator = this.paginator2;
    } else if (this.tableData.data.length > 0) {
      setTimeout(() => {
        this.tableData.paginator = this.paginator2;
      });
    } else if(!isNullOrUndefined(this.paginator2)) {
      setTimeout(() => {
        this.tableData.paginator = this.paginator2;
      });
    }
  }

  applyFilter(filterValue: string) {
    console.log('applyFilter');
    if (this.tableType === 'dashboard') {
        this.callFilterList(filterValue);
    } else {
      this.searchFilter.emit(filterValue);
      // this.dataSource.filter = filterValue.trim().toLowerCase();
      // this.dataSource.paginator = this.paginator2;
    }
  }

  getTestStoreName(row: any) {
    if (sessionStorage.getItem('region') == 'DEMO') {
      return row.store_no;
    } else if (sessionStorage.getItem('region') == 'DEMO') {
      return row.customer_name;
    } else if (sessionStorage.getItem('region') == 'DEMO') {
      return row.store_no;
    }
  }

  edittoParent(testId: any) {
    this.editData.emit(testId);
  }

  analyseToParent(row: any) {
    this.analyseData.emit(row);
  }

  selectedstrtable(testId: any) {
    this.selectedStrTableData.emit(testId);
  }

  showValue(event: any) {
    this.showValueData.emit(event);
  }

  checkboxLabelTeststore(row: any) {
    this.checkboxLabelTeststoreData.emit(row);
  }

  checkboxLabel(row: any) {
    console.log(row);
    this.checkboxLabelControlStoreData.emit(row);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('drop event fired');
    moveItemInArray(this.array, event.previousIndex, event.currentIndex);
    console.log('this.array', this.array, this.displayColumns);
    let displayValues: any = [];
    displayValues = this.array.filter(val => !this.tempHideArray.includes(val));
    console.log(displayValues, this.displayColumns, this.array, 'displayValues');
    this.displayColumns = displayValues;
  }

  historytoParent(testId: any) {
    this.historyData.emit(testId);
  }

  deletetoParent(row: any) {
    this.deleteData.emit(row);
  }

  callFilterDataToParent() {
    this.callFilterData.emit();
  }

  callFullScreenToParent() {
    this.callFullScreen.emit();
  }

  sortData(data: any) {
    this.callSortData.emit(data);
  }

  masterToggle() {
    this.masterToggleData.emit();
  }

  isAllSelected() {
    this.isAllSelectedData.emit();
  }

  selectAllStores(event: any) {
    this.selectAllStoresData.emit(event);
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

  getColorDash(data: any) {
    const id = data.test_id;
    const value = this.status(data);
    if (value === 'Draft Saved') {
      return 'status_purple';
    } else if (value === 'Test Running' || value === 'Test Analysis' || value === 'Test Planned') {
      return 'status_yellow';
    }
  }

  getAnalyseImpactButton(rowData: any) {
    if (rowData.stepId < 5 && !rowData.is_finalize) {
      return 'button_deactivate';
    } else {
      return 'button_activate';
    }
  }

  getEditButton(rowData: any) {
    if (rowData.stepId > 5 && rowData.is_finalize) {
      return 'button_deactivate';
    } else {
      return 'button_activate';
    }
  }

  getAICursor(rowData: any) {
    if (rowData.stepId < 5 && rowData.is_finalize) {
      return 'cursor_deactivate';
    } else {
      return 'cursor_activate';
    }
  }


  getAlign(row: any) {
    if (sessionStorage.getItem('region') == 'DEMO') {
      return 'align_center';
    } else if (sessionStorage.getItem('region') == 'DEMO') {
      return 'align_left';
    } else if (sessionStorage.getItem('region') == 'DEMO') {
      return 'align_center';
    }
  }

  status(data: any) {
    const search_id = data.test_id;
    const record = this.originalData.filter((x: any) => x.test_id == search_id)[0];
    const date = new Date(new Date().toDateString()).getTime();
    if (date >= new Date(record.testwin_start).getTime() &&
      date <= new Date(record.testwin_end).getTime() && record.is_finalize == false) {
      return 'Test Running';
    } else if (!(date >= new Date(record.testwin_start).getTime() &&
      date <= new Date(record.testwin_end).getTime()) && record.is_finalize == true) {
      return 'Test Analysis';
    } else if (record.is_finalize === true) {
      return 'Test Planned';
    }
    return 'Draft Saved';
  }

  openDailog(templateRef: TemplateRef<any>) {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeDailog() {
    this.dialogRef.close();
  }

  hideOrShowColumns(data: any, index: any) {
    if (this.hideIcon[data] === true) {
      this.hideIcon[data] = false;
    } else {
      this.hideIcon[data] = true;
    }

    const findIndex = this.displayColumns.findIndex((itm: any) => itm === data);
    if (findIndex !== -1) {
      const datavalues = this.displayColumns.filter((itm: any) => itm !== data);
      const hideValues = this.displayColumns.filter((itm: any) => itm === data);
      const findHideIndex = this.tempHideArray.findIndex((itm: any) => itm === data);
      if (hideValues.length > 0 && findHideIndex === -1) {
        this.tempHideArray.push(hideValues[0]);
      }
      this.displayColumns = datavalues;
    } else {
      const findHideIndex = this.tempHideArray.findIndex((itm: any) => itm === data);
      if (findHideIndex !== -1) {
        this.tempHideArray.splice(findHideIndex, 1);
      }
      let displayValues = [];
      displayValues = this.array.filter(val => !this.tempHideArray.includes(val));
      this.displayColumns = displayValues;
    }
  }

  getDisplayColumn(keyValue: string) {
    // console.log(this.columnHeader)
    return this.columnHeader[keyValue];
  }

  callFilterList(event: any) {
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
    console.log(temp);
    setTimeout(()=> this.tableData = new MatTableDataSource<any>(temp) );
    setTimeout(() => this.tableData.paginator = this.paginator2);
  }
}
