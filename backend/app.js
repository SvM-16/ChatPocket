const express = require('express');
const cors = require('cors');
const chatroutes = require('');

const app = express();
const PORT = 3000;

app.use(cors()),
app.use(express.json());

app.use('/chat',  chatroutes)

app.listen(PORT, () => {
  console.log(`Servidor conectado en http://localhost: $(PORT)`);
});