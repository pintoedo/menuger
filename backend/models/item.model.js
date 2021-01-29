const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: Number, required: true },
    code: { type: Date, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
