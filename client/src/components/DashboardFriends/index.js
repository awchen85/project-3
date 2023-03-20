/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/currentUser';
import CardList from '../CardList';

function DashboardFriends({ currentUser, friendProfileArray }) {
  // if (!currentUser.friends || !currentUser.friends.length) {
  //   return (
  //     <p className="text-4xl text-center underline mb-3">
  //       {currentUser.firstName}, make some friends!
  //     </p>
  //   );
  // }
  // const friends = currentUser.friends;
  // let friendProfileArray = [];
  // for (let i = 0; i < friends.length; i++) {
  //   const profile = friends[i].profile;
  //   friendProfileArray.push(profile);
  // }

  if (!friendProfileArray || !friendProfileArray.length) {
    return (
      <p className="text-4xl text-center underline mb-3">
        {currentUser.firstName}, make some friends!
      </p>
    );
  }

  return (
    <div className="py-4 overflow-auto">
      <h1 className="text-4xl text-center underline mb-3">
        Your Saved Profiles
      </h1>
      <div className="friend-list">
        {/* {friends.map(friend => (
          <p key={friend._id}>{friend.profile.username}</p>
        ))} */}
        <CardList profiles={friendProfileArray}></CardList>
      </div>
    </div>
  );
}

export default DashboardFriends;
