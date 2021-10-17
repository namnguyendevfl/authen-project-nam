const service = require("./accounts.service");
const validator = require('validator');

function hasData(req, res, next) {
    if (req.body.data) return next();
    next({status:400, message: "body must have data property"})
};

function hasPassword (req, res, next){
    const password = req.body.data.password;
    if (password.length >= 6) return next();
    next({status:400, message: "password is too short"})
};

function hasUserName (req, res, next){
    const userName = req.body.data.userName;
    if (!isNaN(userName)) return next();
    if (validator.isEmail(userName)) return next();
    next({status:400, message: "userName must be a phone number or an email address"})
    
};


// async function readUser(req,res, next) {
//     const data = await service.read();
//     const { userId } = req.params;
//     const foundUser = data.find((user) => user.user_id === Number(userId))
//     if (foundUser) {
//     res.json({
//         data : foundUser 
//     })} else {
//         next ({
//             status: 400,
//             message : `user is not found ${userId}`
//         })
//     }
// }

async function readUsers(req,res, next) {
    const data = await service.read();
    res.json({
        data
    })
}

async function create(req, res, next) {
  const newUser = await service.create(req.body.data);
  res.status(201).json({
      data: newUser
  })
}


module.exports = {
    create: [hasData, hasUserName, hasPassword, create],
    readUsers,
    // readUser
  };