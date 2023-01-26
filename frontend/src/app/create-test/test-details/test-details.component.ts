import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  FormControl,
  NgForm
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TooltipPosition } from '@angular/material/tooltip';
import { CommonService } from '@app/shared/services/common.service';
import { GlobalEventsService } from '@app/shared/services/global-events.service';
import { TestConfigService } from '@app/shared/services/testconfig.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent implements OnInit, AfterViewInit {

  public market: any = [];
  public plantest: any[] = ['RSV', 'Volume'];
  public typetest: any[] = ['Frequency Test', 'Duration Test', 'Activity Test', 'Others'];
  nextStepSubscrption: Subscription = Subscription.EMPTY;
  testNameSubscrption: Subscription = Subscription.EMPTY;
  getDateSubscription: Subscription = Subscription.EMPTY;
  saveStageSubsription: Subscription = Subscription.EMPTY;
  getDurationOfWeeksSubscription: Subscription = Subscription.EMPTY;
  testDetailsValue = {
    TestName: '',
    TypeTest: '',
    TargetVariable: '',
    Description: '',
    AddDetails: '',
    TestID: '',
  };
  testNameValid = false;
  typeTestValid = false;
  targetValid = false;
  posttestValid = false;
  pretestValid = false;
  duplicateTestName = false;
  positionOptions: TooltipPosition[] = [];
  position: any;
  pretestFromDate: any;
  pretestToDate: any;
  posttestFromDate: any;
  posttestToDate: any;
  pretest: Date[];
  posttest: Date[];
  testId: any;
  user_name: string;
  userRegion: any;
  minPreTest: Date;
  maxPreTest: Date;
  minPostTest: Date;
  maxPostTest: Date;
  saveDraft = false;
  preDays: number;
  postDays: number;
  dateValid: boolean;
  currentComponent: any;
  preTestMessage = 'Pre-test weeks should be 4 - 30 weeks';
  postTestMessage = 'Pre-test weeks should be 4 - 30 weeks';
  @Output() tipsData: EventEmitter<any> = new EventEmitter<any>();
  @Output() moveNextStep = new EventEmitter<any>();
  @ViewChild('testDetails') public testDetails: NgForm;
  @ViewChild('content') private content: any;

  constructor(
    private homeservice: TestConfigService,
    public toastr: ToastrService,
    public globalService: GlobalEventsService,
    private commonService: CommonService,
    private cdr: ChangeDetectorRef
  ) {
    this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
    this.position = new FormControl(this.positionOptions[0]);
    this.nextStepSubscrption = this.globalService.subscribe('MOVE_NEXT_TEST_DETAILS', obj => {
      if (obj.module === 'CREATE_TEST' && obj.currentComponent === 0) {
        this.saveDraft = obj.saveDraft;
        this.getValidate();
      }
    });
    this.getDateRange();
  }

  ngOnInit() {

    this.user_name = localStorage.getItem('username');
    this.userRegion = sessionStorage.getItem('region');
    this.currentComponent = this.commonService.getCurrentComponentSubject().data;
    if (this.currentComponent !== undefined) {
      this.testDetailsValue.TestName = this.currentComponent.test_name;
      this.testDetailsValue.TypeTest = this.currentComponent.test_type;
      this.testDetailsValue.TargetVariable = this.currentComponent.target_variable;
      this.testDetailsValue.Description = this.currentComponent.desc;
      this.testDetailsValue.AddDetails = this.currentComponent.additional_det;
      this.testDetailsValue.TestID = this.currentComponent.test_id;
      this.testId = this.currentComponent.test_id;
      setTimeout(() => {
        this.pretest = [new Date(this.currentComponent.pretest_startdt), new Date(this.currentComponent.pretest_enddt)];
      });
      setTimeout(() => {
        this.posttest = [new Date(this.currentComponent.testwin_startdt), new Date(this.currentComponent.testwin_enddt)];
      });
    }
  }

  ngOnDestroy(){
    if(!isNullOrUndefined(this.nextStepSubscrption)){
      this.nextStepSubscrption.unsubscribe();
      }if(!isNullOrUndefined(this.testNameSubscrption)){
        this.testNameSubscrption.unsubscribe();
        }if(!isNullOrUndefined(this.getDateSubscription)){
          this.getDateSubscription.unsubscribe();
          }if(!isNullOrUndefined(this.saveStageSubsription)){
            this.saveStageSubsription.unsubscribe();
            }if(!isNullOrUndefined(this.getDurationOfWeeksSubscription)){
              this.getDurationOfWeeksSubscription.unsubscribe();
              }
  }


  ngAfterViewInit() {
    if (this.currentComponent === undefined) {
      this.getValidate();
    }
    const tips = ['On average, a user takes 15 mins to design a test and launch it', 'Make sure that your test plan is communicated between your team', 'Your test stores should be communicated in advance before you run a test', 'The user can enter details on the type of test, the target variable to perform the test on, the pre-test window and the post-test window'];
    setTimeout(() => {
      this.tipstoParent(tips);
    });
    this.cdr.detectChanges();
  }

  tipstoParent(data: any) {
    console.log(data, 'data');
    this.tipsData.emit(data);
  }

  checkTypeOfTest(event: any) {
    console.log(event[0].value, 'event');
    console.log(this.testDetailsValue.TypeTest, 'this.testDetailsValue.TypeTest');
    if (event[0].value === 'RTM Impact Test' || this.testDetailsValue.TypeTest === 'RTM Impact Test') {
      this.pretest = [];
      this.posttest = [];
      this.preDays = undefined;
      this.dateValid = false;
      this.pretestValid = false;
      this.postDays = undefined;
      this.posttestValid = false;
    }
  }

  checkTestName() {

    this.testDetailsValue.TypeTest = '';
    this.testDetailsValue.TargetVariable = '';
    this.testDetailsValue.Description = '';
    this.testDetailsValue.AddDetails = '';
    this.pretest = [];
    this.posttest = [];
    this.preDays = undefined;
    this.dateValid = false;
    this.pretestValid = false;
    this.postDays = undefined;
    this.posttestValid = false;

    const data = { testname: this.testDetailsValue.TestName.trim() };
    if (this.testDetailsValue.TestName.trim() !== '') {
      this.testNameSubscrption = this.homeservice.getTestName(data).subscribe((apiresponse: any) => {
        if (apiresponse.status === 'ok') {
          if (apiresponse.data.length > 0) {
            this.duplicateTestName = true;
            this.globalService.publish('ERROR_VALIDATION', {
              valid: false,
              message: 'Duplicate Test Name are not Allowed',
              errorEnable: this.duplicateTestName
            });
          } else if (this.duplicateTestName) {
            this.duplicateTestName = false;
            this.globalService.publish('ERROR_VALIDATION', {
              valid: false,
              message: 'Duplicate Test Name are not Allowed',
              errorEnable: this.duplicateTestName
            });
          }
        } else {
          this.duplicateTestName = false;
        }
      });
    } else {
      this.duplicateTestName = false;
    }
    if (this.testDetailsValue.TestName.trim() === '') {
      this.globalService.publish('ERROR_VALIDATION', {
        valid: false,
        message: 'Test Name Field is Required',
        errorEnable: true
      });
    }
    this.formChange();
  }

  formChange() {
    console.log(this.testDetails.valid, 'valid or not');
    if (this.testDetails.valid && !this.pretestValid && !this.posttestValid
      && this.pretest && this.posttest && !this.duplicateTestName) {
      this.globalService.publish('ERROR_VALIDATION', {
        valid: this.testDetails.valid
      });
    } else {
      this.globalService.publish('TEST_DETAILS_COMPONENT', {
        valid: false
      });
    }
  }

  getValidate() {
    if (this.testDetails.valid && !this.duplicateTestName) {
      const valid = true;
      const currentComponent = this.commonService.getCurrentComponentSubject().currentComponent;
      if (valid) {
        if (currentComponent !== null && this.testDetailsValue.TestName !== '') {
          this.saveData(currentComponent);
        } else {
          this.globalService.publish('ERROR_VALIDATION', {
            valid: false,
            errorEnable: false
          });
        }
      }
    }
  }

  getDateRange() {
    this.getDateSubscription = this.commonService.Get_Date().subscribe(response => {
      if (response.status === 'ok') {
        this.minPreTest = new Date();
        this.maxPreTest = new Date();
        this.minPreTest.setUTCFullYear(parseInt(response.data.startdate));
        this.minPreTest.setUTCMonth(0);
        this.minPreTest.setUTCDate(1);
        this.maxPreTest.setUTCFullYear(parseInt(response.data.enddate));
        this.maxPreTest.setUTCMonth(11);
        this.maxPreTest.setUTCDate(31);
        this.minPostTest = new Date();
        this.minPostTest.setUTCFullYear(parseInt(response.data.startdate));
        this.minPostTest.setUTCMonth(0);
        this.minPostTest.setUTCDate(1);
      }
    });
  }

  onChange(event: any) {
  }

  pretestDate(event: any) {
    this.pretestFromDate = event[0].toJSON().split('T')[0];
    this.pretestToDate = event[1].toJSON().split('T')[0];
    this.posttest = null;
    this.postDays = undefined;
    this.dateValid = false;
    this.posttestValid = false;
    const start_year = event[0].getFullYear();
    const start_month = event[0].getMonth();
    const start_day = event[0].getDate();
    const end_year = event[1].getFullYear();
    const end_month = event[1].getMonth();
    const end_day = event[1].getDate();
    this.preDays = undefined;
    const reqData: any = {
      start_year,
      start_month: start_month + 1,
      start_day,
      end_year,
      end_month: end_month + 1,
      end_day
    };
    this.getDurationOfWeeksSubscription = this.homeservice.getDurationOfWeeks(reqData).subscribe((apiResponse: any) => {
      if (apiResponse.status === 'ok') {
        this.preDays = parseInt(apiResponse.data.interval);
        if (this.preDays > 0) {
          this.dateValid = true;
        } else {
          this.dateValid = false;
          this.preDays = 0;
        }
        this.pretestValid = false;
        if (this.preDays < 4 || this.preDays > 53) {
          this.pretestValid = true;
          this.preTestMessage = 'Pre-test weeks should be 4 - 53 weeks';
        } else {
          this.pretestValid = false;
        }
        this.minPostTest = new Date(this.pretestToDate);
        const date = new Date(this.incrementDate(this.minPostTest));
        this.minPostTest.setUTCFullYear(date.getFullYear());
        this.minPostTest.setUTCMonth(date.getMonth());
        this.minPostTest.setUTCDate(date.getDate());
        console.log(date, 'finale update date', this.minPostTest);
      } else {
        this.preDays = undefined;
        this.dateValid = false;
        this.pretestValid = false;
      }
      this.minPostTest = new Date(this.pretestToDate);
      const date = new Date(this.incrementDate(this.minPostTest));
      this.minPostTest.setUTCFullYear(date.getFullYear());
      console.log(date.getMonth(), 'getmonth', this.minPostTest.setUTCMonth(date.getMonth()));
      this.minPostTest.setMonth(date.getMonth());
      this.minPostTest.setUTCDate(date.getDate());
      this.formChange();
    });

  }

  posttestDate(event: any) {
    if (event != null) {
      this.posttestFromDate = event[0].toJSON().split('T')[0];
      this.posttestToDate = event[1].toJSON().split('T')[0];
      const start_year = event[0].getFullYear();
      const start_month = event[0].getMonth();
      const start_day = event[0].getDate();
      const end_year = event[1].getFullYear();
      const end_month = event[1].getMonth();
      const end_day = event[1].getDate();
      const reqData: any = {
        start_year,
        start_month: start_month + 1,
        start_day,
        end_year,
        end_month: end_month + 1,
        end_day
      };
      this.getDurationOfWeeksSubscription = this.homeservice.getDurationOfWeeks(reqData).subscribe((apiResponse: any) => {
        if (apiResponse.status === 'ok') {
          this.postDays = parseInt(apiResponse.data.interval);
          if (this.postDays > 0) {
            this.dateValid = true;
          } else {
            this.dateValid = false;
            this.postDays = 0;
          }
          this.posttestValid = false;
          if (this.preDays < 4 || this.preDays > 53) {
            this.posttestValid = true;
            this.postTestMessage = 'Post-test weeks should be 4-53 weeks';
          } else {
            this.posttestValid = false;
          }
        }
        this.formChange();
      });
    }
  }

  saveData(currentComponent: any) {
    const data = {
      test_name: this.testDetailsValue.TestName,
      test_type: this.testDetailsValue.TypeTest,
      target_variable: this.testDetailsValue.TargetVariable,
      desc: this.testDetailsValue.Description,
      additional_det: this.testDetailsValue.AddDetails,
      pretest_startdt: this.pretestFromDate,
      pretest_enddt: this.pretestToDate,
      testwin_startdt: this.posttestFromDate,
      testwin_enddt: this.posttestToDate,
      stepindex: 1,
      stage_id: 1,
      test_id: this.testDetailsValue.TestID
    };
    localStorage.setItem('TargetVariableValue', this.testDetailsValue.TargetVariable);
    sessionStorage.setItem('test-type', this.testDetailsValue.TypeTest);
    this.saveStageSubsription = this.homeservice.Save_stage(data).subscribe((apiresponse: any) => {
      if (apiresponse.status === 'ok') {
        if (this.testId === '' || this.testId === undefined || this.testId === 'undefined') {
          if (this.saveDraft) {
            this.testDetailsValue.TestID = apiresponse.data;
          }
          this.testId = apiresponse.data;
        } else {
          this.testId = this.testId;
        }
        data.test_id = this.testId;
        if (!this.saveDraft) {
          this.moveNextStep.emit({ currentComponent, data });
        }
      }
    });
  }

  incrementDate(date_str: any) {
    const date = new Date(date_str);
    const next_date: any = new Date(date.setDate(date.getDate() + 1));
    return next_date.getFullYear() + '-' + (next_date.getMonth() + 1) + '-' + next_date.getDate();
  }
}

