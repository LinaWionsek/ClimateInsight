import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  citySubject = new BehaviorSubject<object>({});

  constructor(private http: HttpClient) {}
  // ApiKey = '037abbf0f7839788885661e47e98c7e3';
  ApiKey = '3c4345da9ed94ea983d130855240710';


 // forecast https://api.weatherapi.com/v1/forecast.json?key=3c4345da9ed94ea983d130855240710&q=london&days=3
  // http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
  //Der Service fügt den Stadtnamen in die URL ein und macht den API-Aufruf.
  //Wenn die Daten ankommen, werden sie in einem BehaviorSubject gespeichert.


  /**
   * Get the weather data for a given city from the weather API.
   * The data is stored in a BehaviorSubject.
   * @param city the name of the city
   */
  getData(city: string) {
    if (city) {
      this.http
        .get(
          'https://api.weatherapi.com/v1/forecast.json?key=3c4345da9ed94ea983d130855240710&q=' +
            city + '&days=3'
        )
        .subscribe(
          (data) => {
            this.citySubject.next(data);
          },
          (error) => {
            console.error('Error', error);
          }
        );
    }
  }

  // returnData() {
  //   return this.citySubject.asObservable();
  // }
}
