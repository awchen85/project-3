/* eslint-disable */
import Simu from '../../assets/images/simu.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ADD_FRIEND } from '../../utils/mutations';
import Swal from 'sweetalert2';
import FriendButton from '../FriendButton';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  largeDesktop: {
    breakpoint: { max: 2999, min: 2100 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2099, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 650 },
    items: 3,
  },
  between: {
    breakpoint: { max: 650, min: 464 },
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
  const [addFriend] = useMutation(ADD_FRIEND);

  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
    console.log(profiles);
  }

  return (
    <div className="grid grid-cols-1 grid-rows-1 cardsList mx-auto gap-10">
      <Carousel responsive={responsive} centerMode={false} slidesToSlide={1}>
        {/* {window.innerWidth < 768 ? (
          <div
            key={currentProfile._id}
            className="profileCard bg-blue-200 px-6 py-4 m-2 font-bold text-xl h-6 mb-2 text-center"
          >
            <img
              src={currentProfile.avatar}
              alt="thing"
              className="w-full my-2"
            />
            <div className="grid grid-cols-2">
              <p className="text-xs py-2 text-center">Username:</p>
              <span className="inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-center mh-[65px]">
                {currentProfile.username}
              </span>
              <p className="text-xs py-2 text-center">Gender:</p>
              <span className="inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">
                {currentProfile.gender}
              </span>
              <p className="text-xs py-1">Age:</p>
              <span className="inline-block bg-blue-200 rounded-md mx-center px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">
                {currentProfile.age}
              </span>
              <p className="text-xs py-1">Budget:</p>
              <span className="inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">
                {currentProfile.budget}
              </span>
              <p className="text-xs">Location:</p>
              <span className="inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">
                {currentProfile.location}
              </span>
              <p className="text-xs">Allow Pets?</p>
              <span className="inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">
                {currentProfile.allowPets}
              </span>
            </div>
            <p className="text-xs overflow-auto">About Me:</p>
            <span className=" inline-block bg-blue-200 rounded-md px-5 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2 mh-[65px]">
              {currentProfile.aboutMe}
            </span>
          </div>
        ) : ( */}
        {/* profiles.slice(currentIndex, currentIndex + 50).map(profile => ( */}
        {profiles
          ? profiles.map(profile => (
              <div
                key={profile._id}
                className="profileCard bg-[#fafafa] px-6 py-4 m-2 font-bold text-xl mb-2 text-center h-[670px] min-w-[200px] max-w-[375px]"
              >
                <img
                  src={profile.avatar}
                  alt="thing"
                  className="w-full max-w-fill max-h-[250px] profile-card-img"
                />
                <div className="button flex flex-col items-center fixed">
                  <FriendButton currentProfile={profile}></FriendButton>
                </div>
                <div className="grid grid-cols-2 py-3">
                  <p className="text-xs py-2 text-center">Username:</p>
                  <span className="overflow-auto inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-center">
                    <Link to={`/user/${profile.userId}`}>
                      {profile.username}
                    </Link>
                  </span>
                  <p className="text-xs py-2 text-center">Gender:</p>
                  <span className="inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {profile.gender}
                  </span>
                  <p className="text-xs py-1">Age:</p>
                  <span className="inline-block bg-blue-200 rounded-md mx-center px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {profile.age}
                  </span>
                  <p className="text-xs py-1">Budget:</p>
                  <span className="inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {profile.budget}
                  </span>
                  <p className="text-xs">Location:</p>
                  <span className="inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {profile.location}
                  </span>
                  <p className="text-xs">Allow Pets?</p>
                  <span className="inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 max-w-xs">
                    {profile.allowPets ? 'Yes' : 'No'}
                  </span>
                </div>
                <div>
                  <p className="text-xs">About Me:</p>
                  <span className="overflow-y-auto inline-block bg-blue-200 px-5 rounded-md py-3 text-sm font-semibold text-gray-700 mr-2 mb-2 max-w-prose">
                    {profile.aboutMe}
                  </span>
                </div>
              </div>
            ))
          : null}
      </Carousel>
    </div>
  );
}
//
export default CardList;
