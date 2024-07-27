import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: String,
  verified: Boolean,
});

const Authors = mongoose.model("Authors", Schema);

export default Authors;
