import { Modal } from 'react-responsive-modal';
import { AiOutlineProfile } from 'react-icons/ai';
import 'react-responsive-modal/styles.css';
import React, { useState, useRef } from 'react';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { TbGenderGenderqueer } from 'react-icons/tb';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import mapboxgl from '!mapbox-gl';

function Profile() {
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
        // eslint-disable-next-line function-paren-newline
      );
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex(
        // eslint-disable-next-line no-confusing-arrow
        prevIndex =>
          // eslint-disable-next-line implicit-arrow-linebreak
          prevIndex > 0 ? prevIndex - 1 : prevIndex === 0
        // eslint-disable-next-line function-paren-newline
      );
    } else if (event.key === 'Enter' && selectedIndex !== null) {
      event.preventDefault();
      handleResultClick(searchResults[selectedIndex]);
    }
  };

  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const profileModal = (
    <form>
      <fieldset>
        <div className="m-5 flex justify-center flex-wrap rounded-full">
          <div>
            <div className="flex border-y-stone-500">
              <div>
                <div className="flex">
                  <h3 className="mt-1">What city do you want to live in?</h3>
                  <div>
                    <BiBuildingHouse className="text-blue-500 text-2xl mt-2" />
                    <input
                      className="form-input-address"
                      placeholder="Enter a city's name to search for people in that area"
                      name="address"
                      type="text"
                      ref={searchInput}
                      onChange={handleSearch}
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
                          id="autocomplete-result"
                        >
                          {result.place_name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ width: '100%' }} />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="budget">
                <div className="flex mt-1">
                  <h3 className="mt-2">What is your monthly budget?</h3>
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
                    id="budget-chosen"
                  />
                </div>
              </label>
            </div>
            <div className="translate-y-5">
              <h1 className="text-black text-lg">What is your Gender?</h1>
            </div>
            <div className="translate-y-5">
              <div className="flex flex-col">
                <div className="flex text-xl rounded text-red-200 hover:bg-red-50 hover:border-4 hover:border-red-300 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="female">
                    <input
                      name="gender"
                      type="radio"
                      id="female"
                      value="female"
                    />
                    <BsGenderFemale />
                    <p>Female</p>
                  </label>
                </div>
                <div className="flex cursor-pointer text-xl rounded text-blue-400 hover:bg-sky-100 hover:border-4 hover:border-blue-500 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="male">
                    <input name="gender" type="radio" id="male" value="male" />
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
                      type="radio"
                      id="non-bin"
                      value="non-bin"
                    />
                    <TbGenderGenderqueer />
                    Non-binary
                  </label>
                </div>
                <div className="cursor-pointer text-xl rounded text-purple-400 hover:bg-purple-100 hover:border-4 hover:border-purple-500 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="other">
                    <input
                      name="gender"
                      type="radio"
                      id="other"
                      value="other"
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
                    type="radio"
                    id="prefer-not-to-say"
                    value="prefer-not-to-say"
                  />
                  <p>Prefer Not to Say</p>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="age">
                <div className="flex">
                  <h3 className="mt-2 text-lg">How old are you?</h3>
                  <div className="flex">
                    <FaBirthdayCake className="m-1 text-2xl text-violet-400" />
                    <input
                      className="p-1 rounded border-2"
                      name="budget"
                      min="18"
                      max="100"
                      type="number"
                      id="age-chosen"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
  return (
    <div>
      <div className="flex justify-center m-5">
        <button
          className="flex md:text-4xl text-3xl p-10 rounded-full border-4 border-black"
          type="button"
          onClick={onOpenModal}
        >
          Create Profile
          <AiOutlineProfile />
        </button>
      </div>
      <Modal classNames="" open={open} onClose={onCloseModal} center>
        {profileModal}
      </Modal>
    </div>
  );
}

export default Profile;
