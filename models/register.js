import mongoose, { Schema, models } from "mongoose";

const registerSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },

  {
    timestamps: true,
  }
);

const Regi = models.Regi || mongoose.model("Regi", registerSchema);

export default Regi;
