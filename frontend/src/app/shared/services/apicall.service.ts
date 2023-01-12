import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject, Subscriber, Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  private total = new BehaviorSubject<any>(0);
  mediaUrl: any = 'assets/images/';
  defaultMenuPic: any;

  constructor(private http: HttpClient) {
  }

  get total$() {
    return this.total.asObservable();
  }

  updatedProfile() {
    this.total.next(this.printProfilePic());
  }

  printProfilePic() {
    const data = localStorage.getItem('regionPic');
    return data;
  }

  updatedProfileFmSession() {
    this.total.next(this.printProfilePicFmSession());
  }

  printProfilePicFmSession() {
    const data = sessionStorage.getItem('regionPic');
    return data;
  }

}
