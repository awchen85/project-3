import React from 'react';
import Simu from '../assets/images/simu.jpg';
/* eslint-disable indent */

function Cards() {
  return (
    <div className="max-w-[1000px] mx-auto p-8 py-10 flex justify-center w-full h-full">
    <div className="max-w-sm rounded overflow-hidden shadow-lg object-center border-black border-1 bg-yellow-200">
  <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center">Simu</div>
      <img src={Simu} alt="thing" className="w-full" />
      <p className="text-gray-700 text-base m-[10px]">I am a handsome, not annoying man that is not an actor. I love cats.</p>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Budget: $1000</span>
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">City: Los Angeles</span>
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Male</span>
    </div>
  </div>
    </div>
    </div>
);
              }
              export default Cards;
