import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {type: String, require: true, default: "Author No Name"},
    email: {type: String, require: true, default: " noname@gmail.com"},
    password: {type: String, require: true, default: "no password"},
    verify: {type: Boolean, require: true, default: false},
    accessToken: {type: String, require: true, default: ""},
    active: {type: Boolean, require: true, default: true}
}, {timestamps: true})
export const User = mongoose.model('users', UserSchema)