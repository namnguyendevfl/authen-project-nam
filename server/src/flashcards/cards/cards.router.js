const router = require("express").Router({mergeParams:true});
const controller = require("./cards.controller");
const notAllowedMethod = require("../../errors/notAllowedMethod");

router
.route("/:userId")
.get(controller.read)
.all(notAllowedMethod);

// router
// .route("/:userId")
// .get(controller.read)
// // .post(controller.create)
// .all(notAllowedMethod);

router
.route('/:userId/decks/:deckId/new')
.post(controller.create)
.all(notAllowedMethod);

module.exports = router;