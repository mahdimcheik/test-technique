import { Component, Input } from '@angular/core';
import { City } from '../../models/city';

@Component({
  selector: 'app-city-legend',
  templateUrl: './city-legend.component.html',
  styleUrl: './city-legend.component.scss',
})
export class CityLegendComponent {
  @Input() city!: City;
}
