/* eslint-disable */
import Simu from '../../assets/images/simu.jpg';
import { useState } from 'react';

function FilteredList({ filteredResults }) {

const [currentIndex, setCurrentIndex] = useState(0);
const currentProfile = filteredResults[currentIndex];

  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
console.log(profiles)  }

// // Total Cards
// const totalCards = 50;
// // Cards per Page
// const cardsPerPage = 4;
// // Total number of pages
// const totalPages = Math.cell(totalCards / cardsPerPage);
// // Track current page
// const [currentPage, setCurrentPage] = useState(1);
// //Array for current page
// const startIndex = (currentPage - 1) * cardsPerPage;
// const endIndex = startIndex + cardsPerPage;
// const cardElements = Array.from({ length: cardsPerPage }, (_, i) => startIndex + i);


  return (
    <div className="max-w-[1000px] grid grid-cols-1 grid-rows-1 md:grid-template-rows-1 md:grid-cols-4 lg:grid-template-rows-1 lg:grid-cols-4 cardsList mx-auto gap-10">
      {window.innerWidth < 768
      ? <div
      key={currentProfile._id}
      className="profileCard bg-[#FFAC99] px-6 py-4 border-2 font-bold text-xl mb-2 text-center"
      >
              <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-center">{currentProfile.username}</span>
              <img src={Simu} alt="thing" className="w-full my-2" />
              <div className='grid grid-cols-2'>
                <p className='text-xs py-2 text-center'>Gender:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{currentProfile.gender}</span>
                <p className='text-xs py-1'>Age:</p>
                <span className="inline-block bg-white rounded-full mx-center px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{currentProfile.age}</span>
                <p className='text-xs py-1'>Budget:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{currentProfile.budget}</span>
                <p className='text-xs'>Location:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{currentProfile.location}</span>
                <p className='text-xs'>Allow Pets?</p>
              <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{currentProfile.allowPets}</span>
              </div>
              <p className='text-xs'>About Me:</p>
              <span className="inline-block bg-white px-5 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2">{currentProfile.aboutMe}</span>
              <button className='connect inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Add to friends</button>
            </div>
           :
           filteredResults.slice(currentIndex, currentIndex + 4).map(filteredResults => (
            <div
              key={filteredResults._id}
              className="filteredResultsCard bg-[#FFAC99] px-6 py-4 border-2 font-bold text-xl mb-2 text-center"
            >
              <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-center">{filteredResults.username}</span>
              <img src={Simu} alt="thing" className="w-full my-2" />
              <div className='grid grid-cols-2'>
                <p className='text-xs py-2 text-center'>Gender:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{filteredResults.gender}</span>
                <p className='text-xs py-1'>Age:</p>
                <span className="inline-block bg-white rounded-full mx-center px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{filteredResults.age}</span>
                <p className='text-xs py-1'>Budget:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{filteredResults.budget}</span>
                <p className='text-xs'>Location:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{filteredResults.location}</span>
                <p className='text-xs'>Allow Pets?</p>
              <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{filteredResults.allowPets}</span>
              </div>
              <p className='text-xs'>About Me:</p>
              <span className="inline-block bg-white px-5 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2">{filteredResults.aboutMe}</span>
              <button className='connect inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Add to friends</button>
            </div>
           ))}
  </div>
  );
}

export default FilteredList;