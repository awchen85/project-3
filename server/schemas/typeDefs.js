const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phone: String
    likes: [Room]
    rooms: [Room]
    reviews: [Review]
    isAuthenticated: Boolean
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
  }
`;

module.exports = typeDefs;
