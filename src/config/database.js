import Sequelize from 'sequelize';
import config from '../config/config.js';
const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_DIALECT, DB_HOST } = config;

export const development = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  dialect: DB_DIALECT,
  host: DB_HOST,
  operatorsAliases: Sequelize.Op,
};

export const production = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  dialect: DB_DIALECT,
  host: DB_HOST,
  operatorsAliases: Sequelize.Op,
};