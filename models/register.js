import mongoose, { Schema, models } from "mongoose";

const newSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    statu: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const Regis = models.Regi || mongoose.model("Regi", newSchema);

export default Regis;
