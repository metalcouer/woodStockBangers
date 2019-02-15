exports.up = function(knex, Promise) {
    return knex.schema.createTable('setlist', table => {
        table.increments()
        // table.string('headliner_id').notNullable().defaultsTo('')
        table.integer('headliner_id')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('setlist')  
};


