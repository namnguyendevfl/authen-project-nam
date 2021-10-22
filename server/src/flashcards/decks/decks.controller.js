const service = require("./decks.service");
const validator = require('validator');
const asyncErrorBoundary = require("../../errors/asyncErrorBoundary")

function hasData(req, res, next) {
    if (req.body.data) return next();
    next({status:400, message: "body must have data property"})
};

function hasName (req, res, next){
    if(req.body.data.deck_name) return next()
    next({status:400, message: "deck must have name"})
};

function hasDescription (req, res, next){
    if(req.body.data.deck_description) return next()
    next({status:400, message: "userName must be a phone number or an email address"})
    
};


async function read(req,res, next) {
    const data = await service.read();
    const { userId } = req.params;
    const foundUser = data.filter((deck) => deck.user_id === Number(userId))
    if (foundUser) {
    res.json({
        data : foundUser 
    })} else {
        next ({
            status: 400,
            message : `user is not found ${userId}`
        })
    }
}

async function create(req, res, next) {
  const newDeck = await service.create(req.body.data);
  res.status(201).json({
      data: newDeck
  })
}


module.exports = {
    create: [hasData, hasName, hasDescription, asyncErrorBoundary(create)],
    read: asyncErrorBoundary(read),
  };