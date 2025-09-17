import React from 'react';

import {


  img16,
  img23,
  ehcc, 
} from '../assets';

export const Collaborators = () => {
  const collab_image = [

    {
      image: img23,
      w: '120px',
      h: '120px',
      w_mob: '90px',
      h_mob: '90px',
    },
  ];

  return (
    <div className="block gap-[150px] lg:gap-[250px]">
      {/* Association Section */}
      <div className="flex justify-center mt-[50px]">
        <span className="text-[30px] md:text-[36px] font-extrabold">
          In association with
        </span>
      </div>

      <div className="mt-6 mb-5 flex flex-wrap gap-7 justify-center items-center">
        {collab_image.map((img_info, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={img_info.image}
              width={img_info.w}
              height={img_info.h}
              alt={`${index}`}
              className="mt-[10px] md:mt-0"
            />
          </div>
        ))}
      </div>

      {/* Medical Partner Section */}
      <div className="mt-10 text-center">
        <span className="text-[26px] md:text-[32px] font-bold">
          Our Medical Partner
        </span>

        <div className="flex justify-center items-center mt-6">
          <img
            src={ehcc}
            alt="Medical Partner Logo"
            className="w-[150px] md:w-[220px]"
          />
        </div>
      </div>
    </div>
  );
};
