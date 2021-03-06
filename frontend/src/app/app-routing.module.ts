import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TroopPageComponent} from './pages/troop-page/troop-page.component';
import {AttendanceCheckPageComponent} from './pages/attendance-check-page/attendance-check-page.component';

const routes: Routes = [
  {component: HomePageComponent, path: '', pathMatch: 'full', canActivate: [AuthGuard]},
  {component: AttendanceCheckPageComponent, path: 'troop/attendance/:troopId', canActivate: [AuthGuard]},
  {component: TroopPageComponent, path: 'troop/:troopId', canActivate: [AuthGuard]},
  {path: 'troop', redirectTo: '/'},
  {
    component: AuthPageComponent, path: '', children:
      [
        {component: LoginFormComponent, path: 'login'},
        {component: RegisterFormComponent, path: 'register'}
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
