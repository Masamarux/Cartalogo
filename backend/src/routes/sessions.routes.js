import { Router } from 'express';

import AuthenticateUserService from '../services/Session/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUserService = new AuthenticateUserService();

  const data = await authenticateUserService.execute({ email, password });

  return response.json(data);
});

export default sessionsRouter;
