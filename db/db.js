import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connections success!");
  } catch (error) {
    console.error("Error while db connection");
  }
};

export default dbConnect;
