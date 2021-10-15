const router = require("express").Router({mergeParams:true});
const controller = require("./accounts.controller");
const notAllowedMethod = require("../errors/notAllowedMethod");

router
.route('/accounts/signup')
.post(controller.create)
.all(notAllowedMethod);

router
.route("/")
.get(controller.read)
.all(notAllowedMethod);

module.exports = router;