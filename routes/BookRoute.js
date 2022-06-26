import BaseRoute from "./BaseRoute.js";
import BookController from "../controllers/BookController.js";
import {ReturnWrapper} from "../Helper/err.js";

class BookRoute extends BaseRoute {
    constructor(route_name, verify = true) {
        super(route_name, verify);
        this.RegisterRoutes()
    }

    RegisterRoutes() {
        this.router.post(`${this.router_path}/create`, async (req, res, next) => {
            if (await this.VerifyToken(this.GetToken(req), next, res)) {
                res.send(await BookController.add(req, res));
            }else{
                res.send(ReturnWrapper(201,"no access token",[]))
            }
        })
    }
}

export default new BookRoute('books', true).router