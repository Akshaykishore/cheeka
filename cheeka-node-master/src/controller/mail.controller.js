var mailer = require('../data/mailer')

module.exports.sendMail = function (req, res) {
    var mailOptions = {
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    }
    mailer.sendMail(mailOptions, function (error, response) {
        if (error) {
            res.end({
                'ok': false
            });
        }
        res.send({
            'ok': true
        });
    });
};