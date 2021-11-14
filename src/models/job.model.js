

const mongoose = require('mongoose')

const bcrypt = require("bcryptjs");

const jobSchema = new mongoose.Schema({
    description: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    publication_date: { type: String, required: true },
    id: { type: Number, required: true },
    location: { type: String, required: true },
    level: { type: String, required: true },
    tags: [{ type: String, required: false }],
    company: {
        id: { type: Number, required: true },
        short_name: { type: String, required: true },
        name: { type: String, required: true },

    }

}, {
    timestamps: true,
    versionKey: false
})


const Job = mongoose.model("job", jobSchema)

module.exports = Job