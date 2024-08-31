

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String },
    category: { type: String },
    brand: { type: String },
    price: { type: Number },
    productCode: { type: String },
    remarks: { type: String },
    shortDescription: { type: String },
    imgUrl : { type: String },
    
  },
  { versionKey: false }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;