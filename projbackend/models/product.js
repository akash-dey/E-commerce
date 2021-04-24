const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Objectid } = mongoose.Schema;
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 32,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxLength: 2000,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxLength: 32,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    stock: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
