Cypress.Commands.add('mockSunnyWeatherBackendResponse', () => {
  return cy
    .intercept('GET', 'http://localhost:3001/weather?city=Warsaw', {
      fixture: 'sunny-weather',
    })
    .as('getWeather');
});

Cypress.Commands.add('mockCloudyWeatherBackendResponse', () => {
  return cy
    .intercept('GET', 'http://localhost:3001/weather?city=Warsaw', {
      fixture: 'cloudy-weather',
    })
    .as('getWeather');
});

Cypress.Commands.add('visitWeatherPage', () => {
  cy.visit('http://localhost:3000');
  return cy.wait('@getWeather');
});

Cypress.Commands.add('shouldSeeSunIcon', () => {
  return cy.get('[data-testid="icon-sun"]').should('have.class', 'text-yellow-400');
});

Cypress.Commands.add('shouldSeeCloudIcon', () => {
  return cy.get('[data-testid="icon-cloud"]').should('have.class', 'text-blue-400');
});
