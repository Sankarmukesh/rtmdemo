import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Logger, AuthenticationService } from '@app/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import {ApicallService} from '@app/shared/services/apicall.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  version: any = environment.version;
  error: string;
  loginForm: FormGroup;
  isLoading = false;
  islogin: boolean;
  EnterUsername = true;
  EnterPassword = true;
  token: string = undefined;
  enableMicrosoftButton = false;

  userNotMappedMsgShow: any = false;
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
    private loginservice: LoginService,
    private toastr: ToastrService,
    private apiservice: ApicallService,

  ) {
    this.createForm();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.token = this.route.snapshot.queryParams.token;
    status = this.route.snapshot.queryParams.status;
    if(status === 'logout') {
      this.enableMicrosoftButton = true;
    } else if (this.token == null || this.token == undefined) {
      // window.location.href = environment.serverUrl+'accounts/login';
    } else {
      const data = { token: 'Bearer '+this.token };
      this.login(data);
    }
  }

  singleSignOn() {
    window.location.href = environment.serverUrl+'accounts/login';
  }

  Login() {
    if (this.loginForm.value.username == '') {
      // this.openSnackBar("Please Enter Username","Close")
      this.EnterUsername = false;
      // return 0;
    } else {
      this.EnterUsername = true;
    }
    if (this.loginForm.value.password == '') {
      // this.openSnackBar("Please Enter Password","Close")
      this.EnterPassword = false;
      // return 0;
    } else {
      this.EnterPassword = true;
    }
    const logged = 'Yes';

    this.isLoading = true;
    // this.router.navigate(['/testconfig']);
    this.isLoading = false;
    const data = { username: this.loginForm.value.username, password: this.loginForm.value.password };

    if (this.loginForm.value.username != '' && this.loginForm.value.password != '') {
      this.login(data);
    }
  }

  login(data: any) {
    this.loginservice.login(data).subscribe(
      (data: any) => {
        if(data.status == 'ok'){
          this.userNotMappedMsgShow = false;
        } else{
          if(data.data == 'You are not mapped to any specific market in the FAST tool'){
            this.userNotMappedMsgShow = true;
          }
        }
        this.authenticationService
          .login(data)
          .pipe(
            finalize(() => {
              this.loginForm.markAsPristine();
              this.isLoading = false;
            })
          )
          .subscribe(
            (credentials: any) => {
              if (credentials.status == 'ok') {
                // log.debug(`${credentials.username} successfully logged in`);
                this.islogin = true;

                localStorage.setItem(
                  'username',
                  this.loginForm.value.username == '' ? credentials.data.username : this.loginForm.value.username
                );
                localStorage.setItem('logged', 'Yes');
                localStorage.setItem('region', credentials.data.region_code);
                sessionStorage.setItem('region', credentials.data.region_code);
                localStorage.setItem('dropdown_value', JSON.stringify(credentials.data.region_data));
                if(credentials.data.region_code == 'DEMO'){
                  localStorage.setItem('regionPic', 'assets/images/flag.png');
                  sessionStorage.setItem('regionPic', 'assets/images/flag.png');
                } else if(credentials.data.region_code == 'DEMO'){
                  localStorage.setItem('regionPic', 'assets/images/flag1.png');
                  sessionStorage.setItem('regionPic', 'assets/images/flag1.png');
                }

                this.apiservice.updatedProfile();
                this.route.queryParams.subscribe(params =>
                  this.router.navigate([params.redirect || './dashboard'], {
                    replaceUrl: true
                  })
                );
              } else {

                //log.debug(`Login error: ${credentials.status}`);
                this.error = data.data;
                this.isLoading = false;
              }
            },
            error => {
              //log.debug(`Login error: ${error}`);
              this.error = error;
            }
          );
      },
      error => {
        //log.debug(`Login error: ${error}`);
        this.error = 'Database Connection Issue';
        this.isLoading = false;
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'bottom'
    });
  }

  dismiss() {
    this._snackBar.dismiss();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }
}
