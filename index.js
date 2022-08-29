const { ObjectID } = require("bson");
const express = require("express");
const mongodb = require("mongodb").MongoClient;
const db = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors")
const {createClient} = require('@supabase/supabase-js');

const supabase = createClient('https://yzjdumjamibbbiykruyj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6amR1bWphbWliYmJpeWtydXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE3Nzk1OTksImV4cCI6MTk3NzM1NTU5OX0.Tp_8Yu-HYwxnaGueuyBFCUaLcR210sLZUPFKJN-RwRc');

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.get("/", async function(req, res){
    const data = await supabase.from("Ecoverso").select()
    res.send(data.data)
})

app.post("/", async function(req, res){
    const {name, description, img} = req.body;
    await supabase.from("Ecoverso").insert({
        name,
        description,
        img
    })
})

app.listen(4000, ()=>{
    console.log("server on port 4000");
})