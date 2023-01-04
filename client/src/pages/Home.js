// import { Loader } from '@googlemaps/js-api-loader';
import GoogleMapPic from '../assets/images/GoogleMapTA.webp';
import placeholder from '../assets/images/placeholder-icon.jpg';

function Home() {
  // const loader = new Loader({
  //   apiKey: 'YOUR_API_KEY',
  //   version: 'weekly',
  //   ...additionalOptions,
  // });

  // loader.load().then(() => {
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // });

  const googleSearch = e => {
    e.preventDefault();
    const input = document.getElementById('address').value;
    console.log('Searched for:', input);
    const apiURL = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.GOOGLE_MAPS}`;

    fetch(apiURL)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            console.log(data);
          });
        } else {
          console.log('NOPE');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const clickHandler = () => {
    console.log('Clicked!');
    // document.getElementById('Budget').removeAttribute('hidden');
  };

  return (
    <div className="mt-8 mx-4">
      <h2 className="font-semibold text-2xl mb-5">Find Your Next Roommate</h2>
      <div className="flex justify-between mt-12">
        <div className="left-side">
          <section className="btn-section border-2 border-black rounded-md py-4 px-4">
            <div className="filter-buttons grid grid-cols-4 gap-2 md:grid-cols-4">
              <button
                type="submit"
                className="filter-btn my-2 px-4 py-2 border-2 border-black rounded-md"
                onClick={clickHandler}
              >
                Distance
              </button>
              <button
                type="submit"
                className="filter-btn my-2 px-4 py-2 border-2 border-black rounded-md"
                onClick={clickHandler}
              >
                Budget
              </button>
              <div id="Budget" className="slidecontainer" hidden>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="50"
                  className="slider"
                  id="myRange"
                />
              </div>
              <button
                type="submit"
                className="filter-btn my-2 px-4 py-2 border-2 border-black rounded-md"
                onClick={clickHandler}
              >
                Filter
              </button>
              <button
                type="submit"
                className="filter-btn my-2 px-4 py-2 border-2 border-black rounded-md"
                onClick={clickHandler}
              >
                Verified
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
          <div className="map-div">
            <img
              src={GoogleMapPic}
              alt=""
              className="map border-2 border-slate-700"
            />
          </div>
          <div className="form-div">
            <form className="search-form" onSubmit={googleSearch}>
              <input
                className="form-input-address"
                placeholder="Enter an address, city, or ZIP code"
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
                <div className="card card-1">
                  <h3 className="flex justify-center card-city-text">
                    Los Angeles, CA
                  </h3>
                </div>
                <div className="card card-2">
                  <h3 className="flex justify-center card-city-text">
                    New York, NY
                  </h3>
                </div>
                <div className="card card-3">
                  <h3 className="flex justify-center card-city-text">
                    Dallas, TX
                  </h3>
                </div>
                <div className="card card-4">
                  <h3 className="flex justify-center card-city-text">
                    Chicago, IL
                  </h3>
                </div>
                <div className="card card-5">
                  <h3 className="flex justify-center card-city-text">
                    Atlanta, GA
                  </h3>
                </div>
                <div className="card card-6">
                  <h3 className="flex justify-center card-city-text">
                    Portland, OR
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
