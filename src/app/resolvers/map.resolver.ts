import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { inject } from '@angular/core';
import { MapService } from '../services/map.service';

export const mapResolver: ResolveFn<Observable<City[]>> = (route, state) => {
  return inject(MapService).getCapitals();
};
