import moongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await moongoose.connect(ENV.DB_URL);
    console.log("✅MongoDB connected successfully",conn.connection.host);
  } catch (error) {
    console.error("❌MongoDB connection error:", error);
    process.exit(1); // Exit process with failure  O means success, 1 means failure.
  }
};