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
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
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
		}
	},{  // use snake case instead of camel case so foreign keys of format modelname_pkid e.g. burger_id or customer_id
    	underscored: true,
    	classMethods: {
        associate: function(models) {
           // One to many relationship
			// When a Customer is deleted, also delete any associated Burgers
			User.hasMany(models.Score, {
				onDelete: "cascade",
				constraints: false
			});
        }
      }
  	},{
  		timestamps: false
	})

	// Syncs with DB
	// Burger.sync();

	return User;
};

