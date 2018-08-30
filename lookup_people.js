const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

userValue = process.argv.slice(2);

function queryCount(result){
  let answer = result.rows[0]['count'];
  return answer;
}

function printResults(result){
  for (let i = 0; i < result.rows.length; i++)
  {
    let parts = result.rows[i]['row'].split(",");
    let len = parts[2].length;
    let theStr = parts[2].split("");
    theStr = theStr.splice(0,len-1).join("");

    console.log(i+1 + ":"+ parts[0].slice(1)+" "+ parts[1]+" born "+theStr);
  }

}

  if (userValue === [])
    var myTxt = 'Abraham';
  else
    var myTxt = "select count (first_name) from famous_people where first_name ='" + userValue[0]+ "'";

  //var query2 = "select  (first_name, last_name , birthdate) from famous_people where first_name ='" + userValue[0]+ "'";
var query2 = "select  *  from famous_people where first_name ='" + userValue[0]+ "'";
  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    client.query(myTxt, (err, result) => {
      if (err) {
       return console.error("error running query", err);
      }
      console.log("Found (",queryCount(result),") persons by that name."); //output: 1
    });  /* end query */

    /* run another query */
    client.query(query2, (err, result) => {
      if (err) {
       return console.error("error running query", err);
      }
      printResults(result); //print out matched users.
      client.end();
    });
  });   // end the connect client
