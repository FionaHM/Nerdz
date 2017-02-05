module.exports = function(sequelize, DataTypes){
	var Rawscore = sequelize.define("Rawscore", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		score : {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false
		}
		// category_id and user_id are foreign keys here
	},{  // use snake case instead of camel case so foreign keys of format modelname_pkid e.g. burger_id or customer_id
    	underscored: true,

	// removed belongs to relationship as there were conttraint issues.
  	},{
  		timestamps: false
	} )
	// Syncs with DB
	// Customer.sync();

	return Rawscore;
};

