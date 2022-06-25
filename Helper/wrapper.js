import {ReturnWrapper} from "./err.js";

function wrapper(f) {
    return async function () {
        try {
            return await f.apply(this, arguments);
        } catch (e) {
            return ReturnWrapper(400, e, [])
        }
    }
}

export {wrapper}