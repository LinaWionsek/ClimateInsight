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

  
  /**
   * Subscribes to citySubject and sets the weatherData property.
   * Sets the lastUpdate property with the localized date string.
   * Sets the sunrise and sunset properties with the localized time strings.
   */
  ngOnInit() {
    this.dataService.getData('London');
    this.dataService.citySubject.subscribe((data) => {
      this.weatherData = data;

      this.lastUpdate = this.weatherData.current
        ? new Date(
            this.weatherData.current.last_updated_epoch * 1000
          ).toLocaleString('en-001')
        : '';
      let sunriseUNIX = this.weatherData.sys?.sunrise;
      let sunsetUNIX = this.weatherData.sys?.sunset;
      this.sunrise = new Date(sunriseUNIX * 1000).toLocaleTimeString("en-US");
      this.sunset = new Date(sunsetUNIX * 1000).toLocaleTimeString("en-US");
    });
  }
}
