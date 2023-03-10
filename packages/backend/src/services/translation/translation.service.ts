export const translateCity = (cityName: string, browserLanguage: string): string => {
  const objWithTranslations = {
    London: 'Londyn',
    Warsaw: 'Warszawa',
  };
  // @ts-ignore
  return browserLanguage === 'pl' ? objWithTranslations[`${cityName}`] : cityName;
};
