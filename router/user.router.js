const express = require("express");
const {getUsers, getId, addUser} = require("../controller/user");
const router = express.Router();

router.get("/", getUsers)
router.get("/:id", getId)
router.post("/", addUser)

module.exports = router