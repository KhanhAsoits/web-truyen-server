import mongoose from "mongoose";

const ChapterSchema = mongoose.Schema({
    title: {type: String, require: true, default: "Chapter"},
    describe: {type: String, require: false, default: ""},
    authorId: mongoose.ObjectId,
    bookId: mongoose.ObjectId,
    preChapterId: mongoose.ObjectId,
    nextChapterId: mongoose.ObjectId,
    startChapter: {type: Boolean, require: false, default: false},
    endChapter: {type: Boolean, require: false, default: false}
}, {timestamps: true})
export const Chapter = mongoose.model("chapters", ChapterSchema);