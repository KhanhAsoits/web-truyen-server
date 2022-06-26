import CategoryModel from "../models/query_contrains/CategoryModel.js";
import TagModel from "../models/query_contrains/TagModel.js";

class TagController {
    constructor(props) {
        this.props = props
    }

    async getAll() {
        return await TagModel.get_all_tag()
    }

}

export default new TagController({})