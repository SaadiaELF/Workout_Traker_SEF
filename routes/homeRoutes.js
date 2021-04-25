const router = require("express").Router();
const path = require('path');

// Render exercise page
router.get("/exercise", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch (error) {
        res.status(400).json(error)
    }
});

// Render stats page
router.get("/stats", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router;