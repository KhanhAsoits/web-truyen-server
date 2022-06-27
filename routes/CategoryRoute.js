import BaseRoute from "./BaseRoute.js";
import {ReturnWrapper} from "../Helper/err.js";
import CategoryController from "../controllers/CategoryController.js";

class CategoryRoute extends BaseRoute {
    constructor(route_name, verify = true) {
        super(route_name, verify);
        this.RegisterRoutes()
    }

    RegisterRoutes() {
        this.router.get(`/?${this.router_path}/api_token=:api_token`, async (req, res, next) => {
            if (await this.VerifyToken(this.GetToken(req))) {
                res.send(await CategoryController.getAll())
            } else {
                res.send(ReturnWrapper(201, "", []))
            }
        })
    }
}

export default new CategoryRoute('categories', true).router