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
    }
}

export default new UserRoute('users', true).router