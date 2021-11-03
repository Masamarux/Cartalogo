import { Router } from 'express';

import ensureAuthentication from '../middlewares/ensureAuthentication';

import User from '../models/User';
import CreateNewUserService from '../services/User/CreateNewUserService';
// import UpdateUserByIdService from '../services/UpdateUserByIdService';
// import DestroyUserService from '../services/DestroyUserService';

const usersRouter = Router();

usersRouter.get('/', ensureAuthentication, async (request, response) => {
  const users = await User.findAll();

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { name, email, password, is_admin, foto } = request.body;

  const createNewUserService = new CreateNewUserService();

  const user = await createNewUserService.execute({
    name,
    email,
    password,
    is_admin,
    foto,
  });

  return response.json(user);
});

// usersRouter.put('/:id', async (request, response) => {
//   const UserId = request.params.id;
//   const { nome, marca, modelo, preco, foto } = request.body;

//   const updateUserByIdService = new UpdateUserByIdService();

//   const updatedUser = await updateUserByIdService.execute({
//     id: UserId,
//     nome,
//     marca,
//     modelo,
//     preco,
//     foto,
//   });

//   return response.json(updatedUser);
// });

// usersRouter.delete('/:id', async (request, response) => {
//   const { id } = request.params;
//   const destroyUserService = new DestroyUserService();

//   const deleteMessage = await destroyUserService.execute({ id });

//   return response.json(deleteMessage);
// });

export default usersRouter;
