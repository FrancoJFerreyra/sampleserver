const express = require('express');
const app = express();

// Middleware para parsear el body de la solicitud como JSON
app.use(express.json());

// Endpoint POST de ejemplo
app.post('/api/samplebuy', (req, res) => {
  // Obtén la respuesta del body de la solicitud
  const requestData = req.body;
  
  // Realiza un console.log de los datos recibidos
  console.log('Datos recibidos:', requestData);
  
  // Responde con un mensaje de éxito
  res.json({
    message: 'Datos recibidos correctamente',
    receivedData: requestData
  });
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});