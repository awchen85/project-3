/* eslint-disable */
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_GET_USER } from '../utils/queries';
import { AiOutlineEnvironment } from 'react-icons/ai';
import FriendButton from '../components/FriendButton';

function OtherUser() {
  const { userId: userParam } = useParams();
  // console.log(userParam);
  const { loading, data } = useQuery(QUERY_GET_USER, {
    variables: { userId: userParam },
  });
  const user = data?.getUser || {};

  const checkPets = user => {
    if (user.profile.allowPets === true) {
      return 'Yes';
    } else {
      return 'No';
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    //     <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    // <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">

    <section className="pt-16 bg-blueGray-50">
      <div className="w-full md:w-8/12 lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center border-t border-blueGray-200">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src={user.profile.avatar}
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px user-img"
                  />
                </div>
              </div>
              <div className="w-full px-4 text-center mt-20">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {user.profile.age}
                    </span>
                    <span className="text-sm text-blueGray-400">Age</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      ${user.profile.budget}
                    </span>
                    <span className="text-sm text-blueGray-400">Budget</span>
                  </div>
                  {/* <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      89
                    </span>
                    <span className="text-sm text-blueGray-400">Comments</span>
                  </div> */}
                  <FriendButton currentProfile={user.profile}></FriendButton>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {user.profile.username}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase flex justify-center">
                <AiOutlineEnvironment className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                {user.profile.location}
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                Gender: {user.profile.gender}
              </div>
              <div className="mb-2 text-blueGray-600">
                Allows Pets: {checkPets(user)}
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    {user.profile.aboutMe}
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
  );
}

export default OtherUser;
