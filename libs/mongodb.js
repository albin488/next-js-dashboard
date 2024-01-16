import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("mongo db connected sussefully");
  } catch (error) {
    console.log("same thing going wrong");
    console.log(error);
  }
};
export default connectMongoDB;
