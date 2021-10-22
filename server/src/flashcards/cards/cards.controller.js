const service = require("./cards.service");
const validator = require('validator');
const asyncErrorBoundary = require("../../errors/asyncErrorBoundary")

function hasData(req, res, next) {
    if (req.body.data) return next();
    next({status:400, message: "body must have data property"})
};

async function read(req,res, next) {
    const data = await service.read();
    const { userId, deckId } = req.params;
    const foundUser = data.filter((card) => card.deckId === Number(deckId))
    if (foundUser) {
        res.status(201).json({
            data: foundUser,
        })
    } else {
        next ({
            status: 400,
            message : `user is not found userId ${userId}, data ${data}, deckId ${deckId}`
        })
    };
}

async function create(req,res, next) {
    const newDeck = await service.create(req.body.data);
        res.status(201).json({
            data: newDeck
        })

}

module.exports = {
    // create: [hasData, hasFront, hasBack, create],
    create: [hasData, asyncErrorBoundary(create)],
    read: [asyncErrorBoundary(read)],
  };