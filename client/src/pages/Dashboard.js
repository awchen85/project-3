/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import DashboardProfile from '../components/DashboardProfile';
import DashboardFriends from '../components/DashboardFriends';
import DashboardInbox from '../components/DashboardInbox';
import DashboardConnections from '../components/DashboardConnections';
import auth from '../utils/auth';

function Dashboard() {
  const [currentComponent, setCurrentComponent] = useState('DashboardProfile');

  const { firstName: userParam } = useParams();

  if (auth.loggedIn() && auth.getProfile().data.firstName === userParam) {
    return <Navigate to="/profile" />;
  }

  const determineComponent = () => {
    if (currentComponent === 'DashboardProfile') {
      document.getElementById('profile').classList.add('dash-nav-active');
      document.getElementById('friends').classList.remove('dash-nav-active');
      document.getElementById('inbox').classList.remove('dash-nav-active');
      document
        .getElementById('connections')
        .classList.remove('dash-nav-active');
      return <DashboardProfile />;
      // eslint-disable-next-line no-else-return
    } else if (currentComponent === 'DashboardFriends') {
      document.getElementById('friends').classList.add('dash-nav-active');
      document.getElementById('profile').classList.remove('dash-nav-active');
      document.getElementById('inbox').classList.remove('dash-nav-active');
      document
        .getElementById('connections')
        .classList.remove('dash-nav-active');
      return <DashboardFriends />;
    } else if (currentComponent === 'DashboardInbox') {
      document.getElementById('inbox').classList.add('dash-nav-active');
      document.getElementById('friends').classList.remove('dash-nav-active');
      document.getElementById('profile').classList.remove('dash-nav-active');
      document
        .getElementById('connections')
        .classList.remove('dash-nav-active');
      return <DashboardInbox />;
    } else if (currentComponent === 'DashboardConnections') {
      document.getElementById('connections').classList.add('dash-nav-active');
      document.getElementById('friends').classList.remove('dash-nav-active');
      document.getElementById('inbox').classList.remove('dash-nav-active');
      document.getElementById('profile').classList.remove('dash-nav-active');
      return <DashboardConnections />;
    } else {
      document.getElementById('profile').classList.add('dash-nav-active');
      document.getElementById('friends').classList.remove('dash-nav-active');
      document.getElementById('inbox').classList.remove('dash-nav-active');
      document
        .getElementById('connections')
        .classList.remove('dash-nav-active');
      return <DashboardProfile />;
    }
  };

  const handleComponentChange = component => setCurrentComponent(component);

  return (
    <div>
      <div className="dashboard flex">
        <section className="dashboard-nav flex flex-col border-2 border-black">
          <button
            type="submit"
            onClick={() => handleComponentChange('DashboardProfile')}
            id="profile"
            className="dashboard-btn dash-nav-profile"
          >
            Profile
          </button>
          <button
            type="submit"
            onClick={() => handleComponentChange('DashboardFriends')}
            id="friends"
            className="dashboard-btn dash-nav-friends"
          >
            Friends
          </button>
          <button
            type="submit"
            onClick={() => handleComponentChange('DashboardInbox')}
            id="inbox"
            className="dashboard-btn dash-nav-inbox"
          >
            Inbox
          </button>
          <button
            type="submit"
            onClick={() => handleComponentChange('DashboardConnections')}
            id="connections"
            className="dashboard-btn dash-nav-connections"
          >
            Connections
          </button>
        </section>
        <div
          className="dashboard-main border-2 border-black"
          // eslint-disable-next-line react/no-unknown-property
          currentComponent={currentComponent}
          // eslint-disable-next-line react/no-unknown-property
          handleComponentChange={handleComponentChange}
        >
          {determineComponent()}
          {/* <DashboardProfile /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
