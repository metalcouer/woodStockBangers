
exports.up = function(knex, Promise) {
    return knex.schema.createTable('songs', table => {
        table.increments('songid')
        table.integer('id')
        // table.string('setlist_id').notNullable().defaultsTo('')
        table.integer('setlist_id')
        table.string('title').notNullable().defaultsTo('')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('songs')  
};