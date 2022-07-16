import {NgModule} from '@angular/core';
import {PhotoListModule} from './photo-list/photo-list.module';
import {PhotoFormModule} from './photo-form/photo-form.module';
import {PhotoModule} from './photo/photo.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
  ]
})
export class PhotosModule { }
