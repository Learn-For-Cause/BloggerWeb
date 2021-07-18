const mongoose = require("mongoose")
const PublicationSchema = new mongoose.Schema({
    pName: {
        type: String,
        required: true,
    },
    pDesc: {
        type: String,
        required: true,
    },
})

const Publications = mongoose.model("publication_list", PublicationSchema)
module.exports = Publications