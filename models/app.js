const express=require('express')
const database=require("./database")
const app=express()

app.use(express.json())

module.exports=app