import { Request, Response, Router } from 'express';

import { weatherService } from '../../services';

export const weatherController = (req: Request, res: Response) => {
  const city = req.query.city;
  const weather = weatherService.getWeather();
  res.send({ weather, city });
};

const weatherRoutes = Router();
weatherRoutes.get('/', weatherController);

export default weatherRoutes;
