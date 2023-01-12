import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CommonService {

  public $savedata: BehaviorSubject<any> = new BehaviorSubject(null);
  public $savedateRange: BehaviorSubject<any> = new BehaviorSubject(null);
  public $currentComponent: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public $setTestStores: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public $filteredData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public $reportData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public $excelData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient) {
    console.log('calling service');
  }

  getHistoryDetails(id: any): Observable<any> {
    return this.httpClient.get('api/history_details/'+id);
  }

  globalSearch(keyword: any): Observable<any> {
    const param: any = {searchKey: keyword};
    return this.httpClient.get('api/search', {params: param});
  }

  getNotification(): Observable<any> {
    return this.httpClient.get('api/get_notification');
  }

  markReadNotification(data: any): Observable<any> {
    return this.httpClient.post('api/mark_read_notification', data);
  }

  getLastTestCompleted(): Observable<any> {
    return this.httpClient.get('api/last_test_completed');
  }

  Get_Editvalues(id: any) {
    console.log('id',id);
    // if (this.$savedata.value !== null) {
    //   return this.getSavedDataSubject();
    // } else {
      return this.httpClient
        .get('api/load_savetest/' + id, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .pipe(
          map((body: any) => {
            if (body) {
              this.setSavedDataSubject(body);
              return body;
            } else {
              return {};
            }
          }),
          catchError(() => of([]))
        );
    // }
  }

  Get_Date() {
    if (this.$savedateRange.value !== null) {
      return this.getSaveddDateRange();
    } else {
      return this.httpClient.get('api/date_range').pipe(
        map((body: any) => {
          if (body) {
            this.setSavedDateRange(body);
            return body;
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
    }
  }

  getSavedDataSubject(): Observable<any> {
    return this.$savedata;
  }

  setSavedDataSubject(data: any) {
    this.$savedata.next(data);
  }

  getSaveddDateRange(): Observable<any> {
    return this.$savedateRange;
  }

  setSavedDateRange(data: any) {
    this.$savedateRange.next(data);
  }

  getEditValues(id: any) {
    if (this.$savedata.value === null) {
      this.httpClient.get('api/load_savetest/' + id, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe((data: any) => {
        this.setSavedDataSubject(data);
      });
    }
  }

  getAuditlog() {
    return this.httpClient
      .get('api/getaudit_logdata', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .pipe(
        map((body: any) => {
          if (body) {
            return body;
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
  }

  getCurrentComponentSubject() {
    return this.$currentComponent.value;
  }

  setCurrentComponentSubject(currentComponent: any, data: any ,edit: any,fromEdit: any) {
    this.$currentComponent.next({currentComponent, data, edit,fromEdit});
  }


  setTestStoresFilter(data: any){
    this.$setTestStores.next(data);
  }

  getTestStoresFilter(): Observable<any> {
    return this.$setTestStores;
  }

  setFilterSubject(data: any){
    console.log();
    this.$filteredData.next(data);
  }

  getFilteredData(): Observable<any> {
    return this.$filteredData.value;
  }

  setReportData(data: any){
    this.$reportData.next(data);
  }

  getReportData() {
    return this.$reportData.value;
  }

  setExcelData(data: any) {
    return this.$excelData.next(data);
  }

  getExcelData() {
    return this.$excelData.value;
  }
}
