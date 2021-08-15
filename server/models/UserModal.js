import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  streak: {
    type: Number,
    default: 0,
  },
});

const UserModal = mongoose.model("User", userSchema);

export default UserModal;
