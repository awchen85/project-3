/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

function DashboardFriends({ friendCount, firstName, friends }) {
  if (!friends || !friends.length) {
    return <p className="bg-dark text-light p-3">{firstName} make some friends!</p>;
  }

  return (
    <div>
      <h5>
        {firstName}
        s
        {friendCount}
        {friendCount === 1 ? 'friend' : 'friends'}
      </h5>
      {friends.map(friend => (
        <button type="button" className="btn w-100 display-block mb-2" key={friend._id}>
          <Link to={`/dashboard/${friend.firstName}`}>{friend.firstName}</Link>
        </button>
      ))}
    </div>
  );
}

export default DashboardFriends;
