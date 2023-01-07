/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
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

  const determineIsActive = component => {
    let linkClass = 'dashboard-btn dash-nav';
    if (component === currentComponent) {
      linkClass += ' dash-nav-active';
    }
    return linkClass;
  };

  const handleComponentChange = component => setCurrentComponent(component);

  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const modal = (
    <div id="inboxModal" className="modal">
      <div className="modal-header">
        <h1>Hello</h1>
      </div>
      <button type="submit" onClick={onCloseModal}>
        Go Back
      </button>
    </div>
  );

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
            // onClick={() => handleComponentChange('DashboardInbox')}
            onClick={onOpenModal}
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
      <Modal classNames="" open={open} onClose={onCloseModal} center>
        {modal}
      </Modal>
    </div>
  );
}

export default Dashboard;
