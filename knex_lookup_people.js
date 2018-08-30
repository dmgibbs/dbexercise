const pg = require("pg");
const settings = require("./settings"); // settings.json

// const client = new pg.Client({
//   user     : settings.user,
//   password : settings.password,
//   database : settings.database,
//   host     : settings.hostname,
//   port     : settings.port,
//   ssl      : settings.ssl
// });


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


function showStuff(someData){
    for(let i = 0 ; i < someData.length; i++){
        console.log(" Firstname: ", someData[i].first_name," Lastname: ", someData[i].last_name);
    }
}


userValue = process.argv.slice(2);
console.log(userValue[0]);
var date; 
if (userValue.length) {
    knex('famous_people')
        .where('first_name', userValue[0])
        .then(function (rows) {
          console.log("Found ",rows.length," users by that name "+userValue);
          let count = rows.length;
            for (let i = 0; i< count; i++){
                date = rows[i].birthdate.toISOString().slice(0,10);  // return the first 10 characters of the initial ISO formatted string.
                console.log(i+1+':'+rows[i].first_name, rows[i].last_name,"born ",date);
            }
        })
        .then(()=> knex.destroy());
}

knex('famous_people')
    .then (rows => showStuff(rows));






