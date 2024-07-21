import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { City, CityCreateDto, Position } from '../models/city';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private http = inject(HttpClient);

  cityDetails$: BehaviorSubject<City> = new BehaviorSubject({} as City);
  cityList$ = new BehaviorSubject<City[]>([]);
  myLocation = new BehaviorSubject<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });

  constructor() {}

  getCapitals(): Observable<City[]> {
    return this.http
      .get<City[]>(environment.JSON_SERVER + '/capitals')
      .pipe(tap((res) => this.cityList$.next(res)));
  }

  deleteCapital(id: string): Observable<City[]> {
    return this.http
      .delete<City>(environment.JSON_SERVER + '/capitals/' + id)
      .pipe(
        switchMap(() => {
          return this.getCapitals();
        })
      );
  }

  updateCapital(id: string, city: City): Observable<City[]> {
    return this.http
      .put<City[]>(environment.JSON_SERVER + '/capitals/' + id, city)
      .pipe(
        switchMap(() => {
          return this.getCapitals();
        })
      );
  }

  addCapital(city: CityCreateDto): Observable<City[]> {
    return this.http
      .post<City>(environment.JSON_SERVER + '/capitals/', city)
      .pipe(
        switchMap(() => {
          return this.getCapitals();
        })
      );
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          if (position) {
            this.myLocation.next({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          }
        },
        (error) => console.error(error)
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
