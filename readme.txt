put : update
get : read
post : create


routes :
- get access token :
  path  : '/auth/',
  method:post,
  body:{email,password}

- books/page=1/api_token=/
     path:/page=page_num/api_token=your_access_token
     method:get,
     body:none
- books/create
    path:books/create
    method:post,
    body:{
        book:{title,describe,categoryId,AuthorId}
    }
- categories/
    path : categories/api_token=/
    method:get
- tags/
    path : tags/api_token=/
    method:get
