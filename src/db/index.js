import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.info(`\n MongoDB connected !!  ${connectionInstance}`);
  } catch (error) {
    console.log("erro");
    console.log("MongoDB connection error:", error.message);
    //process.exit(1);
  }
};
export default connectDB;
