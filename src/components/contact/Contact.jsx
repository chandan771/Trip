import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by!</p>

      <div className="grid md:grid-cols-2">
        <img
          src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />

        <form className="">
          <div className="grid grid-cols-2">
            <input
              type="text"
              className="border m-2 p-2"
              placeholder="First Name"
            />

            <input
              type="text"
              className="border m-2 p-2"
              placeholder="Last Name"
            />

            <input
              type="email"
              className="border m-2 p-2"
              placeholder="Email..."
            />

            <input
              type="telephone"
              className="border m-2 p-2"
              placeholder="Phone..."
            />

            <input
              type="text"
              className="border col-span-2 m-2 p-2"
              placeholder="Address..."
            />

            <textarea
              cols="30"
              rows="10"
              className="border col-span-2 m-2 p-2"
              placeholder="Description..."
            ></textarea>

            <buttton className="btn">Submit</buttton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
