const app = require('express')();
const PORT = process.env.PORT || 3000;
const assetsRouter = require('./assets');

app.use('/assets', assetsRouter);

app.listen(PORT);