
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {project_id: 1, description: 'Task1 clean computer', notes:'must download program and clean files, as well as clean outside of it . ', completed: false},
        {project_id: 2, description: 'Task2 clean desk', notes:'Organize desk, neetly pile paper into stacks and fit into file cabinets the analog data. ', completed: false},
        {project_id: 2, description: 'Task2 again clean desk', notes:'file stuff in the file cabinets on the desk organize toys. ', completed: false},
        {project_id: 3, description: 'pickup trash' , notes: 'Take trash off floor into trash.', completed: false},
        {project_id: 3, description: 'Sweep floor', notes: 'get broom from johnny', completed: false},
        {project_id: 3, description: 'Mop', notes: 'must get floor key', completed: false}
      ]);
    });
};
