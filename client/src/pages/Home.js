/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';
import 'react-responsive-modal/styles.css';
import mapboxgl from '!mapbox-gl';
import MultiRangeSlider from '../components/multiRangeSlider';
import { GiTrashCan } from 'react-icons/gi';
import { useQuery } from '@apollo/client';
import {
  QUERY_GET_PROFILES,
  QUERY_GET_USER,
  QUERY_GET_USERS,
} from '../utils/queries';
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

  const handleChange = event => {
    setValue(event.target.value);
  };

  // Queries everyone's profile
  const { loading, data } = useQuery(QUERY_GET_PROFILES);
  const profile = data?.getProfiles || [];
  // console.log(data);

  let minValue;
  let maxValue;

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

  // When the autocomplete results are displayed you can use arrow keys and the "Enter" button to interact with them
  const handleKeyDown = event => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      // The user can't select something that is not a result
      setSelectedIndex(prevIndex =>
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

  const filterSubmit = () => {
    event.preventDefault();

    const inputLocation = searchInput.current.value;

    if (inputLocation) {
      // there is input in the inputLocation variable
      console.log(inputLocation);
    } else {
      // there is no input in the inputLocation variable
      return;
    }

    const inputRent = document.querySelector('#rent').value;
    const inputRentNum = parseInt(inputRent);
    console.log(inputRent);

    const inputMinAge = minValue;
    const inputMaxAge = maxValue;
    console.log('MinAge', inputMinAge);
    console.log('MaxAge', inputMaxAge);

    const inputGender = document.querySelector('input[id="male"]:checked');

    if (inputGender) {
      const inputGenderMale = inputGender.value;
      console.log(inputGenderMale);
    } else {
      console.log('null');
    }

    const inputGender2 = document.querySelector('input[id="female"]:checked');

    if (inputGender2) {
      const inputGenderFemale = inputGender2.value;
      console.log(inputGenderFemale);
    } else {
      console.log('null');
    }

    const inputGender3 = document.querySelector(
      'input[id="non-binary"]:checked'
    );

    if (inputGender3) {
      const inputGenderNonBinary = inputGender3.value;
      console.log(inputGenderNonBinary);
    } else {
      console.log('null');
    }

    const inputGender4 = document.querySelector('input[id="other"]:checked');

    if (inputGender4) {
      const inputGenderOther = inputGender4.value;
      console.log(inputGenderOther);
    } else {
      console.log('null');
    }

    const inputPetsYes = document.querySelector(
      'input[id="filter-pets-yes"]:checked'
    );
    const inputPetsNo = document.querySelector(
      'input[id="filter-pets-no"]:checked'
    );
    console.log(inputPetsYes ? true : inputPetsNo ? false : null);

    filterProfiles({
      inputLocation,
      inputRentNum,
      inputMinAge,
      inputMaxAge,
      inputGender,
      inputGender2,
      inputGender3,
      inputGender4,
      inputPetsYes,
      inputPetsNo,
    });
  };

  function filterProfiles(data) {
    console.log('HOORAY', data);

    // This is the default values for each filter option
    let results = [
      { rent: 1000 },
      { minAge: 18 },
      { maxAge: 100 },
      { gender: 'Male, Female, Non-binary, Other' },
      { pets: null },
      { location: 'Charlotte, North Carolina' },
    ];

    const location = data.inputLocation;
    console.log(location);

    results[5] = { ...results[5], location: location };
    console.log('LOCATION IS:', location);

    // initial rent value from the user's input
    const rent = data.inputRentNum;
    // Changing the default key-value pair from 1000 to the value the user input
    results[0] = { ...results[0], rent: rent };
    console.log('RENT IS:', rent);

    const minAge = data.inputMinAge;
    results[1] = { ...results[1], minAge: minAge };
    const maxAge = data.inputMaxAge;
    results[2] = { ...results[2], maxAge: maxAge };

    if (
      data.inputGender === null &&
      data.inputGender2 === null &&
      data.inputGender3 === null &&
      data.inputGender4 === null
    ) {
      results[3] = { ...results[3], gender: 'Male, Female, Non-binary, Other' };
      console.log('Gender is not a filter');
    } else if (
      data.inputGender !== null &&
      data.inputGender2 === null &&
      data.inputGender3 === null &&
      data.inputGender4 === null
    ) {
      results[3] = { ...results[3], gender: 'Male' };
      console.log('Male was selected');
    } else if (
      data.inputGender === null &&
      data.inputGender2 !== null &&
      data.inputGender3 === null &&
      data.inputGender4 === null
    ) {
      results[3] = { ...results[3], gender: 'Female' };
      console.log('Female was selected');
    } else if (
      data.inputGender === null &&
      data.inputGender2 === null &&
      data.inputGender3 !== null &&
      data.inputGender4 === null
    ) {
      results[3] = { ...results[3], gender: 'Non-binary' };
      console.log('Non-Binary was selected');
    } else if (
      data.inputGender === null &&
      data.inputGender2 === null &&
      data.inputGender3 === null &&
      data.inputGender4 !== null
    ) {
      results[3] = { ...results[3], gender: 'Other' };
      console.log('Other was selected');
    } else if (
      data.inputGender !== null &&
      data.inputGender2 !== null &&
      data.inputGender3 === null &&
      data.inputGender4 === null
    ) {
      results[3] = { ...results[3], gender: 'Male, Female' };
      console.log('Male and Female was selected');
    } else if (
      data.inputGender !== null &&
      data.inputGender2 === null &&
      data.inputGender3 !== null &&
      data.inputGender4 === null
    ) {
      results[3] = { ...results[3], gender: 'Male, Non-binary' };
      console.log('Male and Non-Binary was selected');
    } else if (
      data.inputGender !== null &&
      data.inputGender2 === null &&
      data.inputGender3 === null &&
      data.inputGender4 !== null
    ) {
      results[3] = { ...results[3], gender: 'Male, Other' };
      console.log('Male and Other was selected');
    } else if (
      data.inputGender === null &&
      data.inputGender2 !== null &&
      data.inputGender3 !== null &&
      data.inputGender4 === null
    ) {
      results[3] = { ...results[3], gender: 'Female, Non-binary' };
      console.log('Female and Non-Binary was selected');
    } else if (
      data.inputGender === null &&
      data.inputGender2 !== null &&
      data.inputGender3 === null &&
      data.inputGender4 !== null
    ) {
      results[3] = { ...results[3], gender: 'Female, Other' };
      console.log('Female and Other was selected');
    } else if (
      data.inputGender === null &&
      data.inputGender2 === null &&
      data.inputGender3 !== null &&
      data.inputGender4 !== null
    ) {
      results[3] = { ...results[3], gender: 'Non-binary, Other' };
      console.log('Non-Binary and Other was selected');
    } else if (
      data.inputGender !== null &&
      data.inputGender2 !== null &&
      data.inputGender3 !== null &&
      data.inputGender4 === null
    ) {
      results[3] = { ...results[3], gender: 'Male, Female, Non-binary' };
      console.log('Male and Female and Non-Binary was selected');
    } else if (
      data.inputGender !== null &&
      data.inputGender2 !== null &&
      data.inputGender3 === null &&
      data.inputGender4 !== null
    ) {
      results[3] = { ...results[3], gender: 'Male, Female, Other' };
      console.log('Male and Female and Other was selected');
    } else if (
      data.inputGender === null &&
      data.inputGender2 !== null &&
      data.inputGender3 !== null &&
      data.inputGender4 !== null
    ) {
      results[3] = { ...results[3], gender: 'Female, Non-binary, Other' };
      console.log('Female and Non-Binary and Other was selected');
    } else if (
      data.inputGender !== null &&
      data.inputGender2 !== null &&
      data.inputGender3 !== null &&
      data.inputGender4 !== null
    ) {
      results[3] = { ...results[3], gender: 'Male, Female, Non-binary, Other' };
      console.log('Everything was selected');
    }

    // Checks the value of the pets filter. Whether the filter is active and it they allow pets or don't allow pets. If the filter is not selected then profiles with both options will be a part of the search.
    if (data.inputPetsYes === null && data.inputPetsNo === null) {
      console.log('PETS IS NOT A FILTER');
      results[4] = { ...results[4], pets: null };
    } else if (data.inputPetsYes !== null && data.inputPetsNo === null) {
      results[4] = { ...results[4], pets: true };
      console.log('ALLOW PETS');
    } else if (data.inputPetsYes === null && data.inputPetsNo !== null) {
      results[4] = { ...results[4], pets: false };
      console.log("DON'T ALLOW PETS");
    } else {
      console.log('SOMETHING WENT WRONG WITH PETS');
    }

    filteredResults(results);
  }

  const filteredResults = results => {
    console.log('THESE ARE THE RESULTS', results);
    console.log(profile);

    let profilesLocationArr = [];

    for (let i = 0; i < profile.length; i++) {
      if (profile[i].location === results[5].location) {
        profilesLocationArr.push(profile[i]);
      }
    }

    console.log(profilesLocationArr);

    let tempArr = profilesLocationArr;

    let profilesRentArr = [];

    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].budget <= results[0].rent) {
        console.log(tempArr[i]);
        profilesRentArr.push(tempArr[i]);
      }
    }

    console.log('-=-=-=-=-=-=-=', profilesRentArr);

    const minAge = results[1].minAge;
    const maxAge = results[2].maxAge;

    const profilesMinAgeArr = profilesRentArr.filter(
      profile => profile.age >= minAge
    );
    console.log('PLEASE WORK', profilesMinAgeArr);

    const profilesMaxAgeArr = profilesMinAgeArr.filter(
      profile => profile.age <= maxAge
    );
    console.log('PLEASE WORK TOO', profilesMaxAgeArr);

    const genderString = results[3].gender;
    console.log(genderString);
    const genderArray = genderString.split(',');
    const cleanGenderArray = genderArray.map(string => string.trim());
    console.log(cleanGenderArray);
    const profilesGenderArr = profilesMaxAgeArr.filter(profile =>
      cleanGenderArray.includes(profile.gender)
    );
    console.log('GENDER', profilesGenderArr);

    let filteredProfiles = profilesGenderArr;

    const hasPetsObject = results[4].pets;
    console.log(hasPetsObject);

    if (results[4].pets === true) {
      // hasPetsObject is true and the value of the pets key is true
      const petsTrueProfiles = profilesGenderArr.filter(
        profile => profile.allowPets === true
      );
      filteredProfiles = filteredProfiles.filter(
        profile => profile.allowPets === true
      );
      console.log('PETS TRUE', petsTrueProfiles);
    } else if (results[4].pets === false) {
      // hasPetsObject is true and the value of the pets key is false
      const petsFalseProfiles = profilesGenderArr.filter(
        profile => profile.allowPets === false
      );
      filteredProfiles = filteredProfiles.filter(
        profile => profile.allowPets === false
      );
      console.log('PETS FALSE', petsFalseProfiles);
    } else if (results[4].pets === null) {
      // hasPetsObject is false, use the original array
      console.log('PETS NULL', filteredProfiles);
    }

    console.log('FINAL RESULTS:', filteredProfiles);
  };

  const filterModal = (
    <div id="filterModal" className="modal">
      <div className="modal-header">
        <h2 className="filters-title">Filters</h2>
      </div>
      <div className="modal-body">
        <form onSubmit={filterSubmit}>
          <div className="flex justify-center">
            <div className="py-4">
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
                    id="age-slider"
                    min={18}
                    max={100}
                    onChange={({ min, max }) => {
                      minValue = min;
                      maxValue = max;
                    }}
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
                        <input id="other" type="checkbox" value="other" /> Other
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

  return (
    <div>
      <div className="grid grid-cols-2 justify-items-stretch">
        <div className="justify-self-center self-center">
          <h1 className="text-7xl text-black">Find a better roommate...</h1>
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
        </div>
        <div className="justify-self-end">
          <img
            src={require(`../assets/images/badroommate.jpg`)}
            className="w-[40rem] justify-self-end"
          ></img>
        </div>
      </div>
      <div className="mt-8 mx-4">
        <div>
          <div>
            <div className="profile-section md:grid md:grid-cols-1 md:gap-4">
              <section className="profile-card flex flex-col rounded-md p-2 xl:grid-cols-3">
                {/* Carousel Container */}
                <section className="profilesMap">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <CardList profiles={profile} />
                  )}
                </section>
              </section>
            </div>
          </div>
          <div>
            <div className="sidebar hidden lg:visible">
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div className="flex">
              <div id="map" ref={mapContainer} className="map-container" />
              <div className="form-div">
                <form className="search-form">
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
                </form>
                <div className="quick-search-cities-section text-center">
                  <h3 className="text-3xl font-semibold">Quick Search</h3>
                  <div className="quick-search-cities grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {cities1.map(city => (
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
                    {cities2.map(city => (
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
                    {cities3.map(city => (
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
                    {cities4.map(city => (
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
                    {cities5.map(city => (
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
                    {cities6.map(city => (
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
                    {cities7.map(city => (
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
                    {cities8.map(city => (
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
                    {cities9.map(city => (
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
        </div>
        <Modal classNames="" open={open} onClose={onCloseModal} center>
          {filterModal}
        </Modal>
      </div>
    </div>
  );
}

export default Home;
