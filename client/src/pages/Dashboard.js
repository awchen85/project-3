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
      return <DashboardProfile />;
      // eslint-disable-next-line no-else-return
    } else if (currentComponent === 'DashboardFriends') {
      return <DashboardFriends />;
    } else if (currentComponent === 'DashboardInbox') {
      return <DashboardInbox />;
    } else if (currentComponent === 'DashboardConnections') {
      return <DashboardConnections />;
    } else {
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
            className="dashboard-btn"
          >
            Profile
          </button>
          <button
            type="submit"
            onClick={() => handleComponentChange('DashboardFriends')}
            id="friends"
            className="dashboard-btn"
          >
            Friends
          </button>
          <button
            type="submit"
            onClick={() => handleComponentChange('DashboardInbox')}
            id="inbox"
            className="dashboard-btn"
          >
            Inbox
          </button>
          <button
            type="submit"
            onClick={() => handleComponentChange('DashboardConnections')}
            id="connections"
            className="dashboard-btn"
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
