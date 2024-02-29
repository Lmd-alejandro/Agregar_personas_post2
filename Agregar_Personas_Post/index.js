const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const routes = require("./router/routes");
require('dotenv').config();
const config = require("./models/index.js");

const app = express();
const PORT = config.port || 3000;

app.use(bodyparser.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
