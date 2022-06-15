const {Router} = require("express")
const bcrypt = require("bcryptjs")
const {check, validationResult} = require("express-validator")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const config = require("config")


const router = Router()

router.post("/register", 
    [
        check("email", "Incorrect email").isEmail(),
        check("password", "Password should contain minimum 6 symbols").isLength({min: 6})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Incorrect email or very short password (should be > 6)"
            })
        }

        const {email, password} = req.body

        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({message: "User has already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: "User created"})

    } catch (e) {
        res.status(500).json({message: "Smth gets wrong"})
    }
})


router.post("/login", 
    [
        check("email", "Write your email").normalizeEmail().isEmail(),
        check("password", "Your password").exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
    
            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect login data"
                })
            }
            
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user) {
            return res.status(400).json({message: "No user"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: "Incorrect password"})
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get("jwtSecret"),
            { expiresIn: "1h"}
        )
        
        res.json({ token, userId: user.id, message: "You are signed in"})
    
        } catch (e) {
            res.status(500).json({message: "Smth gets wrong"})
        }
})

module.exports = router