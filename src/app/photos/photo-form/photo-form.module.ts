import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotoFormComponent} from './photo-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VmessageModule} from '../../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [ PhotoFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VmessageModule
  ]
})
export class PhotoFormModule { }
