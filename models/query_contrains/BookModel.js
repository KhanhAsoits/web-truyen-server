import BaseModel from "./BaseModel.js";
import {wrapper} from "../../Helper/wrapper.js";
import {Book} from "../contrains/Book.js";
import {ReturnWrapper} from "../../Helper/err.js";

class BookModel extends BaseModel {
    constructor(props) {
        super(props);
    }

    async create(book) {
        let res = await wrapper(async (book) => {
            if (book) {
                let new_book = new this.props.models?.BookModel({
                    title: book?.title,
                    chapter: 0,
                    describe: book?.describe,
                    authorId: book?.authorId,
                    rate: 0,
                })
                await new_book.save();
                return ReturnWrapper(200, "", [{new_book}])
            }
        })
        return res;
    }
}

export default new BookModel({models: {BookModel: Book}})