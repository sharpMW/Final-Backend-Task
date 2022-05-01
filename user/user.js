const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URL);
const User = sequelize.define('User', {
    U_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
});

module.exports = User;