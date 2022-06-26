import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    title: {type: String, require: true, default: "No title category"},
}, {timestamps: true})
export const Category = mongoose.model("categories", CategorySchema);
