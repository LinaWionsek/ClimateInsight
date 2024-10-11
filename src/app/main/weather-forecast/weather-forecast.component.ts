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

  /**
   * Subscribes to citySubject and sets the weatherData property.
   * Requests data for London when the component is initialized.
   */
  ngOnInit() {
    this.dataService.getData('London');
    this.dataService.citySubject.subscribe((data) => {
      this.weatherData = data;
    });
  }
}
