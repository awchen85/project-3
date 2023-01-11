/* eslint-disable */
import Simu from '../../assets/images/simu.jpg';
import { useEffect, useState } from 'react';
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
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
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

  const handleClickCurrent = async () => {
    try {
      const mutationResponse = await addFriend({
        variables: { friendId: profile.userId },
      });
      if (mutationResponse) {
        Swal.fire({
          icon: 'success',
          title: 'Friend added succesfully!',
        });
      }
    } catch (e) {
      console.error(e);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: e.text,
      });
    }
  };

  return (
    <div className="grid grid-cols-1 grid-rows-1 cardsList mx-auto gap-10">
      <Carousel responsive={responsive} handleClickCurrent={handleClickCurrent}>
        {profiles &&
          profiles.map(profile => (
            <div
              key={profile._id}
              className="profileCard bg-[#fafafa] px-6 py-4 m-2 font-bold text-xl mb-2 text-center h-[670px] min-w-[200px]"
            >
              <img
                src={profile.avatar}
                alt="thing"
                className="w-full max-w-fill max-h-[250px] profile-card-img"
              />
              <div className="grid grid-cols-2 py-3">
                <p className="text-xs py-2 text-center">Username:</p>
                <span className="inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-center">
                  {profile.username}
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
                <span className="inline-block bg-blue-200 px-5 rounded-md py-3 text-sm font-semibold text-gray-700 mr-2 mb-2 max-w-prose">
                  {profile.aboutMe}
                </span>
              </div>
              <div className="button flex flex-col items-center">
                <FriendButton currentProfile={profile}></FriendButton>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
//
export default CardList;
