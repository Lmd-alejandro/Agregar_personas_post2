const fs = require("fs");

const cargarDatos = () => JSON.parse(fs.readFileSync("data.json", "utf-8"));

exports.crearSitio = (req, res) => {
  const { name, address, reference, type } = req.body;
  const sites = cargarDatos().sites;

  // Agregar nuevo sitio
  const newSite = { name, address, reference, type, visitors: [] };
  sites.push(newSite);
  fs.writeFileSync("data.json", JSON.stringify({ users, sites }), "utf-8");

  res.status(200).send("Sitio añadido correctamente");
};