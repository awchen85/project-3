import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    updateUser(firstName: $firstName, lastName: $lastName, email: $email) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      firstName
      lastName
      email
    }
  }
`;

export const CREATE_PROFILE = gql`
  mutation createProfile($input: ProfileInput!) {
    createProfile(input: $input) {
      _id
      firstName
      lastName
      email
      profile {
        _id
        age
        gender
        budget
        location
        aboutMe
        allowPets
        userId
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($input: ProfileInput) {
    updateProfile(input: $input) {
      _id
      firstName
      lastName
      email
      profile {
        _id
        age
        gender
        budget
        location
        aboutMe
        allowPets
        userId
      }
    }
  }
`;
