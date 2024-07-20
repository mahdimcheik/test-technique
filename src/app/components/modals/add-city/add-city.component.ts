import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { City, CityCreateDto } from '../../../models/city';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-city',
  templateUrl: './add-city.component.html',
  styleUrl: './add-city.component.scss',
})
export class AddCityComponent implements OnInit {
  @Output() onCancel = new EventEmitter();
  @Output() onValidate = new EventEmitter<CityCreateDto>();
  @Input() visible = false;
  @Input() city!: CityCreateDto;

  formBuilder = inject(FormBuilder);

  cityForm = this.formBuilder.group({
    name: [''],
    country: [''],
    population: [0],
    longitude: [0],
    latitude: [0],
    imgUrl: [''],
  });

  ngOnInit(): void {
    this.cityForm = this.formBuilder.group({
      name: [this.city.name],
      country: [this.city.country],
      population: [this.city.population],
      longitude: [this.city.longitude],
      latitude: [this.city.latitude],
      imgUrl: [this.city.imgUrl],
    });
  }

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
