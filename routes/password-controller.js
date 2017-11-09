const hasher = require('../bcrypt-logic.js');
var db = require("../models");
var path = require("path");

//exports to server.js
module.exports = function(app) {

	// request a password check for given user
	app.get("/login/:user", function(req, res) {

		var username = req.params.user.toLowerCase();
		var password = req.query.value;

		db.User.findAll({
			where: {
				username: username,
			}
		}).then(function(response) {

			if (response.length === 0) {
				res.send({ login: 'failed' });
				
			} else {
				hasher.hashCheck(password, response[0].dataValues.pass_hash, function(data) {
					console.log(data);
					if (data === true) {
						res.send({ login: 'success' });
					} else {
						res.send({ login: 'failed' });
					}
				});
			}
		});
	});

	// check is user exists; if not, then create new user
	app.post("/login/new", function(req, res) {

		var username = req.body.username.toLowerCase();
		var password = req.body.password.toLowerCase();
		var hash;
		var subscribed = req.body.sub;
		var admin = req.body.admin;

		hasher.newHash(password, function(newHash) {
			hash = newHash;

			console.log("\n---------New user----------");
			console.log("Username     : " + username);
			console.log("Password     : " + password);
			console.log("Hash         : " + hash);
			console.log("Subscribed   : " + subscribed);
			console.log("Admin        : " + admin);
			console.log("---------End user----------\n");

			addUser();

		});

		function addUser() {

			db.User.findAll({
				where: {
					username: username,
				}
			}).then(function(response) {
				if (response.length > 0) {
					res.send({ created: 'failed' });
				} else {
					db.User.create({
						username: username,
						pass_hash: hash,
						subscribed: subscribed,
						admin: admin
					}).then(function(response) {
						res.send({ created: 'success' });
					});
				}

			});

		}

	});
};