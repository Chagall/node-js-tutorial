var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

Episode = require('../../model/episode');
Season = require('../../model/season');

var seasonList;
var episodesList;

/* GET episodes page. */
router.get('/', function(req, res) {
    mongoose.connect('mongodb://localhost/pennydreadful');

    Season.getSeasonByName("Season 1", function(err, season) {
        if(err){
            mongoose.disconnect();
            throw err;
        }
        seasonList = season;
    });

    Episode.getEpisodesBySeason(1, function (err, episodes) {
        if(err){
            mongoose.disconnect();
            throw err;
        }
        episodesList = episodes;
    });

    res.render('episodes/season1', {
        episodesList: episodesList,
        season: seasonList
    });

    mongoose.disconnect();
});

module.exports = router;
