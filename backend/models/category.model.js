const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    identifier: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,

      maxlength: 6,
    },
  },
  {
    timestamps: true,
  },
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
