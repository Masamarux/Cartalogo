import { Router } from 'express';

import carsRouter from './cars.routes';

const routes = Router();

routes.use('/cars', carsRouter);

export default routes;
