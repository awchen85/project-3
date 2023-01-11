const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema(
  {
    addressLine1: {
      type: String,
      required: false,
      trim: true,
    },
    addressLine2: {
      type: String,
      required: false,
      trim: true,
    },
    addressLevel1: {
      type: String,
      required: false,
      trim: true,
    },
    addressLevel2: {
      type: String,
      required: false,
      trim: true,
    },
    addressLevel3: {
      type: String,
      required: false,
      trim: true,
    },
    postalCode: {
      type: String,
      required: false,
      trim: true,
    },
    country: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    toJSON: { getters: true },
  }
);

module.exports = addressSchema;
