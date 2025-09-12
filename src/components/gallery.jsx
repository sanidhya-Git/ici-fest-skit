import {
  new_a,
  new_d,
  new_f,
  new_g,
  new_i,
  new_j,
  new_k,
  new_l,
  new_m,
  new_n,
  new_o,
  new_p,
  new_q,
  new_r,
  new_s,
  new_t,
  new_u,
  new_v,
  new_w,
  new_x,

} from '../assets';

function Gallery() {
  const images = [
      new_s,
      new_r,

  new_t,
  new_u,
  new_v,
  new_w,
  new_x,
    new_a,
    new_d,
    new_f,
    new_g,
    new_i,
    new_j,
    new_k,
    new_l,
    new_m,
    new_n,
    new_o,
    new_p,
    new_q,

  ];

  return (
    <div className='container mx-auto px-1 py-1 lg:px-10 lg:pt-10'>
      <div className='text-center mb-[40px]'>
        <span className='text-[30px] md:text-[36px] font-extrabold'>
          Highlights of {" "}
          <span className='text-[#ff583e]'>ICI</span> Fest
        </span>
      </div>
      <div className='-m-1 flex flex-wrap md:-m-2'>
        {images.map((images, index) => (
          <div
            key={index}
            className='flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2'
          >
            <img
              className='block mx-auto w-full object-cover object-center rounded-[24px] shadow-md'
              src={images}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
