import { Component, Input } from '@angular/core';
import { City } from '../../models/city';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.scss',
})
export class CityCardComponent {
  @Input() city!: City;
}
