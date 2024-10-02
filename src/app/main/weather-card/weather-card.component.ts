import { Component, inject } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
  private apiService = inject(DataService);
  data: any;
  temp: any;
  name: any;
  cityName: string = "";
  ngOnInit() {
  //  this.firstLoad()
  }
  dialogFunction() {
    console.log(this.cityName);
    this.firstLoad()
  }

  firstLoad() {
    this.apiService.getData(this.cityName).subscribe((response) => {
      this.data = response;
      console.log(this.data);
      // this.temp = this.data.main.temp;
      // this.name = this.data.name;
    });
  }

  
}
