const express = require('express');
const path = require('path');
const cors = require('cors');
const sequelize = require('./config/dataBase');
const routes = require('./routes/routes');

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/', routes);

//inicia server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});