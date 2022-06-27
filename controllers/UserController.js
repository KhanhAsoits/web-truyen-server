import UserModel from "../models/query_contrains/UserModel.js";
import AuthController from "./AuthController.js";
import {sendMail} from "../Helper/mailler.js";
import config from "../config.js";

class UserController {
    constructor(props) {
        this.props = props
    }

    async add(req, res) {
        const [username, email, password] = [req.body?.username, req.body?.email, req.body?.password]
        let res_ = await UserModel.create(username, email, password)
        if (res_.data.length > 0) {
            sendMail(email, `<h1>Chào ${email} , Bạn đã đăng ký thành công tài khoản tên web truyện!</h1><br/><h4><a target="_blank" href='${config.website.domain}/auth/verifyUser/email=${email}/api_token=${res_.data[0]?.accessToken}'>Ấn vào đây để kích hoạt tài khoản.</a></h4>`, 'Đăng Ký Web Truyện Thành Công!')
        }
        res.send(res_)
    }

    async login(req, res) {
        const [email, password] = [req.body?.email, req.body?.password];

        res.send(await AuthController.GetAccessToken(email, password))
    }
    async get_by_id(req){
        const id = req.params.userId
        return await UserModel.get_by_id(id)
    }
}

export default new UserController({})