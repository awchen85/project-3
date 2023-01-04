import React from 'react';

function DashboardProfile() {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl m-8">
        Welcome, USER_NAME, To Your Profile!
      </h1>
      <form>
        <input type="file" name="upload" accept="image/*" />
      </form>
    </div>
  );
}

export default DashboardProfile;
