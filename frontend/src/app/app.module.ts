import {OverlayModule} from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateScoutDialogComponent} from './components/create-scout-dialog/create-scout-dialog.component';
import {CreateScoutButtonComponent} from './components/create-scout-button/create-scout-button.component';
import {CreateTroopFormComponent} from './components/create-troop-form/create-troop-form.component';
import {GoogleSignInButtonComponent} from './components/google-sign-in-button/google-sign-in-button.component';
import {JoinTroopFormComponent} from './components/join-troop-form/join-troop-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {TroopListComponent} from './components/troop-list/troop-list.component';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TroopPageComponent} from './pages/troop-page/troop-page.component';
import {ModalComponent} from './components/modal/modal.component';
import { AttendanceCheckButtonComponent } from './components/attendance-check-button/attendance-check-button.component';
import { AttendanceCheckPageComponent } from './pages/attendance-check-page/attendance-check-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSignInButtonComponent,
    HomePageComponent,
    AuthPageComponent,
    RegisterFormComponent,
    LoginFormComponent,
    JoinTroopFormComponent,
    CreateTroopFormComponent,
    TroopListComponent,
    TroopPageComponent,
    CreateScoutButtonComponent,
    CreateScoutDialogComponent,
    ModalComponent,
    AttendanceCheckButtonComponent,
    AttendanceCheckPageComponent
  ],
  imports: [
    OverlayModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule
  ],
  entryComponents: [CreateScoutDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
