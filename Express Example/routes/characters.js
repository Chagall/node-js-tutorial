var express = require('express');
var router = express.Router();
var characters = require('../json_data/characters.json');

/* GET characters page. */
router.get('/', function(req, res, next) {
    res.render('characters', {
        charactersList: characters
    });
});


module.exports = router;
