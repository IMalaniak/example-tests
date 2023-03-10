import { WeatherResponse, WeatherState } from '../../types';

export const getWeatherState = (temperature: number): WeatherState => {
  return temperature > 20 ? WeatherState.WARM : WeatherState.COLD;
};

export const getIcon = (weatherState: WeatherState): 'sun' | 'cloud' => {
  return weatherState === WeatherState.WARM ? 'sun' : 'cloud';
};

const getWeather = (): WeatherResponse['weather'] => {
  // for the purpose of demo, we'll randomise the temperature between -10 and 30
  const temperature = Math.floor(Math.random() * 40) - 10;
  const weatherState = getWeatherState(temperature);

  return {
    icon: getIcon(weatherState),
    temperature,
    description: weatherState,
  };
};

export const weatherService = {
  getWeather,
};
