import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SwApiServiceProvider } from '../../providers/sw-api-service/sw-api-service';
import { PeopleDetailPage } from '../people-detail/people-detail';

@Component({
  selector: 'page-films-detail',
  templateUrl: 'films-detail.html',
})
export class FilmsDetailPage {

  film = {};
  peoples = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public swapiService:SwApiServiceProvider) {
    console.log(this.navParams.data);
    this.film =  this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsDetailPage');

    let personsLink =  this.film['characters'];

    personsLink.forEach(peopleURLResource => {

      this.swapiService.getPeople(peopleURLResource).subscribe(

        data => {
          console.log('people', data);
          this.peoples.push(data);
        },
        err => { console.log(err);
        }

      );

    });

  }




  peopleDetail(item) {
    this.navCtrl.push(PeopleDetailPage,item);
  }


}
