import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidebarState = 'open';
  private filterSidebar = false;
  private sidebarStateChanged$ = new BehaviorSubject<string>(this.sidebarState);
  public sidebarStateObservable$ = this.sidebarStateChanged$.asObservable();
  public $sideBarState: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  private sidenav: MatSidenav;
  public sideNavComponent: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    this.sidebarStateChanged$.next('open');
    this.$sideBarState.next(false);
  }

  toggle() {
    this.sidebarState = this.sidebarState === 'open' ? 'close' : 'open';
    this.sidebarStateChanged$.next(this.sidebarState);
  }


  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }


  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggleFilter(componentName: any): void {
    this.sidenav.toggle();
    this.sideNavComponent.next(componentName);
  }

  getCurrentSidenav(): Observable<any> {
    console.log(this.sideNavComponent.value, 'service sidenav');
    return this.sideNavComponent;
  }

}
