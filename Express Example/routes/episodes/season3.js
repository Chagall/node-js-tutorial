var express = require('express');
var router = express.Router();

/* GET season 3 episodes page. */
router.get('/', function(req, res) {
    res.render('episodes/season3');
});

module.exports = router;
