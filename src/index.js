// app.js

import express from 'express';
import config from '../src/config/config.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';
import auth_routes from './routes/auth/auth.routes.js';
import { sync } from './models/index.js';

const app = express();
app.use(express.json());

app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/auth', auth_routes);

// Ejecutar la sincronización de la base de datos antes de iniciar la aplicación
(async () => {
  await sync();
  console.log('Base de datos sincronizada');
})();

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
