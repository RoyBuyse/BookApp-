import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChapteronePage } from './chapterone';

@NgModule({
  declarations: [
    ChapteronePage,
  ],
  imports: [
    IonicPageModule.forChild(ChapteronePage),
  ],
})
export class ChapteronePageModule {}