import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SwApiServiceProvider {

  private baseUrl = 'https://swapi.co/api/';

  constructor(public http: HttpClient) {
    console.log('Hello SwApiServiceProvider Provider');
  }


  getAll(resourceURl):Observable<any> {

    return this.http.get<any[]>(this.baseUrl + resourceURl).
    pipe( catchError (err => this.handleHttpError(err)));

  }


  getResource(resourceURl):Observable<any> {

    return this.http.get<any>(resourceURl).
    pipe( catchError (err => this.handleHttpError(err)));
  }


  getAllFilms(): Observable<any> {
    console.log('Getting all Films from the server.');
    return this.http.get<any[]>(this.baseUrl + 'films/?format=json').
      pipe( catchError (err => this.handleHttpError(err)));
  }


  getAllPeople(): Observable<any> {
    console.log('Getting all People from the server.');
      return this.getAll('people/?format=json');
  }


  getPeople(resourceURl): Observable<any> {
    console.log('Getting one People from the server.');
      return this.getResource(resourceURl + '?format=json');
  }


  private handleHttpError(error: HttpErrorResponse): Observable<any> {

    return ErrorObservable.create( error.statusText);
  }
}
