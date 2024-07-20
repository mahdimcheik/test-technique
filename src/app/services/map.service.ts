import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { City } from '../models/city';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private http = inject(HttpClient);

  cityDetails$: BehaviorSubject<City> = new BehaviorSubject({} as City);

  constructor() {}

  getCapitals(): Observable<City[]> {
    return this.http
      .get<City[]>(environment.JSON_SERVER + '/capitals')
      .pipe(tap((res) => console.log(res)));
  }

  getCapitalById(id: number): Observable<City> {
    return this.http
      .get<City>(environment.JSON_SERVER + '/capitals/' + id)
      .pipe(tap((res) => console.log(res)));
  }
}
