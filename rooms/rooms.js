const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URL);
const Room = sequelize.define('Room', {
    room_number: {
        type: DataTypes.INTEGER,
    },
    room_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lprice: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Room;