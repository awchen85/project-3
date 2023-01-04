const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    unique: true,
  },
  // min 7 letter password, symbol, uppercase, lowercase, and a number
  password: {
    type: String,
    required: true,
    minlength: 7,
    match: [
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/,
      'Must meet requirements!',
    ],
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Room',
    },
  ],
  rooms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Room',
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
