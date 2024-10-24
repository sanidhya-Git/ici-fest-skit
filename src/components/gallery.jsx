function Gallery() {
  const images = [
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768577/ici-24/ol3ru44emkgjm7wzyvfz.png',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768577/ici-24/vksuxr1tfmjzfjyvbjvf.jpg',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768562/ici-24/wrzsck2uqfk2czvrblip.jpg',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768564/ici-24/mepdn9dnvuvs7cunjc6u.jpg',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768572/ici-24/vupgvdyr9qxg9gp9cvhm.jpg',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768573/ici-24/giqzweiutxehnid9ow4n.jpg',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768573/ici-24/e4f4pqjttdufxr0repap.png',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768571/ici-24/nnxpkt9gxrahzaytoegc.png',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768567/ici-24/xjqudjpfs7s0zbmjigc7.jpg',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768571/ici-24/omxdl1tuz7m8em82eiyw.jpg',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768575/ici-24/ljcpaa3vdzqh9hjlwnhi.jpg',
    'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768570/ici-24/repbazzwl3rakc3thjca.jpg',
  ];

  return (
    <div className='container mx-auto px-1 py-1 lg:px-10 lg:pt-10'>
      <div className='text-center mb-[40px]'>
        <span className='text-[30px] md:text-[36px] font-extrabold'>
          Highlights of ICI FEST{"'"}
          <span className='text-[#ff583e]'>23</span>
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
