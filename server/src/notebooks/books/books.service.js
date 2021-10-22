const knex = require("../../db/connection");

function create(newBook){
    return knex("books").insert(newBook).returning("*")
}


function read(bookId){
    return knex("books").select("*");
}


module.exports = {
    create,
    read,
}