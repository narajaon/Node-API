const router = require('express').Router();

router.post('/', function (req, res) {

    // get querry
    // add corresponding object to DB
	res.send(req.query);
});

router.get('/', function (req, res) {

    // get querry
	// return corresponding object to DB
	res.send(req.query);
});

module.exports = router;