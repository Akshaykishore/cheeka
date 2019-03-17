var express = require('express');
var router = express.Router();
var slackController = require('../controller/slack.controller');
var mailController = require('../controller/mail.controller');
var galleryController = require('../controller/gallery.controller');
var carouselController = require('../controller/carousel.controller');

// Configure various routes here
/** 
 * Send Slack Message Route
*/
router
    .route('/slack/message/add')
    .post(slackController.addMessage);

/**
 * Get All Slack Messages
 */
router
    .route('/slack/message/get-all')
    .post(slackController.getAllMessages);

// Mail Controller
/** 
 * Send Mail Route
*/
router
    .route('/mail/send')
    .post(mailController.sendMail);

// Gallery Controller
/** 
 * Add Gallery Route
*/
router
    .route('/gallery/add')
    .post(galleryController.addGalleryFromZip);

/** 
* Get Gallery Route
*/
router
    .route('/gallery/get-all')
    .post(galleryController.getAllGallery);

router
    .route('/gallery/get-one/:folder')
    .post(galleryController.getOne);

// Carousel Controller
router
    .route('/carousel/get-all')
    .get(carouselController.getAllCarousel);

module.exports = router;