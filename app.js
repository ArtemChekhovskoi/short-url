const express = require("express")
const config = require("config")
const mongoose = require("mongoose")
const debug = require("debug")("server")
const app = express()
const path = require("path")
const cors = require("cors")

app.use(cors())
app.use(express.json({ extended: true}))
app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/link", require ("./routes/link.routes"))
app.use("/t/", require ("./routes/redirect.routes"))

if(process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, "client", "build")))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const PORT = config.get("port") || 5000

async function start() {
    try {
        await mongoose.connect(config.get("mongo_url"))
        app.listen(PORT, () => console.log(`App started on port: ${PORT}`))
    } catch(e) {
        console.log("Server Error", e.message)
        process.exit(1)
    }
}

start()