import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateTestComponent} from '@app/create-test/create-test.component';
import {AuthenticationGuard} from '@app/core';
import {AnalyseTestImpactComponent} from '@app/analyse-test-impact/analyse-test-impact.component';
import {ImpactSummaryComponent} from '@app/analyse-test-impact/impact-summary/impact-summary.component';
import {TestMeasurementResultsComponent} from '@app/analyse-test-impact/test-measurement-results/test-measurement-results.component';
import {PercentageChangeComponent} from '@app/analyse-test-impact/percentage-change/percentage-change.component';
import {SharedModule} from '@app/shared';
import {FormsModule} from '@angular/forms';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {NgxSelectModule} from 'ngx-select-ex';

const route: Routes = [
  {
    path: '', component: AnalyseTestImpactComponent,
    canActivate: [AuthenticationGuard],
    data: {title: 'DEMO'}
  },
];

@NgModule({
  declarations: [AnalyseTestImpactComponent, ImpactSummaryComponent, TestMeasurementResultsComponent,
  PercentageChangeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    BsDatepickerModule,
    NgxSelectModule
  ]
})
export class AnalyseTestImpactModule { }
