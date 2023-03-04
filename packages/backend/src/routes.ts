import { Router } from 'express';

import { weatherRoutes } from './controllers';

const routes = Router();
routes.use('/weather', weatherRoutes);

export default routes;
