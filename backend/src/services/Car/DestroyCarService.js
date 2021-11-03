import Car from '../../models/Car';
import AppError from '../../errors/AppError';

class DestroyCarService {
  async execute({ id }) {
    try {
      const deleteStatus = await Car.destroy({
        where: { id },
      });

      if (deleteStatus === 1) {
        return { delete: 'Success.' };
      }
      throw new AppError('Não foi possível deletar o veículo.');
    } catch (error) {
      throw new AppError('Não foi possível deletar o veículo.');
    }
  }
}

export default DestroyCarService;
