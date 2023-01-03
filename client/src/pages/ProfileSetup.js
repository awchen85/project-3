import { BsGenderTrans, BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { FaGenderless } from 'react-icons/fa';

function Profile() {
  return (
    <div className="m-5">
      <div className="translate-y-10">
        <h1 className="text-black text-7xl text-center">
          What is your Gender?
        </h1>
      </div>
      <div className="translate-y-16">
        <div className="flex justify-center">
          <div className="text-7xl text-red-200 -translate-x-5">
            <BsGenderFemale />
          </div>
          <div className="text-7xl text-blue-400 translate-x-5">
            <BsGenderMale />
          </div>
        </div>
        <div className="flex justify-center m-5">
          <div className="text-7xl -translate-x-5">
            <BsGenderTrans />
          </div>
          <div className="text-7xl translate-x-5">
            <FaGenderless />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
