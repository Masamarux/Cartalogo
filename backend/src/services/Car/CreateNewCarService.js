import Car from '../../models/Car';
import AppError from '../../errors/AppError';

class CreateNewCarService {
  async execute({ nome, marca, modelo, preco, foto }) {
    if (nome && marca && modelo && preco) {
      const newCar = await Car.create({
        nome,
        marca,
        modelo,
        preco,
        foto,
      });

      return newCar;
    }
    throw new AppError('Falta de dados para criação do novo carro.');
  }
}

export default CreateNewCarService;
