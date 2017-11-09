const bcrypt = require('bcrypt');
const saltRounds = 10;

var hasher = {
	newHash: function(pass, cb) {
		bcrypt.genSalt(saltRounds, function(err, salt) {
			bcrypt.hash(pass, saltRounds)
			.then(function(hash) {
				cb(hash);
			});
		});
	},
	hashCheck: function(pass, hash, cb) {
		bcrypt.compare(pass, hash)
		.then(function(res) {
			if (res === true) {
				cb(true);
			}
			if (res === false) {
				cb(false);
			}
		});
	}
};

// exports to password-logic.js
module.exports = hasher;


// user - batman      :   password1
// user - spiderman   :   password2
// user - iron man    :   password
// user - mario       :   supermariobros