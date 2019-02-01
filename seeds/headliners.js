
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('headliners').del()
    .then(function () {
      // Inserts seed entries
      return knex('headliners').insert([
        {id: 1, artist: 'Richie Havens', 
                time: '5:07pm – 6:00pm', 
                day:'Friday', 
                opener:'Opened set with: From the Prison', 
                closer:'Closed set with: Freedom (Motherless Child)'},
        {id: 2, artist: 'Arlo Guthrie', 
                time: '11:55pm – 12:25am', 
                day:'Friday', 
                opener:'Opened set with: Coming into Los Angeles', 
                closer:'Closed set with: Amazing Grace'},
        {id: 3, artist: 'Sha Na Na', 
                time: '7:30am - 8:00am', 
                day:'Monday', 
                opener:'Opened set with: Get a Job', 
                closer:'Closed set with: Duke of Earl'}
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('headliners_id_seq', (SELECT MAX(id) FROM headliners));"
      );
    });;
};
