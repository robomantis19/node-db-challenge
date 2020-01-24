
exports.up = function(knex) {
  return knex.schema
    .createTable('Project_Resources', tbl => { 
        tbl.increments();
        tbl.integer('project_id',128)
        tbl.integer('task_id', 128)
        tbl.integer('resource_id', 128)
        
    })


    .createTable('Proj', tbl => { 
        tbl.increments();
        tbl.string('Tasks', 128).notNullable().unique();
        tbl.integer('Task_id', 128)
        .unsigned()
        .notNullable()
        .references('task_id')
        .inTable('Project-Resources')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

        tbl.string('name').notNullable().unique()
        tbl.string('description').notNullable().unique()
        tbl.integer('project_id', 128)
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('Project_Resources')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

        tbl.boolean('completed').defaultTo(false);
        
        

    })
    .createTable('Resc', tbl => { 
        tbl.string('Resources', 128).notNullable();
        tbl.integer('Resource_id', 128)
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('Project_Resources')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');; 
        tbl.string('name').notNullable().unique();
        tbl.unique('Resource_id')
    })
    
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Project_Resources')
    .dropTableIfExists('Proj')
    .dropTableIfExists('Resc')
    
};
