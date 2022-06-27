import {User} from "../models/contrains/Users.js";
import jwt from 'jsonwebtoken'
import config_ from '../config.js'
import {ReturnWrapper} from "../Helper/err.js";

class AuthController {
    constructor(props) {
        this.props = props
    }

    async VerifyToken(token) {
        try {
            if (token) {
                console.log(token)
                let user = await User.find({accessToken: token}).exec()
                return (Array.from(user).length > 0)
            }
            return false;
        } catch (e) {
            return false
        }
    }

    async GetAccessToken(email, password) {
        try {
            let token = jwt.sign(
                {email, password}, config_._secret,
            )
            
            let res = await User.findOneAndUpdate({
                email: email,
            }, {accessToken: token}, {returnDocument: 'after'})

            let decode = jwt.verify(res?.password, config_._secret)
            if (password !== decode.password_raw) {
                return ReturnWrapper(200, "Password Incorrect", [])
            }
            return res != null ? ReturnWrapper(200, "", [res]) : ReturnWrapper(200, "No found User", [])
        } catch (e) {
            return ReturnWrapper(400, e, [])
        }
    }
}

export default new AuthController({})