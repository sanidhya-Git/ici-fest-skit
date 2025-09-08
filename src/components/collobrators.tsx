import React from 'react';

import {
  collabOne,
  collabTwo,
  collabThree,
  collabFour,
  collabFive,
  collabSix,
  collabSeven,
  collabEight,
  collabNine,
  img16,
} from '../assets';

export const Collaborators = () => {
  const collab_image = [
    {
      image: img16,
      w: '120px',
      h: '120px',
      w_mob: '90px',
      h_mob: '90px',
    },
    {
      image: collabNine,
      w: '200px',
      h: '150px',
      w_mob: '100px',
      h_mob: '100px',
    },
    {
      image: collabFour,
      w: '120px',
      h: '150px',
      w_mob: '120px',
      h_mob: '120px',
    },
    {
      image: collabThree,
      w: '120px',
      h: '150px',
      w_mob: '120px',
      h_mob: '120px',
    },
    {
      image: collabEight,
      w: '120px',
      h: '150px',
      w_mob: '100px',
      h_mob: '100px',
    },
    {
      image: collabFive,
      w: '120px',
      h: '150px',
      w_mob: '120px',
      h_mob: '120px',
    },
    {
      image: collabTwo,
      w: '120px',
      h: '150px',
      w_mob: '120px',
      h_mob: '120px',
    },
    {
      image: collabSix,
      w: '180px',
      h: '150px',
      w_mob: '120px',
      h_mob: '120px',
    },

    {
      image: collabOne,
      w: '120px',
      h: '150px',
      w_mob: '120px',
      h_mob: '120px',
    },

    {
      image: collabSeven,
      w: '180px',
      h: '150px',
      w_mob: '120px',
      h_mob: '120px',
    },
  ];

  return (
    <div className='block gap-[150px] lg:gap-[250px]'>
      {/* <div className='flex justify-center mt-[50px]'>
        <span className='text-[30px] md:text-[36px] font-extrabold'>
          In association with
        </span>
      </div> */}

      {/* <div className='mt-6 mb-5 flex  flex-wrap gap-7 justify-center items-center'>
        {collab_image.map((img_info, index) => (
          <div key={index} className='flex justify-center'>
            <img
              src={img_info.image}
              width={img_info.w}
              height={img_info.h}
              alt={`${index}`}
              className='mt-[10px] md:mt-0'
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};
