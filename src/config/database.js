import Sequelize from 'sequelize';

export const development = {
  username: 'root',
  password: 'root',
  database: 'app',
  dialect: 'mysql',
  host: 'localhost',
  operatorsAliases: Sequelize.Op,
};

export const production = {
  username: 'root',
  password: 'root',
  database: 'app',
  dialect: 'mysql',
  host: 'localhost',
  operatorsAliases: Sequelize.Op,
};
