import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 2 },
  prize: {
    type: mongoose.Decimal128,
    required: true,
  },
  category: { type: String },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

const deviceModel = new mongoose.model("device", deviceSchema);

export default deviceModel;
