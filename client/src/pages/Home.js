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
    <div>
      <h2>Home</h2>
      <div className="map-div">
        <img src={GoogleMapPic} alt="" className="map" />
      </div>
      <div>
        <form className="search-form">
          <input
            className="form-input-address"
            placeholder="Enter an address, city, or ZIP code"
            name="address"
            type="address"
            id="address"
          />
        </form>
        <button className="search-button" type="submit">
          Search For Roommates!
        </button>
      </div>
    </div>
  );
}

export default Home;
