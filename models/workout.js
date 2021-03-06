const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating a new schema 
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

  // Creating a model from the schema 
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
