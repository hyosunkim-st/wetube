import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
<<<<<<< HEAD
<<<<<<< HEAD
    createdAt:{
=======
    createdAt: {
>>>>>>> feature/#3/video
=======
    createdAt: {
>>>>>>> feature/#3/video
        type: Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;