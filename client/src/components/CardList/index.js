import Simu from "../../assets/images/simu.jpg";
import { useState } from "react";
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
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
    console.log(profiles);
  }
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
    <div className="grid grid-cols-1 cardsList mx-auto gap-10">
      <Carousel responsive={responsive}>
        {profiles
          ? profiles.map((profile) => (
              <div
                key={profile._id}
                className="profileCard bg-[#fafafa] px-6 py-4 m-2 font-bold text-xl mb-2"
              >
                <img src={Simu} alt="thing" className="w-full" />
                <span className="inline-block text-m mr-2 my-2 justify-center main-color">
                  {profile.username}
                </span>
                <div className="grid grid-cols-2">
                  <p className="text-xs py-2">Gender:</p>
                  <span className="inline-block text-sm font-light text-gray-700 mr-2 mb-2">
                    {profile.gender}
                  </span>
                  <p className="text-xs py-1">Age:</p>
                  <span className="inline-block text-sm font-light text-gray-700 mr-2 mb-2">
                    {profile.age}
                  </span>
                  <p className="text-xs py-1">Budget:</p>
                  <span className="inline-block text-sm font-light text-gray-700 mr-2 mb-2">
                    {profile.budget}
                  </span>
                  <p className="text-xs">Location:</p>
                  <span className="inline-block text-sm font-light text-gray-700 mr-2 mb-2">
                    {profile.location}
                  </span>
                </div>
                <p className="text-xs">About Me:</p>
                <span className="inline-block text-sm font-light text-gray-700 mr-2 mb-2">
                  {profile.aboutMe}
                </span>
                <p className="text-xs">Allow Pets?</p>
                <span className="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {profile.allowPets}
                </span>
                <p className="text-xs">Allow Children?</p>
                <span className="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {profile.allowChildren}
                </span>
              </div>
            ))
          : null}
      </Carousel>
    </div>
  );
}

export default CardList;