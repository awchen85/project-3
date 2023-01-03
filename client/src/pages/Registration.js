import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo/logo.jpg';

import { REGISTER_USER } from '../graphql/mutations';

import { useCurrentUserContext } from '../context/currentUser';

export default function Registration() {
  const { loginUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [registerUser, { error }] = useMutation(REGISTER_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await registerUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const { token, user } = mutationResponse.data.createUser;
      loginUser(user, token);
      navigate('/profile');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="md:flex justify-center">
      <div className="mt-5">
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <form className="form" onSubmit={handleFormSubmit}>
          <h2>Register</h2>
          <label htmlFor="firstName">
            First name:
            <input
              className="form-input"
              type="text"
              id="firstName"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="lastName">
            Last name:
            <input
              className="form-input"
              type="text"
              id="lastName"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              className="form-input"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </label>
          <div className="group">
            <label htmlFor="password">
              Password
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </label>
            <div className="invisible">
              <p className="text-zinc-400 text-xs group-hover:visible flex-wrap">7 characters long, lowercase/uppercase, 1 number, 1 special character</p>
            </div>
          </div>
          <button className="form-button hover:bg-teal-300" type="submit">
            Sign Up
          </button>
          <p>
            Already have an account? Login
            <Link className="hover:text-teal-300" to="/login"> here</Link>
          </p>
        </form>
      </div>
      <div className="flex justify-center">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
