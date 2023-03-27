  ## OurPlace

  Deployed Application: https://p3-our-place.herokuapp.com/

  Our Place Homepage:

  ![OP Homepage](https://user-images.githubusercontent.com/108894754/218541859-84c1bcd8-b470-4b25-9cf2-9cee5ee15286.png)

  ## Description
  OurPlace was developed to be a roommate finder for people that can not cover rent and need a way to vet potential roommates. Step aside CraigsList. Users can register, create profiles, search for other users' profiles that match what they want in a roommate, and save profiles that meet those criteria.

  It is a full MERN stack application, using MongoDb, Express.js, React, and Node.js. Our Place uses Apollo-Client to set an application-wide context for the current user and to cache information. The application uses GraphQL to query the database and run mutations for CRUD operations. React Router handles the application's routes and end points, and we save Json Web Tokens to local storage to handle sessions.
  We used Faker to seed the database.
  
  Our Page is a Single Page Application (SPA), and several areas of the application utilize React's state functionality and effect hooks.
  We continue to add features and polish the application to make the best experience possible for our users.

  ## Table of Contents
  
* [Resources](#resources)
* [Instillation](#instillation)
* [Usage](#usage)
* [Plans for Future Development](#plans-for-future-development)
* [Dependencies](#dependencies)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Contact](#contact)
      

  ## Resources

  ![react](https://img.shields.io/badge/react-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
  ![tailwindcss](https://img.shields.io/badge/tailwindcss-06B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/-javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=white)
  ![node.js](https://img.shields.io/badge/-node.js-339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
  ![mongodb](https://img.shields.io/badge/-mongodb-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  ![apollographql](https://img.shields.io/badge/-apollographql-311C87.svg?style=for-the-badge&logo=apollographql&logoColor=white)
  ![express](https://img.shields.io/badge/-express-000000.svg?style=for-the-badge&logo=express&logoColor=white)

  ## Instillation

  Users who would like to install this application on their local machines can do so buy running the following command in their terminal:

  "git clone git@github.com:awchen85/project-3.git"

  ## Usage
  Once users reach the landing page for the Our Place application, they can register by clicking "Sign Up" in the nav bar. It will take users to the following screen:

  ![OP Signup](https://user-images.githubusercontent.com/108894754/218575301-9f843344-f944-462e-a506-7610f1f3df81.png)

  Register yourself with valid information and a password with 7 characters including: lower/upper case letters, one number, and one special character.
  When users return to Our Place, they can log in by clicking "Login" in the nav bar.

  ![OP Login](https://user-images.githubusercontent.com/108894754/218575722-30d52255-543a-4f0c-afc8-05fbe0edf9e2.png)

  Once logged in, users can create the their profile by clicking the "Profile" link in the nav bar. By filling out the profile form, users will create their profile card which allows them to be searched for.

 ![OP Profile Updated](https://user-images.githubusercontent.com/108894754/228004558-75414536-4b88-40e3-8862-fb0709295776.png)

  Under the hood, the profile page uses React's state for the profile form. Once a user fills out one of the input fields, it updates the form state with that value. If the user clicks away from a required input, SweetAlert2 displays a modal that lets them know that field is needed:

  ![OP Required Fields Updated](https://user-images.githubusercontent.com/108894754/228005193-d9420ac1-5c2e-4d5b-a368-317823f30be7.png)


  Whenever a user visits the profile page, a function checks to see if they have already created a profile. If they do not have a profile, the form state defaults to empty values, and the "Save" button fires the "Create Profile" mutation. If they do have a profile, React sets the form state to their existing profile values, and the "Save" button fires the "Update Profile" mutation.

  Users can find roommates on the home page. Upon load, a query is run for all user profiles. Other users' profiles are displayed in a carousel, which is a React component, as seen below:

  ![OP Profile Carousel](https://user-images.githubusercontent.com/108894754/218583967-7bc13e7b-ebb8-4088-a27f-0d7f19995371.png)

  The cards that represent each user display their avatar, username, location, and "about me." If a user clicks anywhere on a card in the carousel, they are taken to a page that displays that user's full profile:

  ![OP Full User Profile](https://user-images.githubusercontent.com/108894754/218584360-549d6bcf-7394-4e0f-a097-dae6d7b5e1d2.png)

  A query pulls the selected user's id from url parameters, fires a query for that user's information and profile, and displays the expanded profile card. The current user can click the "heart" icon on the expanded card to save that profile. If they go to their "Profile" tab in the nav bar and click the "Saved" button on the left hand side, the "CardList" component will display their saved profiles in a carousel just like the home page:

  ![OP Saved Profiles](https://user-images.githubusercontent.com/108894754/218585640-cfaff3c1-f338-40af-8f51-98fd6890e5c7.png)

  The homepage also allows users to search for roommate and filter out profiles that don't meet their desired criteria. There is a quick search option on the homepage that filters by location.

  ![OP Quick Search](https://user-images.githubusercontent.com/108894754/218586489-38ee2c7c-fed3-47f8-891b-e784d9545cbb.png)

  The "Search for your roommate" button at the top of the homepage offers more robust search options. Clicking the button opens a modal that allows users to search by search by location, budget, gender, age, whether or not potential roommates allow pets, and any combination thereof.

  ![OP Filter Modal](https://user-images.githubusercontent.com/108894754/218587903-b078dc11-1951-4e08-919f-90d996e3b486.png)
  ![OP Filter Modal 2](https://user-images.githubusercontent.com/108894754/218587977-77d69e2a-246e-4a81-a578-7ebed107aac2.png)

  ## Plans for Future Development
  We have several features we would like to add in the future and some are currently in development. These include but are not limited to the following:

  Upon clicking the heart icon on a user's full profile, the application will check to see if that person already exists in the current user's saved profiles. If it does not, it will fire the "Add Friend" mutation. If it does, it will fire the "Remove Friend" mutation and take that user out of the saved profiles array.

  Allowing users to upload their own avatars to their profile (there is currently a default avatar).

  Allowing users to "match" with each other if they both save each other's profiles. This will open up the ability for them to send each other messages, which would display in the "Inbox" portion of a user's profile page.

  ## Dependencies
  This application uses the following dependencies:

  Root:
  Apollo Client, GraphQL, GraphQL-tag, Concurrently

  Server:
  Faker, Apollo-Server-Express, Bcrypt, Dotenv, Express, GraphQL, JsonWebToken, JWT-decode, Lodash.omit, Mongoose, Nodemon

  Client:
  Apollo Client, Google Maps API, Mapbox, Animejs, GraphQL, Prop-Types, React, React-Cookie, React-Dom, React-Icons, React-Multi-Carousel, React-Responsive-Modal, React-Router-Dom, React-Scripts, Save, SweetAlert2, TailwindCSS, Use-Places-Autocomplete, Validator

  ## License


  ## Contribution
  The contributors for this project: David Dowell, Mitchell Armstrong, Patrick MacDonald, Alex Chen, Teresa Hartsfield

  ## Tests
  Currently there are no tests for this application.

  ## Contact:
  Contact key project contributor: 
  - hartsfieldt@gmail.com 
  - pmacdonald07@gmail.com 
  - awchen85@gmail.com 
  - mra0211@gmail.com 
  - daviddowell1@gmail.com
  

  GitHub profile: hartsfieldt, awchen85, pmacdonald07, ScarElite, DavidDowell
