const express = require('express');
const cors = require('cors');
const chatRoutes = require('./src/Routes/RoustesChat');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/chat', chatRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Conectado al servidor http://localhost:${PORT}`);
});