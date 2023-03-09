import { WeatherDescription } from '../../types';
import { describeWeather } from './weather.service';

// This is a unit test, so we don't need to mock anything
// We can just import the function and test it
// It is enough to test just a part of the service (describeWeather) that is responsible for the logic

describe('Weather Service', () => {
  describe('describeWeather', () => {
    it('should return warm if it is above 20', () => {
      expect(describeWeather(23)).toEqual(WeatherDescription.WARM);
    });

    it('should return cold if it is below 20', () => {
      expect(describeWeather(9)).toEqual(WeatherDescription.COLD);
    });
  });
});
