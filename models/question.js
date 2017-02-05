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
		}
	},{  // use snake case instead of camel case so foreign keys of format modelname_pkid e.g. burger_id or customer_id
    	underscored: true,
    	classMethods: {
        associate: function(models) {
       		// many to one relationship Questions to Category 
          	// An Category (foreignKey) is required or a Question can't be added
	        	Question.belongsTo(models.Category, {
		            foreignKey: {
		              allowNull: false
		            },
		            constraints: false
	          	});
        	}
    	}
    },{
  		timestamps: false
	})

	return Question;
};

