
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Proj').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Proj').insert([
        {name: 'Clean Computer',  completed: false, description: 'clean files and computer screen and keyboard'},
        {name: 'Clean Desk',  completed: false, description: 'clean desk with cleaning supplies, use windex and screen cleaner for windows.'},
        {name: 'Mop Floor',  completed: false, description: 'clean floor with mop and vacume cleaner. '}
      ]);
    });
};
