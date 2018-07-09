const noteRoutes = require('./my_routes');
module.exports = function(app, db) {
    noteRoutes(app, db);

};