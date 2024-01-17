import mongoose, { Schema, models } from "mongoose";

const registerSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },

  {
    timestamps: true,
  }
);

const Regi = models.Regi || mongoose.model("Regi", registerSchema);

export default Regi;
