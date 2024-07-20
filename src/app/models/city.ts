export type City = {
  id: string;
  name: string;
  population: number;
  longitude: number;
  latitude: number;
  country: string;
  imgUrl: string;
};

export type CityCreateDto = {
  name: string;
  population: number;
  longitude: number;
  latitude: number;
  country: string;
  imgUrl: string;
};

export type Position = {
  coords: {
    latitude: number;
    longitude: number;
  };
};
