import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ControlStoreService {

  public $record_list: BehaviorSubject<any> = new BehaviorSubject(null);
  public $selected_list: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

  LoadSavedTest(data: any) {
    return this.httpClient
      .post('GetAllSavedData', {
        data
      })
      .pipe(
        map((body: any) => {
          if (body) {
            if (body) {
              return body;
            } else {
              return {};
            }
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
  }

  GetWeeks(data: any) {
    return this.httpClient.post('Get_weeks', data).pipe(
      map((body: any) => {
        if (body) {
          if (body) {
            return body;
          } else {
            return {};
          }
        } else {
          return {};
        }
      }),
      catchError(() => of([]))
    );
  }

  SaveStageTwo(data: any, stringified_data: any) {
    return this.httpClient
      .post('Update_storedata', {
        data,
        stringified_data
      })
      .pipe(
        map((body: any) => {
          if (body) {
            if (body) {
              return body;
            } else {
              return {};
            }
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
  }

  GetSelectedStores(id: any) {
    console.log(this.$selected_list, 'calling the selectedList');
    if(this.$selected_list.value !== null){
      return this.getSavedselected();
    } else {
      console.log('calling the selectedList else');
      return this.httpClient.get('api/get_currenttest/' + id).pipe(
        map((body: any) => {
          if (body) {
            this.setSavedselected(body);
            return body;
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
    }
  }

  GetControlSummary(data: any) {
    return this.httpClient
      .post('api/controlstore_summary', {
        data
      })
      .pipe(
        retry(2),
        map((body: any) => {
          if (body) {
            if (body) {
              return body;
            } else {
              return {};
            }
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
  }

  GetStores_list(data: any) {
    return this.httpClient
      .post('api/getSelectedStores', {
        data
      })
      .pipe(
        map((body: any) => {
          if (body) {
            if (body) {
              return body;
            } else {
              return {};
            }
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
  }

  Recompute(data: any) {
    return this.httpClient
      .post('api/recompute_controlstore', {
        data
      })
      .pipe(
        map((body: any) => {
          if (body) {
            if (body) {
              return body;
            } else {
              return {};
            }
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
  }

  Recompute_Aus(data: any) {
    return this.httpClient
      .post('api/recompute_controlstore_aus', {
        data
      })
      .pipe(
        map((body: any) => {
          if (body) {
            if (body) {
              return body;
            } else {
              return {};
            }
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
  }

  Identifyctrlstore(data: any) {
    return this.httpClient
      .post('api/identify_ctrlstore', {
        data
      })
      .pipe(
        retry(2),
        map((body: any) => {
          if (body) {
            if (body) {
              return body;
            } else {
              return {};
            }
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
  }

  Identifyctrlstore_Aus(data: any) {
    return this.httpClient
      .post('api/identify_ctrlstore_aus', {
        data
      })
      .pipe(
        retry(2),
        map((body: any) => {
          if (body) {
            if (body) {
              return body;
            } else {
              return {};
            }
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
  }

  controlMatchDataSave(data: any) {
    return this.httpClient
      .post('api/update_stage', {
        data
      })
      .pipe(
        map((body: any) => {
          if (body) {
            if (body) {
              return body;
            } else {
              return {};
            }
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
  }

  getTestStoreMatchControlData(id: any) {
    console.log(this.$record_list, 'calling the recordlist');
    if (this.$record_list.value !== null){
      return this.getSavedRecords();
    } else {
      console.log('calling the recordlist else');
      return this.httpClient.get('api/record-list/' + id).pipe(
        map((body: any) => {
          if (body) {
            this.setSavedrecords(body);
            return body;
          } else {
            return {};
          }
        }),
        catchError(() => of([]))
      );
    }
  }

getSavedRecords(): Observable<any>{
  return this.$record_list;
}

setSavedrecords(data: any){
  console.log(data, 'datavalue');
   this.$record_list.next(data);
}
getSavedselected(): Observable<any>{
  return this.$selected_list;
}

setSavedselected(data: any){
   this.$selected_list.next(data);
}

getcontrolStoreData(id: any){
  if(this.$record_list.value === null) {
    this.httpClient.get('api/record-list/' + id).subscribe((data: any) => {
     this.setSavedrecords(data);
    },);
  }
  if(this.$selected_list.value === null) {
    this.httpClient.get('api/get_currenttest/' + id).subscribe((data: any) => {
     this.setSavedselected(data);
    },);
  }
}

GetControlSummaryCorrelation(data: any) {
  return this.httpClient
    .post('api/control_summary_correlation', {
      data
    })
    .pipe(
      retry(2),
      map((body: any) => {
        if (body) {
          if (body) {
            return body;
          } else {
            return {};
          }
        } else {
          return {};
        }
      }),
      catchError(() => of([]))
    );
}

uploadControlStore(data: any): Observable<any> {
  return this.httpClient
    .post('api/upload_select_controlstore', data)
    .pipe(
      retry(2),
      map((body: any) => {
        if (body) {
          if (body) {
            return body;
          } else {
            return {};
          }
        } else {
          return {};
        }
      }),
      catchError(() => of([]))
    );
}

downladControlStoreTemplate(data: any): Observable<any> {
  const httpOptions = {
    responseType: 'blob' as 'json'
  };
  return this.httpClient
    .post('api/download_control_store_template', data, httpOptions)
    .pipe(
      map((body: any) => {
        if (body) {
          if (body) {
            return body;
          } else {
            return {};
          }
        } else {
          return {};
        }
      }),
      catchError(() => of([]))
    );
}

uploadControlStorePool(data: any): Observable<any> {
  return this.httpClient
    .post('api/upload_control_store_pool', data)
    .pipe(
      retry(2),
      map((body: any) => {
        if (body) {
          if (body) {
            return body;
          } else {
            return {};
          }
        } else {
          return {};
        }
      }),
      catchError(() => of([]))
    );
}
}
