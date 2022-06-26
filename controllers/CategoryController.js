import CategoryModel from "../models/query_contrains/CategoryModel.js";

class CategoryController {
    constructor(props) {
        this.props = props
    }

    async getAll() {
        return await CategoryModel.get_all_category()
    }

}

export default new CategoryController({})