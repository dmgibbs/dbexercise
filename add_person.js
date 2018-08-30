const pg = require("pg");
const settings = require("./settings"); // settings.json

var knex = require('knex')({
    client: 'pg',
    connection: {
      host : settings.hostname,
      user : settings.user,
      password : settings.password,
      database : settings.database,
      ssl: settings.ssl
    }
  });

userValue = process.argv.slice(2);
console.log(userValue[0]);

if (userValue.length) {
    knex('famous_people')
        .insert({first_name: userValue[0], last_name:userValue[1], birthdate:userValue[2]})
        .then(function (rows) {
           console.log("Inserted into database ",rows);
         })
       .then(()=> knex.destroy());
}
