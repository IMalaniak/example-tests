import { WeatherDescription, WeatherResponse } from '../../types';

export const describeWeather = (temperature: number): WeatherDescription => {
  return temperature > 20 ? WeatherDescription.WARM : WeatherDescription.COLD;
};

const getWeather = (): WeatherResponse['weather'] => {
  // for the purpose of demo, we'll randomise the temperature between -10 and 30
  const temperature = Math.floor(Math.random() * 40) - 10;

  return {
    temperature,
    description: describeWeather(temperature),
  };
};

export const weatherService = {
  getWeather,
};
