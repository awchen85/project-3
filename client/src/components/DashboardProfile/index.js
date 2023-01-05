import React from 'react';
import placeholder from '../../assets/images/placeholder-icon.jpg';

function DashboardProfile() {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl m-8">
        Welcome, USER_NAME, To Your Profile!
      </h1>
      <div className="flex justify-center">
        <div className="border-2 border-black display-image">
          <img src={placeholder} className="profile-picture" alt="" />
        </div>
      </div>
      <form className="flex justify-center">
        <input
          type="file"
          id="imageInput"
          name="upload"
          accept="image/png, image/jpg"
        />
      </form>
      <div className="profile text-2xl">
        <div className="profile-field profile-field-section">
          <h3 className="profile-h3">First Name</h3>
          <div className="border-2">
            <input
              type="text"
              placeholder="First Name"
              className="profile-input border-1"
            />
          </div>
        </div>
        <div className="profile-field profile-field-section">
          <h3 className="profile-h3">Email</h3>
          <div className="border-2">
            <input
              type="text"
              placeholder="Email"
              className="profile-input border-1"
            />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">City To Live In</h3>
          <div className="border-2">
            <input
              type="text"
              placeholder="City"
              className="profile-input border-1"
            />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">Age</h3>
          <div className="border-2 w-1/6">
            <input
              type="number"
              min="18"
              max="100"
              placeholder="Age"
              id="profile-age-input"
              className="profile-input border-1"
            />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">Gender</h3>
          <div className="flex">
            <div className="flex cursor-pointer text-xl rounded text-blue-400 hover:bg-sky-100 hover:border-4 hover:border-blue-500 m-1 p-1">
              <label htmlFor="gender" className="px-4 cursor-pointer">
                <input type="checkbox" value="male" className="mx-2" />
                Male
              </label>
            </div>
            <br />
            <div className="flex text-xl rounded text-red-200 hover:bg-red-50 hover:border-4 hover:border-red-300 m-1 p-1">
              <label htmlFor="gender" className="px-4 cursor-pointer">
                <input type="checkbox" value="female" className="mx-2" />
                Female
              </label>
            </div>
            <br />
            <div className="flex cursor-pointer text-xl rounded text-emerald-400 hover:bg-emerald-100 hover:border-4 hover:border-green-500 m-1 p-1">
              <label htmlFor="gender" className="px-4 cursor-pointer">
                <input type="checkbox" value="non-binary" className="mx-2" />
                Non-binary
              </label>
            </div>
            <br />
            <div className="cursor-pointer text-xl rounded text-purple-400 hover:bg-purple-100 hover:border-4 hover:border-purple-500 m-1 p-1">
              <label htmlFor="gender" className="px-4 cursor-pointer">
                <input type="checkbox" value="other" className="mx-2" />
                Other
              </label>
            </div>
            <br />
            <div className="flex cursor-pointer text-xl rounded text-yellow-500 hover:bg-yellow-100 hover:border-4 hover:border-yellow-600 m-1 p-1">
              <label htmlFor="gender" className="px-4 cursor-pointer">
                <input
                  type="checkbox"
                  value="prefer-not-to-say"
                  className="mx-2"
                />
                Prefer Not To Say
              </label>
            </div>
            <br />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">Max Rent You Will Pay</h3>
          <div className="border-2 w-1/6">
            <input
              type="number"
              min="100"
              max="4000"
              step="100"
              placeholder="Rent"
              className="profile-input border-1"
            />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">You Have Pets</h3>
          <div className="">
            <label htmlFor="pets" className="px-4">
              <input type="radio" name="pets" value="yes" />
              Yes
            </label>
            <label htmlFor="pets" className="px-4">
              <input type="radio" name="pets" value="no" />
              No
            </label>
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">You Have Children</h3>
          <div className="">
            <label htmlFor="children" className="px-4">
              <input type="radio" name="children" value="yes" />
              Yes
            </label>
            <label htmlFor="children" className="px-4">
              <input type="radio" name="children" value="no" />
              No
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="profile-view text-2xl">
          View as someone else
        </button>
      </div>
    </div>
  );
}

export default DashboardProfile;
