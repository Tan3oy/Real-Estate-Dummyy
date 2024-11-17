import dotenv from "dotenv";
import {mongoose} from "mongoose";

dotenv.config();
const mongoDBUrl = process.env.MONGODB_URL || "";


const connectDB = () => {
  try {
    mongoose.connect(mongoDBUrl, {
      maxPoolSize: 100,
    });

    const connection = mongoose.connection;

    connection.on(
      "error",
      console.error.bind(console, "MongoDB connection error: ")
    );

    connection.once("open", () => {
      console.log(`Database connected with ${connection.host}`);
    });
  } catch (err) {
    console.log(err.message);
    setTimeout(connectDB, 5000);
  }
};

// module.exports = connectDB;
export default connectDB;