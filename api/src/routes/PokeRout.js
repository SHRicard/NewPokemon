const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Tipos } = require("../db");
const { URL_API } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
//Lleno mi base de dato
router.post("/", async (req, res, next) => {
  try {
    const Exists = "Los Pokemones ya Estas Registrados";
    const pokeExists = await Pokemon.findAll();
    if (!pokeExists.length) {
      const urlApiData = await axios.get(URL_API); // mi primer llamado a la api resultado en urlApiData

      const urlApiDataTwo = urlApiData.data.results.map(
        (pokeUrl) => pokeUrl.url
      ); // segunda Url
      const pokeInf = await Promise.all(
        urlApiDataTwo.map((pokeInfo) => axios.get(pokeInfo))
      );

      let pokeMap = pokeInf.map((poke) => {
        let tipotipo = poke.data.types.map((types) => types.type.name);
        // let tipo = poke.data.types.map((types) => types.type.name);
        let pokeJson = {
          id: poke.data.id,
          name: poke.data.name,
          height: poke.data.height,
          weight: poke.data.weight,
          hp: poke.data.stats[0].base_stat,
          attack: poke.data.stats[1].base_stat,
          defense: poke.data.stats[2].base_stat,
          special_attack: poke.data.stats[3].base_stat,
          special_defense: poke.data.stats[4].base_stat,
          speed: poke.data.stats[5].base_stat,
          front_default: poke.data.sprites.front_default,
          front_shiny: poke.data.sprites.front_shiny,
          Tipos: tipotipo,
        };

        return pokeJson;
      });
      pokeMap.map((poke) => {
        Pokemon.create(poke);
      });

      res.send(pokeMap);
    }
  } catch (err) {
    console.log(err);
  }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/allpokemons", async (req, res, next) => {
  try {
    const pokemons = await Pokemon.findAll({ include: Tipos });

    res.send(pokemons);
  } catch (err) {
    console.log(error);
  }
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
