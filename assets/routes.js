const router = require('express').Router();
const db = require('../db');
const collName = 'Assets';

router.post('/', function (req, res) {

	const toAdd = {
		collectionName: collName,
		content: req.query
	};

	db.dbPerfomQuerry(db.dbInsertOneElem, toAdd).then((val) => {
		res.send(val);
	}).catch((e) => {
		throw new Error(e);
	});
});

router.delete('/', function (req, res) {

	const toAdd = {
		collectionName: collName,
		content: req.query
	};

	db.dbPerfomQuerry(db.dbDeleteOneElem, toAdd).then((val) => {
		res.send(val);
	}).catch((e) => {
		throw new Error(e);
	});
});

router.get('/', function (req, res) {

	const toAdd = {
		collectionName: collName,
		content: req.query
	};

	db.dbPerfomQuerry(db.dbGetElem, toAdd).then((val) => {
		res.send(val);
	}).catch((e) => {
		throw new Error(e);
	});
}); 

module.exports = router;