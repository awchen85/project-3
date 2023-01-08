function CardList({ profiles }) {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div className="cardsList">
      {profiles
        ? profiles.map(profile => (
            <div
              key={profile._id}
              className="profileCard border-black border-2"
            >
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
  );
}

export default CardList;
