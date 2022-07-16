import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotoListComponent} from './photo-list.component';
import {LoadButtonComponent} from './load-button/load-button.component';
import {PhotosComponent} from './photos/photos.component';
import {FilterByDescriptionPipe} from './filter-by-description.pipe';
import {CardModule} from '../../shared/components/card/card.module';
import {PhotoModule} from '../photo/photo.module';



@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    PhotoModule
  ],
})
export class PhotoListModule { }
