import { Component, inject } from '@angular/core';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [WeatherCardComponent, WeatherForecastComponent, FormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private dataService = inject(DataService);
  cityName: string = '';
  

submitCity() {
  this.dataService.getData(this.cityName);
  this.cityName = '';
}
  
}
