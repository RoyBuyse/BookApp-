import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IntroductionPage } from '../introduction/introduction';
import { ChapteronePage } from '../chapterone/chapterone';


@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {
  homePage = HomePage;
  introductionPage = IntroductionPage;
  chapteronePage = ChapteronePage;
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }

 
}