import mongoose from "mongoose";

const TagSchema = mongoose.Schema({
    title: {type: String, require: true, default: "Chapter"},
}, {timestamps: true})
export const Tag = mongoose.model("Tags", TagSchema);