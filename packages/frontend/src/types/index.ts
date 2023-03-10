export enum WeatherState {
  COLD = 'cold',
  WARM = 'warm',
}

export type WeatherResponse = {
  weather: {
    icon: 'sun' | 'cloud';
    temperature: number;
    description: WeatherState;
  };
  city: string;
};
