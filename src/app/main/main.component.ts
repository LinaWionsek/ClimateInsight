import { Component } from '@angular/core';
import { WeatherCardComponent } from "./weather-card/weather-card.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [WeatherCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
