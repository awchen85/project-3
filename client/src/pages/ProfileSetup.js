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
    <div className="m-5 flex justify-center flex-wrap rounded-full">
      <div>
        <div className="translate-y-10">
          <h1 className="text-black text-5xl text-center">
            What is your Gender?
          </h1>
        </div>
        <div className="translate-y-16">
          <div className="flex justify-center flex-wrap">
            <div className="flex md:text-5xl cursor-pointer text-xl rounded text-red-200 hover:bg-red-50 hover:border-4 hover:border-black m-10 p-3">
              <input type="radio" id="female" value="female" />
              <BsGenderFemale />
              <p>Female</p>
            </div>
            <div className="flex md:text-5xl cursor-pointer text-xl rounded text-blue-400 hover:bg-sky-100 hover:border-4 hover:border-black m-10 p-3">
              <input type="radio" id="male" value="male" />
              <BsGenderMale />
              <p>Male</p>
            </div>
          </div>
          <div className="flex justify-center flex-wrap">
            <div className="flex md:text-5xl cursor-pointer text-xl rounded text-emerald-400 hover:bg-emerald-100 hover:border-4 hover:border-black m-10 p-3">
              <input type="radio" id="non-binary" value="non-binary" />
              <TbGenderGenderqueer />
              <p>Non-binary</p>
            </div>
            <div className="md:text-5xl cursor-pointer text-xl rounded text-purple-400 hover:bg-purple-100 hover:border-4 hover:border-black m-10 p-3">
              <label className="flex" htmlFor="other">
                <input type="radio" id="other" value="other" />
                <HiOutlineDotsCircleHorizontal />
                Other
              </label>
            </div>
          </div>
          <div className="flex justify-center md:text-5xl cursor-pointer text-xl rounded text-yellow-500 hover:bg-yellow-100 hover:border-4 hover:border-black m-10 p-3">
            <input type="radio" id="prefer-not-to-say" value="prefer-not-to-say" />
            <p>Prefer Not to Say</p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="flex justify-center m-5">
        <button className="flex md:text-5xl text-3xl p-10 rounded-full border-4 border-black" type="button" onClick={onOpenModal}>
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
