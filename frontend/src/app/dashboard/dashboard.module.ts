import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuard} from '@app/core';
import {DashboardComponent} from '@app/dashboard/dashboard.component';
import {MaterialModule} from '@app/shared/material.module';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {MomentModule} from 'ngx-moment';
import {CommonTableComponent} from '@app/shared/component/common-table/common-table.component';
import {SharedModule} from '@app/shared';

const route: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthenticationGuard],
    data: {title: 'DEMO'}
  },
];
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  minScrollbarLength: 20,
  suppressScrollX: false
};

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    PerfectScrollbarModule,
    DragDropModule,
    NgbDropdownModule,
    MomentModule,
    SharedModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }]
})
export class DashboardModule {
}
