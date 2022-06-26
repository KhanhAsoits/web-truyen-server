import BaseRoute from "./BaseRoute.js";
import UserController from "../controllers/UserController.js";

class UserRoute extends BaseRoute {
    constructor(route_name, verify = true) {
        super(route_name, verify);
        this.RegisterRoutes()
    }

    RegisterRoutes() {
        this.router.post(`${this.router_path}/create`, async (req, res, next) => {
            await UserController.add(req, res)
        })
        this.router.post(`${this.router_path}/login`, UserController.login)

    }
}

export default new UserRoute('user', true).router