var express = require('express');
var router = express.Router();

/* GET episodes page. */
router.get('/', function(req, res, next) {
    res.render('episodes', {title: 'Penny Dreadful'});
});

module.exports = router;
