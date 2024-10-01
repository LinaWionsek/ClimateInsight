import { Component, inject } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss'
})
export class WeatherCardComponent {
 
  private apiService = inject(DataService);
  data: any;

  ngOnInit() {
    this.apiService.getData().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }

}
