import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotoListComponent} from './photo-list.component';
import {LoadButtonComponent} from './load-button/load-button.component';
import {PhotosComponent} from './photos/photos.component';
import {FilterByDescriptionPipe} from './filter-by-description.pipe';
import {CardModule} from '../../shared/components/card/card.module';
import {PhotoModule} from '../photo/photo.module';
import { SearchComponent } from './search/search.component';
import {DarkOnHoverModule} from '../../shared/directives/dark-on-hover/dark-on-hover.module';



@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    PhotoModule,
    DarkOnHoverModule
  ],
})
export class PhotoListModule { }
