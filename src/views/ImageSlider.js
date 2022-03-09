import React from 'react';

export default function ImageSlider() {
  const images = [
    'https://source.unsplash.com/random/900x700/?fruit',
    'https://source.unsplash.com/random/900x700/?fruit',
    'https://source.unsplash.com/random/900x700/?fruit',
    'https://source.unsplash.com/random/900x700/?fruit',
  ];
  return (
    <div className="w-full">
      <div className="snap-x snap-proximitry w-full overflow-scroll flex no-scrollbar">
        {images.map((img, index) => (
          <div
            className="snap-center ml-4 flex-shrink-0 w-1/2 lg:w-1/4"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <a href="/">
              <div className="w-full h-full group transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt="main"
                    className="w-full object-cover rounded-lg shadow"
                  />
                  <div className="absolute z-10 bg-gradient-to-t from-black to-transparent w-full h-1/2 group-hover:bottom-0 rounded-b-lg ">
                    <div className="p-4 absolute left-0 bottom-0 w-full">
                      <h1 className="text-white font-black text-xl whitespace-pre-wrap">
                        random
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
