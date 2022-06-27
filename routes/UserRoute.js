import BaseRoute from "./BaseRoute.js";
import UserController from "../controllers/UserController.js";

class UserRoute extends BaseRoute {
    constructor(route_name, verify = true) {
        super(route_name, verify);
        this.RegisterRoutes()
    }

    RegisterRoutes() {
        this.router.post(`${this.router_path}/create`, UserController.add)
        this.router.post(`${this.router_path}/login`, UserController.login)
        this.router.get(`${this.router_path}/userId=:userId/api_token=:api_token`, async (req, res) => {
            if (await this.VerifyToken(this.GetToken(req))) {
                res.send(await UserController.get_by_id(req))
            }
        })

    }
}

export default new UserRoute('users', true).router