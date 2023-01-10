/* eslint-disable */
import Simu from '../../assets/images/simu.jpg';
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CardList({ profiles }) {

const [currentIndex, setCurrentIndex] = useState(0);
const currentProfile = profiles[currentIndex];

useEffect(() => {
  function handleResize() {
    window.location.reload();
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


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
    <div className="grid grid-cols-1 grid-rows-1 cardsList mx-auto gap-10">
            <Carousel responsive={responsive}>
      {window.innerWidth < 768
      ? <div
      key={currentProfile._id}
      className="profileCard bg-blue-200 px-6 py-4 m-2 font-bold text-xl mh-[665px] mb-2 text-center h-[685px]"
      >
              <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-center mh-[65px]">{currentProfile.username}</span>
              <img src={Simu} alt="thing" className="w-full my-2" />
              <div className='grid grid-cols-2'>
                <p className='text-xs py-2 text-center'>Gender:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">{currentProfile.gender}</span>
                <p className='text-xs py-1'>Age:</p>
                <span className="inline-block bg-white rounded-full mx-center px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">{currentProfile.age}</span>
                <p className='text-xs py-1'>Budget:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">{currentProfile.budget}</span>
                <p className='text-xs'>Location:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">{currentProfile.location}</span>
                <p className='text-xs'>Allow Pets?</p>
              <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">{currentProfile.allowPets}</span>
              </div>
              <p className='text-xs'>About Me:</p>
              <span className="inline-block bg-white px-5 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">{currentProfile.aboutMe}</span>
              <button className='connect inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]'>Add to friends</button>
            </div>
           :
           profiles.slice(currentIndex, currentIndex + 50).map(profile => (
            <div
              key={profile._id}
              className="profileCard bg-[#fafafa] px-6 py-4 m-2 font-bold text-xl mb-2 text-center"
            >
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-center">{profile.username}</span>
              <img src={Simu} alt="thing" className="w-full my-2" />
              <div className='grid grid-cols-2'>
                <p className='text-xs py-2 text-center'>Gender:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.gender}</span>
                <p className='text-xs py-1'>Age:</p>
                <span className="inline-block bg-white rounded-full mx-center px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.age}</span>
                <p className='text-xs py-1'>Budget:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.budget}</span>
                <p className='text-xs'>Location:</p>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.location}</span>
                <p className='text-xs'>Allow Pets?</p>
              <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.allowPets}</span>
              </div>
              <p className='text-xs'>About Me:</p>
              <span className="inline-block bg-white px-5 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2">{profile.aboutMe}</span>
              <button className='connect inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Add to friends</button>
            </div>
           ))}
           </Carousel>
  </div>
  )
  }
//   return (
//     <div className="grid grid-cols-1 cardsList mx-auto gap-10">
//       <Carousel responsive={responsive}>
//         {profiles
//           ? profiles.map((profile) => (
//               <div
//                 key={profile._id}
//                 className="profileCard bg-[#fafafa] px-6 py-4 m-2 font-bold text-xl mb-2 text-center"
//               >
//                 <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-center">
//                   {profile.username}
//                 </span>
//                 <img src={Simu} alt="thing" className="w-full" />
//                 <div className="grid grid-cols-2">
//                   <p className="text-xs py-2 text-center">Gender:</p>
//                   <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                     {profile.gender}
//                   </span>
//                   <p className="text-xs py-1">Age:</p>
//                   <span className="inline-block bg-blue-200 rounded-full mx-center px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                     {profile.age}
//                   </span>
//                   <p className="text-xs py-1">Budget:</p>
//                   <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                     {profile.budget}
//                   </span>
//                   <p className="text-xs">Location:</p>
//                   <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                     {profile.location}
//                   </span>
//                 </div>
//                 <p className="text-xs">About Me:</p>
//                 <span className="inline-block bg-blue-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   {profile.aboutMe}
//                 </span>
//                 <p className="text-xs">Allow Pets?</p>
//                 <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   {profile.allowPets}
//                 </span>
//                 <p className="text-xs">Allow Children?</p>
//                 <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   {profile.allowChildren}
//                 </span>
//               </div>
//             ))
//           : null}
//       </Carousel>
//     </div>
//   );
// }

export default CardList;
