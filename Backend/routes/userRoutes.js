const express = require("express");
const authMiddleware=require("./../middlewares/auth");

const router = express.Router();


router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: "This is a protected user profile!", user: req.user });
});

module.exports = router;
