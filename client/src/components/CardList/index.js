/* eslint-disable */
import Simu from '../../assets/images/simu.jpg';

function CardList({ profiles }) {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div className="max-w-[1000px] mx-auto p-1 py-10 grid grid-border-2 lg:grid-cols-2 gap-2 justify-around">
      <div className="cardsList max-w-auto border-black border-2 bg-yellow-200">
        <div className="px-6 py-4">
      {profiles
        ? profiles.map(profile => (
            <div
              key={profile._id}
              className="profileCard border-black border-2 font-bold text-xl mb-2 text-center"
            >
              <img src={Simu} alt="thing" className="w-full" />
              <p>{profile._id}</p>
              <p>{profile.age}</p>
              <p>{profile.gender}</p>
              <p>{profile.budget}</p>
              <p>{profile.location}</p>
              <p>{profile.aboutMe}</p>
              <p>{profile.allowPets}</p>
              <p>{profile.allowChildren}</p>
            </div>
          ))
        : null}
      </div>
    </div>
  </div>
  );
}

export default CardList;
