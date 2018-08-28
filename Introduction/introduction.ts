import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TocPage} from '../toc/toc';
import { ChapteronePage } from '../chapterone/chapterone';
/**
 * Generated class for the IntroductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {
  tocPage = TocPage;
  chapteronePage = ChapteronePage;
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroductionPage');
  }

}