describe('Get weather page', () => {
  it('should render sun icon when weather is sunny', () => {
    // simulate a sunny weather response from the backend
    cy.intercept('GET', 'http://localhost:3001/weather?city=Warsaw', {
      statusCode: 200,
      body: {
        weather: {
          temperature: 24,
          description: 'warm',
        },
        city: 'Warsaw',
      },
    }).as('getWeather');

    cy.visit('http://localhost:3000');
    cy.get('[data-testid="icon-sun"]').should('have.class', 'text-yellow-400');
  });

  it('should render cloud icon when weather is cold', () => {
    // simulate a cold weather response from the backend
    cy.intercept('GET', 'http://localhost:3001/weather?city=Warsaw', {
      statusCode: 200,
      body: {
        weather: {
          temperature: 10,
          description: 'cold',
        },
        city: 'Warsaw',
      },
    }).as('getWeather');

    cy.visit('http://localhost:3000');
    cy.get('[data-testid="icon-cloud"]').should('have.class', 'text-blue-400');
  });
});
