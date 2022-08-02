import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import {VmessageModule} from '../shared/components/vmessage/vmessage.module';
import {RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home.routing.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule,
    VmessageModule
  ]
})
export class HomeModule { }
