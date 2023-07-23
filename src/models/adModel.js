import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique: false,
  },
  jobTitle: {
    type: String,
    required: [true, "Please provide a job title"],
    unique: false,
  },
  skills: {
    type: String,
    required: [true, "Please provide skills"],
    unique: false,
  },
  adUrl: {
    type: String,
    required: [true, "Please provide a link"],
    unique: false,
  },
  sallary: {
    type: String,
    required: false,
    unique: false,
  },
  postDateAdded: {
    type: String,
  },

  published: {
    type: Boolean,
    default: true,
  },
});

const Ad = mongoose.models.ads || mongoose.model("ads", adSchema);

export default Ad;
