import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CommonService} from '@app/shared/services/common.service';
import {GlobalEventsService} from '@app/shared/services/global-events.service';
import {SidenavService} from '@app/shared/services/sidenav.service';
import * as Highcharts from 'highcharts';
import * as HighchartsStock from 'highcharts/highstock';
import HC_exporting from 'highcharts/modules/exporting';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';
import {TestMeasureService} from '@app/shared/services/testmeasure.service';
import { isNullOrUndefined } from 'util';
HC_exporting(Highcharts);
HC_exporting(HighchartsStock);
const config = require('../../../assets/region/config-fields.json');
declare let require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
noData(Highcharts);
const More = require('highcharts/highcharts-more');

@Component({
  selector: 'app-percentage-change',
  templateUrl: './percentage-change.component.html',
  styleUrls: ['./percentage-change.component.scss']
})
export class PercentageChangeComponent implements OnInit {
  prePostGraph = false;
  liftComparisonGraph = false;
  weeklyComparisonGraph = false;
  prekeys: any = [];
  postkeys: any = [];
  preperiod_line: any = [];
  postperiod_line: any = [];
  preperiod_line1: any = [];
  postperiod_line1: any = [];
  test_id: any;
  getTargetVariable: any;
  currencySymbol: any;
  @Input() testDetailsValue: any;
  list_drop: any = '';
  cost: any;
  earning: any;
  inc_rsv_lift: any;
  inc_mac_lift: any;
  ProbabiltyValue: any = '-';
  breakeven_list: any = 0;
  decisionValue: any = '-';
  showTargetTableCount: any = 0;
  Targetvals: MatTableDataSource<any>;
  barChartData: any = {
    controlstorePre: '',
    testStorePre: '',
    controlstorePost: '',
    testStorePost: ''
  };
  tableName: any = '';
  userRegion: any;
  show_preperiod: any;
  testcontrol_view: any = '1';
  public targetVariableItems: any[] = ['RSV', 'Volume'];
  selectedTargetVariable = '';
  targetTestControlChart: any;
  testName = '';
  createdOn = '';
  test_type = '';
  average_event: any = '';
  filterSubscription: Subscription = Subscription.EMPTY;
  testStores: any = [];
  testFeilds: any;
  RtmImpact = false;
  selectedRadioButton: any = '1';

  constructor(private testMeasureService: TestMeasureService, public toastr: ToastrService,
              public sideNavservice: SidenavService, public commonService: CommonService,
              private globalService: GlobalEventsService) {
    this.filterSubscription = this.globalService.subscribe('FILLTER_APPLIED', obj => {
      if (obj.module === 'FILTERED_COMPONENT' && obj.component === 'Analyse_Impact' && obj.componentPage === 'Percentage') {
        this.formatfilteredData(obj.data);
      }
    });
  }

  ngOnInit(): void {
    this.userRegion = sessionStorage.getItem('region');
    this.testFeilds = config[this.userRegion];
    if (config[this.userRegion]) {
      console.log('testDetailsValue-> ', this.testDetailsValue);
      this.test_id = this.testDetailsValue.testId;
      this.getTargetVariable = this.testDetailsValue.targetVariable;
      this.selectedTargetVariable = this.getTargetVariable;
      this.currencySymbol = config[this.userRegion]['currency'];
      this.test_type = this.testDetailsValue.test_type;
      this.testName = this.testDetailsValue.testName;
      this.createdOn = this.testDetailsValue.created_on;
    }
    this.RtmImpact = false;
    this.prePostGraph = true;
    this.TargetAnalysisPreVsPost();
  }

  ngOnDestroy(){
    if(!isNullOrUndefined(this.filterSubscription)){
      this.filterSubscription.unsubscribe();
      }
  }

  loadGraph() {
    console.log(this.selectedRadioButton,'selectedRadioButton',this.test_type);
    if (this.selectedRadioButton === '1' && this.test_type !== 'RTM Impact Test') {
      this.prePostGraph = true;
      this.liftComparisonGraph = false;
      this.weeklyComparisonGraph = false;
    } else if (this.selectedRadioButton === '2') {
      this.prePostGraph = false;
      this.liftComparisonGraph = true;
      this.weeklyComparisonGraph = false;
    } else if (this.selectedRadioButton === '3') {
      this.prePostGraph = false;
      this.liftComparisonGraph = false;
      this.weeklyComparisonGraph = true;
      this.loadView();
    } else if (this.selectedRadioButton === '1' && this.test_type === 'RTM Impact Test'){
      console.log('else if last');
      this.RtmImpact = true;
      this.testcontrol_view = '3';
      this.loadView();
      this.weeklyComparisonGraph = true;
    }
    console.log(this.selectedTargetVariable);
    this.TargetAnalysisPreVsPost();
  }

  radioChange(event: any) {
    console.log('event-> ', event);
    if (event.value === '1') {
      this.prePostGraph = true;
      this.liftComparisonGraph = false;
      this.weeklyComparisonGraph = false;
    } else if (event.value === '2') {
      this.prePostGraph = false;
      this.liftComparisonGraph = true;
      this.weeklyComparisonGraph = false;
    } else if (event.value === '3') {
      this.prePostGraph = false;
      this.liftComparisonGraph = false;
      this.weeklyComparisonGraph = true;
      this.loadView();
    }
  }

  changeview($event: any) {
    console.log($event.source.value);
  }

  loadView() {
    this.show_preperiod = 1;
      const temp_name: any = 'Test Pre period';
      const temp_name1: any = 'Control Pre period';
      this.show_preperiod = 2;
      const temp_name2: any = 'Test Post Period';
      const temp_name3: any = 'Control Post Period';

      this.showGraphView(this.prekeys,this.postkeys, temp_name, temp_name1,temp_name2,temp_name3, this.preperiod_line, this.preperiod_line1, this.postperiod_line, this.postperiod_line1);
  }

  TestControlGraphs() {
    this.prekeys = [];
    this.postkeys = [];
    this.preperiod_line = [];
    this.postperiod_line = [];
    this.preperiod_line1 = [];
    this.postperiod_line1 = [];
    let category: any = [];
    if (localStorage.getItem('category') !== undefined && localStorage.getItem('category') != null) {
      const categoryvalue = localStorage.getItem('category');
      category = eval(categoryvalue);
    }
    const data: any = {
      test_id: this.test_id,
      category_name: category,
      teststores: this.testStores,
      targetVariable: this.selectedTargetVariable,
      test_type: this.test_type
    };
    if (sessionStorage.getItem('region') === 'DEMO' ) {
      this.testMeasureService.TestControlGraph(data).subscribe((apiresponse: any) => {
        if (apiresponse.status === 'ok') {
          this.prekeys = apiresponse.data['Test Preperiod'][0].sort();
          this.postkeys = apiresponse.data['Test Postperiod'][0].sort();

          for (var i = 0; i <= apiresponse.data['Test Preperiod'][1].length; i++) {
            this.preperiod_line.push(apiresponse.data['Test Preperiod'][1][i]);
          }

          for (var i = 0; i <= apiresponse.data['Test Postperiod'][1].length; i++) {
            this.postperiod_line.push(apiresponse.data['Test Postperiod'][1][i]);
          }

          for (var i = 0; i <= apiresponse.data['Control Preperiod'][1].length; i++) {
            this.preperiod_line1.push(apiresponse.data['Control Preperiod'][1][i]);
          }

          for (var i = 0; i <= apiresponse.data['Control Postperiod'][1].length; i++) {
            this.postperiod_line1.push(apiresponse.data['Control Postperiod'][1][i]);
          }

          this.showGraphView(
            this.prekeys,
            this.postkeys,
            'Test Preperiod',
            'Control Preperiod',
            'Test Postperiod',
            'Control Postperiod',
            this.preperiod_line,
            this.preperiod_line1,
            this.postperiod_line,
            this.postperiod_line1
          );
        }
      });
    } else {
      this.testMeasureService.TestControlGraph_Aus(data).subscribe((apiresponse: any) => {
        if (apiresponse.status == 'ok') {
          this.prekeys = apiresponse.data['Test Preperiod'][0].sort();
          this.postkeys = apiresponse.data['Test Postperiod'][0].sort();

          for (var i = 0; i <= apiresponse.data['Test Preperiod'][1].length; i++) {
            this.preperiod_line.push(apiresponse.data['Test Preperiod'][1][i]);
          }

          for (var i = 0; i <= apiresponse.data['Test Postperiod'][1].length; i++) {
            this.postperiod_line.push(apiresponse.data['Test Postperiod'][1][i]);
          }

          for (var i = 0; i <= apiresponse.data['Control Preperiod'][1].length; i++) {
            this.preperiod_line1.push(apiresponse.data['Control Preperiod'][1][i]);
          }

          for (var i = 0; i <= apiresponse.data['Control Postperiod'][1].length; i++) {
            this.postperiod_line1.push(apiresponse.data['Control Postperiod'][1][i]);
          }

          this.showGraphView(
            this.prekeys,
            this.postkeys,
            'Test Preperiod',
            'Control Preperiod',
            'Test Postperiod',
            'Control Postperiod',
            this.preperiod_line,
            this.preperiod_line1,
            this.postperiod_line,
            this.postperiod_line1);
        } else if (apiresponse.status === 'not_ok') {
          this.toastr.warning(apiresponse.data);
        }
      });
    }

  }

  showGraphView(keys: any, keys2: any, name1: any, name2: any, name3: any, name4: any, line1: any, line2: any, line3: any, line4: any) {
    console.log(keys,keys2,'keys');
    console.log(line1,line2,line3,line4,'keys');
    let yAxisText: any = '';
    const preDetails: any = JSON.parse(localStorage.getItem('testmeasure_pre_details'));

    //this.getTargetVariable = preDetails.target_variable;

    if (this.selectedTargetVariable === 'RSV') {
      yAxisText = 'Avg of Weekly RSV in ' + this.currencySymbol;
    } else if (this.selectedTargetVariable === 'Volume') {
      yAxisText = 'Avg of Weekly volume in units';
    } else {
      yAxisText = 'Target variable';
    }

    Highcharts.chart('test-control', {
      chart: {
        type: 'spline',
        height: 400,
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      // yAxis: {
      //   title: {
      //     text: yAxisText,
      //     style: {
      //       fontFamily: 'Mulish_regular'
      //     }
      //   }
      // },
      yAxis: [{
        title: {
              text: yAxisText,
              style: {
                fontFamily: 'Mulish_regular'
              }
            }
      },{
        title: {
                text: '',
                style: {
                  fontFamily: 'Mulish_regular'
                }
              },
          showLastLabel: false,
          id: 'yA0'
        }],
      xAxis: [
      {
        width: '49%',
        scrollbar:{
          enabled: true
        },
        categories: keys,
        title: {
          text: 'Pre Period',
          style: {
            fontFamily: 'Mulish_regular',
            fontWeight: 'Bold',
            fontSize:'15px',
          }
        },
      },
      {
        width: '49%',
        left:'52%',
        scrollbar:{
          enabled: true
        },
        categories: keys2,
        title: {
          text: 'Post Period',
          style: {
            fontFamily: 'Mulish_regular',
            fontWeight: 'Bold',
            fontSize:'15px',
          }
        },
        offset: 0,
      }],


      credits: {
        enabled: false
      },
      // scrollbar: {
      //   enabled: true
      // },
      series: [
        {
          name: name1,
          data: line1,
          type: 'line',
          color: '#EC9B02',
          xAxis: 0,
        },
        {
          name: name2,
          data: line2,
          type: 'line',
          color: '#D40061',
          xAxis: 0,
        },
        {
          name: name3,
          data: line3,
          type: 'line',
          color: '#EC9B02',
          xAxis: 1,
        },
        {
          name: name4,
          data: line4,
          type: 'line',
          color: '#D40061',
          xAxis: 1,
        }
      ]
    });
  }

  formatNumber(num: any) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  formatNumberWithoutDecimal(num: any) {
    let temp: any = num.toFixed(0);
    temp = JSON.parse(temp);
    return temp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  TargetAnalysisPreVsPost() {
    this.list_drop = '';

    const preperiod_start: any = this.testDetailsValue.preTestStartDate;
    const preperiod_end: any = this.testDetailsValue.preTestEndDate;
    const postperiod_start: any = this.testDetailsValue.postTestStartDate;
    const postperiod_end: any = this.testDetailsValue.postTestEndDate;

    const data: any = {
      test_id: this.test_id,
      preperiod_start,
      preperiod_end,
      postperiod_start,
      postperiod_end,
      mesmetric_name: this.selectedTargetVariable,
      test_stores: this.testStores,
      test_type: this.test_type
    };

    let yAxisText: any = '';

    if (this.selectedTargetVariable === 'RSV') {
      yAxisText = 'Target variable (Weekly RSV in ' + this.currencySymbol + ')';
    } else if (this.selectedTargetVariable === 'Volume') {
      yAxisText = 'Target variable (Weekly volume in units)';
    } else {
      yAxisText = 'Target variable';
    }
    // if(localStorage.getItem('target_analysis_results') === 'undefined'  || localStorage.getItem('target_analysis_results') === null){
      this.testMeasureService.getTargetAnalyzedResults(data).subscribe((apiresponse: any) => {
        if (apiresponse.status === 'ok') {
          let controlstorePre: any = apiresponse.data['target_variable_filtered'].control_pre_mean;
          let controlstorePost: any = apiresponse.data['target_variable_filtered'].control_post_mean;
          let testStorePre: any = apiresponse.data['target_variable_filtered'].test_pre_mean;
          let testStorePost: any = apiresponse.data['target_variable_filtered'].test_post_mean;
          this.list_drop = apiresponse.data['target_variable_filtered'].test_vs_control_change;
          this.average_event = apiresponse.data['target_variable_filtered'].test_vs_control_change;
          let controlPercen: any = apiresponse.data['target_variable_filtered'].control_change_percentage;
          let testPercen: any = apiresponse.data['target_variable_filtered'].test_change_percentage;

          if (
            this.list_drop == 'none' ||
            this.list_drop == 'null' ||
            this.list_drop == 'NaN' ||
            this.list_drop == '-Infinity' ||
            this.list_drop == 'Infinity'
          ) {
            this.list_drop = '-';
          } else {
            if (Math.sign(this.list_drop) == 1) {
              this.list_drop = '+' + this.list_drop + '%';
            } else if (Math.sign(this.list_drop) == -1) {
              this.list_drop = this.list_drop + '%';
            }
          }

          let probabilityPercentage: any = '-';
          if (this.ProbabiltyValue != '-') {
            probabilityPercentage = (this.ProbabiltyValue * 100).toFixed(2) + '%';
          }

          const tempData: any = [
            {
              targetvar: 'Test vs Control change',
              trgtvarvalue: this.list_drop
            },
            {
              targetvar: 'Breakeven lift',
              trgtvarvalue: this.breakeven_list + '%'
            },
            {
              targetvar: 'Probabilty (Lift > Breakeven)',
              trgtvarvalue: probabilityPercentage
            },
            {
              targetvar: 'Decision',
              trgtvarvalue: this.decisionValue
            }
          ];

          this.showTargetTableCount = tempData.length;
          this.Targetvals = new MatTableDataSource(tempData);

          if (
            controlstorePre == 'none' ||
            controlstorePre == 'null' ||
            controlstorePre == 'NaN' ||
            controlstorePre == '-Infinity' ||
            controlstorePre == 'Infinity'
          ) {
            controlstorePre = 0;
          }

          if (
            controlstorePost == 'none' ||
            controlstorePost == 'null' ||
            controlstorePost == 'NaN' ||
            controlstorePost == '-Infinity' ||
            controlstorePost == 'Infinity'
          ) {
            controlstorePost = 0;
          }

          if (
            testStorePre == 'none' ||
            testStorePre == 'null' ||
            testStorePre == 'NaN' ||
            testStorePre == '-Infinity' ||
            testStorePre == 'Infinity'
          ) {
            testStorePre = 0;
          }

          if (
            testStorePost == 'none' ||
            testStorePost == 'null' ||
            testStorePost == 'NaN' ||
            testStorePost == '-Infinity' ||
            testStorePost == 'Infinity'
          ) {
            testStorePost = 0;
          }

          if (
            testStorePost == 'none' ||
            testStorePost == 'null' ||
            testStorePost == 'NaN' ||
            testStorePost == '-Infinity' ||
            testStorePost == 'Infinity'
          ) {
            testStorePost = 0;
          }

          if (
            controlPercen == 'none' ||
            controlPercen == 'null' ||
            controlPercen == 'NaN' ||
            controlPercen == '-Infinity' ||
            controlPercen == 'Infinity'
          ) {
            controlPercen = 0;
          } else {
            if (Math.sign(controlPercen) == 1) {
              controlPercen = '+' + controlPercen + '%';
            } else if (Math.sign(controlPercen) == -1) {
              controlPercen = controlPercen + '%';
            }
          }

          if (
            testPercen == 'none' ||
            testPercen == 'null' ||
            testPercen == 'NaN' ||
            testPercen == '-Infinity' ||
            testPercen == 'Infinity'
          ) {
            testPercen = 0;
          } else {
            if (Math.sign(testPercen) == 1) {
              testPercen = '+' + testPercen + '%';
            } else if (Math.sign(testPercen) == -1) {
              testPercen = testPercen + '%';
            }
          }

          this.barChartData.controlstorePre = controlstorePre;
          this.barChartData.testStorePre = testStorePre;
          this.barChartData.controlstorePost = controlstorePost;
          this.barChartData.testStorePost = testStorePost;

          if (controlstorePre == 0 && controlstorePost == 0 && testStorePre == 0 && testStorePost == 0) {
            Highcharts.chart('trgt-prepost', {
              chart: {
                type: 'column',
                height: 400,
              },
              title: {
                text: ''
              },
              subtitle: {
                text: ''
              },
              yAxis: {
                title: {
                  text: 'Target Variable',
                  style: {
                    fontFamily: 'Mulish_regular'
                  }
                }
              },
              xAxis: {
                categories: []
              },
              credits: {
                enabled: false
              },
              series: []
            });
          } else {
            setTimeout(()=>{
              Highcharts.chart('trgt-prepost', {
                chart: {
                  type: 'column',
                  height: 400,
                },
                title: {
                  text: ''
                },
                subtitle: {
                  text: ''
                },
                exporting: {
                  buttons: {
                    contextButton: {
                      menuItems: ['printChart', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
                    }
                  }
                },
                plotOptions: {
                  series: {
                    borderWidth: 0,
                    dataLabels: {
                      enabled: true,
                      format: '{point.assignee}',
                      x: 80,
                      y: -100
                    }
                  }
                },
                yAxis: {
                  title: {
                    text: yAxisText,
                    style: {
                      fontFamily: 'Mulish_regular'
                    }
                  },
                  maxPadding: 0.6
                },
                xAxis: {
                  categories: ['Control Stores', 'Test Stores']
                },
                credits: {
                  enabled: false
                },
                series: [
                  {
                    name: 'Pre-Test',
                    color: '#ff70b0',
                    data: [
                      {
                        y: controlstorePre,
                        assignee: controlPercen
                      },
                      {
                        y: testStorePre,
                        assignee: testPercen
                      }
                    ],
                    type: undefined
                  },
                  {
                    name: 'Post-Test',
                    color: '#fecd72',
                    data: [
                      {
                        y: controlstorePost,
                        assignee: ''
                      },
                      {
                        y: testStorePost,
                        assignee: ''
                      }
                    ],
                    type: undefined
                  }
                ]
              });
            });
          }
          this.TestControlGraphs();
          setTimeout(() => {
            this.loadTeststoreComprassion(apiresponse);
          }, 100);

        } else {
          Highcharts.chart('trgt-prepost', {
            chart: {
              type: 'column',
              height: 400,
            },
            title: {
              text: ''
            },
            subtitle: {
              text: ''
            },
            yAxis: {
              title: {
                text: 'Target Variable',
                style: {
                  fontFamily: 'Mulish_regular'
                }
              }
            },
            xAxis: {
              categories: []
            },
            credits: {
              enabled: false
            },
            series: []
          });

          this.targetTestControlChart = Highcharts.chart('trgt-testcntrl', {
            chart: {
              type: 'column',
              height: 400,
            },
            title: {
              text: ''
            },
            subtitle: {
              text: ''
            },
            yAxis: {
              title: {
                text: 'Test vs Control Change',
                style: {
                  fontFamily: 'Mulish_regular'
                }
              }
            },
            xAxis: {
              categories: []
            },
            credits: {
              enabled: false
            },
            series: []
          });
          const tempData: any = [];
          this.showTargetTableCount = tempData.length;
          this.Targetvals = new MatTableDataSource(tempData);
          this.toastr.warning(apiresponse.data);
        }
      });
  }

  filterCall() {
    this.sideNavservice.toggleFilter('Filter');
    setTimeout(() => {
      this.globalService.publish('FILTER_OPEN_METHOD', {
        module: 'Analyse_Impact',
        component: 'Percentage'
      });
    });
  }

  getColor(data: number) {
    let color = 'red';
    if (Math.sign(data) === 1) {
      color = 'green';
    }
    return color;
  }

  getAverage(dataValue: any) {
    const data = dataValue.map((x: any) => x - this.average_event);
    return data;
  }

  formatfilteredData(dataValue: any) {
    const testName = config[this.userRegion]['partner_id_name'];
    for (let i = 0; i < dataValue.length; i++) {
      if (dataValue[i]['name'] === testName) {
        this.testStores = dataValue[i]['data'];
      }
    }
    this.testMeasureService.setControlGraph(null);
    this.testMeasureService.setTestAnalysis(null);
    setTimeout(()=>{
      if (this.testStores.length > 0) {
        this.TestControlGraphs();
        this.TargetAnalysisPreVsPost();
      }
    }, 10);
  }

  testStoreLiftChart(Test_average: any, testpre_post: any) {
    const arrayData = [];
    const datalength = Test_average.length;
    for (let i = 0; i < datalength; i++) {
      const data = [];
      data.push(Test_average[i]);
      data.push(testpre_post[i]);
      arrayData.push(data);
    }
    console.log(arrayData, 'finalizedData');
    return arrayData;
  }

  formChartData(data: any, colorData: any) {
    console.log(colorData.length, data.length, 'lenght');
    console.log(colorData, data);
    const formattedArray = [];
    for (let i = 0; i < data.length; i++) {
      const obj = {};
      obj['y'] = parseFloat(data[i].toFixed(2));
      obj['color'] = this.getColor(colorData[i]);
      formattedArray.push(obj);
    }
    return formattedArray;
  }

  loadTeststoreComprassion(apiresponse: any) {
    let test_vs_control: any = [];
    let test_vs_control_average: any = [];
    test_vs_control = apiresponse.data['target_variable_filtered'].test_vs_control;
    test_vs_control_average = this.formChartData(apiresponse.data['target_variable_filtered']['Test vs (Control-Average)'], test_vs_control);
    // test_vs_control_average = test_vs_control_average.map((a: string) => parseFloat(a).toFixed(2));
    console.log(test_vs_control_average, 'test_vs_control_average');
    const min = Math.min.apply(Math, test_vs_control.map(function(o: any) {
      return o;
    }));
    const max = Math.max.apply(Math, test_vs_control.map(function(o: any) {
      return o;
    }));
    console.log(min, max, 'values');
    let xaxisMax = 15;
    const dataResults = this.showMaxNumberData(test_vs_control);
    let scrolbarEnable = false;
    xaxisMax = (dataResults[0]) - 1;
    scrolbarEnable = dataResults[1];
    for (let j = 0; j < test_vs_control; j++) {
      if (
        test_vs_control[j] == 'null' ||
        test_vs_control[j] == 'NaN' ||
        test_vs_control[j] == 'Infinity' ||
        test_vs_control[j] == '-Infinity'
      ) {
        test_vs_control[j] = 0;
      }
    }
    this.targetTestControlChart = HighchartsStock.chart('trgt-testcntrl', {
      chart: {
        type: 'column',
        height: 400,
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      yAxis: {
        min: min - 10,
        max: max + 10,
        title: {
          text: 'Test vs Control Change (in %)',
          style: {
            fontFamily: 'Mulish_regular'
          }
        },
        plotLines: [{
          color: this.getColor(this.average_event),
          width: 2,
          value: this.average_event,
          zIndex: 5,
        }
        ]
      },
      exporting: {
        buttons: {
          contextButton: {
            menuItems: ['printChart', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
          }
        }
      },
      legend: {
        squareSymbol: true,
        // symbolHeight: 0,
        // symbolWidth: 0,
        // symbolRadius: 0
      },
      xAxis: {
        min: 0,
        max: xaxisMax,
        scrollbar: {
          enabled: scrolbarEnable
        },
        categories: apiresponse.data['target_variable_filtered'].Test_store_Partner_ID_backup,
        title: {
          text: this.testFeilds['test_store_id'],
          style: {
            fontFamily: 'Mulish_regular'
          }
        },
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            color: '#b7fde0'
          },
        },
        column: {
          pointWidth: 10,
        },
      },
      series: [
        {
          turboThreshold: 10000,
          dataLabels: {
            enabled: true,
          },
          showInLegend: false,
          color: '#b7fde0',
          name: 'Test vs Control Change',
          negativeColor: '#ffd3d4',
          data: test_vs_control.map(function(point: number) {
            return point < 0
              ? {
                y: point, dataLabels: {
                  style: {
                    textOutline: 0
                  }, color: '#ff0f14'
                }
              }
              : {
                y: point, dataLabels: {
                  style: {
                    textOutline: 0
                  }, color: '#0bf896'
                }
              };
          }),
          type: undefined
        },
        {
          turboThreshold: 10000,
          type: 'scatter',
          name: 'Average',
          data: test_vs_control_average,
          dataLabels: {
            enabled: false
          },
          tooltip: {
            pointFormat: '{point.y}'
          },
          showInLegend: true,
        }
      ]
    });
  }

  showMaxNumberData(data: any) {
    const length = data.length;
    if (length <= 20) {
      return [length, false];
    } else {
      return [20, true];
    }
  }

}
