
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('headliners').del()
    .then(function () {
      // Inserts seed entries
      return knex('headliners').insert([
              { 
                id: '1',
                artist: 'Richie Havens', 
                time: '5:07pm – 6:00pm', 
                day:'Friday', 
                opener:'Opened set with: From the Prison', 
                closer:'Closed set with: Freedom (Motherless Child)',

              },
                
              { 
                id: '2',
                artist: 'Arlo Guthrie', 
                time: '11:55pm – 12:25am', 
                day:'Friday', 
                opener:'Opened set with: Coming into Los Angeles', 
                closer:'Closed set with: Amazing Grace',
              },

              { 
                id: '3',
                artist: "Joan Baez",
                time: "Played from: 12:55am – 2:00am",
                opener: "Opened set with: 'Oh Happy Day'",
                closer: "Closed set with: 'We Shall Overcome'",
                day: "Friday",
              },

              { 
                id: '4',
                artist: "Santana",
                time: "Played from: 2:00pm – 2:45pm",
                opener: "Opened set with: 'Waiting'",
                closer: "Closed set with: 'Fried Neckbones and Some Home Fries'",
                day: "Saturday",
              },

              { 
                id: '5',
                artist: "Grateful Dead",
                time: "Played from: 10:30pm – 12:05am",
                opener: "Opened set with: 'St. Stephen'",
                closer: "Closed set with: 'Turn on Your Love Light'" ,
                day: "Saturday", 
                   
              },

              {   
                  id: '6',
                  artist: "Creedence Clearwater Revival",
                  time: "Played from: 12:30am – 1:20am",
                  opener: "Opened set with: 'Born on The Bayou'",
                  closer: "Closed set with: 'Susie Q'" ,
                  day: "Saturday",  
              },

              {   
                  id: '7',
                  artist: "Janis Joplin",
                  time: "Played from: 2:00am – 3:00am",
                  opener: "Opened set with: 'Raise Your Hand'",
                  closer: "Closed set with: 'Ball 'n' Chain'" ,
                  day: "Saturday",
              },

              {   
                  id: '8',
                  artist: "The Who",
                  time: "Played from: 5:00am – 6:05am",
                  opener: "Opened set with: 'Heaven and Hell'",
                  closer: "Closed set with: 'Naked Eye'" ,
                  day: "Sunday",  
              },

              {   
                  id: '9',
                  artist: "Jefferson Airplane",
                  time: "Played from: 8:00am – 9:40am",
                  opener: "Opened set with: 'The Other Side of This Life'",
                  closer: "Closed set with: 'The House at Pooneil Corners'" ,
                  day: "Sunday", 
              },
              
              {   
                  id: '10',
                  artist: "Joe Cocker",
                  time: "Played from: 2:00pm – 3:25pm",
                  opener: "Opened set with: 'Dear Landlord'",
                  closer: "Closed set with: 'With a Little Help From My Friends''" ,
                  day: "Sunday", 
              },

              {   
                  id: '11',
                  artist: "Crosby, Stills, Nash, &Young",
                  time: "Played from: 3:00am – 4:00am",
                  opener: "Opened set with: 'Suite: Judy Blue Eyes'",
                  closer: "Closed set with: '49 Bye-Byes'" ,
                  day: "Monday",  
              },
              { 
                id: '12',
                artist: 'Sha Na Na', 
                time: '7:30am - 8:00am', 
                day:'Monday', 
                opener:'Opened set with: Get a Job', 
                closer:'Closed set with: Duke of Earl',
              },
              {
                  id: '13',
                  artist: "Jimi Hendrix",
                  time: "Played from: 9:00am – 11:10am",
                  opener: "Opened set with: 'Raise Your Hand'",
                  closer: "Closed set with: 'Hey Joe" ,
                  day: "Monday",  
              }
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('headliners_id_seq', (SELECT MAX(id) FROM headliners));"
      );
    });;
};
