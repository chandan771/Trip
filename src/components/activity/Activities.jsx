import React from 'react';

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          src="https://images.unsplash.com/photo-1641150557653-e4c409426e59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
          alt="/"
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
        />
      </div>

      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold">
          Cruise Ship
        </h3>
        <img
          src="https://images.pexels.com/photos/3663915/pexels-photo-3663915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
        />
      </div>

      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold">
          Exploration
        </h3>
        <img
          src="https://images.pexels.com/photos/7348963/pexels-photo-7348963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
        />
      </div>
    </div>
  );
};

export default Activities;
