import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {CommonService} from '@app/shared/services/common.service';
import {GlobalEventsService} from '@app/shared/services/global-events.service';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';
const config = require('../../../assets/region/config-fields.json');
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';
import {TestConfigService} from '@app/shared/services/testconfig.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-applicability-criteria',
  templateUrl: './applicability-criteria.component.html',
  styleUrls: ['./applicability-criteria.component.scss']
})
export class ApplicabilityCriteriaComponent implements OnInit {
  nextStepSubscrption: Subscription = Subscription.EMPTY;
  currentComponent: any;
  data: any;
  selectedRegion = '';
  user_name: string;
  testApplicabilityFields: any;
  currencySymbol: any;
  isinSqFt: any = '';
  userRegion: any;
  tableName: any = '';
  regionNames: any = [];
  banner: any = [];
  segment: any = [];
  territory: any = [];
  storegrid: any = [];
  bannershow: boolean;
  segmentshow: boolean;
  territoryshow: boolean;
  storegridshow: boolean;
  categoryshow: boolean;
  Banner: any;
  Segment: any;
  Territory: any;
  StoreGrid: any;
  Category: any;
  validForm = false;
  strfeat1: any = '1';
  strfeat2: any;
  strfeatmand = true;
  breakenlist: any;
  cost: any;
  rsv_estimate: any;
  req_rsv = true;
  req_cost = true;
  dropdownSettingsbanner = {};
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  saveDraft = false;
  rtmImpact = false;
  lockStoreFeature = false;
  @Output('moveNextStep') moveNextStep = new EventEmitter();
  @Output() tipsData: EventEmitter<any> = new EventEmitter<any>();
  disableCustomerChain = false;
  filterData: any = [];
  constructor(
    private homeservice: TestConfigService,
    public toastr: ToastrService,
    private commonService: CommonService,
    public globalService: GlobalEventsService,
  ) {
    const componentDetails = this.commonService.getCurrentComponentSubject();
    this.currentComponent = componentDetails.currentComponent;
    this.data = componentDetails.data;
    this.nextStepSubscrption = this.globalService.subscribe('MOVE_NEXT_APPLICABILITY_CRITERIA', obj => {
      if (obj.module === 'CREATE_TEST' && obj.currentComponent === 1) {
        this.saveDraft = obj.saveDraft;
        this.validateDropDowns();
        this.saveData(obj.currentComponent);
      }
    });
    this.dropdownSettingsbanner = {
      allowSearchFilter: true,
      clearSearchFilter: true,
      itemsShowLimit: 1,
    };
  }

  ngOnInit() {
    this.Get_Dropdownvals();
    this.selectedRegion = sessionStorage.getItem('region');
    this.user_name = localStorage.getItem('username');
    this.userRegion = sessionStorage.getItem('region');

    if (sessionStorage.getItem('test-type') === 'RTM Impact Test') {
      this.lockStoreFeature = true;
      this.rtmImpact = true;
      if (this.userRegion === 'DEMO') {
        this.strfeat2 = '0';
      } else {
        this.strfeat2 = '1';
      }
    }


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
    this.validateDropDowns();
    this.currentComponent = this.commonService.getCurrentComponentSubject().data;
    if (this.currentComponent !== undefined) {
      this.Segment = this.currentComponent.segment;
      this.Banner = this.currentComponent.banner;
      this.Territory = this.currentComponent.territory;
      this.StoreGrid = this.currentComponent.store_grid;
      this.Category = this.currentComponent.category;
      if (this.currentComponent.strfeature2 !== undefined) {
        this.strfeat2 = this.currentComponent.strfeature2.toString();
      }
      this.cost = this.currentComponent.cost;
      if (this.currentComponent.hasOwnProperty('rsv_estimate')) {
        this.rsv_estimate = (Number(parseFloat((this.currentComponent.rsv_estimate))/1000000));
      }
      this.breakenlist = this.currentComponent.break_even_lift;
    }
  }

  ngOnDestroy(){
    if(!isNullOrUndefined(this.nextStepSubscrption)){
      this.nextStepSubscrption.unsubscribe();
      }
  }

  ngAfterViewInit(){
    let tips: string[];
    tips = ['The user should select/filter for stores belonging to a particular channel, territory, segment and store grid (This decides the population from which the test stores should be sampled)', 'The user should enter the estimated cost impact and the annual rsv estimate to calculate the break even lift%', 'Note: If the cost impact is negative (Reduction in cost), please enter the cost impact as a negative value.'];
    setTimeout(() => {
    this.tipstoParent(tips);
    });
  }

  tipstoParent(data: any) {
    this.tipsData.emit(data);
  }

  saveData(currentComponent: any) {
    if (this.selectedRegion === 'DEMO') {
      this.Category = [];
    }
    if (this.validForm === true) {
      this.data.stepindex = 2;
      this.data.banner = this.Banner;
      this.data.segment = this.Segment;
      this.data.territory = this.Territory;
      this.data.store_grid = this.StoreGrid;
      this.data.category = this.Category;
      this.data.strfeature1 = this.strfeat1;
      this.data.strfeature2 = this.strfeat2;
      this.data.break_even_lift = this.breakenlist;
      this.data.cost = this.cost;
      this.data.rsv_estimate = this.rsv_estimate;
      this.data.is_checkconf = false;
      this.data.is_checkmarg = false;
      this.data.is_checknum = false;
      this.data.rsv_estimate = (Math.round(this.data.rsv_estimate* 1000000));
      console.log(this.data, 'RsVEstimate');
      this.homeservice.Save_stage(this.data).subscribe((apiResponse: any) => {
        if (apiResponse.status === 'ok') {
          if(!this.saveDraft && this.rtmImpact === true) {
            this.getDataValiditypoints(currentComponent);
          } else {
            if (!this.saveDraft) {
              this.moveNextStep.emit({currentComponent, data: this.data});
            }
          }
        }
      });
    }
  }

  Get_Dropdownvals() {
    this.homeservice.Get_Dropdownvals().subscribe((apiresponse: any) => {
      this.banner = [];
      this.segment = [];
      this.territory = [];
      if (apiresponse.status === 'ok') {
          apiresponse.data['territory'].sort(this.sortNumStr);
          this.banner = apiresponse.data['banner'];
          // this.segment = apiresponse.data['segment'];
          const temp_territory = apiresponse.data['territory'];
          this.territory = [];
          for (let i = temp_territory.length - 1; i >= 0; i--) {
            this.territory.push(temp_territory[i].toString());
          }
          this.territory = this.territory.sort((n1: any, n2: any) => n1 - n2);
          this.storegrid = apiresponse.data['store_grid'];
          this.filterData = apiresponse.data['filterData'];
          this.disableCustomerChain = true;
          this.filterCall();
      }
    });
  }

  sortNumStr(m: any, n: any) {
    return m - n;
  }


  onMetricSelectAll(event: any) {
    // console.log(event);
  }

  BannerShow(event: any) {
    if (event !== undefined) {
      if (event.length === 0) {
        this.bannershow = true;
      } else {
        this.bannershow = false;
      }
      this.validateDropDowns();
    }
  }

  filterCall() {
    if (this.filterData.length >0) {
      setTimeout(()=>{
        this.filterCustomerChain();
      }, 100);
    }
  }

  SegmentShow(event: any) {
    if (event !== undefined) {
      if (event.length === 0) {
        this.segmentshow = true;
      } else {
        this.segmentshow = false;
      }
      this.validateDropDowns();
    }
  }

  TerritoryShow(event: any) {
    if (event !== undefined) {
      if (event.length === 0) {
        this.territoryshow = true;
      } else {
        this.territoryshow = false;
      }
      this.validateDropDowns();
    }
  }

  StoreGridShow(event: any) {
    if (event !== undefined) {
      if (event.length === 0) {
        this.storegridshow = true;
      } else {
        this.storegridshow = false;
      }
      this.validateDropDowns();
    }
  }

  CategoryShow(event: any) {
    if (event !== undefined) {
      if (event.length === 0) {
        this.categoryshow = true;
      } else {
        this.categoryshow = false;
      }
      this.validateDropDowns();
    }
  }

  validateDropDowns(): void {
    if (this.bannershow !== undefined && this.territory !== undefined
      && this.segmentshow !== undefined && this.storegridshow !== undefined
      && !this.bannershow && this.territoryshow !== undefined
      && !this.territoryshow && !this.segmentshow && !this.storegridshow
      && ((this.rsv_estimate !== undefined && this.rsv_estimate !== '') && (this.cost !== undefined && this.cost !== '') || this.rtmImpact)
      && this.strfeat2 !== undefined) {
      this.globalService.publish('ERROR_VALIDATION', {
        valid: true
      });
      // this.strfeatmand = true;
      this.validForm = true;
    } else {
      this.strfeatmand = false;
      this.globalService.publish('ERROR_VALIDATION', {
        valid: false,
        message: 'Please fill the required fields',
        errorEnable: true
      });
    }
  }

  CurrentTest(value: any) {
  }

  onKeyup(event: any) {
    if (this.rsv_estimate !== '' || this.rsv_estimate != null) {
      this.req_rsv = true;
    }
    if ((this.rsv_estimate !== undefined && this.rsv_estimate !== '') && (this.cost !== undefined && this.cost !== '')) {
      this.CalcBreakEvenlift();
    }
    this.validateDropDowns();
  }

  CalcBreakEvenlift() {
    if (this.selectedRegion === 'DEMO') {
      this.categoryshow = false;
      this.Category = [];
    }
    if (this.selectedRegion === 'DEMO' && ((this.Banner === undefined || this.Banner.length === 0) || (this.StoreGrid === undefined || this.StoreGrid.length === 0) || (this.Territory === undefined || this.Territory.length === 0) || (this.Segment === undefined || this.Segment.length === 0))) {
      console.log('DEMO');
      this.breakenlist = '';
    }else{
      console.log('else');
      console.log(this.Banner,this.StoreGrid,this.Territory,this.Segment,this.Category);
    const dataTemp: any = {
      banners: this.Banner,
      segments: this.StoreGrid,
      territories: this.Territory,
      store_segments: this.Segment,
      categories: this.Category,
      no_of_teststores: 35,
      rsv_estimate: this.rsv_estimate * 1000000,
      cost: JSON.parse(this.cost)
    };
    console.log(dataTemp, 'dataTemp');
    this.homeservice.CalculateBreakEven(dataTemp).subscribe((apiresponse: any) => {
      this.breakenlist = apiresponse.data.toFixed(2);
    });
  }
  }

  onKeyup1(event: any) {
    if (this.cost === '' || this.cost == null || this.cost === 0) {
      this.req_cost = true;
    }
    if ((this.rsv_estimate !== undefined && this.rsv_estimate !== '') && (this.cost !== undefined && this.cost !== '')) {
      this.CalcBreakEvenlift();
    }
    this.validateDropDowns();
  }

  filterCustomerChain() {
    if (this.userRegion === 'DEMO') {
      const dataArray = this.Banner;
      const segementArray: any = [];
      if (dataArray !== undefined && dataArray.length > 0) {
        this.filterData.forEach((x: any)=>{
          const findIndex = dataArray.findIndex((y: any)=> y === x['Customer_Group']);
          if (findIndex !== -1) {
            segementArray.push(x['Customer_Chain']);
          }
        });
      }
      console.log(segementArray, 'segmentArray');
      this.segment = segementArray;
      if(segementArray.length === 0) {
        this.disableCustomerChain = true;
      } else{
        this.disableCustomerChain = false;
      }
      console.log(this.Segment, 'segement');
      if (!isNullOrUndefined(this.Segment)) {
          const check = this.segment.some((r: any)=> this.Segment.includes(r));
          if (!check) {
            this.Segment =[];
            this.segmentshow = false;
          }
        const arraySegment = this.Segment.filter((val: any) => this.segment.includes(val));
        console.log(arraySegment);
        this.Segment = arraySegment;
      }
    }
  }

  getDataValiditypoints(currentComponent: any) {
    console.log(this.data, 'dataPoins');
    const data = {
      test_id: this.data.test_id,
      prewindow_start: this.data.pretest_startdt,
      prewindow_end: this.data.pretest_enddt,
      postwindow_start: this.data.testwin_startdt,
      postwindow_end: this.data.testwin_enddt
    };
    let validPoints;
    this.homeservice.dataValidaityPoints(data).subscribe((apiresponse: any) => {
      console.log(apiresponse, 'Apiresponse');
      if (apiresponse.status === 'ok'){
        if (apiresponse.data === 1){
          if (!this.saveDraft) {
            this.moveNextStep.emit({currentComponent, data: this.data});
          }
        }
      } else if (apiresponse.status === 'not_ok'){
        this.toastr.warning(apiresponse.data);
      }
    });
  }
}
