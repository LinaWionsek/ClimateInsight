import { Component, inject } from '@angular/core';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
  private dataService = inject(DataService);
  weatherData: any;

  //Die zweite Komponente abonniert die Daten vom Service. 
  //Sobald neue Daten verfügbar sind, werden sie automatisch in der Komponente 
    //aktualisiert und angezeigt.
  ngOnInit() {
    this.dataService.getData('London');
    this.dataService.returnData().subscribe(
      (data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      }
    ) 
  }
  
}
