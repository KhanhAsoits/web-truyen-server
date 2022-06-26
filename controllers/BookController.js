import BaseController from "./BaseController.js";
import BookModel from "../models/query_contrains/BookModel.js";
import {ReturnWrapper} from "../Helper/err.js";

class BookController extends BaseController {
    constructor(props) {
        super(props);
    }

    async add(req) {
        try {
            let cr_book = req.body?.book;
            if (cr_book) {
                return await BookModel.create(cr_book)
            }
           return ReturnWrapper(200, "No Book Data", [])
        } catch (e) {
            return ReturnWrapper(200, e, [])
        }
    }
}

export default new BookController({});