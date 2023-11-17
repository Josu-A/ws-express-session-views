const express = require('express');
const router = express.Router();

// Access the session as req.session
router.get('/', function(req, res) {
    if (req.session.views) {
        req.session.views++;
    }
    else {
        req.session.views = 1;
    }
    console.log(req.session.views);
    res.render('index', {
        views: req.session.views,
        maxAge: req.session.cookie.maxAge
    });
});

module.exports = router;
