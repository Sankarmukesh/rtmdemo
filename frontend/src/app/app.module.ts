import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { UserIdleModule } from 'angular-user-idle';
import { ClarityModule } from '@clr/angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
} from 'ngx-ui-loader';
import { SnackbarControlComponent } from './snackbar-control/snackbar-control.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';
import { AgmCoreModule } from '@agm/core';
import {HomeModule} from '@app/home/home.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: 'white',
  textColor: 'yellow',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 100,
  fgsType: SPINNER.rectangleBounceParty,
  pbThickness: 0
};
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  imports: [
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    TranslateModule.forRoot(),
    CoreModule,
    SharedModule,
    UserIdleModule.forRoot({ idle: 1800, timeout: 1 }),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 3000
    }),
    LoginModule,
    ClarityModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbkgIf_wHnM_tx4brs2BOOzXQ_6nIweZA',
      libraries: ['places']
    }),
    HomeModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports: [],
  declarations: [
    AppComponent,
    SnackbarControlComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarControlComponent],
  schemas: [
    NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
