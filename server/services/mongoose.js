'use strict';

//npm dependencies
var mongoose = require('mongoose');
var _ = require('lodash');

var dbUrl = '...';

mongoose.connect(dbUrl);

console.log('There is no url so Your Connection Will Fail!');

// Configure mongoose for debug
mongoose.set('debug', (collectionName, method, query, doc, options) => {
    console.log('mongo %s %s ->', collectionName, method, query, doc, options);
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('db connected');
});

module.exports = db;
