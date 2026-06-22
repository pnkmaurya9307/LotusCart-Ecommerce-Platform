import express from "express"
import { subscribe } from "../controller/subscribeController.js"

const subscribeRoutes = express.Router()

subscribeRoutes.post("/", subscribe)

export default subscribeRoutes