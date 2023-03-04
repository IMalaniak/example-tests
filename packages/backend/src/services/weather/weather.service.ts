export enum Weather {
  COLD = 'cold',
  WARM = 'warm',
}

export const describeWeather = (temperature: number): Weather => {
  return temperature > 20 ? Weather.WARM : Weather.COLD;
};

const getWeather = (): {
  temperature: number;
  description: Weather;
} => {
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
