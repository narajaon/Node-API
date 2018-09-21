const router = require('express').Router();
const db = require('../db');
const collName = 'Assets';

router.post('/', function (req, res) {

	const toAdd = {
		collectionName: collName,
		content: req.query
	};

	db.dbPerfomQuerry(db.dbInsertOneElem, toAdd).then((val) => {
		res.status(201).send(val);
	}).catch((e) => {
		res.status(500).send(e);
	});
});

router.delete('/', function (req, res) {

	const toAdd = {
		collectionName: collName,
		content: req.query
	};

	db.dbPerfomQuerry(db.dbDeleteOneElem, toAdd).then((val) => {
		res.status(200).send(val);
	}).catch((e) => {
		res.status(500).send(e);
	});
});

router.get('/', function (req, res) {

	const toAdd = {
		collectionName: collName,
		content: req.query
	};

	db.dbPerfomQuerry(db.dbGetElem, toAdd).then((val) => {
		res.status(200).send(val);
	}).catch((e) => {
		res.status(500).send(e);
	});
}); 

module.exports = router;