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
import { AiOutlineEnvironment } from 'react-icons/ai';

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
  // className="profileCard bg-[#fafafa] px-6 py-4 m-2 font-bold text-xl mb-2 h-[670px] min-w-[200px] max-w-[375px]"

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
                className="profileCard h-[720px] min-w-[200px] max-w-[375px] "
              >
                {/* <img
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
                </div> */}
                <Link to={`/user/${profile.userId}`}>
                  <section className="pt-10 bg-blueGray-50 ">
                    <div className="w-full px-4 mx-auto ">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6 ">
                          <div className="flex flex-wrap justify-center border-t border-blueGray-200">
                            <div className="w-full px-4 flex justify-center">
                              <div className="relative">
                                <img
                                  alt="..."
                                  src={profile.avatar}
                                  className="shadow-xl border-white border-8 rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px user-img"
                                />
                              </div>
                            </div>
                            <div className="w-full px-4 text-center margin-top-3rem">
                              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                {/* <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  {profile.age}
                                </span>
                                <span className="text-sm text-blueGray-400">
                                  Age
                                </span>
                              </div>
                              <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  ${profile.budget}
                                </span>
                                <span className="text-sm text-blueGray-400">
                                  Budget
                                </span>
                              </div> */}
                                {/* <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      89
                    </span>
                    <span className="text-sm text-blueGray-400">Comments</span>
                  </div> */}
                                {/* <FriendButton
                                currentProfile={profile}
                              ></FriendButton> */}
                              </div>
                            </div>
                          </div>
                          <div className="text-center mt-6">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                              {profile.username}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase flex justify-center">
                              <AiOutlineEnvironment className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                              {profile.location}
                            </div>
                            {/* <div className="mb-2 text-blueGray-600 mt-10">
                            Gender: {profile.gender}
                          </div> */}
                            <div className="mb-2 text-blueGray-600">
                              {/* Allows Pets: {checkPets(user)} */}
                            </div>
                          </div>
                          <div className="mt-8 py-8 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                              <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-md leading-relaxed text-blueGray-700 overflow-auto">
                                  {profile.aboutMe}
                                </p>
                                {/* <a
                    href="javascript:void(0);"
                    className="font-normal text-pink-500"
                  >
                    Show more
                  </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <footer className="relative  pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Made with{' '}
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  Notus JS
                </a>{' '}
                by{' '}
                <a
                  href="https://www.creative-tim.com"
                  className="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                >
                  {' '}
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer> */}
                  </section>
                </Link>
              </div>
            ))
          : null}
      </Carousel>
    </div>
  );
}
//
export default CardList;
