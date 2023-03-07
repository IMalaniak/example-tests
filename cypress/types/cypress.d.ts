declare namespace Cypress {
  interface Chainable {
    mockSunnyWeatherBackendResponse(): void;
    mockCloudyWeatherBackendResponse(): void;
    visitWeatherPage(): Chainable;
    shouldSeeSunIcon(): void;
    shouldSeeCloudIcon(): void;
  }
}
