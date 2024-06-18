import User from '../models/user.js';
import { logError } from '../utils/logError.js';

// get all users
export const getuser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    await logError(error, req);
    res.status(500).json({
      message: 'Hubo un problema al intentar obtener los usuarios',
    });
  }
};

//registro de usuario
export const registro = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
    });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    await logError(error, req);
    res.status(500).json({
      message: 'Hubo un problema al intentar registrar el usuario',
    });
  }
};

//confirmacion de correo
export const confirmar = async (req, res) => {
  res.json('confirmar');
};

export const login = (req, res, next) => {
  res.json('login');
};

//perfil
export const perfil = (req, res) => {
  res.json('perfil');
};
