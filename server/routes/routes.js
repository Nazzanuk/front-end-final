'use strict';

var Get = require('./get');

module.exports = {
    init: (app) => {

        //app.get('/pokemon', Get.pokemon);

        app.get('/', Get.index);
    }
};