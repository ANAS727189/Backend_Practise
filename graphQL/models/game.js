import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: String,
  platform: [String],
});

const Games = mongoose.model("Games", Schema);

export default Games;
