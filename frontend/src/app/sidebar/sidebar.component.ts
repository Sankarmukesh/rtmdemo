import {Component, OnInit} from '@angular/core';
import {SidenavService} from '@app/shared/services/sidenav.service';
import {sidebarAnimation, iconAnimation, labelAnimation} from '@app/shared/animations/animations';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {GlobalEventsService} from '@app/shared/services/global-events.service';
import {CommonService} from '@app/shared/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    sidebarAnimation(),
    iconAnimation(),
    labelAnimation(),
  ]
})
export class SidebarComponent implements OnInit {
  sidebarState: string;
  config = {
    search: false,
    height: 'auto',
    placeholder: 'Select',
  };
  itemId: any;
  routeLinkactive = 'dashboard';
  public region: any[] = [];
  selectedRegion = 'DEMO';
  selectedCountryCode = '';
  inActiveText = '';
  selectedCountryFlag = 'assets/images/flag.png';

  constructor(private sidebarService: SidenavService, public router: Router,
              public globalService: GlobalEventsService, public commonService: CommonService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
        if (event.url !== '') {
          const url = event.url.split('/');
          this.changeActive(url[1]);
        }
      }
    });
  }

  ngOnInit() {
    this.sidebarService.sidebarStateObservable$.subscribe((newState: string) => {
      this.sidebarState = newState;
      // this.selectCountryCode();
    });
    const regionList = JSON.parse(localStorage.getItem('dropdown_value'));
    console.log(regionList, 'regionlist');
    if (regionList !== undefined && regionList.length > 0) {
      for (let i = 0; i < regionList.length; i++) {
        const dataValue = this.getFlagValue(regionList[i]['region_code']);
        const classValue = dataValue['class'];
        const flagValue = dataValue['image'];
        this.region.push({
          name: regionList[i]['region_name'],
          code: regionList[i]['region_code'],
          flag: flagValue,
          class: classValue
        });
      }
    }
    const selectedData = localStorage.getItem('region');
    if (selectedData !== undefined) {
      const data = this.region.findIndex(x => x.code === selectedData);
      console.log(data, 'data');
      if (data !== -1) {
        this.selectedRegion = this.region[data]['name'];
        this.selectedCountryCode = this.region[data]['code'];
      }
    }
  }

  toggleSideNav() {
    this.sidebarService.toggle();
  }

  changeActive($event: any) {
    console.log($event);
    if ($event === 'dashboard') {
      // this.commonService.setCurrentComponentSubject(null, null);
      localStorage.setItem('testname', '');
    } else if ($event === 'createTest') {
      localStorage.setItem('testname', '');
    } else if ($event === 'analyseImpact') {
      // this.commonService.setCurrentComponentSubject(null, null);
    }

    this.routeLinkactive = $event;
  }

  getFlagValue(eventCode: any) {
    const flagData = {image: '', class: ''};
    if (eventCode === 'DEMO') {
      flagData.image = 'assets/images/flag_' + eventCode + '.png';
      flagData.class = 'img_width';
    }
    return flagData;
  }

  changeRegion(region: any) {
    const filteredvalue = this.region.filter(x => x.name === region);
    console.log(filteredvalue);
    if (filteredvalue.length > 0) {
      sessionStorage.setItem('region', filteredvalue[0].code);
      localStorage.setItem('region', filteredvalue[0].code);
      window.location.href = './dashboard';
    }
  }

}
