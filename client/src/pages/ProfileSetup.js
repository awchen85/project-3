import { Modal } from 'react-responsive-modal';
import { AiOutlineProfile } from 'react-icons/ai';
import 'react-responsive-modal/styles.css';
import React from 'react';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { TbGenderGenderqueer } from 'react-icons/tb';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import Autocomplete from 'react-google-autocomplete';

function Profile() {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const profileModal = (
    <form>
      <fieldset>
        <div className="m-5 flex justify-center flex-wrap rounded-full">
          <div>
            <div className="flex">
              <div className="flex mt-2 text-lg">
                <h3>What city do you want to live in?</h3>
                <BiBuildingHouse className="fill-blue-500 mr-1 text-xl" />
              </div>
              <Autocomplete onPlaceSelected={place => { console.log(place); }} types={['(regions)']} componentRestrictions={{ country: 'us' }} />
            </div>
            <div className="mt-3">
              <label htmlFor="budget">
                <div className="flex">
                  <h3 className="mt-2 text-lg">What is your monthly budget?</h3>
                  <div className="flex">
                    <MdOutlineAttachMoney className="mt-1 ml-1 text-2xl text-green-600" />
                    <input
                      className="p-1 rounded border-2"
                      name="budget"
                      min="100"
                      max="2000"
                      step="100"
                      type="number"
                      id="atuocomplete"
                    />
                  </div>
                </div>
              </label>
            </div>
            <div className="translate-y-5">
              <h1 className="text-black text-lg">What is your Gender?</h1>
            </div>
            <div className="translate-y-5">
              <div className="flex flex-col">
                <div className="flex text-xl rounded text-red-200 hover:bg-red-50 hover:border-4 hover:border-red-300 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="female">
                    <input
                      className="cursor-pointer"
                      name="gender"
                      type="radio"
                      id="female"
                      value="female"
                    />
                    <BsGenderFemale className="ml-1 mt-1" />
                    <p>Female</p>
                  </label>
                </div>
                <div className="flex cursor-pointer text-xl rounded text-blue-400 hover:bg-sky-100 hover:border-4 hover:border-blue-500 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="male">
                    <input name="gender" type="radio" id="male" value="male" />
                    <BsGenderMale className="ml-1 mt-1" />
                    <p>Male</p>
                  </label>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex cursor-pointer text-xl rounded text-emerald-400 hover:bg-emerald-100 hover:border-4 hover:border-green-500 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="non-bin">
                    <input
                      name="gender"
                      type="radio"
                      id="non-bin"
                      value="non-bin"
                    />
                    <TbGenderGenderqueer className="ml-1 mt-1" />
                    <p>Non-binary</p>
                  </label>
                </div>
                <div className="cursor-pointer text-xl rounded text-purple-400 hover:bg-purple-100 hover:border-4 hover:border-purple-500 m-1 p-1">
                  <label className="flex cursor-pointer" htmlFor="other">
                    <input
                      name="gender"
                      type="radio"
                      id="other"
                      value="other"
                    />
                    <HiOutlineDotsCircleHorizontal className="ml-1 mt-1" />
                    <p>Other</p>
                  </label>
                </div>
              </div>
              <div className="cursor-pointer flex flex-col text-xl rounded text-yellow-500 hover:bg-yellow-100 hover:border-4 hover:border-yellow-600 m-1 p-1">
                <label
                  className="flex cursor-pointer"
                  htmlFor="prefer-not-to-say"
                >
                  <input
                    name="gender"
                    type="radio"
                    id="prefer-not-to-say"
                    value="prefer-not-to-say"
                  />
                  <p>Prefer Not to Say</p>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="age">
                <div className="flex">
                  <h3 className="mt-2 text-lg">How old are you?</h3>
                  <div className="flex">
                    <FaBirthdayCake className="m-1 text-2xl text-violet-400" />
                    <input
                      className="p-1 rounded border-2"
                      name="budget"
                      min="18"
                      max="100"
                      type="number"
                      id="age-chosen"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
  return (
    <div>
      <div className="flex justify-center m-5">
        <button
          className="flex text-3xl p-10 rounded-full border-4 border-black"
          type="button"
          onClick={onOpenModal}
        >
          Create Profile
          <AiOutlineProfile />
        </button>
      </div>
      <Modal classNames="" open={open} onClose={onCloseModal} center>
        {profileModal}
      </Modal>
    </div>
  );
}

export default Profile;
