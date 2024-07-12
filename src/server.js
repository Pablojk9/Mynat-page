const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});