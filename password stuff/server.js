const express = require('express');
const bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var app = express();

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./routes/password-controller.js")(app);


db.sequelize.sync({ force: false }).then(function() {
	app.listen(port, function() {
		console.log("App listening on PORT " + port);
	});
});