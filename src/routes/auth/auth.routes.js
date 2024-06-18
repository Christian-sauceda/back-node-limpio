import { Router } from 'express';
import * as userCtrl from '../../controllers/auth.controller.js';

const router = Router();


router.get('/users', userCtrl.getuser);

router.post('/registro', userCtrl.registro);

router.get('/confirmar/:token', userCtrl.confirmar);

router.post('/login', userCtrl.login);

router.get('/perfil', userCtrl.perfil);

export default router;
