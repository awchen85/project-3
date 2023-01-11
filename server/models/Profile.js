const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
  age: {
    type: Number,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    trim: true,
    required: true,
  },
  aboutMe: {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 500,
  },
  allowPets: {
    type: Boolean,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  avatar: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;