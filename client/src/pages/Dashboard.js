/* eslint-disable  */
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import DashboardProfile from '../components/DashboardProfile';
import DashboardFriends from '../components/DashboardFriends';
import DashboardInbox from '../components/DashboardInbox';
import auth from '../utils/auth';
import underConstruction from '../assets/images/under-construction-2.png';
import stopSign from '../assets/images/stop-sign.png';
import { useQuery, useMutation } from '@apollo/client';
import {
  QUERY_GET_CURRENT_USER,
  QUERY_GET_FRIEND_PROFILES,
} from '../utils/queries';

function Dashboard() {
  // const { userId: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_GET_CURRENT_USER);
  const currentUser = data?.getCurrentUser || {};

  // const { friendLoading, friendData } = useQuery(QUERY_GET_FRIEND_PROFILES);
  // const friendProfileArray = friendData?.getFriendProfiles || {};

  // console.log(friendProfileArray);

  const [currentComponent, setCurrentComponent] = useState('DashboardProfile');

  // if (auth.loggedIn() && auth.getProfile().data.firstName === userParam) {
  //   return <Navigate to="/dashboard/:firstName" />;
  // }

  const determineComponent = () => {
    if (currentComponent === 'DashboardProfile') {
      return <DashboardProfile currentUser={currentUser} />;
      // eslint-disable-next-line no-else-return
    } else if (currentComponent === 'DashboardFriends') {
      return <DashboardFriends />;
    } else if (currentComponent === 'DashboardInbox') {
      return <DashboardInbox />;
    } else {
      return <DashboardProfile />;
    }
  };

  const determineIsActive = component => {
    let linkClass = 'dashboard-btn btn btn-main';
    if (component === currentComponent) {
      linkClass += 'btn btn-main-active';
    }
    return linkClass;
  };

  const handleComponentChange = component => setCurrentComponent(component);

  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const modal = (
    <div id="inboxModal" className="modal bg-red-100">
      <div className="flex justify-center mb-4">
        <span className="px-4">
          <img src={stopSign} alt="" className="stop-sign" />
        </span>
        <h1 className="text-5xl">Under Construction</h1>
        <span className="px-4">
          <img src={stopSign} alt="" className="stop-sign" />
        </span>
      </div>
      <img src={underConstruction} alt="" className="under-construction" />
      <h3 className="text-3xl">This Feature is Currently Under Construction</h3>
      <h3 className="text-2xl">
        Our Team is Very Hard at Work Getting This Ready For You!
      </h3>
      <button
        type="submit"
        onClick={onCloseModal}
        className="construction-button"
      >
        Go Back
      </button>
    </div>
  );

  return (
    <div>
      <div className="dashboard md:flex grid justify-items-center">
        <section className="dashboard-nav md:flex md:flex-col">
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
            Saved
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
        </section>
        <div
          className="dashboard-main block md:flex m-auto md:m-0 justify-center"
          // eslint-disable-next-line react/no-unknown-property
          // currentComponent={currentComponent}
          // eslint-disable-next-line react/no-unknown-property
          // handleComponentChange={handleComponentChange}
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
