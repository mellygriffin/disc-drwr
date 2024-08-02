const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['Not Difficult','Somewhat Difficult','Very Difficult','Impossible'],
  },
  isCompleted: {
    type: Boolean,
  },
  gamingPlatform: {
    type: String,
    enum: ['PC','PlayStation','XBOX','Nintendo','Mobile']
  },
  notes: {
    type: String,
  }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  games: [gameSchema],

});

const User = mongoose.model('User', userSchema);

module.exports = User;
