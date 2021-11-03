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
    },
    foto: DataTypes.STRING,
  },
  {
    tableName: 'cars',
  },
);

export default Car;
