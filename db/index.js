const {Sequelize, DataTypes} = require('sequelize');

sequelize
    .authenticate()
    .then(()=>{
        console.log("Connected successfully")
    })
    .catch((err)=>{
        console.log("error occured bro " + err)
    })

const db = {};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.users=require("../user/user");
db.employees=require("../employee/employee");
db.rooms=require("../rooms/rooms");
db.bookings=require("../booking/booking");

sequelize
    .sync({force: false})
    .then(()=>{
        console.log("Database & tables created")
    })
    .catch((err)=>{
        console.log("Error occured while creating database " + err)
    });

module.exports = db;    