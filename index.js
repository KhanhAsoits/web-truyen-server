import cors from "cors"
import express from "express"
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import BookRoute from "./routes/BookRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import TagRoute from "./routes/TagRoute.js";

const APP = express()
const PORT = process.env.PORT || 5000
const DB_URI = "mongodb+srv://khanhdev:13122002@cluster0.8c6yp.mongodb.net/web-truyen?retryWrites=true&w=majority"
const limit_transfer = "50mb"
APP.use(bodyParser.json({limit: limit_transfer}))

// route here

APP.get('/', (req, res) => {
    res.send('THIS WEB-TRUYEN API ROOT SOURCE!')
})
APP.use(cors())

// books route
APP.use(BookRoute)
APP.use(AuthRoute)
APP.use(UserRoute)
APP.use(CategoryRoute)
APP.use(TagRoute)
//end route
// not found route
APP.use('*',(req,res,next)=>{
    res.send('No path found , may you try add / after path')
})
// config cors


mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
    console.log('db connected')
    APP.listen(PORT, () => {
        console.log('API READY IN PORT : ', PORT)
    })
})
//connect db

