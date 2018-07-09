module.exports = function(app, db) {
    app.get('/list', (req, res) => {
        var dbo = db.db('rosenfeld');
        dbo.collection('reports').find({}).toArray(function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                try {res.send(JSON.stringify(result));}
                catch(e) {}
            }
        });

    });
    app.post('/report', (req, res) => {
        var dbo = db.db('rosenfeld');
        dbo.collection('reports').insert(req.body, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                console.log(result.ops[0])
                try {res.send(JSON.stringify(result.ops[0]));}
                catch(e) {}
            }
        });
    });

};