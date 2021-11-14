const express = require("express")

const router = express.Router()

const Job = require("../models/job.model")

router.get("/jobs", async (req, res) => {
    try {

        let title = (req.query.title)
        let location = (req.query.location)
        if (title) {
            const jobs = await Job.find({ title: title }).lean().exec();
            return res.status(200).json({ jobs })
        }

        if (location) {
            const jobs = await Job.find({ location: location }).lean().exec();
            return res.status(200).json({ jobs })
        }
        else {

            const jobs = await Job.find().lean().exec();
            return res.status(200).json({ jobs })
        }
    }
    catch (err) {
        return res.status(400).json({
            message: "Something went wrong",
            err: err
        })
    }
})
router.post("/jobs", async (req, res) => {
    try {
        const jobs = await Job.create(req.body);
        return res.status(201).json({ jobs })
    }
    catch (err) {
        return res.status(400).json({
            message: "Something went wrong",
            err: err
        })
    }
})
router.get("/jobs/:id", async (req, res) => {

    try {

        let id = req.body.id;
        const jobs = await Job.findOne({ id: id }).lean().exec();
        return res.status(200).json({ jobs })
    }
    catch (err) {
        return res.status(400).json({
            message: "Something went wrong",
            err: err
        })
    }
})




module.exports = router

