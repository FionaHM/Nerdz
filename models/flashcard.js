module.exports = function(sequelize, DataTypes){
    var Flashcard = sequelize.define("Flashcard", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            notNull: false
        },
        nerd: {
            type: DataTypes.STRING,
    },
        geek: {
            type: DataTypes.STRING,
    },
        nerd_score: {
            type: DataTypes.INTEGER,
            notNull: true,
    },
        geek_score: {
            type: DataTypes.INTEGER,
            notNull: true
        }},{
    underscored: true
})
    return Flashcard;
};