const app = require('express')();
const PORT = 3000 || process.env.PORT;
const assetsRouter = require('./assets');

app.use('/assets', assetsRouter);

// const db = require('./db');
// const dbAction = db.dbInsertOneElem

// db.dbPerfomQuerry(dbAction, {
//     collectionName: 'Assets',
//     content: {
//         description: 'AH KE KOUKOU',
//         name: 'narajaon',
//     }
// });



app.listen(PORT, function () {
});