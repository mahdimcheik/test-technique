import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private http = inject(HttpClient);
  constructor() {}

  getData(): Observable<City[]> {
    return this.http
      .get<City[]>('assets/datas/cities.json')
      .pipe(tap((res) => console.log(res)));
  }
}
