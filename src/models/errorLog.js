// models/errorLog.js
import Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { development, production } from '../config/database.js';

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'production' ? production : development
);

const ErrorLog = sequelize.define(
  'ErrorLog',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stack: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    params: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    body: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    timestamps: true, // createdAt y updatedAt serán generados automáticamente
  }
);

export default ErrorLog;
