exports.up = function(knex, Promise) {
    return knex.schema.createTable('setlist', table => {
        table.increments()
        table.string('headliner_id').notNullable().defaultsTo('')
     
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('setlist')  
};


