import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component'
import { InfoUserComponent } from '../info-user/info-user.component'
import { EditUserComponent } from '../edit-user/edit-user.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
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
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
