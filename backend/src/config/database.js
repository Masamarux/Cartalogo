module.exports = {
  database: 'cartalogo',
  username: 'postgres',
  password: 'docker',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
  },
};
