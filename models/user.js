module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			unique: {
                args: true,
                message: 'Username must be unique.',
                fields: [sequelize.fn('lower', sequelize.col('username'))]
            },
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			unique: {
                args: true,
                message: 'Email must be unique.',
                fields: [sequelize.fn('lower', sequelize.col('email'))]
            },
			allowNull: false,
			// validate: {len: [1, 33], notEmpty: true }
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true,
			// validate: {len : [6, 12]}
		},
		location: {
			type: DataTypes.STRING,
			allowNull: true
		},
		overall_category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		nerd_level: {
			type: DataTypes.STRING,
			allowNull: true
		},
		dummy_data: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		}
	},{  // use snake case instead of camel case so foreign keys of format modelname_pkid e.g. burger_id or customer_id
    	underscored: true,
    	classMethods: {
        associate: function(models) {
           // One to many relationship
			// When a User is deleted, also delete any associated Burgers
			User.hasMany(models.Rawscore, {
				onDelete: "cascade",
				constraints: false
			});
        }
      }
  	},{
  		timestamps: false
	})


	return User;
};

