import BaseModel from "./BaseModel.js";
import {ReturnWrapper} from "../../Helper/err.js";
import {BookTag} from "../contrains/BookTag.js";
import mongoose from "mongoose";
import {Book} from "../contrains/Book.js";

class BookModel extends BaseModel {
    constructor(props) {
        super(props);
    }

    async create(book) {
        try {
            if (book) {
				console.log(book)
                let new_book = new Book({
                    title: book?.title,
                    chapter: 0,
                    describe: book?.describe,
                    authorId: book?.authorId,
                    categoryId: book?.categoryId,
                    rate: 0,
                })

               book.tags.forEach(async (val, key) => {
                    let new_tag = new BookTag({
                        bookId: book?.Id,
                        tagId: val?.Id,
                    })
                    await new_tag.save();
                })
                await new_book.save();
                return ReturnWrapper(200, "", {result:true})
            }
            return ReturnWrapper(200, "SomethingErr", [])
        } catch (e) {
			console.log(e)
            return ReturnWrapper(200, e, [])
        }
    }
}

export default new BookModel({})