import { WeatherState } from '../../types';
import { getIcon, getWeatherState } from './weather.service';

// This is a unit test, so we don't need to mock anything
// We can just import the function and test it
// It is enough to test just a part of the service (describeWeather) that is responsible for the logic

describe('Weather Service', () => {
  describe('describeWeather', () => {
    it('should return warm if it is above 20', () => {
      expect(getWeatherState(23)).toEqual(WeatherState.WARM);
    });

    it('should return cold if it is below 20', () => {
      expect(getWeatherState(9)).toEqual(WeatherState.COLD);
    });
  });

  describe('getIcon', () => {
    it('should return sun if it is warm', () => {
      expect(getIcon(WeatherState.WARM)).toEqual('sun');
    });

    it('should return cloud if it is cold', () => {
      expect(getIcon(WeatherState.COLD)).toEqual('cloud');
    });
  });
});
