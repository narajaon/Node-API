const mongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/Assets';
const dbName = 'Assest';

const dbInsertOneElem = function(db, toAdd) {
	db.collection(toAdd.collectionName).insertOne(toAdd.content, (err, result) => {

		if (err) {
			throw err;
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	})
}

const dbPerfomQuerry = function (querry, toAdd) {

	mongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, client) => {

		if (err) {
			throw err;
		}

		const db = client.db(dbName);

		if (toAdd) {
			querry(db, toAdd);
		} else {
			querry(db, undefined);
		}

		client.close();
	})
}

module.exports = {
	dbInsertOneElem,
	dbPerfomQuerry,
}