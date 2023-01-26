import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuard} from '@app/core';
import {CreateTestComponent} from '@app/create-test/create-test.component';
import {SharedModule} from '@app/shared';
import {ApplicabilityCriteriaComponent} from '@app/create-test/applicability-criteria/applicability-criteria.component';
import {TestDetailsComponent} from '@app/create-test/test-details/test-details.component';
import {SelectTestStoresComponent} from '@app/create-test/select-test-stores/select-test-stores.component';
import {ControlStoreMappingComponent} from '@app/create-test/control-store-mapping/control-store-mapping.component';
import {FormsModule} from '@angular/forms';
import {NgxSelectModule} from 'ngx-select-ex';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AgmCoreModule} from '@agm/core';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

const route: Routes = [
  {
    path: '', component: CreateTestComponent,
    canActivate: [AuthenticationGuard],
    data: {title: 'DEMO'}
  },
];

@NgModule({
  declarations: [CreateTestComponent,
    ApplicabilityCriteriaComponent, TestDetailsComponent, SelectTestStoresComponent,
    ControlStoreMappingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    NgxSelectModule,
    BsDatepickerModule,
    NgMultiSelectDropDownModule,
    DragDropModule,
    AgmCoreModule,
    FlexLayoutModule
  ]
})
export class CreateTestModule {
}
