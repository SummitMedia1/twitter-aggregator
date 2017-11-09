var Sequelize = require('sequelize');


// exports to password-controller.js
module.exports = function(sequelize, DataTypes) {

	var User = sequelize.define('User', {
		user_id: {
			type: Sequelize.MEDIUMINT,
			primaryKey: true
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				max: 30
			}
		},
		pass_hash: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		subscribed: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		admin: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		}
	}, {
		timestamps: false
	});

	return User;
};