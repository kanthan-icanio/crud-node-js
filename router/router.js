const express = require('express');
const router = express.Router()
const usercontroller = require("../usecontroller/usercontroller")

router.post("/user",usercontroller.User)
router.get("/user",usercontroller.getuser)
router.get("/user/:id",usercontroller.getSingleuser)
router.post("/update/:id",usercontroller.updateuser)
module.exports = router;