/* eslint-disable */
const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { User, Profile } = require('../models');

const createRandomUser = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const password = '?Bz2' + faker.internet.password(8);
  const phoneNumber = faker.phone.number();

  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    phone: phoneNumber,
  };
};

db.once('open', async () => {
  await User.deleteMany({});
  await Profile.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const user = createRandomUser();

    userData.push(user);
  }

  const createdUsers = await User.collection.insertMany(userData);
  const userValues = Object.values(createdUsers.insertedIds);

  const userIds = [];

  // pull _id values off the return mongodb object
  for (let i = 0; i < userValues.length; i += 1) {
    const retrievedId = userValues[i].valueOf();
    userIds.push(retrievedId);
  }

  // generate user profiles
  for (let i = 0; i < userIds.length; i += 1) {
    // const cityName = faker.address.cityName();
    // const stateAbbreviation = faker.address.stateAbbr();
    const username = faker.helpers.arrayElement([
      'Sarah22',
      'MarquisTheBeast',
      'PoppyCakes',
      'BobbyMcBobby',
      'MIKE WAZOWSKI',
    ]);
    const age = Math.floor(Math.random() * 30) + 18;
    const gender = faker.helpers.arrayElement([
      'Female',
      'Male',
      'Non-binary',
      'Other',
      'Prefer Not to Say',
    ]);
    const budget = Math.floor(Math.random() * 1500) + 250;
    // might want to do faker zipCodeByState?
    const location = faker.helpers.arrayElement([
      'Charlotte, North Carolina',
      'Raleigh, North Carolina',
      'Asheville, North Carolina',
      'Greensboro, North Carolina',
      'Boone, North Carolina',
      'Chapel Hill, North Carolina',
      'Hendersonville, North Carolina',
      'Wilmington, North Carolina',
      'Durham, North Carolina',
    ]);
    const aboutMe = faker.lorem.sentences(3);
    const allowPets = faker.helpers.arrayElement(['true', 'false']);
    const allowChildren = faker.helpers.arrayElement(['true', 'false']);
    const userId = userIds[i];

    const profileInput = {
      age: age,
      gender: gender,
      budget: budget,
      location: location,
      aboutMe: aboutMe,
      allowPets: allowPets,
      allowChildren: allowChildren,
      userId: userId,
      username: username,
    };

    const profile = await Profile.create(profileInput);

    // use user _ids to update user profiles
    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      { profile: profile }
    ).populate('profile');
  }
  console.log('all done!');
  process.exit(0);
});
