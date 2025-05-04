import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://programmerrahulgupta:uIJvu1wQTVnZQjku@cluster0.n3sk7.mongodb.net/chat-app")
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
