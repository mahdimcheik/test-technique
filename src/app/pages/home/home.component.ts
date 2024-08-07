import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { City } from '../../models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  mapService = inject(MapService);
  capitals$ = this.mapService.cityList$;
  destroyRef = inject(DestroyRef);

  center: google.maps.LatLngLiteral = { lat: 46.365, lng: 2.601 };
  zoom = 4;

  moveMap(city: City) {
    this.mapService.cityDetails$.next(city);
  }

  ngOnInit(): void {
    this.mapService.cityDetails$.next({} as City);
    this.mapService.getLocation();
  }

  findMe() {
    this.center = this.mapService.myLocation.value;
    this.zoom = 12;
  }
}
