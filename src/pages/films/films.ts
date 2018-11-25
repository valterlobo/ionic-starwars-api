import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController , Events } from 'ionic-angular';
import { FilmsDetailPage } from '../films-detail/films-detail';
import { SwApiServiceProvider } from '../../providers/sw-api-service/sw-api-service';


@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  films = [];
  total:number;

  constructor(public navCtrl: NavController,
    public loadingController: LoadingController,
    public navParams: NavParams,
    public events: Events,
    private swapiService:SwApiServiceProvider) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.swapiService.getAllFilms().subscribe(
        data => {
          console.log('Films', data);
          this.films = data.results;
          this.total = data.count;
          loader.dismiss();
        },
        err => { console.log(err);
          loader.dismiss();
          //alert("ERRRO");
        }

        );

    });


  }
  ionViewCanEnter(){

  }

  filmDetail(film) {
    this.navCtrl.push(FilmsDetailPage,film);
  }


}
