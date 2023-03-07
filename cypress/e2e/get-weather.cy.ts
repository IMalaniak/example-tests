describe('Get weather page', () => {
  it('should render sun icon when weather is sunny', () => {
    cy.mockSunnyWeatherBackendResponse();

    cy.visitWeatherPage().then(() => {
      cy.shouldSeeSunIcon();
    });
  });

  it('should render cloud icon when weather is cloudy', () => {
    cy.mockCloudyWeatherBackendResponse();

    cy.visitWeatherPage().then(() => {
      cy.shouldSeeCloudIcon();
    });
  });
});
