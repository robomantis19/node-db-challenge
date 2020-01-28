
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resc').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resc').insert([
        {Description:'cleaning computer supplies',  name: 'disk cleaner'},
        {Description:'cleaning screen supplies',  name: 'screen cleaner'}, 
        {Description:'cleaning table supplies', name: 'windex'},
        {Description:'cleaning floor supplies',  name: 'mop'}, 
        {Description:'for cleaning floor',  name: 'trash can'}, 
        {Description:'for tidying up desk',  name: 'file cabinet'}, 
        
       
      ]);
    });
};
