const mongoose = require('mongoose');
// const mongoose = require("mongoose");

const addressSchema = require('./Address');
// const addressSchema = require("./Address");

const { Schema } = mongoose;

const roomSchema = new Schema(
  {
    title: {
      type: String,
      required: 'room requires a title',
      maxlength: 100,
    },
    description: {
      type: String,
      required: 'room requires a description',
      maxlength: 250,
    },
    rent: {
      type: String,
      required: true,
    },
    address: addressSchema,
    // amenities: [
    //   {
    //     type: String,
    //     required: "room requires amenities",
    //     maxlength: 250,
    //   },
    // ],
    roommatePreference: {
      type: String,
      required: true,
    },
    reviews: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  },
  {
    toJSON: { getters: true },
  }
);
// const roomSchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: "room requires a title",
//       maxlength: 100,
//     },
//     description: {
//       type: String,
//       required: "room requires a description",
//       maxlength: 250,
//     },
//     rent: {
//       type: String,
//       required: true,
//     },
//     address: addressSchema,
//     // amenities: [
//     //   {
//     //     type: String,
//     //     required: "room requires amenities",
//     //     maxlength: 250,
//     //   },
//     // ],
//     roommatePreference: {
//       type: String,
//       required: true,
//     },
//     reviews: {
//       type: Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   },
//   {
//     toJSON: { getters: true },
//   }
// );

// const Room = mongoose.model("Room", roomSchema);

// module.exports = Room;
