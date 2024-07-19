import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  options: google.maps.MapOptions = {
    center: { lat: 40, lng: -20 },
    zoom: 4,
  };

  center: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.006 };
  zoom = 12;
  markers = [
    {
      position: { lat: 40.7128, lng: -74.006 },
    },
  ];
}
