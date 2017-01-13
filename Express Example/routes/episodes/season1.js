var express = require('express');
var router = express.Router();

/* GET episodes page. */
router.get('/', function(req, res) {
    res.render('episodes/season1');
});

module.exports = router;
