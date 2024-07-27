import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  rating: Number,
  content: String,
});

const Reviews = mongoose.model("Reviews", Schema);

export default Reviews;
