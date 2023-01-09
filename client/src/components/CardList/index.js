/* eslint-disable */
import Simu from '../../assets/images/simu.jpg';
import { useState } from 'react';
function CardList({ profiles }) {
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
    <div className="max-w-[1000px] grid grid-cols-1 md:grid-cols-2 cardsList mx-auto gap-10">
      {profiles
        ? profiles.map(profile => (
            <div
              key={profile._id}
              className="profileCard bg-yellow-200 px-6 py-4 border-black border-2 font-bold text-xl mb-2 text-center"
            >
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-center">{profile.username}</span>
              <img src={Simu} alt="thing" className="w-full" />
              <div className='grid grid-cols-2'>
                <p className='text-xs py-2 text-center'>Gender:</p>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.gender}</span>
                <p className='text-xs py-1'>Age:</p>
                <span className="inline-block bg-blue-200 rounded-full mx-center px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.age}</span>
                <p className='text-xs py-1'>Budget:</p>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.budget}</span>
                <p className='text-xs'>Location:</p>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.location}</span>
              </div>
              <p className='text-xs'>About Me:</p>
              <span className="inline-block bg-blue-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.aboutMe}</span>
              <p className='text-xs'>Allow Pets?</p>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.allowPets}</span>
              <p className='text-xs'>Allow Children?</p>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.allowChildren}</span>
            </div>
          ))
        : null}
  </div>
  );
}

export default CardList;