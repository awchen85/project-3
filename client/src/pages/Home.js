/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef, useEffect, useState } from 'react';
// import GoogleMapPic from '../assets/images/GoogleMapTA.webp';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import placeholder from '../assets/images/placeholder-icon.jpg';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import mapboxgl from '!mapbox-gl';

function Home() {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [value, setValue] = React.useState(1000);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const [option, setOption] = React.useState('Option 1');

  const handleAgeChange = event => {
    setOption(event.target.value === 'Option 1' ? 'Option 2' : 'Option 1');
  };

  const filterModal = (
    <div id="filterModal" className="modal">
      <div className="modal-header">
        <h2>Filter Options</h2>
      </div>
      <div className="modal-body">
        <form>
          <div className="flex justify-between">
            <div>
              <label htmlFor="Budget" className="flex flex-col text-center">
                Max Rent You Pay
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={value}
                  onChange={handleChange}
                />
              </label>
              <div className="flex flex-col">
                <label htmlFor="age">
                  Age Range
                  <input
                    type="range"
                    min="18"
                    max="100"
                    step="1"
                    value={option === 'Option 1' ? '18' : '100'}
                    onChange={handleAgeChange}
                  />
                </label>
                {/* <br />
                <label htmlFor="age">
                  Max:
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={maxValue}
                    onChange={handleMaxChange}
                  />
                </label> */}
              </div>
            </div>
          </div>
        </form>
      </div>
      <div id="filterModalFooter" className="modal-footer">
        <button type="submit" className="btn btn-primary" id="apply-filters">
          Apply
        </button>
        <button type="submit" className="btn btn-secondary" id="cancel-filters">
          Cancel
        </button>
      </div>
    </div>
  );

  // eslint-disable-next-line operator-linebreak
  mapboxgl.accessToken =
    'pk.eyJ1IjoibS1hcm1zdHJvbmciLCJhIjoiY2xjZmI3cTdrMG1zazNvbjY5MXRuMTRndCJ9.J-vt4XTs6_aJjJIhrju_OQ';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      // eslint-disable-next-line object-shorthand
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

  const googleSearch = e => {
    e.preventDefault();
    const input = document.getElementById('address').value;
    console.log('Searched for:', input);
  };

  const clickHandler = e => {
    e.preventDefault();
    const { target } = e;
    console.log('Clicked!', target.id);
    // document.getElementById('Budget').removeAttribute('hidden');
  };

  return (
    <div className="mt-8 mx-4">
      <h2 className="font-semibold text-2xl mb-5">Find Your Next Roommate</h2>
      <div className="flex justify-between mt-12">
        <div className="left-side">
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
          <div className="profile-section grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <section className="profile-card flex flex-col border-2 border-black rounded-md p-2">
              <div className="profile-card-image">
                <a href="/">
                  <img
                    className="profile-card-image"
                    src={placeholder}
                    alt=""
                  />
                </a>
              </div>
              <div className="profile-card-header">
                <h2>
                  <a href="/">
                    John Doe, &nbsp;
                    <span>26</span>
                  </a>
                </h2>
                <h3 className="text-2xl">Male</h3>
              </div>
              <div className="flex flex-col profile-card-body">
                <h4>Los Angeles, CA</h4>
                <h4>Budget: $1000</h4>
                <h4>Pets: Yes</h4>
                <h4>Other Minimum Info</h4>
              </div>
              <button
                type="submit"
                className="connect-btn border-2 border-black rounded-md"
              >
                Connect!
              </button>
            </section>
            <section className="profile-card flex flex-col border-2 border-black rounded-md p-2">
              <div className="profile-card-image">
                <a href="/">
                  <img
                    className="profile-card-image"
                    src={placeholder}
                    alt=""
                  />
                </a>
              </div>
              <div className="profile-card-header">
                <h2>
                  <a href="/">
                    John Doe, &nbsp;
                    <span>26</span>
                  </a>
                </h2>
                <h3 className="text-2xl">Male</h3>
              </div>
              <div className="flex flex-col profile-card-body">
                <h4>Los Angeles, CA</h4>
                <h4>Budget: $1000</h4>
                <h4>Pets: Yes</h4>
                <h4>Other Minimum Info</h4>
              </div>
              <button
                type="submit"
                className="connect-btn border-2 border-black rounded-md"
              >
                Connect!
              </button>
            </section>
            <section className="profile-card flex flex-col border-2 border-black rounded-md p-2">
              <div className="profile-card-image">
                <a href="/">
                  <img
                    className="profile-card-image"
                    src={placeholder}
                    alt=""
                  />
                </a>
              </div>
              <div className="profile-card-header">
                <h2>
                  <a href="/">
                    John Doe, &nbsp;
                    <span>26</span>
                  </a>
                </h2>
                <h3 className="text-2xl">Male</h3>
              </div>
              <div className="flex flex-col profile-card-body">
                <h4>Los Angeles, CA</h4>
                <h4>Budget: $1000</h4>
                <h4>Pets: Yes</h4>
                <h4>Other Minimum Info</h4>
              </div>
              <button
                type="submit"
                className="connect-btn border-2 border-black rounded-md"
              >
                Connect!
              </button>
            </section>
            <section className="profile-card flex flex-col border-2 border-black rounded-md p-2">
              <div className="profile-card-image">
                <a href="/">
                  <img
                    className="profile-card-image"
                    src={placeholder}
                    alt=""
                  />
                </a>
              </div>
              <div className="profile-card-header">
                <h2>
                  <a href="/">
                    John Doe, &nbsp;
                    <span>26</span>
                  </a>
                </h2>
                <h3 className="text-2xl">Male</h3>
              </div>
              <div className="flex flex-col profile-card-body">
                <h4>Los Angeles, CA</h4>
                <h4>Budget: $1000</h4>
                <h4>Pets: Yes</h4>
                <h4>Other Minimum Info</h4>
              </div>
              <button
                type="submit"
                className="connect-btn border-2 border-black rounded-md"
              >
                Connect!
              </button>
            </section>
          </div>
        </div>
        <div className="right-side">
          <div className="sidebar">
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} className="map-container" />
          <div className="form-div">
            <form className="search-form" onSubmit={googleSearch}>
              <input
                className="form-input-address"
                placeholder="Enter a city's name to search for people in that area"
                name="address"
                type="address"
                id="address"
              />
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
                <a href="/" onClick={clickHandler}>
                  <div id="LA" className="card card-1">
                    <h3 className="flex justify-center card-city-text">
                      Los Angeles, CA
                    </h3>
                  </div>
                </a>
                <a href="/" onClick={clickHandler}>
                  <div id="NY" className="card card-2">
                    <h3 className="flex justify-center card-city-text">
                      New York, NY
                    </h3>
                  </div>
                </a>
                <a href="/" onClick={clickHandler}>
                  <div id="TX" className="card card-3">
                    <h3 className="flex justify-center card-city-text">
                      Dallas, TX
                    </h3>
                  </div>
                </a>
                <a href="/" onClick={clickHandler}>
                  <div id="IL" className="card card-4">
                    <h3 className="flex justify-center card-city-text">
                      Chicago, IL
                    </h3>
                  </div>
                </a>
                <a href="/" onClick={clickHandler}>
                  <div id="GA" className="card card-5">
                    <h3 className="flex justify-center card-city-text">
                      Atlanta, GA
                    </h3>
                  </div>
                </a>
                <a href="/" onClick={clickHandler}>
                  <div id="OR" className="card card-6">
                    <h3 className="flex justify-center card-city-text">
                      Portland, OR
                    </h3>
                  </div>
                </a>
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
