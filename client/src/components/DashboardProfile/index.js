import React from 'react';

function DashboardProfile() {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl m-8">
        Welcome, USER_NAME, To Your Profile!
      </h1>
      <form>
        <input type="file" name="upload" accept="image/*" />
      </form>
      <div className="profile text-2xl">
        <div className="profile-field">
          <h3 className="profile-h3">First Name</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="First Name"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field">
          <h3 className="profile-h3">Email</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="Email"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field">
          <h3 className="profile-h3">Looking for a place in:</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="City"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field">
          <h3 className="profile-h3">Age</h3>
          <div className="border-2 border-black w-1/6">
            <input
              type="number"
              placeholder="Age"
              id="profile-age-input"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field">
          <h3 className="profile-h3">Gender</h3>
          <div className="">
            <input type="radio" name="Gender" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="Gender">Male</label>
            <input type="radio" name="Gender" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="Gender">Female</label>
            <input type="radio" name="Gender" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="Gender">Non-Binary</label>
            <input type="radio" name="Gender" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="Gender">Other</label>
            <input type="radio" name="Gender" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="Gender">Prefer Not To Say</label>
          </div>
        </div>
        <div className="profile-field">
          <h3 className="profile-h3">Budget</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="Budget"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field">
          <h3 className="profile-h3">Pets</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="Pets"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field">
          <h3 className="profile-h3">Children</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="Children"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="border-2 border-black">
        View as someone else
      </button>
    </div>
  );
}

export default DashboardProfile;
