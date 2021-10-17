const service = require("./cards.service");
const validator = require('validator');
const asyncErrorBoundary = require("../../errors/asyncErrorBoundary")

function hasData(req, res, next) {
    if (req.body.data) return next();
    next({status:400, message: "body must have data property"})
};

// function hasFront (req, res, next){
//     if(req.body.data.front) return next()
//     next({status:400, message: "deck must have front"})
// };

// function hasBack (req, res, next){
//     if(req.body.data.back) return next()
//     next({status:400, message: "userName must have back"})
    
// };
// async function read(req,res, next) {
//     const data = await service.read();
//     res.json({
//         data
//     })
// }

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

// async function create(req, res, next) {
//   const newDeck = await service.create(req.body.data);
//   res.status(201).json({
//       data: newDeck
//   })
// }

async function create(req,res, next) {
    const data = await service.read();
    const { userId, deckId } = req.params;
    const foundUser = data.find((card) => card.deckId === Number(deckId))
    const newDeck = await service.create(req.body.data);
    if (foundUser) {
        // const newDeck = await service.create(req.body.data);
        res.status(201).json({
            data: newDeck
        })
    } else {
        next ({
            status: 400,
            message : `user is not found userId ${userId}, data ${data}, deckId ${deckId}`
        })
    };
}


module.exports = {
    // create: [hasData, hasFront, hasBack, create],
    create: [hasData, asyncErrorBoundary(create)],
    read,
  };