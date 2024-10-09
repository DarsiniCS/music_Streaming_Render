const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Song", SongSchema);
