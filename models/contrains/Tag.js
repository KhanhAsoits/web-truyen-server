import mongoose from "mongoose";

const TagSchema = mongoose.Schema({
    title: {type: String, require: true, default: "Chapter"},
}, {timestamps: true})
export const Book = mongoose.model("Tags", TagSchema);