// db/sync.js

import Sequelize from 'sequelize';
import { development, production } from '../config/database.js';
import User from '../models/user.js'; // Suponiendo que los modelos están definidos en ./models
import ErrorLog from '../models/errorLog.js'; // Suponiendo que los modelos están definidos en ./models

const sequelize = new Sequelize(process.env.NODE_ENV === 'production' ? production : development);

export async function sync() {
  try {
    await User.sync(); // Sincronizar el modelo de usuario (o todos los modelos según sea necesario)
    await ErrorLog.sync(); // Sincronizar el modelo de errorLog (o todos los modelos según sea necesario)
    console.log('Base de datos sincronizada');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
    process.exit(1); // Salir del proceso en caso de error
  }
}
