const { AuthenticationError } = require('apollo-server-express');
const omit = require('lodash.omit');

const { User, Profile } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getCurrentUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
          .select('-__v -password')
          .populate('profile')
          .populate({
            path: 'friends',
            populate: { path: 'profile' },
          });
        console.log(user);
        return user;
      }
      throw new AuthenticationError('Not logged in');
    },
    getUser: async (parent, { userId }) => {
      const user = await User.findById(userId)
        .select('-__v -password')
        .populate('profile')
        .populate('friends');
      return user;
    },
    getUsers: async () => {
      const users = await User.find().populate('profile').populate('friends');
      return users;
    },

    getProfiles: async (parent, { filter }) => {
      const profiles = await Profile.find(filter);
      return profiles;
    },

    getFriendProfiles: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
          .select('-__v -password')
          .populate('profile')
          .populate({
            path: 'friends',
            populate: { path: 'profile' },
          });
        const friends = user.friends;
        let friendProfileArray = [];
        for (let i = 0; i < friends.length; i++) {
          const profile = friends[i].profile;
          friendProfileArray.push(profile);
        }
        return friendProfileArray;
      }
      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      user.isAuthenticated = true;
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findByIdAndDelete(context.user._id);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) throw new AuthenticationError('Incorrect credentials');

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) throw new AuthenticationError('Incorrect credentials');

      omit(user._doc, 'password');

      const token = signToken(user);

      return { token, user };
    },
    createProfile: async (parent, { input }, context) => {
      if (context.user) {
        const profile = await Profile.create({
          ...input,
          userId: context.user._id,
        });

        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            // eslint-disable-next-line object-shorthand
            profile: profile,
          },
          { new: true }
        ).populate('profile');

        return updatedUser;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProfile: async (parent, { input }, context) => {
      if (context.user) {
        const user = await User.findById({ _id: context.user._id });
        const profileId = user.profile._id;
        await Profile.findByIdAndUpdate(
          { _id: profileId },
          {
            ...input,
          },
          { new: true }
        );

        return User.findById({ _id: context.user._id }).populate('profile');
      }
      throw new AuthenticationError('Not logged in');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
