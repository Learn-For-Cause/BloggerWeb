const express = require("express")
const App = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const mongoose = require('mongoose') 
const Publications = require("./Models/publications")

const dburi = "mongodb+srv://kevkanae:crysis123@blogcluster.utcvb.mongodb.net/webx?retryWrites=true&w=majority"

App.use(express.json())
App.use(cors())

try {
    mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        App.listen(PORT)
        console.log("Connected to database")
    })
    console.log("MongoDB Connection: ✔");
} catch (err) {
    console.log(err);
    throw err;
}

// Test
App.get('/',(req,res)=>{
    res.send('Yeah it works')
})


// List of all publication
App.get('/publications', (req,res) => {
    try{
        Publications.find({}, function (err, result){
            if(err) return res.send({message: "server error"})
            if(!result) return res.send({message: "user not found"}).status(404)
            res.send(result)
        })
    }
    catch(err){
        console.log(err)
    }
})

// Adding publications
App.post('/addpublication', (req,res) => {
    const pubData = new Publications({
        pName: req.body.pName,
        pDesc: req.body.pDesc,
    })
    pubData.save().then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

// get particualar publications
App.get('/publications:pName', (req,res) => {
    Publications.find({
        pName: req.params.pName
    }, function (err, result){
        if(err) return res.send({message: "server error"})
        res.send(result)
    })
})
