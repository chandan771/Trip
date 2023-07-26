import React from 'react';

const HeroBackground = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80"
        alt="/"
        className="w-full h-full object-cover"
      />

      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl italic">Find Your Dream Trip</h1>
          <h2 className="text-4xl py-4 italic">With Us</h2>
          <p className="italic">
            Relax on sun beds along the Amber Sands beach, enjoying light snacks
            and cocktails. Swim in the warm, calm and crystal clear water, or
            take out our Amber Sands kayaks or paddle boards and listening to
            the waves crashing the shore while enjoying cold drinks from our
            beach bar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;
