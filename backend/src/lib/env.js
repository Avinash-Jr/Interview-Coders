import dotenv from "dotenv";

// Load environment variables from .env if present. Use only supported options.
dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
};
