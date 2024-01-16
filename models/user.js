import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    lastname: String,
    email: String,
    date: String,
    adress: String,
    telephone: String,
    detail: String,
  },

  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
