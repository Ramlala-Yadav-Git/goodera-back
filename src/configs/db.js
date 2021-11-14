
const mongoose = require("mongoose")

const connect = () => {

    return mongoose.connect("mongodb+srv://Ramlala:Ramlala@123@cluster0.n467z.mongodb.net/goodera?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}

module.exports = connect