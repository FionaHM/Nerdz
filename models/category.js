module.exports = function(sequelize, DataTypes){
	var Category = sequelize.define("Category", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		category_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},{  // use snake case instead of camel case so foreign keys of format modelname_pkid e.g. burger_id or customer_id
    	underscored: true,
    	classMethods: {
        associate: function(models) {
            // One to many relationship between Category and Score
			// When a Customer is deleted, also delete any associated Burgers
			Category.hasMany(models.Score, {
				// onDelete: "cascade",
				constraints: false
			}),
			Category.hasMany(models.Question, {
				// onDelete: "cascade",
				constraints: false
			});
        }
      },
   //      classMethods: {
   //      associate: function(models) {
   //          // One to many relationship between Category and Score
			// // When a Customer is deleted, also delete any associated Burgers
			
   //      }
   //    }
  	},{
  		timestamps: false
	})

	// Syncs with DB
	// Burger.sync();

	return Category;
};

