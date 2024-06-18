import express from 'express';
import config from '../src/config/config.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';
import auth_routes from './routes/auth/auth.routes.js';
const app = express();
app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/auth', auth_routes);

//si la ruta no existe se envia un mensaje de error
app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found'
  });
});
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});