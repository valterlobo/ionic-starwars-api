import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PeoplePage } from '../pages/people/people';
import { PeopleDetailPage } from '../pages/people-detail/people-detail';
import { FilmsPage } from '../pages/films/films';
import { FilmsDetailPage } from '../pages/films-detail/films-detail';
import { StarshipsPage } from '../pages/starships/starships';
import { VehiclesPage } from '../pages/vehicles/vehicles';
import { SpeciesPage } from '../pages/species/species';
import { PlanetsPage } from '../pages/planets/planets';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SwApiServiceProvider } from '../providers/sw-api-service/sw-api-service';
import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network';
//import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PeoplePage,
    PeopleDetailPage,
    FilmsPage,
    FilmsDetailPage,
    StarshipsPage,
    VehiclesPage,
    SpeciesPage ,
    PlanetsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PeoplePage,
    PeopleDetailPage,
    FilmsPage,
    FilmsDetailPage,
    StarshipsPage,
    VehiclesPage,
    SpeciesPage ,
    PlanetsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SwApiServiceProvider,
    Network
  ]
})
export class AppModule {}
