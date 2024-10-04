import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  citySubject = new BehaviorSubject<object>({});

  constructor(private http: HttpClient) {}
  ApiKey = '037abbf0f7839788885661e47e98c7e3';

  //Der Service fügt den Stadtnamen in die URL ein und macht den API-Aufruf.
  //Wenn die Daten ankommen, werden sie in einem BehaviorSubject gespeichert.
  getData(city: string) {
    if (city) {
      this.http
        .get(
          'https://api.openweathermap.org/data/2.5/weather?q=' +
            city +
            '&units=metric&appid=037abbf0f7839788885661e47e98c7e3'
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
