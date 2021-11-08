'use strict';

require('dotenv').config();
const { hash } = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await hash(process.env.ADMIN_PASSWORD, 8);

    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: process.env.ADMIN_NAME,
          email: process.env.ADMIN_EMAIL,
          password,
          is_admin: true,
          foto: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
