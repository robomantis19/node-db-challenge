
exports.up = function(knex) {
  return knex.schema
    .createTable('Project_Resources', tbl => { 
        tbl.increments();
        tbl.integer('project_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Proj')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
        tbl.integer('resource_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Resc')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
        
    })


    .createTable('Proj', tbl => { 
        tbl.increments();
        tbl.string('name', 128).notNullable().unique()
        tbl.string('description').notNullable().unique()
        tbl.boolean('completed').defaultTo(false);
        
        

    })
    .createTable('Resc', tbl => { 
        tbl.increments();
        tbl.string('name').notNullable().unique();
        tbl.string('description').notNullable().unique();
    })
    .createTable('Tasks', tbl => { 
      tbl.increments(); 
      tbl.integer('project_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Proj')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl.string('description').notNullable().unique();
      tbl.string('notes').notNullable().unique();
      tbl.boolean('completed').defaultTo(false); 
    })
    
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Project_Resources')
    .dropTableIfExists('Proj')
    .dropTableIfExists('Resc')
    
};
