import Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { development, production } from '../config/database.js';

const sequelize = new Sequelize(process.env.NODE_ENV === 'production' ? production : development);

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default User;
