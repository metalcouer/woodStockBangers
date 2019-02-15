
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('setlist').del()
    .then(function () {
      // Inserts seed entries
      return knex('setlist').insert([
        {id: 1, headliner_id: 1},
        {id: 2, headliner_id: 2},
        {id: 3, headliner_id: 3},
        {id: 4, headliner_id: 4},
        {id: 5, headliner_id: 5},
        {id: 6, headliner_id: 6},
        {id: 7, headliner_id: 7},
        {id: 8, headliner_id: 8},
        {id: 9, headliner_id: 9},
        {id: 10, headliner_id: 10},
        {id: 11, headliner_id: 11},
        {id: 12, headliner_id: 12},
        {id: 13, headliner_id: 13},
      ]);
    });
};
