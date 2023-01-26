import {AfterViewInit, Component, HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatStepper} from '@angular/material/stepper';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {CommonService} from '@app/shared/services/common.service';
import {isNullOrUndefined} from 'util';
import {Subscription} from 'rxjs';
import {GlobalEventsService} from '@app/shared/services/global-events.service';
import {TestMeasureService} from '@app/shared/services/testmeasure.service';
import {TestConfigService} from '@app/shared/services/testconfig.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss'],
  // animations: [slideToRightTransition]
})
export class CreateTestComponent implements OnInit, AfterViewInit, OnDestroy {
  isLinear = false;
  @ViewChild('stepper') stepper: MatStepper;
  loadComponent = 0;
  public config: PerfectScrollbarConfigInterface = {};
  height = 207;
  @ViewChild('footer') footer: any;
  previousStepSubscrption: Subscription = Subscription.EMPTY;
  controlStoreSubscrption: Subscription = Subscription.EMPTY;
  currentComponent: any;
  data: any;
  showStepper = true;
  generate_store = 'Control_Store';
  controlStore = false;
  generate_Selectstore = 'Test_storePopulation';
  testStoreToggle = true;
  tipsDataStr: any;
  completed1: boolean;
  state1: string;
  completed2: boolean;
  state2: string;
  completed3: boolean;
  state3: string;
  completed4: boolean;
  state4: string;
  hideCompraison = false;

  constructor(
    private homeService: TestConfigService,
    private testMeasureService: TestMeasureService,public commonService: CommonService,
              public globalService: GlobalEventsService) {
    this.previousStepSubscrption = this.globalService.subscribe('MOVE_PREVIOUS', obj => {
      console.log('Previous subscription');
      if (obj.module === 'CREATE_TEST') {
        this.moveControlStore();
      }
    });
    this.controlStoreSubscrption = this.globalService.subscribe('SHOW_CONTROL_STORES', obj => {
      if (obj.module === 'CREATE_TEST') {
        this.showStepper = !this.showStepper;
        this.controlStore = true;
        const testType = sessionStorage.getItem('test-type');
        console.log(testType, 'testType');
        if (testType !== undefined && testType === 'RTM Impact Test') {
          this.hideCompraison = true;
        } else {
          this.hideCompraison = false;
        }
      }
    });
  }

  ngOnInit(): void {
    const currentComponent = this.commonService.getCurrentComponentSubject();
    if (currentComponent === null) {
      this.commonService.setCurrentComponentSubject(this.loadComponent, this.data, 'other', 'NotfromEdit');
    } else if (currentComponent.edit === 'other') {
      this.commonService.setCurrentComponentSubject(null, null, 'other', 'NotfromEdit');
      window.location.reload();
    }
    setTimeout(() => {
      if (currentComponent != null && currentComponent.edit != 'other') {
        console.log(currentComponent.edit, 'currentComponent.edit');
        if (currentComponent !== null && !isNullOrUndefined(currentComponent.currentComponent) && currentComponent.currentComponent !== 0) {
          console.log(currentComponent.data);
          this.onEditNav(currentComponent.currentComponent, currentComponent.data, currentComponent.edit);
          if (currentComponent.currentComponent === 5 && currentComponent.edit === 'edit') {
            this.showStepper = false;
            this.controlStore = true;
            const testType = sessionStorage.getItem('test-type');
            console.log(testType, 'testType');
            if (testType !== undefined && testType === 'RTM Impact Test') {
              this.hideCompraison = true;
            } else {
              this.hideCompraison = false;
            }
          }
        }
      }
    }, 100);
  }

  ngAfterViewInit() {
    setTimeout(() => {
this.onResize();
});
  }


  ngOnDestroy(){
    this.testMeasureService.setControlStoreMeasurementpost(null);
    this.homeService.setTestStorePopulationSummary(null);
    this.homeService.setTestStorePopulationCorrelation(null);
    this.commonService.setCurrentComponentSubject(null,null,null,null);
    if(!isNullOrUndefined(this.previousStepSubscrption)){
    this.previousStepSubscrption.unsubscribe();
    }
    if(!isNullOrUndefined(this.controlStoreSubscrption)){
      this.controlStoreSubscrption.unsubscribe();
    }
    console.log(this.previousStepSubscrption,'this.previousStepSubscrption');
  }

  tipsDataPassed(data: any) {
    console.log(data, 'data');
    this.tipsDataStr = data;
  }

  movenext(event: any) {
    const currentComponent = this.commonService.getCurrentComponentSubject();
    console.log(event);
    console.log(currentComponent.edit);
    console.log(event);
    this.currentComponent = event.currentComponent;
    this.data = event.data;
    const stepIndex = event.data.stepindex;
    const testName = event.data.test_name;
    let movednext = 0;
    console.log(currentComponent.fromEdit);
    if (!isNullOrUndefined(this.currentComponent)) {
      console.log(this.currentComponent);
      if (this.currentComponent === 0) {
        this.completed1 = true;
        this.state1 = 'done';
      } else if (this.currentComponent === 1) {
        this.completed1 = true;
        this.state1 = 'done';
        this.completed2 = true;
        this.state2 = 'done';
      } else if (this.currentComponent === 2) {
        this.completed1 = true;
        this.state1 = 'done';
        this.completed2 = true;
        this.state2 = 'done';
        this.completed3 = true;
        this.state3 = 'done';
      }
      if (currentComponent.fromEdit === 'NotfromEdit') {
        movednext = this.currentComponent + 1;
        this.stepper.selectedIndex = this.currentComponent + 1;
        this.commonService.setCurrentComponentSubject(movednext, this.data, 'other', 'NotfromEdit');
        this.loadComponent = movednext;
      } else if (this.data.stepindex === 2) {
        movednext = this.currentComponent + 1;
        this.stepper.selectedIndex = this.currentComponent + 1;
        this.commonService.setCurrentComponentSubject(movednext, this.data, 'other', 'NotfromEdit');
        this.loadComponent = movednext;
      } else {
        movednext = this.currentComponent;
        this.stepper.selectedIndex = this.currentComponent;
        this.commonService.setCurrentComponentSubject(movednext, this.data, 'other', 'NotfromEdit');
        this.loadComponent = movednext;
      }

      console.log(this.currentComponent);
      console.log(movednext);
    }
  }

  previousStep() {
    let currentComponent: any;
    currentComponent = this.commonService.getCurrentComponentSubject();
    console.log(currentComponent, 'currentcomponent');
    // console.log(this.currentComponent);

    if (currentComponent.fromEdit === 'fromEdit') {
      if (!isNullOrUndefined(currentComponent.currentComponent) && currentComponent.currentComponent !== 0) {
        this.stepper.selectedIndex = currentComponent.currentComponent - 2;
        this.loadComponent = currentComponent.currentComponent - 2;
        this.commonService.setCurrentComponentSubject(currentComponent.currentComponent - 2, currentComponent.data, 'other', 'NotfromEdit');
      }
    } else {
      if (!isNullOrUndefined(currentComponent.currentComponent) && currentComponent.currentComponent !== 0) {
        this.stepper.selectedIndex = currentComponent.currentComponent - 1;
        this.loadComponent = currentComponent.currentComponent - 1;
        this.commonService.setCurrentComponentSubject(currentComponent.currentComponent - 1, currentComponent.data, 'other', 'NotfromEdit');
      }
    }
    if (currentComponent.currentComponent === 2) {
      this.completed3 = false;
      this.state3 = 'edit';
    } else if (currentComponent.currentComponent === 1) {
      this.completed2 = false;
      this.state2 = 'edit';
    }
  }

  stepClick(event: any) {
    this.loadComponent = event.selectedIndex;
    this.commonService.setCurrentComponentSubject(this.loadComponent, this.data, 'other', 'NotfromEdit');
    console.log(event, 'index to next stepper');
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.height = window.innerHeight - (64 + this.footer.nativeElement.offsetHeight);
  }

  changeControlState(event: any) {
    this.generate_store = event;
    this.globalService.publish('CONTROL_STORES_VIEW', {
      module: 'CREATE_TEST',
      view: this.generate_store
    });
  }

  getdisplay() {
    if (this.showStepper) {
      return 'block';
    } else {
      return 'none';
    }
  }

  moveControlStore() {
    console.log('1');
    if (!this.showStepper) {
      this.showStepper = true;
      if (!this.controlStore) {
        console.log(this.controlStore, 'controlstore');
        this.globalService.publish('HIDE_TEST_STORE_COMPRASSION', {
          module: 'CREATE_TEST'
        });
        this.generate_Selectstore = 'Test_storePopulation';
      } else {
        this.globalService.publish('HIDE_CONTROL_STORES', {
          module: 'CREATE_TEST',
          enable: false
        });
      }
    } else {
      this.previousStep();
    }
  }

  onEditNav(id: any, data: any, edit: any) {
    if (!isNullOrUndefined(id) && id < 5) {
      const movednext = id - 1;
      console.log(movednext);

      this.stepper.selectedIndex = id - 1;
      if (edit === 'edit') {
        console.log(edit);
        this.commonService.setCurrentComponentSubject(id, data, 'other', 'fromEdit');
      } else {
        console.log(edit);
        this.commonService.setCurrentComponentSubject(null, null, 'other', 'fromEdit');
      }
      this.loadComponent = movednext;
      if (id === 2) {
        this.completed1 = true;
        this.state1 = 'done';
      } else if (id === 3) {
        this.completed1 = true;
        this.state1 = 'done';
        this.completed2 = true;
        this.state2 = 'done';
      } else if (id === 4) {
        this.completed1 = true;
        this.state1 = 'done';
        this.completed2 = true;
        this.state2 = 'done';
        this.completed3 = true;
        this.state3 = 'done';
      }
    } else {
      const movednext = id - 1;
      this.showStepper = false;
      this.loadComponent = movednext;
    }
  }

  showComprassionview(event: any) {
    console.log(event, 'event changes');
    this.showStepper = !event;
    this.getdisplay();
  }

  changeTestStores(event: any, toggle: boolean) {
    this.testStoreToggle = toggle;
    this.generate_Selectstore = event;
  }
}
