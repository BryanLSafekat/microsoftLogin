const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());



app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
