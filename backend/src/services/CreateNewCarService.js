import Car from '../models/Car';
import AppError from '../errors/AppError';

class CreateNewCarService {
  async execute({ nome, marca, modelo, preco, foto }) {
    try {
      // tratar erro de falta de informações
      const newCar = await Car.create({
        nome,
        marca,
        modelo,
        preco,
        foto,
      });

      return newCar;
    } catch (error) {
      throw new AppError('Ocorreu algum erro na criação de um novo carro.');
    }
  }
}

export default CreateNewCarService;
