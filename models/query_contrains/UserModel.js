import BaseModel from "./BaseModel.js";
import {ReturnWrapper} from "../../Helper/err.js";
import {User} from "../contrains/Users.js";
import jwt from "jsonwebtoken";
import config from "../../config.js";

class UserModel extends BaseModel {
    constructor(props) {
        super(props);
    }

    async create(username, email, password_raw) {
        try {
            let accessToken = jwt.sign(
                {email, password_raw}, config._secret
            )
            let password = jwt.sign({password_raw}, config._secret)
            let new_user = new User({
                name: username,
                email: email,
                password: password,
                accessToken,
                verify: false
            })
            await new_user.save()
            return ReturnWrapper(200, "", [new_user])
        } catch (e) {
            return ReturnWrapper(200, e, [])
        }
    }
}

export default new UserModel({models: {UserModel: User}})