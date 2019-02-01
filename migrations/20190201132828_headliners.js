
exports.up = function(knex, Promise) {
    return knex.schema.createTable('headliners', table => {
        table.increments()
        table.string('artist').notNullable().defaultsTo('')
        table.string('time').notNullable().defaultsTo('')
        table.string('opener').notNullable().defaultsTo('')
        table.string('closer').notNullable().defaultsTo('')
        table.string('day').notNullable().defaultsTo('')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('headliners')  
};

