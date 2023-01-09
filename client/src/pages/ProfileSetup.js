/* eslint-disable */
import 'react-responsive-modal/styles.css';
import React, { useState, useRef } from 'react';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { TbGenderGenderqueer } from 'react-icons/tb';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { FaChild } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';
import mapboxgl from '!mapbox-gl';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_GET_CURRENT_USER, QUERY_GET_USER, CREATE_USER } from '../utils/queries';
import gql from 'graphql-tag';
import Auth from '../utils/auth';


function Profile() {
  const { id } = useQuery(QUERY_GET_CURRENT_USER);
  // console.log(useQuery(QUERY_GET_CURRENT_USER));

  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState(100);
  const [gender, setGender] = useState('other');
  const [age, setAge] = useState(18);
  const [allowPets, setPets] = useState(false);
  const [allowChildren, setChildren] = useState(false);

  const [createProfile] = useMutation(CREATE_PROFILE);

  const handleSubmit = event => {
    event.preventDefault();
    const locationInput = document.querySelector('#location');
    const locationValue = locationInput.value;
    const budgetInput = document.querySelector('#budget');
    const budgetValue = parseInt(budgetInput.value);
    const genderInput = document.querySelector('#gender');
    const genderValue = genderInput.value;
    const ageInput = document.querySelector('#age');
    const ageValue = parseInt(ageInput.value);
    const allowPetsInput = document.querySelector('.allowPets');
    const allowPetsValue = allowPetsInput.checked;
    const allowChildrenInput = document.querySelector('.allowChildren');
    const allowChildrenValue = allowChildrenInput.checked;

    createProfile({
      variables: {
        input: {
          location: locationValue,
          budget: budgetValue,
          gender: genderValue,
          age: ageValue,
          allowPets: allowPetsValue,
          allowChildren: allowChildrenValue,
        },
      },
    });
    console.log(locationValue);
    console.log(budgetValue);
    console.log(genderValue);
    console.log(ageValue);
    console.log(allowPetsValue);
    console.log(allowPetsValue);

    Auth.loggedIn(data.id.token);
  };

  const [searchResults, setSearchResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const searchInput = useRef(null);

  // eslint-disable-next-line operator-linebreak
  mapboxgl.accessToken =
    'pk.eyJ1IjoibS1hcm1zdHJvbmciLCJhIjoiY2xjZmI3cTdrMG1zazNvbjY5MXRuMTRndCJ9.J-vt4XTs6_aJjJIhrju_OQ';

  // Handles the search bar underneath the map
  const handleSearch = event => {
    const geocoder = MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
    });

    geocoder
      .forwardGeocode({
        query: event.target.value,
        types: ['place'],
        countries: ['us'],
      })
      .send()
      .then(response => {
        const results = response.body.features.map(feature => {
          // Remove "United States" from the end of the place_name
          // eslint-disable-next-line no-param-reassign
          feature.place_name = feature.place_name.replace(
            /, United States$/,
            ''
          );
          return feature;
        });
        setSearchResults(results);
      });
  };

  const handleResultClick = result => {
    searchInput.current.value = result.place_name;
  };

  // eslint-disable-next-line max-len
  // When the autocomplete results are displayed you can use arrow keys and the "Enter" button to interact with them
  const handleKeyDown = event => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      // The user can't select something that is not a result
      setSelectedIndex(
        // eslint-disable-next-line no-confusing-arrow
        prevIndex =>
          // eslint-disable-next-line no-sequences, implicit-arrow-linebreak
          prevIndex === null
            ? 0
            : Math.min(prevIndex + 1, searchResults.length - 1)
      );
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex(prevIndex =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex === 0
      );
    } else if (event.key === 'Enter' && selectedIndex !== null) {
      event.preventDefault();
      handleResultClick(searchResults[selectedIndex]);
    }
  };

  const combinedFunction = event => {
    setLocation(event.target.value);
    handleSearch(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="m-5 flex justify-start rounded-full">
          <div>
            <div className="flex">
              <div>
                <div className="profile-location flex flex-col">
                  <div className="flex">
                    <h3 className="mt-1 text-xl">
                      What city do you want to live in?
                    </h3>
                    <BiBuildingHouse className="text-blue-500 text-2xl mt-2" />
                  </div>
                  <div className="place-div">
                    <input
                      className="form-input-address-profile"
                      placeholder="Enter a city's name to search for people in that area"
                      name="location"
                      type="text"
                      id="location"
                      value={location}
                      ref={searchInput}
                      onChange={combinedFunction}
                      onKeyDown={handleKeyDown}
                    />
                    <ul>
                      {searchResults.map((result, index) => (
                        // eslint-disable-next-line max-len
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                        <li
                          key={result.id}
                          onClick={() => handleResultClick(result)}
                          tabIndex={index === selectedIndex ? 0 : -1}
                          onKeyDown={event => {
                            if (event.key === 'Enter') {
                              event.preventDefault();
                              handleResultClick(result);
                            }
                          }}
                          onMouseEnter={() => setSelectedIndex(index)}
                          onMouseLeave={() => setSelectedIndex(null)}
                          style={{
                            backgroundColor:
                              index === selectedIndex ? 'lightgray' : 'white',
                            cursor: 'pointer',
                          }}
                          className={index === selectedIndex ? 'selected' : ''}
                          id="profile-autocomplete-result"
                        >
                          {result.place_name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div style={{ width: '100%' }} /> */}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="budget">
                <div className="flex mt-1">
                  <h3 className="mt-2 text-xl">What is your monthly budget?</h3>
                  <div className="ml-1 mt-2 text-lg text-lime-600">
                    <MdOutlineAttachMoney />
                  </div>
                  <input
                    className="ml-2 p-1 rounded border-2"
                    name="budget"
                    type="number"
                    min="100"
                    max="4000"
                    step="100"
                    defaultValue="200"
                    id="budget"
                  />
                </div>
              </label>
            </div>
            <div className="translate-y-5">
              <h1 className="text-black text-xl">What is your Gender?</h1>
            </div>
            <div className="translate-y-5">
              <div className="flex flex-col">
                <div className="flex text-xl rounded text-red-200 hover:bg-red-50 hover:border-4 hover:border-red-300 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="female">
                    <input
                      name="gender"
                      type="radio"
                      value={gender}
                      onChange={() => setGender('female')}
                      id="gender"
                      defaultValue="other"
                    />
                    <BsGenderFemale />
                    <p>Female</p>
                  </label>
                </div>
                <div className="flex cursor-pointer text-xl rounded text-blue-400 hover:bg-sky-100 hover:border-4 hover:border-blue-500 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="male">
                    <input
                      name="gender"
                      type="radio"
                      id="gender"
                      defaultValue="other"
                      value={gender}
                      onChange={() => setGender('male')}
                    />
                    <BsGenderMale className="ml-1 mt-1" />
                    <p>Male</p>
                  </label>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex cursor-pointer text-xl rounded text-emerald-400 hover:bg-emerald-100 hover:border-4 hover:border-green-500 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="non-bin">
                    <input
                      name="gender"
                      value={gender}
                      onChange={() => setGender('non-binary')}
                      type="radio"
                      id="gender"
                      defaultValue="other"
                    />
                    <TbGenderGenderqueer />
                    Non-binary
                  </label>
                </div>
                <div className="cursor-pointer text-xl rounded text-purple-400 hover:bg-purple-100 hover:border-4 hover:border-purple-500 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="other">
                    <input
                      name="gender"
                      value={gender}
                      onChange={() => setGender('other')}
                      type="radio"
                      id="gender"
                      defaultValue="other"
                    />
                    <HiOutlineDotsCircleHorizontal />
                    Other
                  </label>
                </div>
              </div>
              <div className="flex flex-col text-xl rounded text-yellow-500 hover:bg-yellow-100 hover:border-4 hover:border-yellow-600 m-1 p-1">
                <label
                  className="flex cursor-pointer"
                  htmlFor="prefer-not-to-say"
                >
                  <input
                    name="gender"
                    value={gender}
                    onChange={() => setGender('prefer-not-to-say')}
                    type="radio"
                    id="gender"
                    defaultValue="other"
                  />
                  <p>Prefer Not to Say</p>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="age">
                <div className="flex">
                  <h3 className="mt-2 text-xl">How old are you?</h3>
                  <div className="flex">
                    <FaBirthdayCake className="m-1 text-2xl text-violet-400" />
                    <input
                      className="p-1 rounded border-2"
                      defaultValue="18"
                      name="age"
                      min="18"
                      max="100"
                      type="number"
                      id="age"
                    />
                  </div>
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="allowPets">
                <div className="flex">
                  <h3 className="mt-2 text-xl">Would you live with a pet?</h3>
                  <div className="flex">
                    <MdPets className="m-1 text-2xl text-black" />
                    <input
                      className="allowPets p-1 rounded border-2"
                      name="allowPets"
                      type="radio"
                      id="allowPets"
                      checked={allowPets}
                      onChange={() => setPets(!allowPets)}
                    />
                    Yes
                    <input
                      className="allowPets p-1 rounded border-2"
                      name="allowPets"
                      type="radio"
                      id="allowPets"
                      checked={allowPets}
                      onChange={() => setPets(!allowPets)}
                    />
                    No
                  </div>
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="allowChildren">
                <div className="flex">
                  <h3 className="mt-2 text-xl">Are you good with children?</h3>
                  <div className="flex">
                    <FaChild className="m-1 text-2xl text-black" />
                    <input
                      className="allowChildren p-1 rounded border-2"
                      name="allowChildren"
                      type="radio"
                      id="allowChildren"
                      checked={allowChildren}
                      onChange={() => setChildren(!allowChildren)}
                    />
                    <h3>Yes</h3>
                    <input
                      className="allowChildren p-1 rounded border-2"
                      name="allowChildren"
                      type="radio"
                      id="allowChildren"
                      checked={allowChildren}
                      onChange={() => setChildren(!allowChildren)}
                    />
                    <h3>No</h3>
                  </div>
                </div>
              </label>
            </div>
            <div className="flex justify-center bg-cyan-600 m-4 rounded">
              <button type="submit">Create Profile</button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default Profile;