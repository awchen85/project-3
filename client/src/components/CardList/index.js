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
  // const currentProfile = profiles[currentIndex];
  const [addFriend] = useMutation(ADD_FRIEND);

  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div className="grid grid-cols-1 grid-rows-1 cardsList mx-auto gap-10">
      <Carousel responsive={responsive} centerMode={false} slidesToSlide={1}>
        {profiles
          ? profiles.map(profile => (
              <div
                key={profile._id}
                className="profileCard h-[720px] min-w-[200px] max-w-[375px] "
              >
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
                              <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
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
                            <div className="mb-2 text-blueGray-600"></div>
                          </div>
                          <div className="mt-8 py-8 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                              <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-md leading-relaxed text-blueGray-700 overflow-auto">
                                  {profile.aboutMe}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
