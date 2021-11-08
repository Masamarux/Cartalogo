'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'cars',
      [
        {
          nome: 'Carro da Autoescola',
          marca: 'Detran',
          modelo: '1.0',
          preco: 15000.36,
          foto: 'seed-autoescola.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Carro do Batman',
          marca: 'BruceMotors',
          modelo: 'Classic',
          preco: 1000000.0,
          foto: 'seed-batman.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Charger',
          marca: 'Dodge',
          modelo: 'R/T v8',
          preco: 250000.26,
          foto: 'seed-carro-do-toretto.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Uber',
          marca: 'Uber',
          modelo: 'Uber',
          preco: 641654.34,
          foto: 'seed-carro-do-uber.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Corsa',
          marca: 'Chevrolet',
          modelo: 'Rebaixado',
          preco: 10520.62,
          foto: 'seed-corsa-rebaixado.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Fusca',
          marca: 'Volkswagen',
          modelo: 'Azul',
          preco: 5000.45,
          foto: 'seed-fusca-azul.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Forklift',
          marca: 'Mitsubishi',
          modelo: 'FD20N3',
          preco: 400000.36,
          foto: 'seed-mitsubishi-forklift.jpeg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Cybertruck',
          marca: 'Tesla',
          modelo: '2022',
          preco: 4656161548541.29,
          foto: 'seed-tesla-cybertruck.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Uno',
          marca: 'Fiat',
          modelo: '1.5R',
          preco: 29999.99,
          foto: 'seed-uno-amarelo.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Uno',
          marca: 'Fiat',
          modelo: 'Com escada',
          preco: 1.5,
          foto: 'seed-uno-com-escada.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Carro',
          marca: 'Real',
          modelo: 'Não é',
          preco: 9999999999999.89,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cars', null, {});
  },
};
