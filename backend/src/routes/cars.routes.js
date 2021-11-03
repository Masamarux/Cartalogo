import { Router } from 'express';

import Car from '../models/Car';
import CreateNewCarService from '../services/CreateNewCarService';
import UpdateCarByIdService from '../services/UpdateCarByIdService';
import DestroyCarService from '../services/DestroyCarService';

const carsRouter = Router();

carsRouter.get('/', async (request, response) => {
  const cars = await Car.findAll();

  return response.json(cars);
});

carsRouter.post('/', async (request, response) => {
  const { nome, marca, modelo, preco, foto } = request.body;

  const createNewCarService = new CreateNewCarService();

  const car = await createNewCarService.execute({
    nome,
    marca,
    modelo,
    preco,
    foto,
  });

  return response.json(car);
});

carsRouter.put('/:id', async (request, response) => {
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

carsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const destroyCarService = new DestroyCarService();

  const deleteMessage = await destroyCarService.execute({ id });

  return response.json(deleteMessage);
});

export default carsRouter;
