import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing");
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "pingup",
  });

  isConnected = db.connections[0].readyState;
  console.log("MongoDB connected");
};

export default connectDB;
