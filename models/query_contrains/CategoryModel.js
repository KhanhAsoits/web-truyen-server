import BaseModel from "./BaseModel.js";
import {User} from "../contrains/Users.js";
import {ReturnWrapper} from "../../Helper/err.js";
import {Category} from "../contrains/Category.js";

class CategoryModel extends BaseModel {
    constructor(props) {
        super(props);
    }

    async get_all_category() {
        try {
            let categories = await Category.find({}).exec()
            return ReturnWrapper(200, "Fetch Success", categories);
        } catch (e) {
            return ReturnWrapper(200, e, [])
        }
    }
}

export default new CategoryModel()