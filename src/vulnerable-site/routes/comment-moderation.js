const express = require('express');
const router = express.Router();

const comments = require('../data/comments').comments;

const title = 'Comment Moderation';

router.get('/', function (req, res, next) {
    res.render('comment-moderation', {
        title,
        comments
    });
});

router.post('/', function (req, res, next) {
    const index = comments.findIndex(comment => comment.id === +req.body.id);

    if (index >= 0) {
        comments.splice(index, 1);
    }

    res.render('comment-moderation', {
        title,
        comments
    })
})

module.exports = router;