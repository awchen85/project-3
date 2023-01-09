/* eslint-disable */
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, Navigate } from 'react-router-dom';
import logo from '../assets/logo/logo.jpg';

import { LOGIN_USER } from '../utils/mutations';
import auth from '../utils/auth';
// import { LOGIN } from '../graphql/mutations';

// import { useCurrentUserContext } from '../context/currentUser';

export default function Login() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div>
      <div className="flex justify-center">
        <img src={logo} alt="logo" />
      </div>
      {error ? (
        <div>
          <p className="error-text text-center">
            The provided credentials are incorrect
          </p>
        </div>
      ) : null}
      <form className="form" onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">
          Email:
          <input
            className="focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900 form-input"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            className="focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900 form-input"
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <button className="form-button hover:bg-cyan-200" type="submit">
          <Link className="hover:text-green-400" to="/dashboard">
            Login
          </Link>
        </button>
        <p>
          Need an account? Sign up{' '}
          <Link className="hover:text-green-400" to="/register">
            here
          </Link>
        </p>
      </form>
    </div>
  );
}
