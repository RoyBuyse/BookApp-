import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TocPage } from '../toc/toc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
     tocPage = TocPage;
  constructor() {
  }
// goTocPage(){
// this.navCrtl.push('TocPage');
// }
}
