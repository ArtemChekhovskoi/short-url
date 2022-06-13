const {Router} = require("express")
const USer = require("../models/User")
const router = Router()

router.post("/register", async (req, res) => {
    try {

        const {email, password} = req.body

    } catch (e) {
        res.status(500).json({message: "Smth gets wrong"})
    }
})

router.post("/login", async (req, res) => {
    try {

    } catch (e) {
        
    }
})

module.exports = router