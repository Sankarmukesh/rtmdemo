import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Shell } from '@app/shell/shell.service';
import { LoginComponent } from './login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent, data: { title: 'Login' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LoginRoutingModule {}
