var nodemailer = require("nodemailer");
var app = require('../data/app-constants');

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: app.mail.username,
        pass: app.mail.password
    }
});

module.exports = smtpTransport;