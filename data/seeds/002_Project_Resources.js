
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Project_Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Resources').insert([
        {project_id: 1 , task_id:1, resource_id: 1},
        {project_id: 1 , task_id:1, resource_id: 2},
        {project_id: 1 , task_id:1, resource_id: 3},
        {project_id: 1 , task_id: 2, resource_id: 2},
        {project_id: 1 , task_id: 2, resource_id: 3},
        {project_id: 1 , task_id: 3, resource_id: 4}
      ]);
    });
};
