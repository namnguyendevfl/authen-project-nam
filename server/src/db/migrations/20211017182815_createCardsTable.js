
exports.up = function(knex) {
  return knex.schema.createTable("cards", (table) => {
      table.increments("cardId").primary();
      table.text("front");
      table.text("back");
      table.timestamps(true,true);
      table.integer("userId").references('user_id').inTable('accounts');
      table.integer("deckId").references('deck_id').inTable('decks');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("cards");
};
