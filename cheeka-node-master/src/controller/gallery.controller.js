var path = require('path');
var multer = require('multer');
var unzip = require('unzip');
var fs = require('fs');
var app = require('../data/app-constants');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, app.gallery.path);
    },
    filename: function (req, file, callback) {
        callback(null, path.basename(file.originalname, '.zip'));
    }
});
var upload = multer({ storage: storage }).array('files', 1);

module.exports.addGalleryFromZip = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        var uploadedFile = req.files[0].filename;
        fs.createReadStream(app.gallery.path + uploadedFile)
            .pipe(unzip.Extract({
                path: app.gallery.path + path.basename(uploadedFile, '.zip')
            }));
        fs.unlink(app.gallery.path + uploadedFile, function(err) {
            if (err) throw err;
        });
        res.end("File is uploaded");
    });
};

module.exports.getAllGallery = function (req, res) {
    let files = fs.readdirSync(app.gallery.path);
    let galleries = [];
    files.forEach(function(file) {
        let gallery = {};
        let files = fs.readdirSync(path.join(app.gallery.path, file));
        if (files.length > 0) {
            gallery.file = files[0];
            gallery.folder = file;
            galleries.push(gallery);
        }
    });
    res.status(200).json({
        ok: true,
        data: galleries
    });
};

module.exports.getOne = function (req, res) {
    let files = fs.readdirSync(path.join(app.gallery.path, req.params.folder));
    let galleries = [];
    files.forEach(function(file) {
        galleries.push(file);
    });
    res.status(200).json({
        ok: true,
        data: galleries
    });
};