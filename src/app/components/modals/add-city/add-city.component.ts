import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { CityCreateDto } from '../../../models/city';
import { FormBuilder, Validators } from '@angular/forms';
import {
  latitudeValidator,
  longitudeValidator,
  populationValidator,
} from '../../../utilities/latitudeValidator';
import { MapService } from '../../../services/map.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'add-city',
  templateUrl: './add-city.component.html',
  styleUrl: './add-city.component.scss',
})
export class AddCityComponent {
  @Output() onCancel = new EventEmitter();
  @Input() visible = false;

  formBuilder = inject(FormBuilder);
  mapService = inject(MapService);
  destroyRef = inject(DestroyRef);

  cityForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    country: ['', [Validators.required]],
    population: [0, [Validators.required, populationValidator()]],
    longitude: [0, [Validators.required, longitudeValidator()]],
    latitude: [0, [Validators.required, latitudeValidator()]],
    imgUrl: [''],
  });

  validate() {
    const city: CityCreateDto = this.cityForm.value as CityCreateDto;

    if (!city.imgUrl) {
      city.imgUrl = 'https://www.fillmurray.com/640/360';
    }
    this.mapService
      .addCapital(city)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.onCancel.emit());
  }
  cancel() {
    this.onCancel.emit();
  }
}
