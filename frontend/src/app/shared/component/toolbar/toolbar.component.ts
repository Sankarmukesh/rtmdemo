import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import { LoginService } from '@app/login/login.service';
import { CommonService } from '@app/shared/services/common.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy  {
  @Input() sidenav: any;
  @Input() sidebar: any;
  @Input() drawer: any;
  @Input() matDrawerShow: any;

  searchOpen = false;
  searchDisplay: boolean;
  createNewTest: boolean;
  keyword = 'test_name';
  public testData: any = [];
  notificationData: any = [];
  subscription: Subscription;
  notificationsLength = 0;
  loggedUser = localStorage.getItem('username');

  constructor(public router: Router,
    private HeaderService: LoginService,
    private commonService: CommonService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart || event instanceof  NavigationEnd) {
        if (event.url !== '') {
          const url = event.url.split('/');
          if (url[1] === 'createTest') {
            this.createNewTest = true;
            this.searchDisplay = false;
          } else if (url[1] === 'dashboard') {
            this.searchDisplay = true;
            this.createNewTest = false;
          }else if (url[1] === 'analyseImpact') {
            this.searchDisplay = false;
            this.createNewTest = false;
          }
        }
      }
    });
  }


  ngOnInit() {
    this.loadNotification();
    this.subscription = timer(0, 600000).pipe(
      switchMap(() => this.commonService.getNotification())
    ).subscribe(result => this.notificationData = result.data);
  }

  ngOnDestroy() {
    if (!isNullOrUndefined(this.subscription)) {
    this.subscription.unsubscribe();
    }
  }

  loadNotification() {
    this.commonService.getNotification().subscribe((response: any) => {
      if(response.status == 'ok') {
        this.notificationData = response.data;
        this.notificationsLength = this.notificationData.length;
      }
    });
  }

  dateConvert(time: any) {
    return new Date(time*1000);
  }

  markReadNotification(test_ids: any) {
    const data = {
      test_ids
    };
    this.commonService.markReadNotification(data).subscribe(response => {
      if(response.status = 'ok') {
        this.loadNotification();
      }
    });
  }

  markAllAsRead() {
    const test_ids = this.notificationData.map((x: any) => x.test_id.trim());
    this.markReadNotification(test_ids);
  }

  markAsRead(test_id: any) {
    const test_ids: any = [];
    test_ids.push(test_id);
    this.markReadNotification(test_ids);
    const item = {
      test_id
    };
    this.selectEvent(item);
  }

  //notificationData = [{"notification":"Admin made an edit to NLTestPlan","date":"3 hours ago","imageshow":"true"},{"notification":"WeeklyTargetVarCheck is completed. Have a look at the results here.","date":"3 hours ago","imageshow":"false"},{"notification":"TestingAutomation is completed. Have a look at the results here.","date":"3 hours ago","imageshow":"false"},{"notification":"User made an edit to NLTest102","date":"3 hours ago","imageshow":"true"}];

  selectEvent(item: any) {
    //this.Get_Dropdownvals();
    const edit = 'edit';
    this.commonService.Get_Editvalues(item.test_id).subscribe((apiresponse: any) => {
      console.log('apiresponse.data.stepper_id',apiresponse.data.stepper_id);
      if (apiresponse.status == 'ok') {
          localStorage.setItem('category', apiresponse.data['category_name']);
          if (apiresponse.data.stepper_id < 6) {
            const stepperID = apiresponse.data.stepper_id;
            const data = apiresponse.data;
            console.log(stepperID);
            this.commonService.setCurrentComponentSubject(stepperID, data,edit,'fromEdit');
            this.router.navigate(['./createTest']);
          } else if (apiresponse.data.stepper_id >= 6) {
            console.log(apiresponse.data.test_name);
            localStorage.setItem('testname', apiresponse.data.test_name);
            this.router.navigate(['./analyseImpact']);
          }
      }
    });
    console.log('New String', item);
  }

  onChangeSearch(search: string) {
    this.commonService.globalSearch(search).subscribe((response: any) => {
      if(response.status == 'ok') {
        this.testData = response.data;
      }
    });
  }

  onFocused(e: any) {
    // do something
  }

  logoutFunction(){
    console.log('calling_logout');
    this.HeaderService.Logoutuser().subscribe((apiresponse: any) => {
      localStorage.clear();
      if (apiresponse.status == 'ok') {
        localStorage.clear();
      // window.location.href = './login?status=logout';
        this.router.navigate(['login']);
      } else {
      }
    });
  }

}
