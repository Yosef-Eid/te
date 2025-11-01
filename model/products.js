
import mongoose from "mongoose";

const product = new mongoose.Schema({
  name: { type: String, minLength: 3, maxLength:100, required: true },
  price: { type: String, required: true },
  color: ['red', 'blue'],
})

const Product = mongoose.model('product', product)
export default Product




