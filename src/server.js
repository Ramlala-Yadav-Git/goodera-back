
const express = require('express');
const connect = require('./configs/db');
const cors = require('cors')
require('dotenv').config()



const app = express();

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

const jobController = require("./controllers/job.controller")
app.use("/", jobController)

const port = process.env.PORT || 8000

const start = async () => {
    await connect()
    app.listen(port, () => {
        console.log(process.env.SERVER_PORT);
        console.log("Hurray!! listening to port no ", port);
    })
}

module.exports = start