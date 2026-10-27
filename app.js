const express = require("express")

const app = express()
app.use(express.json())

const notes = []

app.post("/notes", (req,res) => {
    console.log(req.body)
})
>> OP : { title: title ,
        description : description } this will print in the vs terminal 

app.post("/notes", (req,res) => {
    notes.push(req.body)
    res.status(201),json( {
        message : "Notes created successfully"
    })
})
>>OP : "Notes created successfully"
        { title: title ,
        description : description } this will print in the postman terminal
