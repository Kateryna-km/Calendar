import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { InfoUserComponent } from './info-user/info-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { InfoEventComponent } from './info-event/info-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { UserToEventComponent } from './user-to-event/user-to-event.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    InfoUserComponent,
    EditUserComponent,
    CreateEventComponent,
    InfoEventComponent,
    EditEventComponent,
    UserToEventComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
