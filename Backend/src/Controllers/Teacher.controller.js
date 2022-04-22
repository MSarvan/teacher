const express = require("express");
const router = express.Router();
const Teach_mod = require("../Models/Teacher.model");

router.post("", async(req, res) => {
    try {
        const teach_det = await Teach_mod.create(req.body);
        return res.status(200).send(teach_det);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

router.get("", async(req, res) => {
    try {
        const teach_det = await Teach_mod.find()
        .populate({
            path: "class",
            select: ["grade", "section", "subject"]
        }).lean().exec();
        return res.status(200).send(teach_det);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

router.get("/:id", async(req, res) => {
    try {
        const teach_det = await Teach_mod.findById(req.params.id);
        return res.status(200).send(teach_det);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

router.patch("/:id", async(req, res) => {
    try {
        const teach_det = await Teach_mod.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .lean().exec();
        return res.status(200).send(teach_det);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const teach_det = await Teach_mod.findByIdAndDelete(req.params.id)
        .lean().exec();
        return res.status(200).send(teach_det);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;