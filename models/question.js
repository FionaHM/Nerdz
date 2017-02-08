module.exports = function(sequelize, DataTypes){
	var Question = sequelize.define("Question", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		question: {
			type: DataTypes.STRING,
			allowNull: false
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false
		},

	},{  // use snake case instead of camel case so foreign keys of format modelname_pkid e.g. burger_id or customer_id
    	underscored: true,
    	classMethods: {
        associate: function(models) {
           // One to many relationship
			// When a Customer is deleted, also delete any associated Burgers
			Question.hasMany(models.Rawscore, {
				onDelete: "cascade",
				constraints: false
			}),
			Question.hasMany(models.Category, {
				onDelete: "cascade",
				constraints: false
			})
        }
      }
  
    },{
  		timestamps: false
	})

	return Question;
};
