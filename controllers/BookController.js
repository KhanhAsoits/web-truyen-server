import BaseController from "./BaseController.js";
import {wrapper} from "../Helper/wrapper.js";
import BookModel from "../models/query_contrains/BookModel.js";

class BookController extends BaseController {
    constructor(props) {
        super(props);
    }

    async add(req, res, next) {
        let sr_res = await wrapper(async () => {
            let cr_book = req.body?.book;
            if (cr_book) {
                return await BookModel.create(cr_book)
            }
        })
        res.send(sr_res)
    }
}

export default new BaseController({});