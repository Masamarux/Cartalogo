import { hash } from 'bcrypt';

import User from '../../models/User';
import AppError from '../../errors/AppError';

class CreateNewUserService {
  async execute({ name, email, password, is_admin, foto }) {
    if (name && email && password) {
      const userAlreadyExists = await User.findOne({ where: { email } });

      if (userAlreadyExists) {
        throw new AppError('Usuário já existe.');
      }

      const hashedPassword = await hash(password, 8);

      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        is_admin,
        foto,
      });

      return newUser;
    }
    throw new AppError('Falta de dados do novo usuário.');
  }
}

export default CreateNewUserService;
