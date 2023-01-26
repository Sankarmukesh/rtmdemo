import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { GlobalEventsService } from '@app/shared/services/global-events.service';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {
  @Input() currentComponent = 0;
  @Input() data: any;
  isDisabled = false;
  nextStepSubscrption: Subscription = Subscription.EMPTY;
  errorMessage = '';
  errorEnable = false;
  analyseTest: boolean;
  createTest: boolean;
  generateTest: boolean;
  recomputeButton = false;
  initiateEnable = false;
  initaeButton: Subscription = Subscription.EMPTY;
  errorStepSubscrption: Subscription = Subscription.EMPTY;
  isRTMImpactTest = false;
  isDisabledGenerate = false;

  constructor(public globalService: GlobalEventsService, public router: Router) {
    console.log(this.nextStepSubscrption, 'next Subscription');
    this.errorStepSubscrption = this.globalService.subscribe('ERROR_VALIDATION', obj => {
      console.log(obj, 'object valif');
      this.isDisabled = obj.valid;
      this.errorMessage = obj.message;
      this.errorEnable = obj.errorEnable;
    });

    this.nextStepSubscrption = this.globalService.subscribe('ENABLE_GENERATE_BUTTON', obj => {
      if (obj.module === 'SELECT_TEST_STORES') {
        this.generateTest = obj.enable;
        this.isDisabledGenerate = obj.disable;
      }
    });

    this.initaeButton = this.globalService.subscribe('SHOW_HIDE_INITIATE_BUTTON', obj => {
      if (obj.module === 'CONTROL_STORES_SUMMARY') {
        this.initiateEnable = obj.enable;
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
        if (event.url !== '') {
          const url = event.url.split('/');
          if (url[1] === 'createTest') {
            this.createTest = true;
            this.analyseTest = false;
          } else if (url[1] === 'analyseImpact') {
            this.createTest = false;
            this.analyseTest = true;
          }
        }
      }
    });
    this.nextStepSubscrption = this.globalService.subscribe('SHOW_RECOMPUTE_BUTTON', obj => {
      console.log('call Generate button');
      if (obj.module === 'CREATE_TEST') {
        this.recomputeButton = obj.show;
        if(sessionStorage.getItem('test-type') === 'RTM Impact Test') {
          this.isRTMImpactTest = true;
        }
        if (obj.hasOwnProperty('initiateButton')) {
          this.generateTest = !obj.initiateButton;
          this.initiateEnable = obj.initiateButton;
        }
      }
    });
  }

  ngOnInit(): void {

  }


  ngOnDestroy(){
    if (!isNullOrUndefined(this.nextStepSubscrption)) {
      this.nextStepSubscrption.unsubscribe();
    }
    if (!isNullOrUndefined(this.initaeButton)) {
      this.initaeButton.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  movePrevious() {
    this.globalService.publish('MOVE_PREVIOUS', {
      module: 'CREATE_TEST'
    });
  }

  moveNext(saveDraftBoolean: boolean) {
    console.log(this.data, this.currentComponent, 'currentComponent');
    if (this.currentComponent === 0) {
      this.globalService.publish('MOVE_NEXT_TEST_DETAILS', {
        module: 'CREATE_TEST',
        currentComponent: this.currentComponent,
        saveDraft: saveDraftBoolean,
      });
    }
    if (this.currentComponent === 1) {
      this.globalService.publish('MOVE_NEXT_APPLICABILITY_CRITERIA', {
        module: 'CREATE_TEST',
        currentComponent: this.currentComponent,
        data: this.data,
        saveDraft: saveDraftBoolean
      });
    }
    if (this.currentComponent === 2) {
      this.globalService.publish('MOVE_NEXT_SELECT_TEST_STORES', {
        module: 'CREATE_TEST',
        currentComponent: this.currentComponent,
        data: this.data,
        saveDraft: saveDraftBoolean
      });
    }
    if (this.currentComponent === 3 || this.currentComponent === 4) {
      this.globalService.publish('MOVE_NEXT_CONTROL_STORES', {
        module: 'CREATE_TEST',
        currentComponent: this.currentComponent,
        data: this.data,
        saveDraft: saveDraftBoolean,
        initate: false
      });
    }
  }

  saveDraft() {
    this.moveNext(true);
  }

  moveGenerate() {
    let controlFeature = 'SUGGESTED_BY_TOOL';
    const checkType = sessionStorage.getItem('control_feature');
    if (!isNullOrUndefined(checkType) && (checkType === '2' || checkType === '3')){
      controlFeature = 'FILE_UPLOAD';
    }
    this.globalService.publish('SHOW_CONTROL_STORES', {
      module: 'CREATE_TEST',
      method: controlFeature,
      enable: true
    });
  }

  recompute() {
    this.globalService.publish('CALL_RECOMPUTE_METHOD', {
      module: 'CREATE_TEST',
    });
  }

  initateTest() {
    this.globalService.publish('MOVE_NEXT_CONTROL_STORES', {
      module: 'CREATE_TEST',
      currentComponent: this.currentComponent,
      data: this.data,
      saveDraft: false,
      initate: true
    });
  }
}
