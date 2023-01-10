import React from 'react';
import { Link } from 'react-router-dom';

function FriendList({ friendCount, firstName, friends }) {
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
          <Link to={`/profile/${friend.firstName}`}>{friend.firstName}</Link>
        </button>
      ))}
    </div>
  );
}

export default FriendList;
