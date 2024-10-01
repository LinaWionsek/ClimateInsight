import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
 ApiKey = '037abbf0f7839788885661e47e98c7e3'
  getData(): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=london&appid=037abbf0f7839788885661e47e98c7e3');
  }
}
