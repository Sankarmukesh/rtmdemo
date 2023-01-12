import {Component, OnInit} from '@angular/core';
import {CommonService} from '@app/shared/services/common.service';
import {GlobalEventsService} from '@app/shared/services/global-events.service';
import {SidenavService} from '@app/shared/services/sidenav.service';
import {Subscription} from 'rxjs';
import {isNullOrUndefined} from 'util';
import {TestMeasureService} from '@app/shared/services/testmeasure.service';
import {TestConfigService} from '@app/shared/services/testconfig.service';

const config = require('../../../../assets/region/config-fields.json');

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {

  arrayFilterData: any = [];
  userRegion: any;
  public typetest: any[] = ['Frequency Test', 'Duration Test', 'Activity Test', 'Others'];
  public statusData: any[] = ['Draft Saved', 'Test Running', 'Test Analysis', 'Test Planned'];
  testStoresSupscription: Subscription = Subscription.EMPTY;
  testStoresData: any = [];
  testFeilds: any;
  tempFilter: any = [];
  testStoreDataSubsription: Subscription = Subscription.EMPTY;
  tempData: any = [];
  tempComponentName: string;
  tempModule: string;
  component_name = '';
  moduleComponent = '';

  constructor(private homeservice: TestConfigService, private sidenavService: SidenavService,
              private commonService: CommonService, private globalService: GlobalEventsService,
              private wizard3service: TestMeasureService) {
    this.userRegion = localStorage.getItem('region');
    this.testStoresSupscription = this.globalService.subscribe('FILTER_OPEN_METHOD', obj => {
      console.log('calling the event');
      if (this.tempComponentName !== obj.module || this.tempModule !== obj.component) {
        this.tempData = [];
        this.arrayFilterData = [];
      }
      this.component_name = obj.module;
      this.moduleComponent = obj.component;
      // this.tempModule = ob
      this.callDataFilter(obj.module, obj.data, this.moduleComponent); // Form the data based on the Screen
    });
    this.testStoreDataSubsription = this.commonService.getTestStoresFilter().subscribe((response: any) => {
      if (!isNullOrUndefined(response)) {
        this.testStoresData = response;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if (!isNullOrUndefined(this.testStoresSupscription)) {
      this.testStoresSupscription.unsubscribe();
    }
    if (!isNullOrUndefined(this.testStoreDataSubsription)) {
      this.testStoreDataSubsription.unsubscribe();
    }
  }

  getDropdownValues() {
    this.homeservice.Get_Dropdownvals().subscribe((apiresponse: any) => {
      console.log(apiresponse, 'responsedValue');
      if (apiresponse.status === 'ok') {
        const array = apiresponse.data;
        // this.formattedArray(array);
      }
    });
  }

  // formattedArray(data: any) {
  //   this.pushDataExtra(this.typetest, 'Test type', false);
  //   const parent = this;
  //   Object.keys(data).forEach((x: any) => {
  //     console.log(data, 'data ValueFilter');
  //     if (data[x].length > 0 && this.isShow(x)) {
  //       const obj = {};
  //       obj['value'] = parent.configValue(x);
  //       obj['indeterminate'] = false;
  //       obj['checked'] = true;
  //       obj['subValue'] = this.setDefault(data[x]);
  //       this.arrayFilterData.push(obj);
  //     }
  //   });
  //   console.log(this.arrayFilterData, 'updateArrayData');
  // }

  setDefault(array: any) {
    const subData = [];
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        const obj = {};
        obj['checked'] = true;
        obj['value'] = array[i];
        subData.push(obj);
      }
      return subData;
    }
  }

  masterToggle(dataValue: any, event: any) {
    for (let i = 0; i < this.arrayFilterData.length; i++) {
      if (this.arrayFilterData[i].value === dataValue.value) {
        this.arrayFilterData[i]['checked'] = event.checked;
        for (let j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
          this.arrayFilterData[i].subValue[j]['checked'] = event.checked;
        }
      }
    }
    if (dataValue.isLink) {
      this.uncheckStores();
    }
    this.valuesNameChecked();
  }

  checkboxValueChanges(dataValue: any, subValue: any, event: any) {
    for (let i = 0; i < this.arrayFilterData.length; i++) {
      if (this.arrayFilterData[i].value === dataValue.value) {
        for (let j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
          if (this.arrayFilterData[i].subValue[j].value === subValue) {
            this.arrayFilterData[i].subValue[j]['checked'] = event.checked;
          }
        }
      }
    }
    if (dataValue.isLink) {
      this.uncheckStores();
    }
    this.valuesNameChecked();
  }

  configValue(value: any) {
    const testFeilds = config[this.userRegion].filterFeilds;
    let formattedValue = '';
    for (let i = 0; i < testFeilds.length; i++) {
      Object.keys(testFeilds[i]).forEach((x: any) => {
        console.log(x, 'values list', x === value, value);
        if (x === value) {
          formattedValue = testFeilds[i][x];
          return;
        }
      });
      if (formattedValue !== '') {
        return formattedValue;
      }
    }
  }

  valuesNameChecked() {
    for (let i = 0; i < this.arrayFilterData.length; i++) {
      const temp = [];
      for (let j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
        if (this.arrayFilterData[i].subValue[j].checked) {
          temp.push(this.arrayFilterData[i].subValue[j].value);
        }
      }
      if (temp.length === this.arrayFilterData[i].subValue.length) {
        this.arrayFilterData[i].checked = true;
        this.arrayFilterData[i].indeterminate = false;
      } else if (temp.length === 0) {
        this.arrayFilterData[i].checked = false;
        this.arrayFilterData[i].indeterminate = false;
      } else {
        this.arrayFilterData[i].indeterminate = true;
      }
    }
  }

  Applyfilter() {
    const dataArray = [];
    for (let i = 0; i < this.arrayFilterData.length; i++) {
      const obj = {};
      obj['name'] = this.arrayFilterData[i].filter_key;
      obj['data'] = this.changeFormat(this.arrayFilterData[i]['subValue']);
      dataArray.push(obj);
    }
    console.log(dataArray, 'arrayValue', this.component_name);
    this.commonService.setFilterSubject(dataArray);
    this.globalService.publish('FILLTER_APPLIED', {
      data: dataArray,
      module: 'FILTERED_COMPONENT',
      component: this.component_name,
      componentPage: this.moduleComponent
    });
    this.sidenavService.close();
  }

  reset() {
    for (let i = 0; i < this.arrayFilterData.length; i++) {
      this.arrayFilterData[i]['checked'] = true;
      for (let j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
        this.arrayFilterData[i].subValue[j]['checked'] = true;
      }
    }
    this.valuesNameChecked();
  }

  toggleClose() {
    this.sidenavService.close();
  }

  isShow(data: any) {
    const testFeilds = config[this.userRegion].filterFeilds;
    this.testFeilds = testFeilds;
    let is_show = false;
    for (let i = 0; i < testFeilds.length; i++) {
      Object.keys(testFeilds[i]).forEach((x: any) => {
        if (x === data) {
          is_show = testFeilds[i]['is_show'];
        }
      });
    }
    return is_show;
  }

  pushDataExtra(data: any, name: string, is_link: boolean, filter_key?: any) {
    const obj = {};
    obj['value'] = name;
    obj['indeterminate'] = false;
    obj['checked'] = true;
    obj['subValue'] = this.setDefault(data);
    obj['isLink'] = is_link;
    obj['filter_key'] = filter_key;
    this.arrayFilterData.push(obj);
  }

  testStoreUpdate(data: any) {
    console.log(config[this.userRegion], 'configFeilds', this.userRegion);
    const testStoreName = config[this.userRegion]['partner_id_name'];

    const testStore_data = [];
    for (let i = 0; i < data.length; i++) {
      testStore_data.push(this.testStoresData[i][testStoreName]);
    }
    return testStore_data;
  }

  changeFormat(data: any) {
    const dataValue = [];
    if (this.tempComponentName === 'Dashboard' || this.tempComponentName === 'Select_Test_Stores') {
      for (let i = 0; i < data.length; i++) {
        if (!data[i]['checked']) {
          dataValue.push(data[i]['value']);
        }
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i]['checked']) {
          dataValue.push(data[i]['value']);
        }
      }
    }

    return dataValue;
  }

  stringFormat(stringvalue: string) {
    const stringSplit = stringvalue.split(' ');
    let finalizedString = '';
    for (let i = 0; i < stringSplit.length; i++) {
      if (stringSplit[i] !== '') {
        if (finalizedString === '') {
          finalizedString = stringSplit[i];
        } else {
          finalizedString = finalizedString + '_' + stringSplit[i];
        }
      }
    }
    return finalizedString.toLowerCase();
  }

  setData_stores() {
    const temp_banner: any = [];
    for (let i = 0; i < this.testStoresData.length; i++) {
      temp_banner.push(this.testStoresData.data[i][this.testFeilds[0]['banner']]);
    }

    const filteredbanner = temp_banner.filter(function(item: any, pos: any) {
      return temp_banner.indexOf(item) === pos;
    });
  }

  callDataFilter(component_name: any, data: any, module: any) {
    this.tempModule = module;
    if (component_name === 'Dashboard') {
      this.tempComponentName = component_name;
      this.initateFunction(data, 'dashBoard');
    } else if (component_name === 'Analyse_Impact') {
      this.tempComponentName = component_name;
      if (this.testStoresData.length > 0) {
        this.initateFunction(this.testStoresData, 'testMeasurement');
      }
    } else if (component_name === 'Select_Test_Stores') {
      console.log(data, 'dataValue');
      this.tempComponentName = component_name;
      this.initateFunction(data, 'select_test_stores');
    }
  }

  // the function is used to call when load to form the formatted way
  initateFunction(data: any, configCall: any) {
    if (this.tempData.length === 0) {
      const filteredData = config[this.userRegion]['filterFeilds'][0][configCall];
      if (!isNullOrUndefined(filteredData) && filteredData.length > 0) {
        for (let i = 0; i < filteredData.length; i++) {
          if (filteredData[i].is_filter) {
            const dataValue: any = [];
            if (filteredData[i]['key'] === 'Test Type' || filteredData[i]['key'] === 'Status') {
              const data = filteredData[i]['data'];
              this.pushDataExtra(data, filteredData[i]['show_name'], filteredData[i]['is_linked'], filteredData[i]['filter_key']);
            } else {
              data.forEach((element: any) => {
                if (element.hasOwnProperty(filteredData[i]['key'])) {
                  dataValue.push(element[filteredData[i]['key']]);
                }
              });
              console.log(dataValue, 'not unique array');
              const distinctArray = dataValue.filter((n: any, i: any) => dataValue.indexOf(n) === i);
              this.pushDataExtra(distinctArray, filteredData[i]['show_name'], filteredData[i]['is_linked'], filteredData[i]['filter_key']);
            }
          }
        }
        this.tempData = this.arrayFilterData;
      }
    }
  }

  uncheckStores() {
    let keyValues: any = [];
    let valuesArray: any = [];
    const testStoreCompare: any = [];
    const dataList = this.getValuesArray();
    keyValues = dataList[1];
    valuesArray = dataList[0];
    const result = this.testStoresData.filter(function(e: any) {
      return keyValues.every(function(a: any) {
        return !valuesArray.includes(e[a]);
      });
    });
    const dataCheck = this.testStoreUpdate(result);
    const testStoreName = config[this.userRegion]['partner_id_name'];
    for (let k = 0; k < this.arrayFilterData.length; k++) {
      if (this.arrayFilterData[k].filter_key === testStoreName) { // To Compare only the test stores
        this.arrayFilterData[k].subValue.forEach((element: any) => {
          testStoreCompare.push(element.value);
        });
      }
    }
    const final = testStoreCompare.filter(function(item: any) {
      return !dataCheck.includes(item);
    });
    console.log(final, 'finalChecked data');
    this.updateFilter(final);
  }

  updateFilter(data: any) {
    for (let i = 0; i < this.arrayFilterData.length; i++) {
      const testStoreName = config[this.userRegion]['partner_id_name'];
      if (this.arrayFilterData[i].filter_key === testStoreName) {
        for (let j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
          const findIndex = data.findIndex((x: any) => x === this.arrayFilterData[i].subValue[j].value);
          if (findIndex !== -1) {
            this.arrayFilterData[i].subValue[j].checked = false;
          } else {
            this.arrayFilterData[i].subValue[j].checked = true;
          }
        }
      }
    }
  }

  getValuesArray() {
    const valuesArray: any = [];
    const keyValues: any = [];
    const testStoreName = config[this.userRegion]['partner_id_name'];
    for (let i = 0; i < this.arrayFilterData.length; i++) {
      if (this.arrayFilterData[i].filter_key !== testStoreName) {
        keyValues.push(this.arrayFilterData[i].filter_key);
        for (let j = 0; j < this.arrayFilterData[i].subValue.length; j++) {
          if (!this.arrayFilterData[i].subValue[j].checked) {
            valuesArray.push(this.arrayFilterData[i].subValue[j].value);
          }
        }
      }
    }
    console.log(valuesArray, keyValues);
    return [valuesArray, keyValues];
  }
}

