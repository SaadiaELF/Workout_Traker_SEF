const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema([
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
        },
        name: {
          type: String,
          trim: true,
        },
        duration: {
          type: Number,
          required: "Enter an amount"
        },
        distance: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      }
    ]
  }]);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
