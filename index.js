const express = require("express")
require("dotenv").config()

const app = express()

app.get("/api/user", (req, res) => {
    res.json({ message: "user fetch success" })
})

app.get("*", (req, res) => {
    res.status(404).json({ message: "resours not found" })
})
app.listen(process.env.PORT || 5000, console.log("SERVER RUNNING"))



