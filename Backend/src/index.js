const mongoose = require("mongoose");
const express = require("express");
const connect = require("./Config/database");
const cors = require("cors");
require("dotenv").config();

const teacherController = require("./Controllers/Teacher.controller");
const classController = require("./Controllers/Class.controller");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/teachersdetails", teacherController);
app.use("/classesdetails", classController);

const port = process.env.PORT || 7890;

app.listen(port, async () => {
    try {
        await connect();
        console.log("listening on port: 7890");
    } catch (err) {
        console.log(err.message);
    }
});