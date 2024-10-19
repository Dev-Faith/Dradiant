import mongoose from "mongoose";

const MONGO_URL = process.env.NEXT_MONGO_URL;

if (!MONGO_URL) {
  throw new Error(
    "MongoDB connection URL is not defined in environment variables"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Attempting to connect to MongoDB...");
    const opts = {
      bufferCommands: false,
      connectTimeoutMS: 30000,
      serverSelectionTimeoutMS: 30000,
    };

    cached.promise = mongoose
      .connect(MONGO_URL, opts)
      .then((mongoose) => {
        console.log("Connected to MongoDB");
        return mongoose;
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}


export default dbConnect;
