const router = require("express").Router({mergeParams:true});
const controller = require("./decks.controller");
const notAllowedMethod = require("../../errors/notAllowedMethod");

router
.route('/decks/new')
.post(controller.create)
.all(notAllowedMethod);

router
.route("/")
.get(controller.read)
.all(notAllowedMethod);

module.exports = router;