import Car from '../../models/Car';

class UpdateCarByIdService {
  async execute({ id, nome, marca, modelo, preco, foto }) {
    const updateStatus = await Car.update(
      { nome, marca, modelo, preco, foto },
      {
        where: { id },
        returning: true,
        plain: true,
      },
    );

    return updateStatus[1].dataValues;
  }
}

export default UpdateCarByIdService;
