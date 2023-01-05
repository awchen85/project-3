import React from 'react';

function DashboardProfile() {
  // const imageInput = document.querySelector('#imageInput');
  // let uploadedImage = '';

  // imageInput.addEventListener('change', function () {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => {
  //     uploadedImage = reader.result;
  //     document.querySelector(
  //       '#display_image'
  //     ).style.backgroundImage = `url(${uploadedImage})`;
  //   });
  //   // eslint-disable-next-line react/no-this-in-sfc
  //   reader.readAsDataURL(this.files[0]);
  // });

  return (
    <div>
      <h1 className="text-center font-bold text-3xl m-8">
        Welcome, USER_NAME, To Your Profile!
      </h1>
      {/* eslint-disable-next-line react/self-closing-comp */}
      <div id="display_image"></div>
      <form>
        <input
          type="file"
          id="imageInput"
          name="upload"
          accept="image/png, image/jpg"
        />
      </form>
      <div className="profile text-2xl">
        <div className="profile-field profile-field-section">
          <h3 className="profile-h3">First Name</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="First Name"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field profile-field-section">
          <h3 className="profile-h3">Email</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="Email"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">Looking for a place in:</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="City"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">Age</h3>
          <div className="border-2 border-black w-1/6">
            <input
              type="number"
              placeholder="Age"
              id="profile-age-input"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">Gender</h3>
          <div className="flex">
            <div className="flex cursor-pointer text-xl rounded text-blue-400 hover:bg-sky-100 hover:border-4 hover:border-blue-500 m-1 p-1">
              <label htmlFor="gender" className="px-4 cursor-pointer">
                <input type="checkbox" value="male" />
                Male
              </label>
            </div>
            <br />
            <div className="flex text-xl rounded text-red-200 hover:bg-red-50 hover:border-4 hover:border-red-300 m-1 p-1">
              <label htmlFor="gender" className="px-4 cursor-pointer">
                <input type="checkbox" value="female" />
                Female
              </label>
            </div>
            <br />
            <div className="flex cursor-pointer text-xl rounded text-emerald-400 hover:bg-emerald-100 hover:border-4 hover:border-green-500 m-1 p-1">
              <label htmlFor="gender" className="px-4 cursor-pointer">
                <input type="checkbox" value="non-binary" />
                Non-binary
              </label>
            </div>
            <br />
            <div className="cursor-pointer text-xl rounded text-purple-400 hover:bg-purple-100 hover:border-4 hover:border-purple-500 m-1 p-1">
              <label htmlFor="gender" className="px-4 cursor-pointer">
                <input type="checkbox" value="male" />
                Other
              </label>
            </div>
            <br />
            <div className="flex cursor-pointer text-xl rounded text-yellow-500 hover:bg-yellow-100 hover:border-4 hover:border-yellow-600 m-1 p-1">
              <label htmlFor="gender" className="px-4 cursor-pointer">
                <input type="checkbox" value="male" />
                Prefer Not To Say
              </label>
            </div>
            <br />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">Budget</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="Budget"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">Pets</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="Pets"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
        <div className="profile-field-section">
          <h3 className="profile-h3">Children</h3>
          <div className="border-2 border-black">
            <input
              type="text"
              placeholder="Children"
              className="profile-input border-1 border-black"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="border-2 border-black">
        View as someone else
      </button>
    </div>
  );
}

export default DashboardProfile;
