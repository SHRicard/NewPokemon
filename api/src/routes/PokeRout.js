const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Tipos } = require("../db");
const { URL_API } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
//Lleno mi base de dato
router.post("/", async (req, res, next) => {
  const Exists = "Los Pokemones ya Estas Registrados";
  const pokeExists = await Pokemon.findAll();
  if (!pokeExists.length) {
    const urlApiData = await axios.get(URL_API);
    const urlApiDataTwo = urlApiData.data.results.map((pokeUrl) => pokeUrl.url);

    // const pokeInf = await Promise.all(
    //   urlApiDataTwo.map((pokeInfo) => axios.get(pokeInfo))
    // );

    const fullDataPokemones = await Promise.all(
      urlApiDataTwo.map((poke) => axios.get(poke)) //aplico el meto promis.all para que se aga al mismo tiempo
    );

    console.log(fullDataPokemones);
    console.log(pokeInf);
    res.send(pokeInf);
  }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req, res, next) => {
  res.send("soy get Ricardo");
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
