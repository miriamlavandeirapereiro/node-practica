var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json(
    {
      "Title": "Hola mundo usando rutas!"
    }
  );
})

module.exports = router;
