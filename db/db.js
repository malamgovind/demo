import mongoose from "mongoose";
import { mongo_uri } from "../config/config.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log("database connections success!");
  } catch (error) {
    console.error("Error while db connection");
  }
};

export default dbConnect;
