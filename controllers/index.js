'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'paypal-ui-remake' };
        
        res.render('index', model);
        
    });

};
