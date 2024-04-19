import mongoose from "mongoose";
import schema from "../Users/schema.js";
const model = mongoose.model("UserModel", schema);
export default model;

