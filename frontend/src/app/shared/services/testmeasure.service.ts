import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class TestMeasureService {

  public $testAnalysisData: BehaviorSubject<any> = new BehaviorSubject(null);
  public $testControlData: BehaviorSubject<any> = new BehaviorSubject(null);
  public $decideGonoGoData: BehaviorSubject<any> = new BehaviorSubject(null);
  public $testMeasurementData: BehaviorSubject<any> = new BehaviorSubject(null);
  public $decideControlStoreMeasurementData: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

  AnalyseFeature(data: any) {
    return this.httpClient
      .post('Test_analyzefeature', {
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

  GetDateRange() {
    return this.httpClient.get('Get_Daterange').pipe(
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

  SaveStageThree(data: any, stringified_data: any) {
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

  downloadreports(id: any) {
    return this.httpClient.get('download_report/' + id).pipe(
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

  downloadreports1(id: any) {
    return this.httpClient.get('reports/' + id).pipe(
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

  getTestSummaryReportExcel(data: any): Observable<any> {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };
    return this.httpClient.post('api/test_analysis_results', data, httpOptions);
  }

  getAnalyzedResults(data: any) {
    if (!isNullOrUndefined(this.$testMeasurementData.value)){
      return this.$testMeasurementData;
    } else {
      return this.httpClient.post('api/test_analysis_results', data).pipe(
        map((body: any) => {
          if (body) {
            if (body) {
              this.setTestMeasurement(body);
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

  getAnalyzedResults_Aus(data: any) {
    return this.httpClient.post('api/test_analysis_results_aus', data).pipe(
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


  getTeststoreDetails(data: any) {
    return this.httpClient.post('api/get_teststore_details', data).pipe(
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

  getTargetAnalyzedResults(data: any) {
    if (this.$testAnalysisData.value !== null) {
      return this.getTestAnalysis();
    } else {
      return this.httpClient.post('api/target_analysis_results', data).pipe(
        map((body: any) => {
          if (body) {
            if (body) {
              this.setTestAnalysis(body);
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

  getTargetAnalyzedResultsAus(data: any) {
    return this.httpClient.post('api/target_analysis_results_aus', data).pipe(
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

  TestControlGraph(data: any) {
    if (!isNullOrUndefined(this.$testControlData.value) ){
      return this.getControlGraph();
    } else {
      return this.httpClient.post('api/test_control_graph', data).pipe(
        map((body: any) => {
          if (body) {
            if (body) {
              this.setControlGraph(body);
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

  TestControlGraph_Aus(data: any) {
    return this.httpClient.post('api/test_control_graph_aus', data).pipe(
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

  getProbabilityValue(data: any) {
    if (!isNullOrUndefined(this.$decideGonoGoData.value)) {
      return this.getDecidego();
    } else{
      return this.httpClient.post('api/decide_gonogo', data).pipe(
        map((body: any) => {
          if (body) {
            if (body) {
              this.setDecidego(body);
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

  getProbabilityValueAus(data: any) {
    return this.httpClient.post('api/decide_gonogo_aus', data).pipe(
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

  GetTestStoreData(id: any) {
    return this.httpClient
      .get('api/load_savetest/' + id, {
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


  get_StoreSummary_Report(data: any) {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };

    return this.httpClient.post('api/test_summary_download', data, httpOptions).pipe(
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

  controlStoreMeasurementpost(data: any){
    if (!isNullOrUndefined(this.$decideControlStoreMeasurementData.value)) {
      return this.getControlStoreMeasurementpost();
    }else{
    return this.httpClient.post('api/control_store_update', data).pipe(
      map((body: any) => {
        if (body) {
          if (body) {
            this.setControlStoreMeasurementpost(body);
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

  loadAnalyseData(): Observable<any>{
    return this.httpClient.get('api/load_saved_data_analyze').pipe(
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

  getTestAnalysis(): Observable<any> {
    return this.$testAnalysisData;
  }

  setTestAnalysis(data: any) {
    this.$testAnalysisData.next(data);
  }

  getDecidego(): Observable<any> {
    return this.$decideGonoGoData;
  }

  setDecidego(data: any) {
    this.$decideGonoGoData.next(data);
  }

  getControlStoreMeasurementpost(): Observable<any> {
    return this.$decideControlStoreMeasurementData;
  }

  setControlStoreMeasurementpost(data: any) {
    this.$decideControlStoreMeasurementData.next(data);
  }

  getControlGraph(): Observable<any> {
    return this.$testControlData;
  }

  setControlGraph(data: any) {
    this.$testControlData.next(data);
  }
  getTestMeasurement(): Observable<any> {
    return this.$testMeasurementData;
  }

  setTestMeasurement(data: any) {
    this.$testMeasurementData.next(data);
  }

  getActualperStores(data: any) {
    return this.httpClient.post('api/actuals_perstores', data).pipe(
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
