// import { Loader } from '@googlemaps/js-api-loader';
import GoogleMapPic from '../assets/images/GoogleMapTA.webp';

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

  return (
    <div className="mt-8 mx-4">
      <h2 className="font-semibold text-2xl mb-5">Find Your Next Roommate</h2>
      <div className="flex justify-between mt-12">
        <div className="left-side">
          <section className="btn-section flex border-2 border-black rounded-md py-4 px-4">
            <button
              type="submit"
              className="filter-btn mx-2 my-2 px-4 py-2 border-2 border-black rounded-md"
            >
              Distance
            </button>
            <button
              type="submit"
              className="filter-btn mx-2 my-2 px-4 py-2 border-2 border-black rounded-md"
            >
              Budget
            </button>
            <button
              type="submit"
              className="filter-btn mx-2 my-2 px-4 py-2 border-2 border-black rounded-md"
            >
              Filter
            </button>
            <button
              type="submit"
              className="filter-btn mx-2 my-2 px-4 py-2 border-2 border-black rounded-md"
            >
              Verified
            </button>
          </section>
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
            <form className="search-form">
              <input
                className="form-input-address"
                placeholder="Enter an address, city, or ZIP code"
                name="address"
                type="address"
                id="address"
              />
              <button className="search-button" type="submit">
                Search For Roommates!
              </button>
            </form>
            <h3 className="text-3xl font-semibold">Popular Cities</h3>
            <div className="grid grid-cols-3">
              <div className="card">
                <h3 className="">Los Angeles, CA</h3>
              </div>
              <div className="card">
                <h3 className="">Los Angeles, CA</h3>
              </div>
              <div className="card">
                <h3 className="">Los Angeles, CA</h3>
              </div>
              <div className="card">
                <h3 className="">Los Angeles, CA</h3>
              </div>
              <div className="card">
                <h3 className="">Los Angeles, CA</h3>
              </div>
              <div className="card">
                <h3 className="">Los Angeles, CA</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
