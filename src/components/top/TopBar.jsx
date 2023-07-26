import React from 'react';
import { AiOutlineGitlab } from 'react-icons/ai';
import { GiSandsOfTime } from 'react-icons/gi';
import { BsTelephonePlusFill } from 'react-icons/bs';
import './style.css';

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <AiOutlineGitlab
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">Trip of The Haven</h1>
      </div>

      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <GiSandsOfTime
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">9AM - 4AM</p>
        </div>

        <div className="hidden md:flex items-center px-6">
          <BsTelephonePlusFill
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">+19 8876130029</p>
        </div>

        <button className="btn-grad">Get a Free Coupon</button>
      </div>
    </div>
  );
};

export default TopBar;
