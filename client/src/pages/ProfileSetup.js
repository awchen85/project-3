import { Modal } from 'react-responsive-modal';
import { AiOutlineProfile } from 'react-icons/ai';
import 'react-responsive-modal/styles.css';
import React from 'react';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { TbGenderGenderqueer } from 'react-icons/tb';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';

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
              <label htmlFor="city">
                What city do you want to live in?
                <input
                  className="ml-2 p-1 rounded border-2"
                  name="city"
                  type="text"
                  id="city-chosen"
                />
              </label>
            </div>
            <div className="translate-y-10">
              <h1 className="text-black text-4xl text-center">
                What is your Gender?
              </h1>
            </div>
            <div className="translate-y-16">
              <div className="flex justify-center flex-wrap">
                <div className="flex md:text-4xl text-xl rounded text-red-200 hover:bg-red-50 hover:border-4 hover:border-black m-10 p-3">
                  <label className="flex cursor-pointer" htmlFor="female">
                    <input
                      name="gender"
                      type="radio"
                      id="female"
                      value="female"
                    />
                    <BsGenderFemale />
                    <p>Female</p>
                  </label>
                </div>
                <div className="flex md:text-4xl text-xl rounded text-blue-400 hover:bg-sky-100 hover:border-4 hover:border-black m-10 p-3">
                  <label className="flex cursor-pointer" htmlFor="male">
                    <input name="gender" type="radio" id="male" value="male" />
                    <BsGenderMale />
                    <p>Male</p>
                  </label>
                </div>
              </div>
              <div className="flex justify-center flex-wrap">
                <div className="flex md:text-4xl text-xl rounded text-emerald-400 hover:bg-emerald-100 hover:border-4 hover:border-black m-10 p-3">
                  <label className="flex cursor-pointer" htmlFor="non-bin">
                    <input
                      name="gender"
                      type="radio"
                      id="non-bin"
                      value="non-bin"
                    />
                    <TbGenderGenderqueer />
                    Non-binary
                  </label>
                </div>
                <div className="md:text-4xl text-xl rounded text-purple-400 hover:bg-purple-100 hover:border-4 hover:border-black m-10 p-3">
                  <label className="flex cursor-pointer" htmlFor="other">
                    <input
                      name="gender"
                      type="radio"
                      id="other"
                      value="other"
                    />
                    <HiOutlineDotsCircleHorizontal />
                    Other
                  </label>
                </div>
              </div>
              <div className="flex justify-center md:text-4xl text-xl rounded text-yellow-500 hover:bg-yellow-100 hover:border-4 hover:border-black m-10 p-3">
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
          </div>
        </div>
      </fieldset>
    </form>
  );
  return (
    <div>
      <div className="flex justify-center m-5">
        <button
          className="flex md:text-4xl text-3xl p-10 rounded-full border-4 border-black"
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
