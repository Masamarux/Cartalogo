import path from 'path';
import fs from 'fs';

import uploadConfig from '../../config/upload';
import Car from '../../models/Car';

import AppError from '../../errors/AppError';

class UpdateCarImageService {
  async execute({ id, fotoFileName }) {
    const car = await Car.findByPk(id);

    if (!car) {
      throw new AppError('Só é possível mudar a foto de um carro existente.');
    }

    if (car.foto) {
      const carFotoFilePath = path.join(uploadConfig.directory, car.foto);

      const carFotoFileExists = await fs.promises.stat(carFotoFilePath);

      if (carFotoFileExists) {
        await fs.promises.unlink(carFotoFilePath);
      }
    }

    car.foto = fotoFileName;

    await car.save();

    return car;
  }
}

export default UpdateCarImageService;
