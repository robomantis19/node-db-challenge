
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resc').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resc').insert([
        {Resources:'cleaning computer supplies', Resource_id: 1, name: 'disk cleaner'},
        {Resources:'cleaning screen supplies', Resource_id: 2, name: 'screen cleaner'}, 
        {Resources:'cleaning table supplies', Resource_id: 3, name: 'windex'},
        {Resources:'cleaning floor supplies', Resource_id: 4, name: 'mop'}, 
       
      ]);
    });
};
