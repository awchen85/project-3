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
      <div>
        <h2>Dashboard</h2>
      </div>
      <section className="flex flex-col">
        <button type="submit">Profile</button>
        <button type="submit">Friends</button>
        <button type="submit">Inbox</button>
        <button type="submit">Connections</button>
      </section>
    </div>
  );
}

export default Dashboard;
