export class City {
  id: number;
  name: string;
  population: number;
  longitude: number;
  latitude: number;
  constructor(
    id: number,
    name: string,
    population: number,
    longitude: number,
    latitude: number
  ) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.name = name;
    this.population = population;
  }

  toMapFormat(): Position {
    return { lat: this.latitude, lng: this.longitude };
  }
}

export type Position = {
  lat: number;
  lng: number;
};
