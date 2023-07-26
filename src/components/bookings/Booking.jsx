import React from 'react';
import './book.css';

const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label className="">Destination</label>
          <select className="lg:w-[300px] md:w-full borde rounded-md p-2">
            <option className="">Grande Antiqua</option>
            <option className="">Bora Bora</option>
            <option className="">Maldives</option>
            <option className="">Santorini</option>
            <option className="">Bali</option>
          </select>
        </div>

        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label className="">Check-In</label>
            <input type="date" className="border rounded-md p-2" />
          </div>

          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label className="">Check-Out</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
        </div>

        <div className="flex flex-col my-2 p-2 w-full">
          <label htmlFor="">Search</label>
          <button className="btn w-[75%]">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
