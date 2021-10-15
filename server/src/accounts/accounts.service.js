const knex = require("../db/connection");

function create(newUser){
    return knex("accounts").insert(newUser).returning("*")
}

function read(){
    return knex("accounts").select("*");
}

module.exports = {
    create,
    read,
}