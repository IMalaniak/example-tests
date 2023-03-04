export enum WeatherDescription {
  COLD = 'cold',
  WARM = 'warm',
}

export type WeatherResponse = {
  weather: {
    temperature: number;
    description: WeatherDescription;
  };
  city: string;
};
