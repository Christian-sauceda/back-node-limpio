import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0', // Especificación OpenAPI utilizada (v3.0.0 es la última versión)
    info: {
      title: 'API', // Nombre de tu API
      version: '1.0.0', // Versión de tu API
      description: 'Documentación de la API', // Descripción de tu API
    },
    servers: [
      {
        url: 'http://localhost:3000/', // URL base de tu API
      },
    ],
  },
  // rutas estan en cada carpeta de rutas /auth/auth.routes.js, /users/users.routes.js
  apis: ['./src/routes/**/*.js'], // Rutas de los archivos que contienen las rutas de tu API
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
