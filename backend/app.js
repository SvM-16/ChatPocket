const express = require('express');
const cors = require('cors');
const chatRoutes = require('./src/Routes/RoustesChat');

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true  
}));
app.use(express.json());


app.use('/chat', chatRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Conectado al servidor http://localhost:${PORT}`);
});