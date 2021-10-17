const knex = require("../../db/connection");

function create(newCard){
    return knex("cards").insert(newCard).returning("*")
}

function read(){
    return knex("cards").select("*");
}

module.exports = {
    create,
    read,
}