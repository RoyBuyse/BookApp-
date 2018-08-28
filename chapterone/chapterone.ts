import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroductionPage } from '../introduction/introduction';
import { TocPage } from '../toc/toc';
/**
 * Generated class for the ChapteronePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapterone',
  templateUrl: 'chapterone.html',
})
export class ChapteronePage {
  introductionPage = IntroductionPage;
  tocPage = TocPage;
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapteronePage');
  }

}