import express from "express";

import config from '../config.js'
import AuthController from "../controllers/AuthController.js";

class BaseRoute {
    constructor(route_name, verify = true) {
        this.router = express.Router()
        this.router_name = route_name
        this.router_path = `/?${this.router_name}`
        this.config = config
    }

    GetToken(req) {
        let bearer_token = ""
        if (req.method === "GET" || req.method === "PUT") {
            let api_token = req.params?.api_token || ''
            bearer_token = api_token ? api_token : null
        } else {
            let raw_token = req.headers['authorization'] || req?.headers['VerifyToken']
            bearer_token = raw_token?.startsWith('Bearer') ? raw_token?.slice(7, raw_token.length) : "";
        }
        return bearer_token !== null ? bearer_token : ""
    }

    async VerifyToken(token) {
        if (await AuthController.VerifyToken(token)) {
            return true
        } else {
            return false;
        }
    }
}

export default BaseRoute