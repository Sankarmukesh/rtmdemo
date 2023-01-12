import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared';
import {TranslateModule} from '@ngx-translate/core';
import {HomeComponent} from '@app/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ToolbarComponent} from '@app/shared/component/toolbar/toolbar.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {NgxSelectModule} from 'ngx-select-ex';
import {FormsModule} from '@angular/forms';
import {SidebarComponent} from '@app/sidebar/sidebar.component';
import {AuthenticationGuard} from '@app/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)},
      {
        path: 'createTest',
        loadChildren: () => import('../create-test/create-test.module').then(m => m.CreateTestModule)
      },
      {
        path: 'analyseImpact',
        loadChildren: () => import('../analyse-test-impact/analyse-test-impact.module').then(m => m.AnalyseTestImpactModule)
      }
    ],
    canActivate: [AuthenticationGuard],
    data: {title: 'DEMO'}
  }
];

@NgModule({
  declarations: [HomeComponent, ToolbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    RouterModule.forChild(routes),
    NgxSelectModule,
    FormsModule,
    AutocompleteLibModule
  ]
})
export class HomeModule {
}
