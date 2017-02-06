module.exports = function(sequelize, DataTypes){
	var Nerdlevel = sequelize.define("Nerdlevel", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		nerd_level: {
			type: DataTypes.STRING,
			allowNull: false
		},
		max_score: {
			type: DataTypes.DECIMAL(10,2),
			allowNull: false
		},
		min_score: {
			type: DataTypes.DECIMAL(10,2),
			allowNull: false
		}
  	},{
  		timestamps: false
	})

	return Nerdlevel;
};

