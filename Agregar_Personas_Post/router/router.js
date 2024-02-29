// router/routes.js
const express = require("express");
const router = express.Router();
const validarCuerpo = require("../middlewares/valid");
const validarToken = require("../middlewares/token");
const sitesController = require("../controllers/sitesController");
const visitsController = require("../controllers/visitsController");

router.post("/sites", validarCuerpo, sitesController.crearSitio);

router.post("/visits", validarToken, visitsController.crearVisita);

router.get("/sites/:siteId/visitors", (req, res) => {
  // Implementación correspondiente
});

router.get("/users/:email/visited-sites", (req, res) => {
  // Implementación correspondiente
});

module.exports = router;
