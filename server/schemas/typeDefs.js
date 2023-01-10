const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    likes: [Room]
    rooms: [Room]
    reviews: [Review]
    isAuthenticated: Boolean
    profile: Profile
  }
  type Profile {
    _id: ID
    age: Int
    gender: String
    budget: Int
    location: String
    aboutMe: String
    allowPets: Boolean
    userId: ID
    username: String
  }
  input ProfileInput {
    age: Int
    gender: String
    budget: Int
    location: String
    aboutMe: String
    allowPets: Boolean
    username: String
  }
  type Room {
    _id: ID
    title: String
    description: String
    rent: String
    address: Address
    roommatePreference: String
    reviews: [Review]
  }
  type Review {
    _id: ID
    body: String
    rating: String
  }
  type Address {
    _id: ID
    addressLine1: String
    addressLine2: String
    addressLevel1: String
    addressLevel2: String
    addressLevel3: String
    postalCode: String
    country: String
  }
  input AddressInput {
    _id: ID
    addressLine1: String
    addressLine2: String
    addressLevel1: String
    addressLevel2: String
    addressLevel3: String
    postalCode: String
    country: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    getCurrentUser: User
    getUser(userId: ID!): User
    getProfile: User
    getUsers: [User]
    getProfiles(filter: ProfileInput): [Profile]
  }
  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(firstName: String!, lastName: String!, email: String!): User
    deleteUser: User
    login(email: String!, password: String!): Auth
    createProfile(input: ProfileInput!): User
    updateProfile(input: ProfileInput): User
  }
`;

module.exports = typeDefs;