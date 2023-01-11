/* eslint-disable */
import React from 'react';
import placeholder from '../../assets/images/placeholder-icon.jpg';

function DashboardFriends() {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl m-8">
        Welcome To Your Friends Page! You Currently Have "?" Friend(s)
      </h1>
      <div className="profile-section grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <section className="profile-card flex flex-col border-2 border-black rounded-md p-2">
          <div className="profile-card-image">
            <a href="/">
              <img className="profile-card-image" src={placeholder} alt="" />
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
            className="message-btn border-2 border-black rounded-md"
          >
            Message
          </button>
        </section>
        <section className="profile-card flex flex-col border-2 border-black rounded-md p-2">
          <div className="profile-card-image">
            <a href="/">
              <img className="profile-card-image" src={placeholder} alt="" />
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
            className="message-btn border-2 border-black rounded-md"
          >
            Message
          </button>
        </section>
        <section className="profile-card flex flex-col border-2 border-black rounded-md p-2">
          <div className="profile-card-image">
            <a href="/">
              <img className="profile-card-image" src={placeholder} alt="" />
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
            className="message-btn border-2 border-black rounded-md"
          >
            Message
          </button>
        </section>
        <section className="profile-card flex flex-col border-2 border-black rounded-md p-2">
          <div className="profile-card-image">
            <a href="/">
              <img className="profile-card-image" src={placeholder} alt="" />
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
            className="message-btn border-2 border-black rounded-md"
          >
            Message
          </button>
        </section>
      </div>
    </div>
  );
}

export default DashboardFriends;
