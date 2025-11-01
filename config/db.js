
import mongoose from "mongoose";

export default async function ConnectDb() {
  try {
    await mongoose.connect('mongodb://localhost:27017/back-end')
    console.log('connected');
    
  } catch (error) {
    console.log(error);
  }
}



