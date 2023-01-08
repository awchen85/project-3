/* eslint-disable */
import React from 'react';
import Simu from '../../assets/images/simu.jpg';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const Cards = ({ getProfiles, _id }) => {
  if (!getProfiles.length) {
    return <h3>No Matches Yet</h3>
  }

  console.log(getProfiles);

  return (
    <div>
      {/* Grid */}
    <div className="max-w-[1000px] mx-auto p-1 py-10 grid grid-border-2 md:grid-cols-2 gap-10 justify-around">
    {/* Individual Card */}
    <div className="max-w-auto border-black border-2 bg-yellow-200">
  <div className="px-6 py-4">
    {getProfiles.map(profile => {
      <><div key={profile._id} className="font-bold text-xl mb-2 text-center">Name</div>
      <img src={Simu} alt="thing" className="w-full" />
        <p className="text-gray-700 text-base m-[10px]">About me: {profile.aboutMe}</p>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Budget: </span>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Location: {profile.location}</span>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Gender: {profile.gender}</span>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Age: {profile.age}</span>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Allow Pets?: {profile.allowPets}</span>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Allow Children?: {profile.allowChildren}</span>
      </div>
      <button className="text-white border-2 bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">Contact me!</button></>
    })}
</div>

    </div>
    {/* {/* <div className="max-w-auto border-black border-2 bg-yellow-200">
  <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center">Simu</div>
      <img src={Simu} alt="thing" className="w-full" />
      <p className="text-gray-700 text-base m-[10px]">I am a handsome, not annoying man that is not an actor. I love cats.</p>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Budget: $1000</span>
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">City: Los Angeles</span>
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Male</span>
    </div>
    <button className="text-white border-2 bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">Contact me!</button>
  </div>
    </div> */}
    <div className="max-w-auto border-black border-2 bg-yellow-200">
  <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center">Simu</div>
      <img src={Simu} alt="thing" className="w-full" />
      <p className="text-gray-700 text-base m-[10px]">I am a handsome, not annoying man that is not an actor. I love cats.</p>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Budget: $1000</span>
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">City: Los Angeles</span>
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Male</span>
    </div>
    <button className="text-white border-2 bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">Contact me!</button>
  </div>
    </div>
    <div className="max-w-auto border-black border-2 bg-yellow-200">
  <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center">Simu</div>
      <img src={Simu} alt="thing" className="w-full" />
      <p className="text-gray-700 text-base m-[10px]">I am a handsome, not annoying man that is not an actor. I love cats.</p>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Budget: $1000</span>
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">City: Los Angeles</span>
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Male</span>
    </div>
    <button className="text-white border-2 bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">Contact me!</button>
  </div>
    </div>
    </div>
    </div>
);
              }
              export default Cards;
