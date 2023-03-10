import { Request, Response } from 'express';

import { weatherController } from './weather.controller';

// this is the example of integration test
// we are testing if the weatherController returns the correct response schema, so that it verifies the integration of the controller with the service
// when writing integration tests, we can mock external services like database or external APIs if this is not directly related to the point of the integration test

describe('Weather Controller', () => {
  describe('GET /', () => {
    it('should respond with the weather and a city', async () => {
      const city = 'London';

      const req = {
        query: {
          city,
        },
      } as unknown as Request;

      const res = {
        send: jest.fn(),
      } as unknown as Response;

      weatherController(req, res);

      expect(res.send).toHaveBeenCalledWith({
        weather: {
          icon: expect.any(String),
          description: expect.any(String),
          temperature: expect.any(Number),
        },
        city,
      });
    });
  });
});
