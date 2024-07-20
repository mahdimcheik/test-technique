import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { City } from '../models/city';
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

  deleteCapital(id: number): Observable<City[]> {
    return this.http
      .delete<City>(environment.JSON_SERVER + '/capitals/' + id)
      .pipe(
        switchMap(() => {
          return this.getCapitals();
        })
      );
  }

  updateCapital(id: number, city: City): Observable<City> {
    return this.http.put<City>(
      environment.JSON_SERVER + '/capitals/' + id,
      city
    );
  }

  addCapital(city: City): Observable<City> {
    return this.http.post<City>(environment.JSON_SERVER + '/capitals/', city);
  }
}
