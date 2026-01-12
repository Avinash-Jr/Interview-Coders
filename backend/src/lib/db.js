import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    if (!ENV.DB_URL) {
      throw new Error("DB_URL is not defined in environment variables");
    }
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log("✅MongoDB connected successfully",conn.connection.host);
  } catch (error) {
    console.error("❌MongoDB connection error:", error);
    process.exit(1); // Exit process with failure  O means success, 1 means failure.
  }
};