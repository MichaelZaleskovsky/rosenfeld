const express = require('express');
const MongoDB = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');
const headers = require('./headers');
const db = require('./config/db');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.json());
app.use("*",(req,res,next)=>{headers.setHeaders(res); next()});


MongoDB.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    require('./routes')(app, database);
    app.listen(port, () => {
        console.log('Server already listening on ' + port);
    });
});