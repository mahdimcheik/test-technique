import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Position } from '../../models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  mapService = inject(MapService);
  destroyRef = inject(DestroyRef);

  options: google.maps.MapOptions = {
    center: { lat: 40, lng: -20 },
    zoom: 4,
  };

  positions: Position[] = [];

  center: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.006 };
  zoom = 12;
  markers = [
    {
      position: { lat: 40.7128, lng: -74.006 },
    },
  ];

  ngOnInit(): void {
    this.mapService
      .getData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.positions = res.map((city) => {
          return { position: { lng: city.longitude, lat: city.latitude } };
        });
      });
  }
}
