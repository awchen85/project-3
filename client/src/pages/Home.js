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
    <div className="mt-8">
      <h2 className="font-semibold text-2xl mb-5">Find Your Next Roommate</h2>
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
      </div>
    </div>
  );
}

export default Home;
