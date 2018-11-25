import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SwApiServiceProvider } from '../../providers/sw-api-service/sw-api-service';
import { PeopleDetailPage } from '../people-detail/people-detail';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {

  peoples =[];

  total = 0 ;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingController: LoadingController,
              private swapiService:SwApiServiceProvider)
              { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.swapiService.getAllPeople().subscribe(
        data => {
          console.log('People', data);
          this.peoples = data.results;
          this.total = data.count;
          loader.dismiss();
        },
        err => { console.log(err);
          loader.dismiss();
        }
      );

    });
  }

  detail(item) {
    this.navCtrl.push(PeopleDetailPage,item);
  }

}
