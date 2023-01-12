import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable({ providedIn: 'root' })
export class TestConfigService {

  public $savedata: BehaviorSubject<any> = new BehaviorSubject(null);
  public $parameters: BehaviorSubject<any> = new BehaviorSubject(null);
  public $IdentyTestValue: BehaviorSubject<any> = new BehaviorSubject(null);
  public $decideTestStorePopulationSummaryData: BehaviorSubject<any> = new BehaviorSubject(null);
  public $decideTestStorePopulationCorrelationData: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {
    console.log('calling service');
  }

  uploadTestStore(data: any): Observable<any> {
    return this.httpClient
      .post('api/upload_select_teststore', data)
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

  Testparam(data: any): Observable<any> {
    return this.httpClient
      .post('api/getparameter', data);
      // .pipe(
      //   map((body: any) => {
      //     if (body) {
      //       if (body) {
      //         return body;
      //       } else {
      //         return {};
      //       }
      //     } else {
      //       return {};
      //     }
      //   }),
      //   catchError(() => of([]))
      // );
  }

  ValidateDataPoints(data: any): Observable<any> {
    return this.httpClient
      .post(
        'api/validate_datapoints', data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  }

  load_saved_test(id: any): Observable<any> {
    return this.httpClient
      .get('api/load_savetest/' + id, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  // Get_Editvalues(id: any) {
  //   console.log(this.getSavedDataSubject(), '$saved data')
  //   if(!this.$savedata) {
  //     return this.getSavedDataSubject()
  //   } else {
  //     return this.httpClient
  //     .get('api/load_savetest/' + id, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .pipe(
  //       map((body: any) => {
  //         if (body) {
  //           this.setSavedDataSubject(body)
  //           return body;
  //         } else {
  //           return {};
  //         }
  //       }),
  //       catchError(() => of([]))
  //     );
  //   }

  // }

  /*Getsavedtestdata*/

  GetSaved_Testdata() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.httpClient
      .get('api/load_savedata', {
        headers
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
  /*Getsavedtestdata*/

  /*Delete saved data*/

  DeleteSavedData(data: any) {
    return this.httpClient.delete('api/delete_savedata/' + data).pipe(
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
  /*Delete saved data*/

  /*Dropdown api*/

  Get_Dropdownvals() {
    if (this.$parameters.value !== null) {
      return this.getParametersList();
    } else {
      return this.httpClient
        .get('api/parameter_list', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .pipe(
          map((body: any) => {
            if (body) {
              this.setParametersList(body);
              return body;
            } else {
              return {};
            }
          }),
          catchError(() => of([]))
        );
    }
  }

  /*Dropdown api*/

  /*Save api for step1,2,3*/
  Save_stage(data: any): Observable<any> {

    return this.httpClient.post('api/save_stage', { data });
  }

  /*Save api for step1,2,3*/

  SaveStageTwo(data: any) {
    return this.httpClient
      .post(
        'api/save_stage',
        {
          data
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
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

  GetTestsummary(data: any) {
    const auth = localStorage.getItem('auth');
    return this.httpClient
      .post('api/store_summary', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth
        }
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

  IdentifyTest(data: any): Observable<any> {
    const auth = localStorage.getItem('auth');
    if (this.$savedata.value !== null) {
      return this.getIdentifyTest();
    } else {
      return this.httpClient
        .post('api/identity_teststore', data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth
          }
        });
    }

  }

  GetStoresDetails(data: any) {
    return this.httpClient
      .post('Get_StoresDetails', {
        data
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

  CalculateBreakEven(data: any) {
    return this.httpClient
      .post('api/calc_breakevenlift', {
        data
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

  Load_savedata() {
    return this.httpClient.get('load_savedata').pipe(
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

  UploadTestControlStores(formdata: FormData) {
    return this.httpClient.post('Upload_stores', formdata).pipe(
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

  uploadfile(formdata: FormData) {
    return this.httpClient.post('GetMatch_teststore', formdata).pipe(
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

  GetAllTestStore(data: any) {
    return this.httpClient
      .post('Get_AllTestStore', {
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

  SaveMeasurement(data: any) {
    return this.httpClient
      .post('FromMeasurement', {
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
  SaveStageOne(data: any) {
    return this.httpClient
      .post('Save_storedata', {
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

  Checktestname(data: any) {
    return this.httpClient
      .post('Check_testname', {
        test_name: data.test_name,
        market_id: data.market_id
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

  getDurationOfWeeks(data: any) {
    return this.httpClient.post('api/Get_weeks', data).pipe(
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

  getIdentifyTest(): Observable<any> {
    return this.$savedata;
  }

  setIdentifyTest(data: any) {
    this.$savedata.next(data);
  }

  getParametersList(): Observable<any> {
    return this.$parameters;
  }

  setParametersList(data: any) {
    this.$parameters.next(data);
  }

  getIdentifyTestControl(data: any) {
    const auth = localStorage.getItem('auth');
    if (this.$savedata.value === null) {
      this.httpClient.post('api/identity_teststore', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth
        }
      }).subscribe((data: any) => {
        this.setIdentifyTest(data);
        this.setIdentifyValue(data);
      });
    }
  }

  setIdentifyValue(data: any) {
    this.$IdentyTestValue.next(data);
  }
  getIdentifyValue() {
    return this.$IdentyTestValue.value;
  }

  getTestName(data: any) {
    return this.httpClient
      .post('api/validate_testname', {
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

  IdentifyTestManually(data: any): Observable<any> {
    const auth = localStorage.getItem('auth');
    return this.httpClient
      .post('api/identity_teststore_manually', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth
        }
      });
  }

  generateSuggestionForMarginOfError(data: any): Observable<any> {
    return this.httpClient.post('api/generate_suggestion_for_margin_of_error', data);
  }

  generateSuggestionForNoOfTestStore(data: any): Observable<any> {
    return this.httpClient.post('api/generate_suggestion_no_of_teststore', data);
  }

  selected_testStore_comprassion(data: any){
      return this.httpClient
        .post('api/selected_store_correlation', {
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

    testStore_population_summary(data: any){
      if (!isNullOrUndefined(this.$decideTestStorePopulationSummaryData.value)) {
        return this.getTestStorePopulationSummary();
      }else{
      return this.httpClient
        .post('api/testStore_population_summary', {
          data
        })
        .pipe(
          retry(2),
          map((body: any) => {
            if (body) {
              if (body) {
                this.setTestStorePopulationSummary(body);
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

    testStore_population_correlation(data: any): Observable<any> {
      if (!isNullOrUndefined(this.$decideTestStorePopulationCorrelationData.value)) {
        return this.getTestStorePopulationCorrelation();
      }else{
      return this.httpClient
        .post('api/testStore_population_correlation', {
          data
        })
        .pipe(
          retry(2),
          map((body: any) => {
            if (body) {
              if (body) {
                this.setTestStorePopulationCorrelation(body);
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

    getTestStorePopulationSummary(): Observable<any> {
      return this.$decideTestStorePopulationSummaryData;
    }

    setTestStorePopulationSummary(data: any) {
      this.$decideTestStorePopulationSummaryData.next(data);
    }

    getTestStorePopulationCorrelation(): Observable<any> {
      return this.$decideTestStorePopulationCorrelationData;
    }

    setTestStorePopulationCorrelation(data: any) {
      this.$decideTestStorePopulationCorrelationData.next(data);
    }

    dataValidaityPoints(data: any) {
      return this.httpClient
        .post('api/validate_datapoints_availability', {
          data
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
}
