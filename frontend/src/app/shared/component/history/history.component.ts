import { Component} from '@angular/core';
import { CommonService } from '@app/shared/services/common.service';
import { GlobalEventsService } from '@app/shared/services/global-events.service';
import { SidenavService } from '@app/shared/services/sidenav.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  historyDetailsData: any;

  constructor(private commonService: CommonService,
    private sideNavService: SidenavService,
    private globalService: GlobalEventsService) {
    this.globalService.subscribe('history_id', obj => {
      console.log('Event triggered', obj);
      this.commonService.getHistoryDetails(obj).subscribe(response => {
        if (response.status === 'ok') {
          this.historyDetailsData = response.data;
          console.log('this.historyDetailsData-> ', this.historyDetailsData);
        }
      });
    });
  }

  getInitials(name: string){
    const initials = name.split(' ');
    const profileInitial = initials[0].charAt(0).toUpperCase()+initials[1].charAt(0).toUpperCase();
    return profileInitial;
  }

  toggleClose(){
    this.sideNavService.close();
  }

  dateConvert(value: any) {
    console.log(new Date(value*1000).toLocaleString());
    console.log(value);
    console.log(new Date(value*1000));
    const myDate =  new Date(value*1000);
    return myDate;
  }

}
