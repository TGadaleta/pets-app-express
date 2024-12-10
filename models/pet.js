import mongoose from "mongoose";

const petSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  breed: String,
});

const Pet = mongoose.model('Pet', petSchema)

export default Pet