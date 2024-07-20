import { Component, inject } from '@angular/core';
import { MapService } from '../../services/map.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  mapService = inject(MapService);
  listCapitals$ = this.mapService.cityList$;

  showModal = false;

  cancel() {
    this.showModal = false;
    console.log('pressed cancel');
  }

  validate() {
    this.showModal = false;
    console.log('pressed validate');
  }
}
