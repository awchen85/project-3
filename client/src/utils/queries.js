import { gql } from '@apollo/client';

export const QUERY_GET_CURRENT_USER = gql`
  query getCurrentUser {
    getCurrentUser {
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
        allowChildren
        userId
      }
    }
  }
`;

export const QUERY_GET_USER = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
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
        allowChildren
        userId
      }
    }
  }
`;

export const QUERY_GET_USERS = gql`
  query getUsers {
    getUsers {
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
        allowChildren
        userId
      }
    }
  }
`;

export const QUERY_GET_PROFILES = gql`
  query getProfiles($filter: ProfileInput) {
    getProfiles(filter: $filter) {
      _id
      age
      gender
      budget
      location
      aboutMe
      allowPets
      allowChildren
      userId
      username
    }
  }
`;
