/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';
import 'react-responsive-modal/styles.css';
import mapboxgl from '!mapbox-gl';
import MultiRangeSlider from '../components/multiRangeSlider';
import { GiTrashCan } from 'react-icons/gi';
import { useQuery } from '@apollo/client';
import { QUERY_GET_PROFILES } from '../utils/queries';
import Cards from '../components/Cards';

import CardList from '../components/CardList';

function Home() {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [value, setValue] = React.useState(1000);

  // Allow Pets Radio Buttons
  const options1 = [{ value: 'true', label: 'Yes' }];
  const options2 = [{ value: 'false', label: 'No' }];
  // Allow Pets
  const [selectedPetValue, setSelectedPetValue] = useState(null);
  // Allow Pets
  const handlePetChange = event => {
    setSelectedPetValue(event.target.value);
  };

  // Allow Children Radio Buttons
  const options3 = [{ value: 'true', label: 'Yes' }];
  const options4 = [{ value: 'false', label: 'No' }];
  // Allow Pets
  const [selectedChildValue, setSelectedChildValue] = useState(null);
  // Allow Pets
  const handleChildChange = event => {
    setSelectedChildValue(event.target.value);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  // Queries everyone's profile
  const { loading, data } = useQuery(QUERY_GET_PROFILES);
  const profile = data?.getProfiles || [];
  // console.log(data);

  const filterSubmit = () => {
    event.preventDefault();

    const inputRent = document.querySelector('#rent').value;
    const inputRentNum = parseInt(inputRent);
    console.log(inputRent);

    // const inputAge = document.querySelector('#age').value;
    // console.log(inputAge);

    // const inputGender = document.querySelector('#rent').value;
    // console.log(inputGender);

    const inputPetsYes = document.querySelector(
      'input[id="filter-pets-yes"]:checked'
    );
    const inputPetsNo = document.querySelector(
      'input[id="filter-pets-no"]:checked'
    );
    console.log(inputPetsYes ? true : inputPetsNo ? false : null);

    const inputChildrenYes = document.querySelector(
      'input[id="filter-children-yes"]:checked'
    );
    const inputChildrenNo = document.querySelector(
      'input[id="filter-children-no"]:checked'
    );
    console.log(inputChildrenYes ? true : inputChildrenNo ? false : null);

    filterProfiles({
      inputRentNum,
      inputPetsYes,
      inputPetsNo,
      inputChildrenYes,
      inputChildrenNo,
    });
  };

  function filterProfiles(data) {
    console.log('HOORAY', data);

    const rent = data.inputRentNum;
    console.log('RENT IS:', rent);

    // Checks the value of the pets filter. Whether the filter is active and it they allow pets or don't allow pets. If the filter is not selected then profiles with both options will be a part of the search.
    if (data.inputPetsYes === null && data.inputPetsNo === null) {
      console.log('PETS IS NOT A FILTER');
    } else if (data.inputPetsYes !== null && data.inputPetsNo === null) {
      console.log('ALLOW PETS');
    } else if (data.inputPetsYes === null && data.inputPetsNo !== null) {
      console.log("DON'T ALLOW PETS");
    } else {
      console.log('SOMETHING WENT WRONG WITH PETS');
    }

    // Checks the value of the children filter. Whether the filter is active and it they allow children or don't allow children. If the filter is not selected then profiles with both options will be a part of the search.
    if (data.inputChildrenYes === null && data.inputChildrenNo === null) {
      console.log('CHILDREN IS NOT A FILTER');
    } else if (
      data.inputChildrenYes !== null &&
      data.inputChildrenNo === null
    ) {
      console.log('ALLOW children');
    } else if (
      data.inputChildrenYes === null &&
      data.inputChildrenNo !== null
    ) {
      console.log("DON'T ALLOW children");
    } else {
      console.log('SOMETHING WENT WRONG WITH CHILDREN');
    }

    for (let i = 0; i < profile.length; i++) {
      if (profile[i].allowChildren === true) {
        console.log(profile[i]);
      } else {
        console.log('false');
      }
      // console.log('CHILDREN', profile[i].allowChildren);
    }
  }

  const filterModal = (
    <div id="filterModal" className="modal">
      <div className="modal-header">
        <h2 className="filters-title">Filters</h2>
      </div>
      <div className="modal-body">
        <form onSubmit={filterSubmit}>
          <div className="flex justify-center">
            <div className="py-4">
              {/* Budget */}
              <label
                htmlFor="Budget"
                className="flex flex-col text-center filters my-1"
              >
                Max Rent You Pay Per Month: ${value}
                <input
                  type="range"
                  id="rent"
                  min="100"
                  max="4000"
                  step="50"
                  value={value}
                  onChange={handleChange}
                  className="mt-8"
                />
                <div className="flex justify-between">
                  <label>$0</label>
                  <label>$4000</label>
                </div>
                {/* Age */}
              </label>
              <div className="flex flex-col py-4">
                <label htmlFor="age" className="flex flex-col filters my-1">
                  Age Range
                  <MultiRangeSlider
                    min={18}
                    max={100}
                    onChange={({ min, max }) => console.log()}
                  />
                </label>
                <br />
                {/* Gender */}
                <div className="py-4 filters my-1">
                  Gender
                  <div className="flex">
                    <div className="flex cursor-pointer text-xl rounded text-blue-400 hover:bg-sky-100 hover:border-4 hover:border-blue-500 m-1 p-1">
                      <label htmlFor="male" className="px-4 cursor-pointer">
                        <input id="male" type="checkbox" value="male" /> Male
                      </label>
                    </div>
                    <br />
                    <div className="flex text-xl rounded text-red-200 hover:bg-red-50 hover:border-4 hover:border-red-300 m-1 p-1">
                      <label htmlFor="female" className="px-4 cursor-pointer">
                        <input id="female" type="checkbox" value="female" />{' '}
                        Female
                      </label>
                    </div>
                    <br />
                    <div className="flex cursor-pointer text-xl rounded text-emerald-400 hover:bg-emerald-100 hover:border-4 hover:border-green-500 m-1 p-1">
                      <label
                        htmlFor="non-binary"
                        className="px-4 cursor-pointer"
                      >
                        <input
                          id="non-binary"
                          type="checkbox"
                          value="non-binary"
                        />{' '}
                        Non-binary
                      </label>
                    </div>
                    <br />
                    <div className="cursor-pointer text-xl rounded text-purple-400 hover:bg-purple-100 hover:border-4 hover:border-purple-500 m-1 p-1">
                      <label htmlFor="other" className="px-4 cursor-pointer">
                        <input id="other" type="checkbox" value="male" /> Other
                      </label>
                    </div>
                    <br />
                  </div>
                </div>
                <br />
                {/* Allow Pets */}
                <div className="filters mb-4">
                  Allow Pets
                  <div className="flex justify-center my-1">
                    {/* <label
                      htmlFor="pets-yes"
                      className="filter-pets-yes px-4 mx-2"
                    >
                      <input
                        id="pets-yes"
                        type="radio"
                        name="pets"
                        value="yes"
                        hidden
                      />{' '}
                      Yes
                    </label> */}
                    {options1.map(option => (
                      <label
                        // htmlFor="pets-yes"
                        id="filter-pets-yes"
                        key={option.value}
                        className={
                          selectedPetValue === option.value
                            ? 'active-pets-yes'
                            : ''
                        }
                      >
                        <input
                          id="filter-pets-yes"
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
                        id="filter-pets-no"
                        key={option.value}
                        className={
                          selectedPetValue === option.value
                            ? 'active-pets-no'
                            : ''
                        }
                      >
                        <input
                          id="filter-pets-no"
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
                    {/* <label
                      htmlFor="pets-no"
                      className="filter-pets-no px-4 mx-2"
                    >
                      <input
                        id="pets-no"
                        type="radio"
                        name="pets"
                        value="no"
                        hidden
                      />{' '}
                      No
                    </label> */}
                  </div>
                </div>
                {/* Allow Children */}
                <div className="filters my-4">
                  Allow Children
                  <div className="flex justify-center my-1">
                    {/* <label htmlFor="children-yes" className="px-4">
                      <input
                        id="children-yes"
                        type="radio"
                        name="children"
                        value="yes"
                      />{' '}
                      Yes
                    </label> */}
                    {options3.map(option => (
                      <label
                        // htmlFor="children-yes"
                        id="filter-children-yes"
                        key={option.value}
                        className={
                          selectedChildValue === option.value
                            ? 'active-children-yes'
                            : ''
                        }
                      >
                        <input
                          id="filter-children-yes"
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
                        id="filter-children-no"
                        key={option.value}
                        className={
                          selectedChildValue === option.value
                            ? 'active-children-no'
                            : ''
                        }
                      >
                        <input
                          id="filter-children-no"
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
                    {/* <label htmlFor="children-no" className="px-4">
                      <input
                        id="children-no"
                        type="radio"
                        name="children"
                        value="no"
                      />{' '}
                      No
                    </label> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary button-3d font-effect-neon-green"
            id="apply-filters"
          >
            Apply
          </button>
        </form>
      </div>
      <div id="filterModalFooter" className="modal-footer">
        {/* <button
          type="submit"
          className="btn btn-primary button-3d font-effect-neon-green"
          id="apply-filters"
        >
          Apply
        </button> */}
        <button
          type="submit"
          className="btn btn-secondary button-3d font-effect-neon-red"
          id="cancel-filters"
          onClick={onCloseModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  mapboxgl.accessToken =
    'pk.eyJ1IjoibS1hcm1zdHJvbmciLCJhIjoiY2xjZmI3cTdrMG1zazNvbjY5MXRuMTRndCJ9.J-vt4XTs6_aJjJIhrju_OQ';

  // const accessToken =
  //   'pk.eyJ1IjoibS1hcm1zdHJvbmciLCJhIjoiY2xjZmI3cTdrMG1zazNvbjY5MXRuMTRndCJ9.J-vt4XTs6_aJjJIhrju_OQ';

  const [searchResults, setSearchResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const searchInput = useRef(null);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-79.05);
  const [lat, setLat] = useState(35.92);
  const [zoom, setZoom] = useState(9);
  // const items = [
  //   <Cards title="Card 1" description="This is card 1"
  //   imageUrl="card1.jpg"
  //   />,
  //   <Cards title="Card 2" description="This is card 2"
  //   imageUrl="card1.jpg"
  //   />,
  //   <Cards title="Card 3" description="This is card 3"
  //   imageUrl="card1.jpg"
  //   />,
  // ];
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

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
    map.current.flyTo({
      center: result.geometry.coordinates,
      zoom: 10,
    });
    searchInput.current.value = result.place_name;
  };

  // When the trash can icon in the search bar is clicked it will clear the search bar input
  const clearInput = event => {
    searchInput.current.value = '';
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

  const googleSearch = e => {
    e.preventDefault();
    const input = document.getElementById('address').value;
    console.log('Searched for:', input);
  };

  const cities1 = ['Greensboro, NC'];
  const cities2 = ['Apex, NC'];
  const cities3 = ['Durham, NC'];
  const cities4 = ['Boone, NC'];
  const cities5 = ['Hickory, NC'];
  const cities6 = ['Wilmington, NC'];
  const cities7 = ['Raleigh, NC'];
  const cities8 = ['Charlotte, NC'];
  const cities9 = ['Winston-Salem, NC'];

  const searchForCity = city => {
    const geocoder = MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
    });

    geocoder
      .forwardGeocode({
        query: city,
        types: ['place'],
        countries: ['US'],
      })
      .send()
      .then(response => {
        const result = response.body.features[0];
        const results = response.body.features.map(feature => {
          // Remove "United States" from the end of the place_name
          feature.place_name = feature.place_name.replace(
            /, United States$/,
            ''
          );
          return feature;
        });
        map.current.flyTo({
          center: result.geometry.coordinates,
          zoom: 12,
        });
        searchInput.current.value = result.place_name;
      });
  };

  return (
    <div className="mt-8 mx-4">
      <h2 className="font-semibold text-2xl mb-5">Find Your Next Roommate</h2>
      <div className="flex justify-between mt-12">
        <div className="left-side">
          <section className="profilesMap">
            {loading ? <div>Loading...</div> : <CardList profiles={profiles} />}
          </section>
          <section className="btn-section">
            <div className="filter-buttons grid grid-cols-4 gap-2 md:grid-cols-4">
              <button
                type="submit"
                id="Filter"
                className="filter-btn my-2 px-4 py-2"
                onClick={onOpenModal}
              >
                Filter
              </button>
            </div>
          </section>
          <div className="profile-section grid grid-cols-1 gap-4">
            <section className="profile-card flex flex-col border-2 border-black rounded-md p-2 xl:grid-cols-3">
              {/* Carousel Container */}
              <div>
                {loading ? (
                  <div>Loading</div>
                ) : (
              <Cards getProfiles={profile} title="Matches"/>
                )}
              </div>
            </section>
          </div>
        </div>
        <div className="right-side">
          <div className="sidebar">
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div id="map" ref={mapContainer} className="map-container" />
          <div className="form-div">
            <form className="search-form" onSubmit={googleSearch}>
              <div>
                <div className="flex">
                  <input
                    className="form-input-address"
                    placeholder="Enter a city's name to search for people in that area"
                    name="address"
                    id="address"
                    type="text"
                    ref={searchInput}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                  />
                  <span className="input-clear text-3xl text-red-600">
                    <a onClick={clearInput}>
                      <GiTrashCan />
                    </a>
                  </span>
                </div>
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
              <button
                className="search-button"
                type="submit"
                onClick={googleSearch}
              >
                Search For Roommates!
              </button>
            </form>
            <div className="quick-search-cities-section text-center">
              <h3 className="text-3xl font-semibold">Quick Search</h3>
              <div className="quick-search-cities grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* eslint-disable-next-line react/button-has-type */}
                {cities1.map(city => (
                  // eslint-disable-next-line react/button-has-type
                  <button key={city} onClick={() => searchForCity(city)}>
                    <div className="card card-1">
                      <h3
                        id="city-value"
                        className="flex justify-center card-city-text"
                      >
                        {city}
                      </h3>
                    </div>
                  </button>
                ))}
                {/* eslint-disable-next-line react/button-has-type */}
                {cities2.map(city => (
                  // eslint-disable-next-line react/button-has-type
                  <button key={city} onClick={() => searchForCity(city)}>
                    <div className="card card-2">
                      <h3
                        id="city-value"
                        className="flex justify-center card-city-text"
                      >
                        {city}
                      </h3>
                    </div>
                  </button>
                ))}
                {/* eslint-disable-next-line react/button-has-type */}
                {cities3.map(city => (
                  // eslint-disable-next-line react/button-has-type
                  <button key={city} onClick={() => searchForCity(city)}>
                    <div className="card card-3">
                      <h3
                        id="city-value"
                        className="flex justify-center card-city-text"
                      >
                        {city}
                      </h3>
                    </div>
                  </button>
                ))}
                {/* eslint-disable-next-line react/button-has-type */}
                {cities4.map(city => (
                  // eslint-disable-next-line react/button-has-type
                  <button key={city} onClick={() => searchForCity(city)}>
                    <div className="card card-4">
                      <h3
                        id="city-value"
                        className="flex justify-center card-city-text"
                      >
                        {city}
                      </h3>
                    </div>
                  </button>
                ))}
                {/* eslint-disable-next-line react/button-has-type */}
                {cities5.map(city => (
                  // eslint-disable-next-line react/button-has-type
                  <button key={city} onClick={() => searchForCity(city)}>
                    <div className="card card-5">
                      <h3
                        id="city-value"
                        className="flex justify-center card-city-text"
                      >
                        {city}
                      </h3>
                    </div>
                  </button>
                ))}
                {/* eslint-disable-next-line react/button-has-type */}
                {cities6.map(city => (
                  // eslint-disable-next-line react/button-has-type
                  <button key={city} onClick={() => searchForCity(city)}>
                    <div className="card card-6">
                      <h3
                        id="city-value"
                        className="flex justify-center card-city-text"
                      >
                        {city}
                      </h3>
                    </div>
                  </button>
                ))}
                {/* eslint-disable-next-line react/button-has-type */}
                {cities7.map(city => (
                  // eslint-disable-next-line react/button-has-type
                  <button key={city} onClick={() => searchForCity(city)}>
                    <div className="card card-7">
                      <h3
                        id="city-value"
                        className="flex justify-center card-city-text"
                      >
                        {city}
                      </h3>
                    </div>
                  </button>
                ))}
                {/* eslint-disable-next-line react/button-has-type */}
                {cities8.map(city => (
                  // eslint-disable-next-line react/button-has-type
                  <button key={city} onClick={() => searchForCity(city)}>
                    <div className="card card-8">
                      <h3
                        id="city-value"
                        className="flex justify-center card-city-text"
                      >
                        {city}
                      </h3>
                    </div>
                  </button>
                ))}
                {/* eslint-disable-next-line react/button-has-type */}
                {cities9.map(city => (
                  // eslint-disable-next-line react/button-has-type
                  <button key={city} onClick={() => searchForCity(city)}>
                    <div className="card card-9">
                      <h3
                        id="city-value"
                        className="flex justify-center card-city-text"
                      >
                        {city}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal classNames="" open={open} onClose={onCloseModal} center>
        {filterModal}
      </Modal>
    </div>
  );
}

export default Home;
