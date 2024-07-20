import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../../../models/city';

@Component({
  selector: 'edit-add-city',
  templateUrl: './edit-add-city.component.html',
  styleUrl: './edit-add-city.component.scss',
})
export class EditAddCityComponent {
  @Output() onCancel = new EventEmitter();
  @Output() onValidate = new EventEmitter<City>();
  @Input() visible = false;
  @Input() city!: City;

  errorPopulation = false;

  validate() {
    if (this.validation()) {
      console.log('success');
      this.onValidate.emit(this.city);
    }
  }
  cancel() {
    this.onCancel.emit();
  }

  validation() {
    if (this.city.latitude < -90 || this.city.latitude > 90) return false;
    if (this.city.longitude < -180 || this.city.longitude > 180) return false;
    if (this.city.country.trim().length < 2) return false;
    if (this.city.name.trim().length < 2) return false;
    if (this.city.population <= 0) return false;
    return true;
  }
}
