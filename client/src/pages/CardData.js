/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable eol-last */
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const ADD_CARD = gql`
mutation addCard($userId: String!, $aboutMe: String!, $budget: Number!, $location: String!, $allowPets: Boolean!, $allowChildren: Boolean!, $age: Number!, $gender: String!)
{
addCard(userId: $userId, aboutMe: $aboutMe, budget: $budget, location: $location, allowPets: $allowPets, allowChildren: $allowChildren, age: $age, gender: $gender) {
  userId,
  aboutMe,
  budget,
  location,
  allowPets,
  allowChildren,
  age,
  gender
}
}`;
const Card = ({ userId, aboutMe, budget, location, allowPets, allowChildren, age, gender }) => {
  const [addCard, { data }] = useMutation(ADD_CARD);

  const handleAddCard = () => {
    addCard({ variables: { userId, aboutMe, budget, location, allowPets, allowChildren, age, gender } });
  };
};
return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <button
        className="absolute bottom-0 right-0 m-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
        onClick={handleAddCard}
      >
        Add Card
      </button>
    </div>
  );

  



