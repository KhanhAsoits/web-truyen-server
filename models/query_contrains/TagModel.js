import BaseModel from "./BaseModel.js";
import {User} from "../contrains/Users.js";
import {ReturnWrapper} from "../../Helper/err.js";
import {Category} from "../contrains/Category.js";
import {Tag} from "../contrains/Tag.js";

class TagModel extends BaseModel {
    constructor(props) {
        super(props);
    }

    async get_all_tag() {
        try {
            let tags = await Tag.find({}).exec()
            return ReturnWrapper(200, "Fetch Success", tags);
        } catch (e) {
            return ReturnWrapper(200, e, [])
        }
    }
}

export default new TagModel({})