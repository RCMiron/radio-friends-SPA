import {NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header.component';
import {routing} from './app.routing';
import {AuthenticateComponent} from './auth/authenticate.component';
import {RegisterComponent} from './auth/register.component';
import {SignInComponent} from './auth/sign-in.component';
import {AuthService} from './auth/auth.service';
import {ApplicationComponent} from './application/application.component';
import {RecordComponent} from './application/record-controls/record.component';
import {CountdownComponent} from './application/record-controls/countdown.component';
import {ListenControlsComponent} from './application/listen-controls/listen-controls.component';
import {ListenComponent} from './application/listen/listen.component';
import {ListenFeedComponent} from './application/listen/listen-feed.component';
import {ListenUserStationComponent} from './application/listen/listen-user-station.component';
import {ListenMyStationComponent} from './application/listen/listen-my-station.component';
import {ListenService} from './application/listen/listen.service';



@NgModule({
  declarations: [
                  AppComponent,
                  HeaderComponent,
                  AuthenticateComponent,
                  RegisterComponent,
                  SignInComponent,
                  ApplicationComponent,
                  RecordComponent,
                  CountdownComponent,
                  ListenControlsComponent,
                  ListenComponent,
                  ListenFeedComponent,
                  ListenMyStationComponent,
                  ListenUserStationComponent
                ],
  imports: [
            BrowserModule,
            routing,
            FormsModule,
            ReactiveFormsModule,
            HttpModule
          ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule{}
