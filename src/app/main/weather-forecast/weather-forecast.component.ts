import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss',
})
export class WeatherForecastComponent {
  private dataService = inject(DataService);
  weatherData: any;

  ngOnInit() {
    this.dataService.getData('London');
    this.dataService.citySubject.subscribe((data) => {
      this.weatherData = data;

      // this.lastUpdate = this.weatherData.current
      //   ? new Date(
      //       this.weatherData.current.last_updated_epoch * 1000
      //     ).toLocaleString('en-US')
      //   : '';

      console.log(this.weatherData);
      // console.log(this.weatherData.main);
      // console.log(this.weatherData.main?.temp_max);
      // console.log(this.weatherData.main?.temp_min);
      // console.log(this.weatherData.main?.feels_like);
      // console.log(this.weatherData.sys?.sunrise);

      // let sunriseUNIX = this.weatherData.sys?.sunrise;
      // let sunsetUNIX = this.weatherData.sys?.sunset;
      // this.sunrise = new Date(sunriseUNIX * 1000).toLocaleTimeString("en-US");
      // this.sunset = new Date(sunsetUNIX * 1000).toLocaleTimeString("en-US");
    });
  }
}
