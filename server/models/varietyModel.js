const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Variety = sequelize.define("Varietys", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        feature: DataTypes.STRING,
        sensitivity: DataTypes.STRING,
        age: DataTypes.STRING,
        softness: DataTypes.STRING,
        product: DataTypes.STRING,
        stability: DataTypes.STRING,
    });

    return Variety;
};