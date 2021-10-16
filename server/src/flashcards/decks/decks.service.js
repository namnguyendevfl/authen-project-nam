const knex = require("../../db/connection");

function create(newDeck){
    return knex("decks").insert(newDeck).returning("*")
}

function read(){
    return knex("decks").select("*");
}

module.exports = {
    create,
    read,
}