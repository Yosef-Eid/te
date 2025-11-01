
import mongoose from "mongoose";

export default async function ConnectDb() {
  try {
    await mongoose.connect('mongodb+srv://yousef:NYa7FaifG5sDdQMI@cluster0.gogt4k0.mongodb.net/all-data?retryWrites=true&w=majority')
    console.log('connected');
    
  } catch (error) {
    console.log(error);
  }
}



