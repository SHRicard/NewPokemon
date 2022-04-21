const { Router } = require("express");
const PokeRout = require("./PokeRout.js");
const TiposRout = require("./TiposRout.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/pokemons", PokeRout);
router.use("/tipos", TiposRout);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
