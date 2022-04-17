const express = require("express");
const router = express.Router();
const Class_mod = require("../Models/Class.model");

router.post("", async(req, res) => {
    try {
        const class_det = await Class_mod.create(req.body);
        return res.status(200).send(class_det);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

router.get("", async(req, res) => {
    try {
        const class_det = await Class_mod.find().lean().exec();
        return res.status(200).send(class_det);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

router.get("/:id", async(req, res) => {
    try {
        const class_det = await Class_mod.findById(req.params.id);
        return res.status(200).send(class_det);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

router.patch("/:id", async(req, res) => {
    try {
        const class_det = await Class_mod.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .lean().exec();
        return res.status(200).send(class_det);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const class_det = await Class_mod.findByIdAndDelete(req.params.id)
        .lean().exec();
        return res.status(200).send(class_det);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});