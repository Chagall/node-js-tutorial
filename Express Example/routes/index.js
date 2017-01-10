var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Penny Dreadful',
        charactersList: [
            {
                name:"Brona Croft"
            },
            {
                name:"Creature"
            },
            {
                name:"Dorian Gray"
            },
            {
                name:"Ethan Chandler"
            },
            {
                name:"Malcolm Murray"
            },
            {
                name:"Mina Murray"
            },
            {
                name:"Vanessa Ives"
            },
            {
                name:"Victor Frankenstrein"
            }
        ]
    });
});

module.exports = router;
