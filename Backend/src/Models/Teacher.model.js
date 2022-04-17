const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
    {
        img: { type: String, required: true },
        name: { type: String, required: true },
        age: { type: String, required: true },
        gender: { type: String, required: true },
        class: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "classdet",
                required: true
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Teacherdetails = new mongoose.model("teacherdet", teacherSchema);

module.exports = Teacherdetails;