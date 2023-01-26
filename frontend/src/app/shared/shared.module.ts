import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader/loader.component';
import {FooterComponent} from '@app/shared/component/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {FilterComponentComponent} from './component/filter-component/filter-component.component';
import {MaterialModule} from './material.module';
import {MomentModule} from 'ngx-moment';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  minScrollbarLength: 20,
  suppressScrollX: false
};
import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';
import {HistoryComponent} from './component/history/history.component';
import {NgxSelectModule} from 'ngx-select-ex';
import {CommonTableComponent} from './component/common-table/common-table.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatDividerModule, MaterialModule, PerfectScrollbarModule, MomentModule,
    NgxSelectModule, DragDropModule],
  declarations: [LoaderComponent, FooterComponent, FilterComponentComponent, HistoryComponent, CommonTableComponent],
  exports: [LoaderComponent, FooterComponent, FilterComponentComponent, HistoryComponent, MaterialModule, PerfectScrollbarModule, CommonTableComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }]
})
export class SharedModule {
}
