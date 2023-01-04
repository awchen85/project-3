/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import auth from '../utils/auth';

function Dashboard() {
  const { firstName: userParam } = useParams();

  if (auth.loggedIn() && auth.getProfile().data.firstName === userParam) {
    return <Navigate to="/profile" />;
  }

  const clickHandler = e => {
    const { target } = e;
    console.log('Clicked', target.id);
  };

  return (
    <div>
      <div>
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard flex">
        <section className="dashboard-nav flex flex-col border-2 border-black">
          <button
            type="submit"
            onClick={clickHandler}
            id="profile"
            className="dashboard-btn"
          >
            Profile
          </button>
          <button
            type="submit"
            onClick={clickHandler}
            id="friends"
            className="dashboard-btn"
          >
            Friends
          </button>
          <button
            type="submit"
            onClick={clickHandler}
            id="inbox"
            className="dashboard-btn"
          >
            Inbox
          </button>
          <button
            type="submit"
            onClick={clickHandler}
            id="connections"
            className="dashboard-btn"
          >
            Connections
          </button>
        </section>
        <div className="dashboard-main border-2 border-black">
          <section className="dashboard-profile">Placeholder</section>
          <section className="dashboard-friends">Placeholder</section>
          <section className="dashboard-inbox">Placeholder</section>
          <section className="dashboard-connections">Placeholder</section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
