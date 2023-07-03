import express from 'express'
import bodyParser from 'body-parser';
import routes from "../App/Routes/index"
import cors from 'cors'
import session from "express-session";

import dotenv from 'dotenv'

class Server{
    
    PORT:any;
    app:any;
    constructor(){
        dotenv.config({path:".env"})
        this.PORT=process.env.PORT
        this.app=express()
        
    }
    start(){
        this.app.use(cors())
        this.app.use(session({ secret: "thisismysecrctekeyfhrgfgrfrty84fwir767"}))
        this.config()
        this.setRoutes()
        this.listen()
    }
    config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    setRoutes(){
       this.app.use(routes)
    console.log("🚀 ~ file: index.ts:25 ~ Server ~ setRoutes ~ Routes:", "Routes")
    

    }
    listen(){
    this.app.listen(this.PORT,() => {
        console.log("🚀 ~ file: index.ts:31 ~ Server ~ this.app.listen ~ PORT:", this.PORT)
       
    })
    }
}
export default Server