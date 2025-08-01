import mongoose from "mongoose";
console.log('uri env ', process.env.MONGO_URI)
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB Connected: ${conn.connection.host}');
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export default connectDB;
