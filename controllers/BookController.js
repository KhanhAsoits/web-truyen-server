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

    async get_book_by_page(req) {
        const default_page = 1
        const [page] = [Math.max(1, req.params?.page) || default_page]
        const limit = 8
        return await BookModel.get_by_page(limit, page)
    }

    async get_count() {
        return await BookModel.get_count_book();
    }
}

export default new BookController({});