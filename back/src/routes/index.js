const { Router } = require('express');
const router = Router();
const character = require('./character')

router.use("/rickandmorty", character);


module.exports = router;