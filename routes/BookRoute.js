import BaseRoute from "./BaseRoute.js";

class BookRoute extends BaseRoute {
    constructor(route_name, verify = true) {
        super(route_name, verify);
        this.RegisterRoutes()
    }

    RegisterRoutes() {
        this.router.post(`${this.router_path}/create`, (req, res, next) => {
            if (this.VerifyToken(this.GetToken(req), next, res)) {

            }
        })
    }
}

export default new BookRoute('books', true).router