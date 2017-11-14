// Import MySQL connection.
var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
}

  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, callBack) {
    connection.query("SELECT * FROM "+tableInput+";", function(err, result) {
      if (err) {
        throw err;
      }
      callBack(result);
    });
  },

  insertOne: function(tableInput, vals, callBack) {
  		connection.query('INSERT INTO '+tableInput+"(user_data) VALUES ('"+vals+"');", function(err, result){
      if (err) {
        throw err;
      }
			   callBack(result);
		});
	}

// Export the orm object
module.exports = orm;
