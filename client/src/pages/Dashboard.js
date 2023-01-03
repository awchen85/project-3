/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import auth from '../utils/auth';

function Dashboard() {
  const { firstName: userParam } = useParams();

  if (auth.loggedIn() && auth.getProfile().data.firstName === userParam) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Viewing profile.</h3>
    </div>
  );
}

export default Dashboard;
