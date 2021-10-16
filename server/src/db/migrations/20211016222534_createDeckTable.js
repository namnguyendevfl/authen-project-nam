
exports.up = function(knex) {
  return knex.schema.createTable("decks", (table) => {
      table.increments("deck_id").primary();
      table.text("deck_name");
      table.text("deck_description");
      table.timestamps(true,true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("decks");
  
};
