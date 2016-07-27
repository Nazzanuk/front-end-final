'use strict';

var mongoose = require('./../services/mongoose');

module.exports = {
    index:(req, res) => {
        res.sendFile(__dirname + '/index.html');
    },

    pokemon:(req, res) => {
        var pokemonArray = [];
        res.json(pokemonArray);
    }
};

