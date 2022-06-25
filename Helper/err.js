export const ReturnWrapper = (code, message, data) => {
    let return_object = {code, success: true, message, data}

    switch (code) {
        case 200 :
            return_object.success = true
            break;
        case 201:
            return_object.success = true
            return_object.message = "API TOKEN NOT VALID"
            break;
        case 404:
            return_object.success = false
            break;
        case 400:
            return_object.success = false
            break;
    }
    return return_object
}