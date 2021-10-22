const router = require("express").Router({mergeParams:true});
const controller = require("./decks.controller");
const notAllowedMethod = require("../../errors/notAllowedMethod");

router
.route("/:userId")
.get(controller.read)
.post(controller.create)
.all(notAllowedMethod);

module.exports = router;