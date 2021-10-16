
exports.up = function(knex) { 
    return knex.schema.createTable("accounts", (table) => {
        table.increments("user_id").primary();
        table.text("firstName");
        table.text("surName");
        table.text("ageDay");
        table.text("ageMonth");
        table.text("ageYear");
        table.text("gender");
        table.text("acceptTerm");
        table.text("userName");
        table.text("password");
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("accounts");
};
