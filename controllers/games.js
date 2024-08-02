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
router.get("/new", async (req, res) => {
    const currentUser = await User.findById(req.session.user._id);
    res.render('games/new.ejs', {
        user: currentUser,
});
});

//POST /games create route STILL WIP
router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.games.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/games`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

//SHOW route
router.get("/:gameId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const game = currentUser.games.id(req.params.gameId);
        res.render('games/show.ejs', {
            game: game,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    };
});

//DELETE route



module.exports = router;