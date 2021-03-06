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
  	},{
  		timestamps: false
	})

	// Syncs with DB
	// Burger.sync();

	return Category;
};

