/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/currentUser';
import CardList from '../CardList';

function DashboardFriends({ currentUser }) {
  // console.log(currentUser.friends);
  if (!currentUser.friends || !currentUser.friends.length) {
    return (
      <p className="bg-dark text-light p-3">
        {currentUser.firstName} make some friends!
      </p>
    );
  }
  const friends = currentUser.friends;
  // let friendProfileArray = [];
  // for (i = 0; i < friends.length; i++) {
  //   const profile = friends[i].profile;
  //   friendProfileArray.push(profile);
  // }

  return (
    <div className="py-4">
      <h1>Your friends:</h1>
      {friends.map(friend => (
        <p key={friend._id}>{friend.profile.username}</p>
      ))}
    </div>
  );
}

export default DashboardFriends;
