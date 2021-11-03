import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import authConfig from '../../config/auth';

import User from '../../models/User';

import AppError from '../../errors/AppError';

class AuthenticateUserService {
  async execute({ email, password }) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Combinação de email e senha incorreta.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Combinação de email e senha incorreta.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
