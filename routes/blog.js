const express = require("express");

const mongodb = require("mongodb");


const blogControllers = require("../controller/post-controller");

const ObjectId = mongodb.ObjectId;
const router = express.Router();

router.get("/", blogControllers.getHome);

router.get("/admin", blogControllers.getAdmin);

router.post("/posts", blogControllers.createPost);

router.get("/posts/:id/edit", blogControllers.getSinglePost);

router.post("/posts/:id/edit", blogControllers.updatePost);

router.post("/posts/:id/delete", blogControllers.deletePost);

module.exports = router;
