import { DataTypes, literal } from 'sequelize';
import connection from '../database';

const User = connection.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: literal('gen_random_uuid()'),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    foto: DataTypes.STRING,
  },
  {
    tableName: 'users',
  },
);

export default User;
