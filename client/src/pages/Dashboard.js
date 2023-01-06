/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { useQuery, useMutation } from '@apollo/client';
import DashboardProfile from '../components/DashboardProfile';
import DashboardFriends from '../components/DashboardFriends';
import DashboardInbox from '../components/DashboardInbox';
import DashboardConnections from '../components/DashboardConnections';
import { QUERY_GET_USERS, QUERY_GET_CURRENT_USER } from '../utils/queries';
import auth from '../utils/auth';

function Dashboard() {
  const [currentComponent, setCurrentComponent] = useState('DashboardProfile');

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(
    userParam ? QUERY_GET_CURRENT_USER : QUERY_GET_USERS,
    {
      variables: { username: userParam },
    }
  );

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is yours
  if (auth.loggedIn() && auth.getProfile().data.username === userParam) {
    console.log('Logged In');
    return <Navigate to="/profile" />;
    // eslint-disable-next-line no-else-return
  } else {
    console.log('Not Logged In');
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
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

  const determineIsActive = component => {
    let linkClass = 'dashboard-btn dash-nav';
    if (component === currentComponent) {
      linkClass += ' dash-nav-active';
    }
    return linkClass;
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
            className={determineIsActive('DashboardProfile')}
          >
            Profile
          </button>
          <button
            type="submit"
            onClick={() => handleComponentChange('DashboardFriends')}
            id="friends"
            className={determineIsActive('DashboardFriends')}
          >
            Friends
          </button>
          <button
            type="submit"
            onClick={() => handleComponentChange('DashboardInbox')}
            id="inbox"
            className={determineIsActive('DashboardInbox')}
          >
            Inbox
          </button>
          <button
            type="submit"
            onClick={() => handleComponentChange('DashboardConnections')}
            id="connections"
            className={determineIsActive('DashboardConnections')}
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
