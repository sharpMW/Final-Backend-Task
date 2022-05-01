const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URL);
const Booking = sequelize.define('Booking', {
    booking_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    U_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    room_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    check_in: {
        type: DataTypes.DATE,
        allowNull: false
    },
    check_out: {
        type: DataTypes.DATE,
        allowNull: false
    },
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
});

module.exports = Booking;