const mongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/ibm-go';
const dbName = 'goDB';

const dbInsertOneElem = function (db, toAdd) {
	return new Promise((resolve, reject) => {
		db.collection(toAdd.collectionName).insertOne(toAdd.content, (err, result) => {

			if (err) { reject(err); }

			resolve(result);
		})
	});
}

const dbDeleteOneElem = function (db, toAdd) {
	return new Promise((resolve, reject) => {
		db.collection(toAdd.collectionName).deleteOne(toAdd.content, (err, result) => {

			if (err) { reject(err); }

			resolve(result);
		})
	});
}

const dbGetOneElem = function (db, toGet) {
	return new Promise((resolve, reject) => {
		db.collection(toGet.collectionName).findOne(toGet.content, (err, result) => {
			if (err) { reject(err); }

			resolve(result);
		})
	});
}

const dbGetElem = function (db, toGet) {
	return new Promise((resolve, reject) => {
		db.collection(toGet.collectionName).find(toGet.content).toArray((err, result) => {

			if (err) { reject(err); }

			resolve(result);
		})
	});
}

const dbPerfomQuerry = function (querry, toAdd) {
	return new Promise((resolve, reject) => {

		mongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, client) => {

			if (err) {
				reject(err);
			}

			const db = client.db(dbName);
			resolve(querry(db, toAdd));
			client.close();
		})

	});
}

module.exports = {
	dbInsertOneElem,
	dbDeleteOneElem,
	dbGetOneElem,
	dbGetElem,
	dbPerfomQuerry,
}