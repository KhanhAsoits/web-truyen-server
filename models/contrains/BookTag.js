import mongoose from "mongoose";

const BookTagSchema = mongoose.Schema({
    bookId: mongoose.ObjectId,
    tagId: mongoose.ObjectId
}, {timestamps: true})
export const BookTag = mongoose.model("booktags", BookTagSchema);
