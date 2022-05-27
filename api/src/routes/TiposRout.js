const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Tipos } = require("../db");
const { URL_API_TYPES } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

//pidos los tipos y los creo en la base de datos si no existen
router.post("/", async (req, res, next) => {
  try {
    const existeTipos = "Los Tipos ya estan registrados";
    const tiposExist = await Tipos.findAll();
    if (!tiposExist.length) {
      const urlApiTipos = await axios.get(URL_API_TYPES);
      console.log(urlApiTipos);
      urlApiTipos.data.results.map((tipos) => {
        Tipos.create(tipos.name);
      });
    }
    existeTipos = "Los Tipos Ya estan registrados";
    res.send(tiposExist);
  } catch (err) {
    console.log(err);
  }
});
// router.post("/", (req, res, next) => {
//   res.send("soy post /TiposRout");
// });
router.put("/", (req, res, next) => {
  res.send("soy put /TiposRout");
});
router.delete("/", (req, res, next) => {
  res.send("soy delete /TiposRout");
});
module.exports = router;
