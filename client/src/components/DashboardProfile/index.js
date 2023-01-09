/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import placeholder from '../../assets/images/placeholder-icon.jpg';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const DashboardProfile = (props) => {
  const { userId: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_GET_CURRENT_USER, { variables: { userId: userParam },
  });

  const user = data?.me || data?.user || {};

  // Allow Pets Radio Buttons
  const options1 = [{ value: 'option1', label: 'Yes' }];
  const options2 = [{ value: 'option2', label: 'No' }];
  // Allow Pets
  const [selectedPetValue, setSelectedPetValue] = useState(null);
  // Allow Pets
  const handlePetChange = event => {
    setSelectedPetValue(event.target.value);
  };

  // Allow Children Radio Buttons
  const options3 = [{ value: 'option3', label: 'Yes' }];
  const options4 = [{ value: 'option4', label: 'No' }];
  // Allow Pets
  const [selectedChildValue, setSelectedChildValue] = useState(null);
  // Allow Pets
  const handleChildChange = event => {
    setSelectedChildValue(event.target.value);
  };

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
              <label htmlFor="male" className="px-4 cursor-pointer">
                <input
                  id="male"
                  type="radio"
                  value="male"
                  name="gender"
                  className="mx-2"
                />
                Male
              </label>
            </div>
            <br />
            <div className="flex text-xl rounded text-red-200 hover:bg-red-50 hover:border-4 hover:border-red-300 m-1 p-1">
              <label htmlFor="female" className="px-4 cursor-pointer">
                <input
                  id="female"
                  type="radio"
                  value="female"
                  name="gender"
                  className="mx-2"
                />
                Female
              </label>
            </div>
            <br />
            <div className="flex cursor-pointer text-xl rounded text-emerald-400 hover:bg-emerald-100 hover:border-4 hover:border-green-500 m-1 p-1">
              <label htmlFor="non-binary" className="px-4 cursor-pointer">
                <input
                  id="non-binary"
                  type="radio"
                  value="non-binary"
                  name="gender"
                  className="mx-2"
                />
                Non-binary
              </label>
            </div>
            <br />
            <div className="cursor-pointer text-xl rounded text-purple-400 hover:bg-purple-100 hover:border-4 hover:border-purple-500 m-1 p-1">
              <label htmlFor="other" className="px-4 cursor-pointer">
                <input
                  id="other"
                  type="radio"
                  value="other"
                  name="gender"
                  className="mx-2"
                />
                Other
              </label>
            </div>
            <br />
            <div className="flex cursor-pointer text-xl rounded text-yellow-500 hover:bg-yellow-100 hover:border-4 hover:border-yellow-600 m-1 p-1">
              <label
                htmlFor="prefer-not-to-say"
                className="px-4 cursor-pointer"
              >
                <input
                  id="prefer-not-to-say"
                  type="radio"
                  value="prefer-not-to-say"
                  name="gender"
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
        {/* Allow Pets */}
        <div className="profile-field-section">
          <h3 className="profile-h3 mb-4">You Have Pets</h3>
          <div className="profile-pets">
            {options1.map(option => (
              <label
                // htmlFor="pets-yes"
                id="profile-pets-yes"
                key={option.value}
                className={
                  selectedPetValue === option.value ? 'active-pets-yes' : ''
                }
              >
                <input
                  id="profile-pets-yes"
                  type="radio"
                  name="pets"
                  value={option.value}
                  checked={selectedPetValue === option.value}
                  onChange={handlePetChange}
                  hidden
                />
                {option.label}
              </label>
            ))}
            {options2.map(option => (
              <label
                // htmlFor="pets-no"
                id="profile-pets-no"
                key={option.value}
                className={
                  selectedPetValue === option.value ? 'active-pets-no' : ''
                }
              >
                <input
                  id="profile-pets-no"
                  type="radio"
                  name="pets"
                  value={option.value}
                  checked={selectedPetValue === option.value}
                  onChange={handlePetChange}
                  hidden
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
        {/* Allow Children */}
        <div className="profile-field-section">
          <h3 className="profile-h3 mb-4">You Have Children</h3>
          <div className="profile-children">
            {options3.map(option => (
              <label
                // htmlFor="children-yes"
                id="profile-children-yes"
                key={option.value}
                className={
                  selectedChildValue === option.value
                    ? 'active-children-yes'
                    : ''
                }
              >
                <input
                  id="profile-children-yes"
                  type="radio"
                  name="children"
                  value={option.value}
                  checked={selectedChildValue === option.value}
                  onChange={handleChildChange}
                  hidden
                />
                {option.label}
              </label>
            ))}
            {options4.map(option => (
              <label
                // htmlFor="children-no"
                id="profile-children-no"
                key={option.value}
                className={
                  selectedChildValue === option.value
                    ? 'active-children-no'
                    : ''
                }
              >
                <input
                  id="profile-children-no"
                  type="radio"
                  name="children"
                  value={option.value}
                  checked={selectedChildValue === option.value}
                  onChange={handleChildChange}
                  hidden
                />
                {option.label}
              </label>
            ))}
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
