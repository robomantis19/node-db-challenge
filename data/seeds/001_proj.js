
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Proj').del()
    .then(function () {
      // Inserts seed entries
      return knex('Proj').insert([
        {project_id: 1, name: 'Computer', Task_id: 1, Tasks: 'clean computer', completed: false, description: 'clean files and computer screen and keyboard'},
        {project_id: 1, name: 'Desk', Task_id: 2, Tasks: 'clean desk', completed: false, description: 'clean desk with cleaning supplies, use windex and screen cleaner for windows.'},
        {project_id: 1, name: 'Floor', Task_id: 3, Tasks: 'clean floor', completed: false, description: 'clean floor with mop and vacume cleaner. '}
      ]);
    });
};
