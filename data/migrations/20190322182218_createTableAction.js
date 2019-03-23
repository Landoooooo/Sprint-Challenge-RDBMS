
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', table => {
        table.increments();
        table.string('description')
            .notNullable();
        table.string('notes')
        table.integer('project_id')
            .unique()
            .unsigned()
            .references('id')
            .inTable('project')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.boolean('completed')

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action')
};
