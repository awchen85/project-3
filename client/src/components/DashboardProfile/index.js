/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import validator from "validator";
import { useQuery, useMutation } from "@apollo/client";
import placeholder from "../../assets/images/placeholder-icon.jpg";
import { useParams } from "react-router-dom";
import { CREATE_PROFILE } from "../../utils/mutations";

const DashboardProfile = ({ currentUser }) => {
  // const currentUserId = parseInt(currentUser._id);
  // console.log(currentUserId);
  const [createProfile, { error }] = useMutation(CREATE_PROFILE);
  const [formState, setFormState] = useState({
    age: null,
    gender: "",
    budget: null,
    location: "",
    aboutMe: "",
    allowPets: false,
    userId: currentUser._id,
    username: "",
  });
  const { age, gender, budget, location, aboutMe, allowPets, username } =
    formState;
  const [errorMessage, setErrorMessage] = useState("");

  // Allow Pets Radio Buttons
  const options1 = [{ value: true, label: "Yes" }];
  const options2 = [{ value: false, label: "No" }];
  // Allow Pets
  const [selectedPetValue, setSelectedPetValue] = useState(null);

  // const [selectedGender, setSelectedGender] = useState('');
  const handleGenderSelect = (event) => {
    // console.log(event.target.value);
    let genderValue = event.target.value;
    setFormState({
      ...formState,
      gender: genderValue,
    });
  };

  const handlePetChange = (event) => {
    // console.log(event.target.value === 'true');
    let petValue = event.target.value === "true";
    setSelectedPetValue(petValue);
    setFormState({
      ...formState,
      allowPets: petValue,
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "budget") {
      const finalBudget = parseInt(e.target.value);
      setFormState({ ...formState, budget: finalBudget });
      return;
    }
    if (e.target.name === "age") {
      const finalAge = parseInt(e.target.value);
      setFormState({ ...formState, age: finalAge });
      return;
    }
    const isEmpty = validator.isEmpty(e.target.value);
    if (isEmpty) {
      setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required`);
    } else {
      setErrorMessage("");
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    try {
      const mutationResponse = await createProfile({
        variables: {
          input: {
            ...formState,
          },
        },
      });
      console.log(mutationResponse);
    } catch (e) {
      console.log(e);
    }
  };

  // // Allow Children Radio Buttons
  // const options3 = [{ value: 'option3', label: 'Yes' }];
  // const options4 = [{ value: 'option4', label: 'No' }];
  // // Allow Pets
  // const [selectedChildValue, setSelectedChildValue] = useState(null);
  // // Allow Pets
  // const handleChildChange = event => {
  //   setSelectedChildValue(event.target.value);
  // };

  const determineWelcome = (currentUser) => {
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

      <form className="flex justify-center profileForm" onSubmit={handleSubmit}>
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
                className="profile-input main-input "
                defaultValue={username}
                onBlur={handleChange}
              />
            </div>
          </div>
          {/* <div className="profile-field profile-field-section">
            <h3 className="profile-h3">Email</h3>
            <div className="">
              <input
                type="text"
                placeholder="Email"
                className="profile-input main-input border-1"
              />
            </div>
          </div> */}
          <div className="profile-field-section">
            <div className="form-group">
              <label htmlFor="location" className="profile-h3">
                City To Live In
              </label>
              <input
                name="location"
                type="text"
                placeholder="City, State"
                className="profile-input main-input "
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
                className="profile-input main-input "
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
                className="profile-input main-input "
                defaultValue={age}
                onBlur={handleChange}
              />
            </div>
          </div>
          <div className="profile-field-section">
            <h3 className="profile-h3">Gender</h3>
            <div className="flex ">
              <div className="flex cursor-pointer text-xl rounded m-1 p-1">
                <label htmlFor="male" className="px-4 cursor-pointer">
                  <input
                    id="male"
                    type="radio"
                    value="Male"
                    name="gender"
                    className="mx-2"
                    onChange={handleGenderSelect}
                  />
                  Male
                </label>
              </div>
              <br />
              <div className="flex text-xl m-1 p-1">
                <label htmlFor="female" className="px-4 cursor-pointer">
                  <input
                    id="female"
                    type="radio"
                    value="Female"
                    name="gender"
                    className="mx-2"
                    onChange={handleGenderSelect}
                  />
                  Female
                </label>
              </div>
              <br />
              <div className="flex cursor-pointer text-xl m-1 p-1">
                <label htmlFor="non-binary" className="px-4 cursor-pointer">
                  <input
                    id="non-binary"
                    type="radio"
                    value="Non-binary"
                    name="gender"
                    className="mx-2"
                    onChange={handleGenderSelect}
                  />
                  Non-binary
                </label>
              </div>
              <br />
              <div className="cursor-pointer text-xl rounded m-1 p-1">
                <label htmlFor="other" className="px-4 cursor-pointer">
                  <input
                    id="other"
                    type="radio"
                    value="Other"
                    name="gender"
                    className="mx-2"
                    onChange={handleGenderSelect}
                  />
                  Other
                </label>
              </div>
              <br />
              <div className="flex cursor-pointer text-xl m-1 p-1">
                <label
                  htmlFor="prefer-not-to-say"
                  className="px-4 cursor-pointer"
                >
                  <input
                    id="prefer-not-to-say"
                    type="radio"
                    value="Prefer Not to Say"
                    name="gender"
                    className="mx-2"
                    onChange={handleGenderSelect}
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
                  className="profile-input main-input "
                  onBlur={handleChange}
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
              {options1.map((option) => (
                <label
                  // htmlFor="pets-yes"
                  id="profile-pets-yes"
                  key={option.value}
                  className={
                    selectedPetValue === option.value
                      ? "btn btn-main"
                      : "btn btn-secondary"
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
              {options2.map((option) => (
                <label
                  // htmlFor="pets-no"
                  id="profile-pets-no"
                  key={option.value}
                  className={
                    selectedPetValue === option.value
                      ? "btn btn-main"
                      : "btn btn-secondary"
                  }
                >
                  <input
                    id="profile-pets-no"
                    type="radio"
                    name="pets"
                    value={false}
                    checked={selectedPetValue === option.value}
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
            <button type="submit" className="profile-view btn btn-main text-2xl">
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
