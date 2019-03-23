
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', table => {
    table.increments();
    table.string('project_name')
        .notNullable()
        .unique();
    table.string('description')
        .notNullable();
    table.boolean('completed');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project')
};
