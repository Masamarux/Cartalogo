import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import Car from '../models/Car';
import CreateNewCarService from '../services/Car/CreateNewCarService';
import UpdateCarByIdService from '../services/Car/UpdateCarByIdService';
import UpdateCarImageService from '../services/Car/UpdateCarImageService';
import DestroyCarService from '../services/Car/DestroyCarService';

import ensureAuthentication from '../middlewares/ensureAuthentication';

const carsRouter = Router();
const upload = multer(uploadConfig);

carsRouter.get('/', async (request, response) => {
  const cars = await Car.findAll();

  return response.json(cars);
});

carsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const car = await Car.findOne({ where: { id } });

  return response.json(car);
});

carsRouter.post(
  '/',
  ensureAuthentication,
  upload.single('foto'),
  async (request, response) => {
    const { nome, marca, modelo, preco } = request.body;
    const foto = request.file?.filename;

    const createNewCarService = new CreateNewCarService();

    const car = await createNewCarService.execute({
      nome,
      marca,
      modelo,
      preco,
      foto: foto || null,
    });

    return response.json(car);
  },
);

carsRouter.put('/:id', ensureAuthentication, async (request, response) => {
  const carId = request.params.id;
  const { nome, marca, modelo, preco, foto } = request.body;

  const updateCarByIdService = new UpdateCarByIdService();

  const updatedCar = await updateCarByIdService.execute({
    id: carId,
    nome,
    marca,
    modelo,
    preco,
    foto,
  });

  return response.json(updatedCar);
});

carsRouter.patch(
  '/:id/foto',
  ensureAuthentication,
  upload.single('foto'),
  async (request, response) => {
    const updateCarImage = new UpdateCarImageService();
    const { id } = request.params;

    const car = await updateCarImage.execute({
      id,
      fotoFileName: request.file.filename,
    });

    return response.json(car);
  },
);

carsRouter.delete('/:id', ensureAuthentication, async (request, response) => {
  const { id } = request.params;

  const destroyCarService = new DestroyCarService();

  const deleteMessage = await destroyCarService.execute({ id });

  return response.json(deleteMessage);
});

export default carsRouter;
