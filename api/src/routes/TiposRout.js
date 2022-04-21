const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req, res, next) => {
  res.send("soy get /TiposRout");
});
router.post("/", (req, res, next) => {
  res.send("soy post /TiposRout");
});
router.put("/", (req, res, next) => {
  res.send("soy put /TiposRout");
});
router.delete("/", (req, res, next) => {
  res.send("soy delete /TiposRout");
});
