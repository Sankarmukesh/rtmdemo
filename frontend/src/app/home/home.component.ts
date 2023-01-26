import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Subscription} from 'rxjs';
import {MediaObserver} from '@angular/flex-layout';
import {SidenavService} from '@app/shared/services/sidenav.service';
import {isNullOrUndefined} from 'util';
import {mainContentAnimation} from '@app/shared/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    mainContentAnimation(),
  ]
})
export class HomeComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() isVisible = true;
  visibility = 'shown';

  sideNavOpened = true;
  matDrawerOpened = false;
  matDrawerShow = true;
  sideNavMode = 'side';
  sidebarState: string;
  filterMode = 'over';
  toggleData = false;
  current_component_show = '';
  @ViewChild('filterSidenav') filterSidenav: MatSidenav;
  sideNavSubscription: Subscription = Subscription.EMPTY;
  constructor(private media: MediaObserver, private commonService: SidenavService) {
    if (!isNullOrUndefined(this.sideNavSubscription)) {
      this.sideNavSubscription.unsubscribe();
    }
    this.sideNavSubscription = this.commonService.getCurrentSidenav().subscribe((result)=>{
      console.log(result, 'resultValue');
      if(!isNullOrUndefined(result)){
        this.current_component_show = result;
      }
    });
    console.log(this.current_component_show, 'current component changes');
  }

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  ngOnInit() {
    this.media.asObservable().subscribe(() => {
      this.toggleView();
    });

    this.commonService.sidebarStateObservable$
      .subscribe((newState: string) => {
        this.sidebarState = newState;
      });
  }

  ngAfterViewInit(){
    this.commonService.setSidenav(this.filterSidenav);
    // this.commonService.setSidenavHistory(this.filterSidenav2);
  }

  ngOnDestroy(){
    if (!isNullOrUndefined(this.sideNavSubscription)) {
      this.sideNavSubscription.unsubscribe();
    }
  }

  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
      this.matDrawerOpened = false;
      this.matDrawerShow = true;
    } else if (this.media.isActive('gt-xs')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = false;
      this.matDrawerOpened = true;
      this.matDrawerShow = true;
    } else if (this.media.isActive('lt-sm')) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
      this.matDrawerOpened = false;
      this.matDrawerShow = false;
    }
  }

  toggleFilter(data: any){
    if (!this.toggleData) {
      this.toggleData = true;
      this.filterSidenav.open();
    }
  }
}
