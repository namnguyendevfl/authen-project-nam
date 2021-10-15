const service = require("./accounts.service");

// const users = [{
//     "observation_id": 1,
//     "username": "Nam",
//     "password" : "Superkid",
//     "created_at": "2020-12-10T08:30:32.326Z",
//     "updated_at": "2020-12-10T08:30:32.326Z"
//   }];

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