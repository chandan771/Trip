import React from 'react';

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Our Gallery</h2>

      <div className="grid sm:grid-cols-5 gap-4 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <img
            src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <img
            src="https://cdn.wallpapersafari.com/87/26/HlM8pO.jpg"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <img
            src="https://w0.peakpx.com/wallpaper/993/864/HD-wallpaper-holidays-in-paradise-bora-bora-beach-tree-paradise-heaven-dream-blue-holidays-palm-beautiful-clouds-hammock-nice-amazing-vacation-horizon-shadow-silhouettes-sky-cool-awesome-landscape.jpg"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/158/265/306/st-regis-hotel-bora-bora-water-bungalow-wallpaper-preview.jpg"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="more">
          <img
            src="https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <img
            src="https://images.pexels.com/photos/2724079/pexels-photo-2724079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <img
            src="https://images.pexels.com/photos/1024990/pexels-photo-1024990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <img
            src="https://images.pexels.com/photos/12516842/pexels-photo-12516842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <img
            src="https://images.pexels.com/photos/1268892/pexels-photo-1268892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
