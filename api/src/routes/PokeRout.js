const { Router } = require("express");
const { Pokemon, Tipos } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
//Lleno mi base de dato
router.post("/", (req, res, next) => {
  // let pokeUploadData = "Pokedex Llena"
  // const pokeExisting = Pokemon.findAll();
  // if(!pokeExisting.length){
  // }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req, res, next) => {
  res.send("soy get /PokeRout");
});
router.post("/", (req, res, next) => {
  res.send("soy post /PokeRout");
});
router.put("/", (req, res, next) => {
  res.send("soy put /PokeRout");
});
router.delete("/", (req, res, next) => {
  res.send("soy delete /PokeRout");
});

module.exports = router;
