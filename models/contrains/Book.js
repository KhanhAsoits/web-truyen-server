import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    title: {type: String, require: true, default: "No Title Book"},
    chapter: {type: Number, require: true, default: 0},
    describe: {type: String, require: false, default: ""},
    authorId: mongoose.ObjectId,
    categoryId: mongoose.ObjectId,
    rate: {type: Number, require: true, default: 0}
}, {timestamps: true})
export const Book = mongoose.model("books", BookSchema);
