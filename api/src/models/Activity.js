const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: { min: 1, max: 5},
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM("Autumn", "Winter", "Spring", "Summer"),
            allowNull: false
        }

    }, {timestamps: false})
}