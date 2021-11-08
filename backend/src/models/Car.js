import { DataTypes, literal } from 'sequelize';
import connection from '../database';

const Car = connection.define(
  'Car',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: literal('gen_random_uuid()'),
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    foto: DataTypes.STRING,
    // adicionar um campo para se o carro está a venda ou não
  },
  {
    tableName: 'cars',
  },
);

export default Car;
