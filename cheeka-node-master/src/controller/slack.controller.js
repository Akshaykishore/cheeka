var request = require('request');
var app = require('../data/app-constants');

module.exports.addMessage = function (req, res) {
    console.log(req.body);
    request({
        url: app.slack.hook,
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ 
            "text": JSON.stringify(req.body)
        })
    }, function (err, response, body) {
        if (err) {
            res.status(400).send({
                ok: false
            });
        }
        res.status(200).send({
            ok: true,
            messages: body
        });
    });
};

module.exports.getAllMessages = function (req, res) {
    request({
        url: app.slack.url,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }, function (err, response, body) {
        if (err) {
            res.status(400).send({
                'ok': false
            });
        }
        res.status(200).send(body);
    });
};