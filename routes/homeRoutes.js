const router = require("express").Router();
const Workout = require("./../models/workout.js");
const path = require('path');

router.get("/exercise", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch (error) {
        res.status(400).json(error)
    }
});

router.get("/stats", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (error) {
        res.status(400).json(error)
    }
});


// router.route("/sum").get(function (req, res) {
//     Workout.aggregate(
//         [
//             {
//                 $group: {
//                     _id: "$_id",
                    
//                     totalDuration: {
//                         $sum: "$exercises.duration"
//                     }
//                 }
//             }
//         ],
//         function (err, result) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(result);
//             }
//         }
//     );
// });

module.exports = router;