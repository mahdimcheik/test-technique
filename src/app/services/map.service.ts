import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { City, CityCreateDto } from '../models/city';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private http = inject(HttpClient);

  cityDetails$: BehaviorSubject<City> = new BehaviorSubject({} as City);
  cityList$ = new BehaviorSubject<City[]>([]);

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

  updateCapital(id: string, city: City): Observable<City> {
    return this.http.put<City>(
      environment.JSON_SERVER + '/capitals/' + id,
      city
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

  public getPosition(): Observable<any> {
    return of(
      navigator.geolocation.watchPosition(
        (pos) => console.log('position ', pos),
        () => console.log('error')
      )
    );
  }
}
