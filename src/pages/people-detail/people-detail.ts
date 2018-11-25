import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PeopleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-people-detail',
  templateUrl: 'people-detail.html',
})
export class PeopleDetailPage {

  people ={}

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.people =  this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleDetailPage');
  }

}
