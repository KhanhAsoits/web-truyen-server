import BaseModel from "./BaseModel.js";
import {ReturnWrapper} from "../../Helper/err.js";
import {BookTag} from "../contrains/BookTag.js";
import mongoose from "mongoose";

class BookModel extends BaseModel {
    constructor(props) {
        super(props);
    }

    async create(book) {
        try {
            if (book) {
                let new_book = new BookModel({
                    title: book?.title,
                    chapter: 0,
                    describe: book?.describe,
                    authorId: mongoose.ObjectId(book?.authorId),
                    categoryId: mongoose.ObjectId(book?.categoryId),
                    rate: 0,
                })

                Array.from(book.tags).forEach(async (val, key) => {
                    let new_tag = new BookTag({
                        bookId: book?.Id,
                        tagId: val?.Id,
                    })
                    await new_tag.save();
                })
                await new_book.save();
                return ReturnWrapper(200, "", [{new_book}])
            }
            return ReturnWrapper(200, "SomethingErr", [])
        } catch (e) {
            return ReturnWrapper(200, e, [])
        }
    }
}

export default new BookModel({})