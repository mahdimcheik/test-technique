import { Component, inject } from '@angular/core';
import { MapService } from '../../services/map.service';
import { map } from 'rxjs';
import { City } from '../../models/city';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  listCapitals$ = inject(MapService).cityList$;
}
