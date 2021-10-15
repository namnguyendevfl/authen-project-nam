
exports.up = function(knex) { 
    return knex.schema.createTable("accounts", (table) => {
        table.increments("user_id").primary();
        table.text("username");
        table.text("password");
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("accounts");
};
