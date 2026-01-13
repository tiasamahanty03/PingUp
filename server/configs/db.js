import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGO_URI is missing");
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "pingup",
  });

  isConnected = db.connections[0].readyState;
  console.log("MongoDB connected");
};

export default connectDB;
