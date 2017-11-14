const express = require('express');
const bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var data = require("./data/taxcut.js");
var tabledata = require("./data/taxcutsummary.js");

var mySQL = require('mysql');

var port = process.env.PORT || 8080;
var app = express();

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("front-end"));

app.get("/", function(req, res) {
	res.sendFile("./front-end/index.html");
});


app.get('/reports', function (req, res, cb) {
    var count = 0;
   res.render("home", {
    tweet: data.tweetArray[count],
    table: tabledata.tweetSummary[count]
  });

 //   	if ($("#next").click()) {
 //   		count = count +1;
	// } else if ($("#previous").click()){
	// 	count = count -1;
	// }


});
app.get("/api", function(req, res){
	res.json(data.tweetArray[0]);
});

app.get("/api/tables", function(req, res){
	res.json(tabledata.tweetSummary);
});

require("./routes/password-controller.js")(app);


db.sequelize.sync({ force: false }).then(function() {
	app.listen(port, function() {
		console.log("App listening on PORT " + port);
	});
});
