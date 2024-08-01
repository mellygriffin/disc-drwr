const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

//router logic below

//GET games index page
router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('games/index.ejs', {
            games: currentUser.games, user: currentUser,
        });
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
});

//GET /games/new
router.get("/new", (req, res) => {
    res.render('games/new.ejs');
});



module.exports = router;