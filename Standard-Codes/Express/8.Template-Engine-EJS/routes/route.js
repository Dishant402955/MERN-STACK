import express from "express";
import homeController from "../controllers/homeController.js"
import aboutController from "../controllers/aboutController.js"
import contactController from "../controllers/contactController.js";

const route = express.Router();

route
    .get("/", homeController)
    .get("/about", aboutController)
    .get("/contact", contactController);

export default route;