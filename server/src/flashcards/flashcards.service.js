const knex = require("../db/connection");
function create(newUser){
    return knex("decks").insert(newUser).returning("*")
}

function read(){
    return knex("decks").select("*");
}

module.exports = {
    create,
    read,
}