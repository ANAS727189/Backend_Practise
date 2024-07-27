import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/", {
        dbName: "graphql",
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));
};