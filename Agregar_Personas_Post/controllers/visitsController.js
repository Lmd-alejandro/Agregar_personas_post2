const fs = require("fs");

const cargarDatos = () => JSON.parse(fs.readFileSync("data.json", "utf-8"));

exports.crearVisita = (req, res) => {
  const { email, siteId } = req.body;
  const { users, sites } = cargarDatos();
  const user = users.find((u) => u.email === email);
  const site = sites.find((s) => s.id === siteId);

  // Verificar si el usuario y el sitio existen
  if (!user || !site) {
    return res.status(404).json({ error: "Usuario o sitio no encontrado" });
  }

  // Registrar la visita
  user.visits.push(siteId);
  site.visitors.push(user.email);
  fs.writeFileSync("data.json", JSON.stringify({ users, sites }), "utf-8");

  res.status(200).send("Visita registrada correctamente");
};