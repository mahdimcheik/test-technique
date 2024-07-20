import { Component, Input } from '@angular/core';
import { City } from '../../models/city';

@Component({
  selector: 'list-capitals',
  templateUrl: './list-capitals.component.html',
  styleUrl: './list-capitals.component.scss',
})
export class ListCapitalsComponent {
  @Input() capitals!: City[];
}
