/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/currentUser';
import { useQuery } from '@apollo/client';
import { QUERY_GET_FRIEND_PROFILES } from '../../utils/queries';
import CardList from '../CardList';

function DashboardFriends() {
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

  const { loading, data } = useQuery(QUERY_GET_FRIEND_PROFILES);
  const friendProfileArray = data?.getFriendProfiles || [];

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
