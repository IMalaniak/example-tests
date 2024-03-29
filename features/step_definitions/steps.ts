import { equal, ok } from 'node:assert';

import { Given, Then, When } from '@cucumber/cucumber';

import { CustomWorld } from '../support/setup';

type WorldWithParams = CustomWorld & {
  cityName: string;
  responseStatus: number;
  responseBody: {
    weather: {
      icon: string;
      temperature: number;
      description: string;
    };
    city: string;
  };
};

Given('the city name is {string}', function (cityName: string) {
  this.cityName = cityName;
});

When('the user requests the weather', async function (this: WorldWithParams) {
  const response = await fetch(`http://localhost:${this.port}/weather?city=${this.cityName}`);
  this.responseStatus = response.status;
  this.responseBody = await response.json();
});

Then('the response contains the city name', async function (this: WorldWithParams) {
  equal(this.responseStatus, 200);
  equal(this.responseBody.city, this.cityName);
});

Then(
  'the weather description can be either {string} or {string}',
  async function (this: WorldWithParams, s: string, s2: string) {
    ok([s, s2].includes(this.responseBody.weather.description));
  }
);

Then(
  'the temperature is between {int} and {int}',
  async function (this: WorldWithParams, int: number, int2: number) {
    ok(int <= this.responseBody.weather.temperature);
    ok(this.responseBody.weather.temperature <= int2);
  }
);

Then(
  'the icon is either {string} or {string}',
  function (this: WorldWithParams, s: string, s2: string) {
    ok([s, s2].includes(this.responseBody.weather.icon));
  }
);
