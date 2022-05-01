require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("hello");
    console.log("hello");
});

require("./db/index");

app.use("/user", require("./user/userRouter"));
app.use("/employee", require("./employee/employeeRouter"));
app.use("/rooms", require("./rooms/roomsRouter"));
app.use("/booking", require("./booking/bookingRouter"));


app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`);
});
