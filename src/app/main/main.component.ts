import { Component, inject } from '@angular/core';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [WeatherCardComponent, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private dataService = inject(DataService);
  cityName: string = '';
 

submitCity() {
  this.dataService.getData(this.cityName);
}
  
}
