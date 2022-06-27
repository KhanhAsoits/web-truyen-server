import BaseRoute from "./BaseRoute.js";
import BookController from "../controllers/BookController.js";
import {ReturnWrapper} from "../Helper/err.js";
import bookModel from "../models/query_contrains/BookModel.js";

class BookRoute extends BaseRoute {
    constructor(route_name, verify = true) {
        super(route_name, verify);
        this.RegisterRoutes()
    }

    RegisterRoutes() {
        this.router.post(`${this.router_path}/create`, async (req, res, next) => {
            if (await this.VerifyToken(this.GetToken(req))) {
                res.send(await BookController.add(req, res));
            } else {
                res.send(ReturnWrapper(201, "no access token", []))
            }
        })
        this.router.get(`/?${this.router_path}/page=:page/api_token=:api_token`, async (req, res, next) => {
                if (await this.VerifyToken(this.GetToken(req))) {
                    res.send(await BookController.get_book_by_page(req))
                } else {
                    res.send(ReturnWrapper(201, "", []))

                }
            }
        )
        this.router.get(`${this.router_path}/count/api_token=:api_token`, async (req, res, next) => {
                if (await this.VerifyToken(this.GetToken(req))) {
                    res.send(await  BookController.get_count())
                } else {
                    res.send(ReturnWrapper(201, "", []))
                }
            }
        )
    }
}

export default new BookRoute('books', true).router