import { verify } from 'jsonwebtoken';

import authToken from '../config/auth';

import AppError from '../errors/AppError';

function ensureAuthentication(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader || authHeader === 'Bearer') {
    throw new AppError('JWT em falta.', 403);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, authToken.jwt.secret);

    request.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    console.log(error);
    throw new AppError('JWT inválido.', 403);
  }
}

export default ensureAuthentication;
