const routes = {
    auth: {
        verifyUser: {
            method: 'post',
            body: {email: '', api_token: ''},
            response: {
                code: 200,
                message: 'Verify Success',
                data: [{result: true}]
            }
        },
        default_: {
            method: 'post',
            body: {email: '', password: ''},
            response: {
                code: 200,
                message: '',
                data: ['user data']
            }
        }
    },
    books: {
        create: {
            method: 'post',
            Authorization: "Bearer token",
            body: {books: 'book data is object'},
            response: {
                code: 200,
                message: '',
                data: [{result: true}]
            }
        },
        default_: {
            path: 'books/page=1/api_token=',
            method: 'get',
            response: 'book by page'
        }
    },
    users: {
        create: {
            method: 'post',
            body: {emai: 'email', password: 'password'},
            response: {
                code: 200,
                message: '',
                data: [{result: true}]
            }
        },
        login:{
            method:'post',
            body:{email:'',password:''},
            response:{
                code:200,
                message:'',
                data:'user data'
            }
        }
    }
}