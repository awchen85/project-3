import { faker } from '@faker-js/faker';

const db = require('../config/connection');
const { User, Profile } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await Profile.deleteMany({});

  // create user data
  const userData = [];

  const createRandomUser = () => {
    const sex = this.faker.name.sexType();
    const firstName = faker.name.firstName(sex);
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password(
      12,
      false,
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/
    );

    return {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
  };

  for (let i = 0; i < 50; i += 1) {
    const user = createRandomUser();

    userData.push(user);
  }

  const createdUsers = await User.collection.insertMany(userData);

  for (let i = 0; i < createdUsers.length; i += 1) {}
});
