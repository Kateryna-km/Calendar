import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndexComponent } from '../index/index.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component'
import { InfoUserComponent } from '../info-user/info-user.component'
import { EditUserComponent } from '../edit-user/edit-user.component'
import { CreateEventComponent } from '../create-event/create-event.component'
import { InfoEventComponent } from '../info-event/info-event.component'
import { EditEventComponent } from '../edit-event/edit-event.component'
import { UserToEventComponent } from '../user-to-event/user-to-event.component'

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'user',
    component: SignUpComponent,
  },
  {
    path: 'user/login',
    component: LoginComponent,
  },
  {
    path: 'user/:id',
    component: InfoUserComponent,
  },
  {
    path: 'user/:id/edit',
    component: EditUserComponent,
  },
  {
    path: 'event',
    component: CreateEventComponent,
  },
  {
    path: 'event/:id',
    component: InfoEventComponent,
  },
  {
    path: 'event/:id/edit',
    component: EditEventComponent,
  },
  {
    path: 'event/:id/add-user',
    component: UserToEventComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
