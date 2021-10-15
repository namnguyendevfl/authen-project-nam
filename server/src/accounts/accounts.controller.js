const service = require("./accounts.service");

async function read(req,res, next) {
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
    create,
    read,
  };