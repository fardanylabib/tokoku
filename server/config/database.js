module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'ecommerce',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: '',
    database: 'boilerplate_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectModule: 'mysql2',
    logging: null
  },
  production: process.env.DATABASE_URL
};
