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
    const urlApiData = await axios.get(URL_API); // mi primer llamado a la api resultado en urlApiData
    const urlApiDataTwo = urlApiData.data.results.map((pokeUrl) => pokeUrl.url); // segunda Url

    const pokeInf = await Promise.all(
      urlApiDataTwo.map((pokeInfo) => axios.get(pokeInfo))
    );

    let pokeMaps = pokeInf.map((poke) => {
      let pokeTipos = poke.data.types.map((types) => types.type.name); // tambien los tipo
      let obj = {
        id: poke.data.id,
        name: poke.data.name,
        life: poke.data.stats[0].base_stat,
        atack: poke.data.stats[1].base_stat,
        defensa: poke.data.stats[2].base_stat,
        speed: poke.data.stats[5].base_stat,
        height: poke.data.height,
        weight: poke.data.weight,
        img: poke.data.sprites.other["official-artwork"].front_default,
        imgFront:
          poke.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default, //fui mas adentro en la api para conseguir el git y no una imagen
        imgFrontShiny:
          poke.data.sprites.versions["generation-v"]["black-white"].animated
            .front_shiny,
        icons:
          poke.data.sprites.versions["generation-viii"].icons.front_default, //fui mas adentro en la api para conseguir el git y no una imagen

        //fui mas adentro en la api para conseguir el git y no una imagen
        tipo: pokeTipos,
      };
      return obj;
    });
    console.log(pokeMaps);
    return pokeMaps;
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
