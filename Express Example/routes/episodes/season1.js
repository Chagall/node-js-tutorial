var express = require('express');
var router = express.Router();
var episodes = require('../../json_data/season1_episodes.json');

/* GET episodes page. */
router.get('/', function(req, res) {
    res.render('episodes/season1', {
        episodesList: episodes
    });
});

module.exports = router;
