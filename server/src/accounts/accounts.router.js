const router = require("express").Router({mergeParams:true});
const controller = require("./accounts.controller");
const notAllowedMethod = require("../errors/notAllowedMethod");

router
.route('/')
.get(controller.readUsers)
.post(controller.create)
.all(notAllowedMethod);

module.exports = router;