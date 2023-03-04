import { After, Before, setDefaultTimeout, setWorldConstructor, World } from '@cucumber/cucumber';
import { getRandomPort } from 'get-port-please';
import { createServer } from 'http';

import app from '../../packages/backend/src/app';

setDefaultTimeout(5 * 1000);
export class CustomWorld extends World {
  stops: Array<() => unknown> = [];
  port!: number;

  async start() {
    console.log('Starting server');

    this.port = await getRandomPort();
    const server = createServer(app);
    server.listen(this.port);
    this.stops.push(() => server.close());
  }
}

Before(async function (this: CustomWorld) {
  await this.start();
});

After(async function (this: CustomWorld) {
  await Promise.all(this.stops.reverse().map((stop) => stop()));
});

setWorldConstructor(CustomWorld);
