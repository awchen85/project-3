/* eslint-disable */
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_GET_USER } from '../utils/queries';

function OtherUser() {
  const { userId: userParam } = useParams();
  console.log(userParam);
  const { loading, data } = useQuery(QUERY_GET_USER, {
    variables: { userId: userParam },
  });
  const user = data?.getUser || {};

  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <p>{user.profile.username}</p>;
}

export default OtherUser;
