import BaseRoute from "./BaseRoute.js";
import {ReturnWrapper} from "../Helper/err.js";
import jwt from 'jsonwebtoken'
import AuthController from "../controllers/AuthController.js";

class AuthRoute extends BaseRoute {
    constructor(route_name, verify = true) {
        super(route_name, verify);
        this.RegisterRoutes()
    }

    RegisterRoutes() {
        this.router.post(`${this.router_path}/`, async(req, res, next) => {
            let [email, password] = [req.body?.email || null,req.body?.password || null]
            if (!email || !password) {
                res.send(ReturnWrapper(400, "No Auth Data!", []))
            } else {
                res.send(await AuthController.GetAccessToken(email,password));
            }
        })
        this.router.post(`${this.router_path}/verifyUser/`,AuthController.VerifyUser)
    }

}

export default new AuthRoute('auth', true).router