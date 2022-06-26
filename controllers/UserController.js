import UserModel from "../models/query_contrains/UserModel.js";

class UserController {
    constructor(props) {
        this.props = props
    }

    async add(req, res) {

        const [username, email, password] = [req.body?.username, req.body?.email, req.body?.password]
        res.send(await UserModel.create(username, email, password))
    }

    async login(req, res) {
        const [email, password] = [req.body?.email, req.body?.password];
        res.send(await UserModel.get_by_email(email, password))
    }

}

export default new UserController({})