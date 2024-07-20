import { Component, DestroyRef, inject, Input } from '@angular/core';
import { City } from '../../models/city';
import { MapService } from '../../services/map.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'city-card',
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.scss',
})
export class CityCardComponent {
  @Input() city!: City;
  showDeleteModal: boolean = false;

  mapService = inject(MapService);
  destroyRef = inject(DestroyRef);

  delete() {
    this.mapService
      .deleteCapital(this.city.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
