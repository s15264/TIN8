var express = require('express');
var router = express.Router();


router.get('/form', (req, res) => {
  res.render('form');
});


module.exports = router;