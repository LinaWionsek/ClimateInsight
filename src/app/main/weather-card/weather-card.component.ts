import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
  private dataService = inject(DataService);
  weatherData: any;
  sunrise: string = '';
  sunset: string = '';
  lastUpdate: string = '';
  //Die zweite Komponente abonniert die Daten vom Service.
  //Sobald neue Daten verfügbar sind, werden sie automatisch in der Komponente
  //aktualisiert und angezeigt.
  ngOnInit() {
    this.dataService.getData('London');
    this.dataService.citySubject.subscribe((data) => {
      this.weatherData = data;

      this.lastUpdate = this.weatherData.current
        ? new Date(
            this.weatherData.current.last_updated_epoch * 1000
          ).toLocaleString('en-US')
        : '';

      console.log(this.weatherData);



      console.log(this.weatherData.main);
      console.log(this.weatherData.main?.temp_max);
      console.log(this.weatherData.main?.temp_min);
      console.log(this.weatherData.main?.feels_like);
      console.log(this.weatherData.sys?.sunrise);

      let sunriseUNIX = this.weatherData.sys?.sunrise;
      let sunsetUNIX = this.weatherData.sys?.sunset;
      this.sunrise = new Date(sunriseUNIX * 1000).toLocaleTimeString("en-US");
      this.sunset = new Date(sunsetUNIX * 1000).toLocaleTimeString("en-US");
    });
  }
}
