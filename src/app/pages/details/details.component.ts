import { Component, DestroyRef, inject } from '@angular/core';
import { MapService } from '../../services/map.service';
import { City, CityCreateDto } from '../../models/city';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  mapService = inject(MapService);
  destroyRef = inject(DestroyRef);

  listCapitals$ = this.mapService.cityList$;

  city: CityCreateDto = {
    name: '',
    country: '',
    population: 0,
    longitude: 0,
    latitude: 0,
    imgUrl: '',
  };

  showAddModal = false;

  validate(event: CityCreateDto) {
    console.log('event ', event);

    if (!event.imgUrl) {
      event.imgUrl = 'https://www.fillmurray.com/640/360';
    }
    this.mapService
      .addCapital(this.city)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
    this.showAddModal = false;
  }
}
