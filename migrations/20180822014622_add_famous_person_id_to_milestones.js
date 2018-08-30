
// exports.up = function(knex, Promise) {
  
// };

exports.up = function(knex, Promise) {  
    return Promise.all([

    knex.schema.alterTable('milestones', function(t) {
      t.integer('famous_person_id');
      t.foreign('famous_person_id').references ('famous_people.id')
    })
  ])
};

// exports.down = function(knex, Promise) {
  
// };


// exports.up = function(knex, Promise) {  
//     return Promise.all([
//       knex.schema.createTable('milestones', function(table){
//         table.increments('id');
//         table.varchar('description',255);
//         table.date('date_achieved');
//       })
//     ])
//   };
  
  exports.down = function(knex, Promise) {  
    return Promise.all([
      knex.schema.dropTable('milestones')
    ])
  };