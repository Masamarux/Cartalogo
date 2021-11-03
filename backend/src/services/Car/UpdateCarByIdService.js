import Car from '../../models/Car';

class UpdateCarByIdService {
  async execute({ id, nome, marca, modelo, preco, foto }) {
    try {
      const updateStatus = await Car.update(
        { nome, marca, modelo, preco, foto },
        {
          where: { id },
          returning: true,
          plain: true,
        },
      );

      return updateStatus[1].dataValues;
    } catch (error) {
      return { erro: 'Não foi possível atualizar o veículo' };
    }
  }
}

export default UpdateCarByIdService;
