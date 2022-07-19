import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: String,
  url: String,
});
export default mongoose.model("memes", schema);
