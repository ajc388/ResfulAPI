
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('items').where('text', 'like', 'test%').del(), 

    // Inserts seed entries
    knex('items').insert({text: 'test_1', complete: true}),
    knex('items').insert({text: 'test_2', complete: false}),
    knex('items').insert({text: 'test_3', complete: false})
  );
};
