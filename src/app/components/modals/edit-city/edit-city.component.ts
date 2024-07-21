import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MapService } from '../../../services/map.service';
import {
  latitudeValidator,
  longitudeValidator,
  populationValidator,
} from '../../../utilities/latitudeValidator';
import { City } from '../../../models/city';
import { first } from 'rxjs';

@Component({
  selector: 'edit-city',
  templateUrl: './edit-city.component.html',
  styleUrl: './edit-city.component.scss',
})
export class EditCityComponent implements OnInit {
  @Output() onCancel = new EventEmitter();
  @Input() visible = false;
  @Input() city!: City;

  formBuilder = inject(FormBuilder);
  mapService = inject(MapService);
  destroyRef = inject(DestroyRef);

  cityForm!: FormGroup;

  ngOnInit(): void {
    this.cityForm = this.formBuilder.group({
      id: [this.city.id],
      name: [this.city.name, [Validators.required]],
      country: [this.city.country, [Validators.required]],
      population: [
        this.city.population,
        [Validators.required, populationValidator()],
      ],
      longitude: [
        this.city.longitude,
        [Validators.required, longitudeValidator()],
      ],
      latitude: [
        this.city.latitude,
        [Validators.required, latitudeValidator()],
      ],
      imgUrl: [this.city.imgUrl],
    });
  }

  validate() {
    console.log('form data : ', this.cityForm.value);

    const city: City = this.cityForm.value as City;

    this.mapService
      .updateCapital(city.id, city)
      .pipe(first())
      .subscribe(() => this.onCancel.emit());
  }
  cancel() {
    this.onCancel.emit();
  }
}
