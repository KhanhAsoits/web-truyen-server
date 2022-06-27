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
            let hasExit = await User.findOne({email: email}).exec()
            console.log(hasExit)
            if (!hasExit){
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
            }
            return  ReturnWrapper(200,"Email has taken",[])
        } catch (e) {
            return ReturnWrapper(200, e, [])
        }
    }

    async get_by_id(id) {
        try {
            return ReturnWrapper(200, "", [await User.findById(id).exec()])
        } catch (e) {
            return ReturnWrapper(200, e, [])
        }
    }

    async get_by_email(email, password) {
        try {
            let res = await User.findOne({email: email}).exec()

            if (res != null) {
                let password_ = jwt.verify(res.password, config._secret)
                if (password_.password_raw === password) {
                    if (res?.verify) {
                        return ReturnWrapper(200, 'Fetch Success', [res])
                    }
                    return ReturnWrapper(200, "User hasn't verify", [{verify: false}])

                }
                return ReturnWrapper(200, "Password incorrect", [{result: false}])
            }
            return ReturnWrapper(200, "User Not Found", [])
        } catch (e) {
            return ReturnWrapper(200, e, [])
        }
    }
}

export default new UserModel({models: {UserModel: User}})