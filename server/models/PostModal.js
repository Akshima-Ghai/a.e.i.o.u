import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventSchema = mongoose.Schema({
  emotion: String,
  task: String,
  reward: String,
  status: {
    type: String,
    default: "Not Reported",
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var EventModal = mongoose.model("Event", eventSchema);
export default EventModal;
