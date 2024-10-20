function Gallery() {
  const images = [
    // 'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728638081/ici-fest-24/tpvxkni3jqindhpgxnhw.png',
    // 'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728636254/ici-fest-24/ixdrtk4q0yfn9xdaud0o.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632099/ici-fest-24/pjkbjksgcw6vdgsrr0ll.jpg',
    // 'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632093/ici-fest-24/ocfau0wcst35wx1wbpru.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632090/ici-fest-24/lb11nmfbpl987x8kfosm.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632090/ici-fest-24/f7s1gh112cldcesckxon.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728806945/ici-fest-24/f5kukhb4pwhn8m5gjfza.png',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632090/ici-fest-24/vsshq6x2dpaq13bcickf.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728806945/ici-fest-24/zllvarfp5uhjuy1mr99t.png',
    "https://res.cloudinary.com/dm2pha7cn/image/upload/v1729419680/ici-fest-24/m95tre6r48mv6hkf1yom.png",
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728806945/ici-fest-24/qn0l1iwigsl6zxxrhac4.png',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632090/ici-fest-24/ycofwy9hmkpqvedo8khr.jpg',
    // 'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728836000/ici-fest-24/cxcohuaetnbmkmk5wh3q.png',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728836000/ici-fest-24/re8pzfo01etsxazm4u3o.png',
    // 'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728835999/ici-fest-24/a8qbf6fphpbk9kad3pw3.png',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728927538/ici-fest-24/wgypubcxzmjtueovabzi.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728927537/ici-fest-24/cticui9pz6qienol2pfp.jpg',
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
