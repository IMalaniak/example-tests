import { translateCity } from './translation.service';

describe('translation service', () => {
  describe('translateCity', () => {
    it('should translate cityName to polish', () => {
      const browserLanguage = 'pl';
      const city = 'Warsaw';

      expect(translateCity(city, browserLanguage)).toEqual('Warszawa');
    });

    it('should translate cityName to english', () => {
      const browserLanguage = 'en';
      const city = 'Warsaw';

      expect(translateCity(city, browserLanguage)).toEqual('Warsaw');
    });
  });
});
