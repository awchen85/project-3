/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import validator from 'validator';
import { useQuery, useMutation } from '@apollo/client';
import placeholder from '../../assets/images/placeholder-icon.jpg';
import { useParams } from 'react-router-dom';
import { CREATE_PROFILE, UPDATE_PROFILE } from '../../utils/mutations';
import capitalizeFirstLetter from '../../utils/helpers';
import Swal from 'sweetalert2';

const DashboardProfile = ({ currentUser }) => {
  // const currentUserId = parseInt(currentUser._id);
  // console.log(currentUserId);
  const [createProfile, { error }] = useMutation(CREATE_PROFILE);
  const [updateProfile, { updateError }] = useMutation(UPDATE_PROFILE);
  const [formState, setFormState] = useState({
    age: null,
    gender: '',
    budget: null,
    location: '',
    aboutMe: '',
    allowPets: false,
    userId: currentUser._id,
    username: '',
  });
  const { age, gender, budget, location, aboutMe, allowPets, username } =
    formState;
  // const { age, gender, budget, location, aboutMe, allowPets, username } =
  //   currentUser.profile;
  // console.log(currentUser.profile.age);
  const checkExistingProfile = async currentUser => {
    if (currentUser.profile === null || currentUser.profile === undefined) {
      console.log('no existing profile');
      return;
    } else {
      await setFormState({
        ...formState,
        age: currentUser.profile.age,
        gender: currentUser.profile.gender,
        budget: currentUser.profile.budget,
        location: currentUser.profile.location,
        aboutMe: currentUser.profile.aboutMe,
        allowPets: currentUser.profile.allowPets,
        // userId: currentUser._id,
        username: currentUser.profile.username,
      });
      return;
    }
  };

  useEffect(() => {
    checkExistingProfile(currentUser);
  }, []);

  const [checkedHelper, setCheckedHelper] = useState(false);

  // const determineCheckedInput = currentUser => {
  //   console.log(this.value);
  //   if (
  //     currentUser.profile !== undefined &&
  //     currentUser.profile.gender === this.value
  //   ) {
  //     // setCheckedHelper(!checkedHelper);
  //     // console.log(checkedHelper);
  //     console.log(this.value);
  //     return true;
  //   }
  //   return false;
  // };

  // checkExistingProfile(currentUser);

  // if (currentUser.profile !== null) {
  //   console.log(currentUser.profile.age);
  //   setFormState({
  //     age: currentUser.profile.age,
  //     gender: currentUser.profile.gender,
  //     budget: currentUser.profile.budget,
  //     location: currentUser.profile.location,
  //     aboutMe: currentUser.profile.aboutMe,
  //     allowPets: currentUser.profile.allowPets,
  //     userId: currentUser._id,
  //     username: currentUser.profile.username,
  //   });
  // }

  const [errorMessage, setErrorMessage] = useState('');

  // Allow Pets Radio Buttons
  const options1 = [{ value: true, label: 'Yes' }];
  const options2 = [{ value: false, label: 'No' }];
  // Allow Pets
  const [selectedPetValue, setSelectedPetValue] = useState(null);

  // const [selectedGender, setSelectedGender] = useState('');
  const handleGenderSelect = event => {
    // console.log(event.target.value);
    let genderValue = event.target.value;
    setFormState({
      ...formState,
      gender: genderValue,
    });
  };

  const handlePetChange = event => {
    // console.log(event.target.value === 'true');
    let petValue = event.target.value === 'true';
    setSelectedPetValue(petValue);
    setFormState({
      ...formState,
      allowPets: petValue,
    });
  };

  const handleChange = e => {
    if (e.target.name === 'budget') {
      const finalBudget = parseInt(e.target.value);
      setFormState({ ...formState, budget: finalBudget });
      return;
    }
    if (e.target.name === 'age') {
      const finalAge = parseInt(e.target.value);
      setFormState({ ...formState, age: finalAge });
      return;
    }
    const isEmpty = validator.isEmpty(e.target.value);
    if (isEmpty || isNaN(e.target.value)) {
      setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required`);
      console.log('empty');
      Swal.fire({
        title: `${capitalizeFirstLetter(e.target.name)} is required`,
      });
    } else {
      setErrorMessage('');
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e, currentUser) => {
    e.preventDefault();
    console.log(formState);
    if (currentUser.profile === null || currentUser.profile === undefined) {
      try {
        const mutationResponse = await createProfile({
          variables: {
            input: {
              ...formState,
            },
          },
        });
        if (mutationResponse) {
          console.log(mutationResponse);
          Swal.fire({
            icon: 'success',
            title: 'Profile created successfully!',
          });
        }
      } catch (e) {
        console.log(e);
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: e.text,
        });
      }
    } else {
      try {
        const mutationResponse = await updateProfile({
          variables: {
            input: {
              ...formState,
            },
          },
        });
        if (mutationResponse) {
          console.log(mutationResponse);
          Swal.fire({
            icon: 'success',
            title: 'Profile updated successfully!',
          });
        }
      } catch (e) {
        console.log(e);
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: e.text,
        });
      }
    }
  };

  const determineWelcome = currentUser => {
    if (currentUser.profile === null || currentUser.profile === undefined) {
      return (
        <h1 className="text-center font-bold text-3xl m-8">
          Welcome to your profile, {currentUser.firstName}! Fill out the form
          below to get your profile set up.
        </h1>
      );
    }

    return (
      <h1 className="text-center font-bold text-3xl m-8">
        Welcome back to your profile, {currentUser.firstName}!
      </h1>
    );
  };

  return (
    <div>
      {determineWelcome(currentUser)}

      <form
        className="flex justify-center profileForm"
        onSubmit={e => handleSubmit(e, currentUser)}
      >
        <div className="profile text-2xl">
          <div className="profile-field profile-field-section">
            <div className="flex justify-center">
              <div className="border-2 border-black display-image">
                <img src={placeholder} className="profile-picture" alt="" />
              </div>
            </div>
            <input
              type="file"
              id="imageInput"
              name="upload"
              accept="image/png, image/jpg"
              className="py-3"
            />

            <div className="form-group">
              <label htmlFor="username" className="profile-h3">
                Username:
              </label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                className="profile-input border-2"
                defaultValue={username}
                onBlur={handleChange}
              />
            </div>
          </div>
          <div className="profile-field-section">
            <div className="form-group">
              <label htmlFor="location" className="profile-h3">
                City To Live In
              </label>
              <input
                name="location"
                type="text"
                placeholder="City, Full State Name (Charlotte, North Carolina)"
                className="profile-input border-2"
                defaultValue={location}
                onBlur={handleChange}
              />
            </div>
          </div>
          <div className="profile-field-section">
            <div className="form-group">
              <label htmlFor="aboutMe" className="profile-h3">
                Tell us about yourself:
              </label>
              <input
                maxLength={500}
                name="aboutMe"
                type="text"
                placeholder="About"
                className="profile-input border-2"
                defaultValue={aboutMe}
                onBlur={handleChange}
              />
            </div>
          </div>
          <div className="profile-field-section">
            <div className="form-group w-1/6">
              <label htmlFor="age" className="profile-h3">
                Your Age
              </label>
              <input
                name="age"
                type="number"
                min="18"
                max="100"
                placeholder="Your Age"
                id="profile-age-input"
                className="profile-input border-2"
                defaultValue={age}
                onBlur={handleChange}
              />
            </div>
          </div>
          <div className="profile-field-section">
            <h3 className="profile-h3">Gender</h3>
            <div className="flex border-2">
              <div className="flex cursor-pointer text-xl rounded text-blue-400 hover:bg-sky-100 hover:border-4 hover:border-blue-500 m-1 p-1">
                <label htmlFor="male" className="px-4 cursor-pointer">
                  <input
                    id="Male"
                    type="radio"
                    value="Male"
                    name="gender"
                    className="mx-2"
                    onChange={handleGenderSelect}
                    // defaultChecked={formState.gender === 'Male'}
                  />
                  Male
                </label>
              </div>
              <br />
              <div className="flex text-xl rounded text-red-200 hover:bg-red-50 hover:border-4 hover:border-red-300 m-1 p-1">
                <label htmlFor="female" className="px-4 cursor-pointer">
                  <input
                    id="Female"
                    type="radio"
                    value="Female"
                    name="gender"
                    className="mx-2"
                    onChange={handleGenderSelect}
                    // defaultChecked={formState.gender === 'Female'}
                  />
                  Female
                </label>
              </div>
              <br />
              <div className="flex cursor-pointer text-xl rounded text-emerald-400 hover:bg-emerald-100 hover:border-4 hover:border-green-500 m-1 p-1">
                <label htmlFor="non-binary" className="px-4 cursor-pointer">
                  <input
                    id="Non-binary"
                    type="radio"
                    value="Non-binary"
                    name="gender"
                    className="mx-2"
                    onChange={handleGenderSelect}
                    // defaultChecked={formState.gender === 'Non-binary'}
                  />
                  Non-binary
                </label>
              </div>
              <br />
              <div className="cursor-pointer text-xl rounded text-purple-400 hover:bg-purple-100 hover:border-4 hover:border-purple-500 m-1 p-1">
                <label htmlFor="other" className="px-4 cursor-pointer">
                  <input
                    id="Other"
                    type="radio"
                    value="Other"
                    name="gender"
                    className="mx-2"
                    onChange={handleGenderSelect}
                    // defaultChecked={formState.gender === 'Other'}
                  />
                  Other
                </label>
              </div>
              <br />
              <div className="flex cursor-pointer text-xl rounded text-yellow-500 hover:bg-yellow-100 hover:border-4 hover:border-yellow-600 m-1 p-1">
                <label
                  htmlFor="prefer-not-to-say"
                  className="px-4 cursor-pointer"
                >
                  <input
                    id="Prefer Not to Say"
                    type="radio"
                    value="Prefer Not to Say"
                    name="gender"
                    className="mx-2"
                    onChange={handleGenderSelect}
                    // defaultChecked={formState.gender === 'Prefer-Not-To-Say'}
                  />
                  Prefer Not To Say
                </label>
              </div>
              <br />
            </div>
          </div>
          <div className="profile-field-section">
            <div className="form-group w-1/6">
              <label htmlFor="budget" className="profile-h3">
                Max Rent Budget
              </label>
              <div className="flex">
                <span>$</span>
                <input
                  name="budget"
                  type="number"
                  min="100"
                  max="4000"
                  step="100"
                  placeholder="Budget"
                  className="profile-input border-2"
                  onBlur={handleChange}
                  defaultValue={budget}
                />
              </div>
            </div>
          </div>
          {/* Allow Pets */}
          <div className="profile-field-section">
            <h3 className="profile-h3 mb-4">
              Would you allow roommates with pets?
            </h3>
            <div className="profile-pets">
              {options1.map(option => (
                <label
                  // htmlFor="pets-yes"
                  id="profile-pets-yes"
                  key={option.value}
                  className={
                    selectedPetValue === option.value
                      ? 'btn btn-main'
                      : 'btn btn-secondary'
                  }
                >
                  <input
                    id="profile-pets-yes"
                    type="radio"
                    name="pets"
                    value={true}
                    checked={selectedPetValue === option.value}
                    onChange={handlePetChange}
                    hidden
                  />
                  {option.label}
                </label>
              ))}
              {options2.map(option => (
                <label
                  // htmlFor="pets-no"
                  id="profile-pets-no"
                  key={option.value}
                  className={
                    selectedPetValue === option.value
                      ? 'btn btn-main'
                      : 'btn btn-secondary'
                  }
                >
                  <input
                    id="profile-pets-no"
                    type="radio"
                    name="pets"
                    value={false}
                    defaultChecked={selectedPetValue === option.value}
                    onChange={handlePetChange}
                    hidden
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
          {/* Allow Children */}
          {/* <div className="profile-field-section">
            <h3 className="profile-h3 mb-4">You Have Children</h3>
            <div className="profile-children">
              {options3.map(option => (
                <label
                  // htmlFor="children-yes"
                  id="profile-children-yes"
                  key={option.value}
                  className={
                    selectedChildValue === option.value
                      ? 'active-children-yes'
                      : ''
                  }
                >
                  <input
                    id="profile-children-yes"
                    type="radio"
                    name="children"
                    value={option.value}
                    checked={selectedChildValue === option.value}
                    onChange={handleChildChange}
                    hidden
                  />
                  {option.label}
                </label>
              ))}
              {options4.map(option => (
                <label
                  // htmlFor="children-no"
                  id="profile-children-no"
                  key={option.value}
                  className={
                    selectedChildValue === option.value
                      ? 'active-children-no'
                      : ''
                  }
                >
                  <input
                    id="profile-children-no"
                    type="radio"
                    name="children"
                    value={option.value}
                    checked={selectedChildValue === option.value}
                    onChange={handleChildChange}
                    hidden
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div> */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="profile-view btn btn-main text-2xl"
            >
              Save Profile
            </button>
            {errorMessage && <p className="error-text">{errorMessage}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DashboardProfile;
