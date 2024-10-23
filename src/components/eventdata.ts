import {
  jw,
  ba,
  cw,
  bob,
  th,
  workshop,
  cementpottery,
  ctc,
  tower_1,
  quake_img,
  pot_img,
  essay_img,
  inno_img,
  mud_img,
  brush_img,
  joist_img,
} from '../assets';

interface EventDataProps {
  title: string;
  image: string;
  slug: string;
  registration_status: 'live' | 'closed' | 'reopened' | 'upcoming';
  brightness_adj?: boolean;
  category: 'event' | 'workshop';
}

export const EventData: EventDataProps[] = [
  {
    title: 'Beyond The Canvas',
    image: jw,
    slug: 'beyond_the_canvas',
    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'Bowling Alley',
    image: ba,
    slug: 'bowling_alley',
    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'Brick-O-Brick',
    image: bob,
    slug: 'brick-o-brick',
    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'Coordination Clash',
    slug: 'coordination_clash',
    image:
      'https://res.cloudinary.com/dm2pha7cn/image/upload/v1729670147/ici-fest-24/uaqlsgrmumemje5l2myb.jpg',
    brightness_adj: true,
    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'Crack The circuit',
    image:
      'https://img.freepik.com/premium-vector/close-up-hand-with-screwdriver-fixing-circuit-flat_1324820-1993.jpg?w=1380',
    slug: 'crackthecircuit',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Drone Workshop',
    image:
      'https://img.freepik.com/premium-photo/drone-flies-rural-country-road_134345-7534.jpg?w=740',
    slug: 'drone_workshop',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'E-Gaming (VALORANT)',
    image:
      'https://img.freepik.com/free-photo/cartoon-soldier-with-combat-war_23-2151624782.jpg?t=st=1729618960~exp=1729622560~hmac=53ae6e45b998d48579baf6cc158489c62b74965d3929149f26aa52f7ed536ea1&w=900',
    slug: 'egamingvalorant',
    brightness_adj: true,

    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'E-Gaming (BGMI)',
    image:
      'https://img.freepik.com/free-photo/front-view-soldier-wearing-camouflage-equipment_23-2151001978.jpg?t=st=1729619013~exp=1729622613~hmac=e26179608c80b96a8a4e60b24430f9f6c0e790b56d97f7311ce5e54518cbd79c&w=1060',
    slug: 'egamingbgmi',
    brightness_adj: true,

    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'Engine Exotics',
    image:
      'https://img.freepik.com/free-photo/futuristic-city-with-high-tech-mobility-social-welfare_23-2151065350.jpg?t=st=1729619078~exp=1729622678~hmac=cae1845d1246d7021285a55fb2a58d570ba4e3873dc51245e78d57032afc0bbb&w=1060',
    slug: 'engine_exotics',
    brightness_adj: true,

    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'Fabric Of Fantasy',
    image:
      'https://img.freepik.com/premium-photo/fantasy-wallpaper-fabric-life_746565-161621.jpg?w=740',
    slug: 'fabricoffantacy',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Jenga Palooza',
    image:
      'https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/01/31195901/shutterstock_559355647-1.jpg',
    slug: 'jengaplooza',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Joist Kwik',
    image: joist_img,
    slug: 'joist_kwik',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'MUN',
    image:
      'https://img.freepik.com/free-photo/rear-view-female-business-executive-giving-speech_107420-63815.jpg?t=st=1729664530~exp=1729668130~hmac=4f2be49154366e3803e270e3db7265bec402ae553dd9958f60da8b1728675f20&w=996',
    slug: 'ici_mun',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Quiz-A-Thon',
    image:
      'https://img.freepik.com/free-vector/modern-teamwork-concept-with-flat-design_23-2147852841.jpg?t=st=1729619348~exp=1729622948~hmac=5e059f9b1b9e1e4effb944549e77c4f356ca84f71dc3bd6257271289e6c8c5dc&w=740',
    slug: 'quiz_a_thon',
    brightness_adj: true,

    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'Scavenger Hunt',
    image: th,
    slug: 'scavenger_hunt',
    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'Tech Connect The Exhibition',
    image:
      'https://img.freepik.com/free-vector/virtual-reality-friends-cartoons_18591-52228.jpg?t=st=1729619270~exp=1729622870~hmac=1f28822e1389bcb6e491dd0be081b78be6622962c0b3f65ec79d6d6286b29a5e&w=740',
    slug: 'techconnect',
    brightness_adj: true,

    registration_status: 'live',
    category: 'event',
  },

  {
    title: 'The Pitch Perfect',
    image:
      'https://img.freepik.com/free-vector/people-starting-business-project-illustrated_23-2148865214.jpg?size=626&ext=jpg&ga=GA1.1.1629078878.1726675673&semt=ais_hybrid',
    slug: 'pitch_perfect',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Tower Craft',
    image: tower_1,
    slug: 'tower_craft',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Web-A-Thon',
    image:
      'https://img.freepik.com/free-photo/web-hosting-development-connection-networking-concept_53876-165256.jpg?t=st=1729614322~exp=1729617922~hmac=a6a47a473a62c2d4ab1a7f32a2c1f64a341e5eff534c1c860644df55b62a43a3&w=826',
    slug: 'web_a_thon',
    brightness_adj: true,

    registration_status: 'live',
    category: 'event',
  },
  // {
  //   title: 'Advance Construction Technology',
  //   image:
  //     'https://img.freepik.com/free-photo/african-american-woman-using-vr-glasses-work_482257-10518.jpg?t=st=1729664844~exp=1729668444~hmac=c892a6baabbee8abd62f5585d0dcada0bf5eef2ec0440f35c5ca75757e09329f&w=996',
  //   slug: 'adv_construction',
  //   brightness_adj: true,

  //   registration_status: 'live',
  //   category: 'event',
  // },
  // {
  //   title: 'Crack the Circuit',
  //   image: ctc,
  //   slug: 'crackthecircuit',
  //   registration_status: 'live',
  // category:"event",
  // },
  // {
  //   title: 'Robo Soccer',
  //   image: "https://res.cloudinary.com/dm2pha7cn/image/upload/v1729666150/ici-fest-24/qo3iez58b3tsvqizrtnr.png",
  //   slug: 'robo_soccer',
  //   registration_status: 'live',
  // category:"event",
  //   brightness_adj: true
  // },
  {
    title: 'Off Road Odyssey',
    image:
      'https://img.freepik.com/free-photo/black-white-view-off-road-vehicle-driven-rough-terrain_23-2151476145.jpg?t=st=1729653960~exp=1729657560~hmac=664437ea4ea3befb0ebfffd4cebce02d4e9cc992fcffcff96888e17b7f58c273&w=996',
    slug: 'offroad_odyssey',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },

  {
    title: 'Drag Race',
    image:
      'https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635442.jpg?t=st=1729654034~exp=1729657634~hmac=f4b2a48e26717f42abfa840edb526ab18c8de904e7ac07f5ff09aab0743d0b1c&w=996',
    slug: 'drag_race',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  // {
  //   title: 'EV - Workshop',
  //   image: 'https://img.freepik.com/free-vector/electric-car-concept-illustration_114360-927.jpg?t=st=1729620622~exp=1729624222~hmac=b7a9ae6fb46ddfc354e0f8fd1302292999f698676c39d339689d39229b201d27&w=1060',
  //   slug: 'ev_workshop',
  //   registration_status: 'live',
  // category:"event",
  //   brightness_adj:true
  // },

  // {
  //   title: 'IGBC',
  //   image: cw,
  //   slug: '',
  //   registration_status: 'live',
  // category:"event",
  // },
  // {
  //   title: 'Walkathon & Cyclothon',
  //   image: cw,
  //   slug: '',
  //   registration_status: 'live',
  // category:"event",
  // },

  // {
  //   title: 'Ball and Pen Showdown',
  //   image: essay_img,
  //   slug: '',
  //   registration_status: 'live',
  // category:"event",
  // },
  // {
  //   title: 'Ball and Pen Showdown',
  //   image: essay_img,
  //   slug: '',
  //   registration_status: 'live',
  // category:"event",
  // },
  // {
  //   title: 'Ball and Pen Showdown',
  //   image: essay_img,
  //   slug: '',
  //   registration_status: 'live',
  // category:"event",
  // },
  // {
  //   title: 'Ball and Pen Showdown',
  //   image: essay_img,
  //   slug: '',
  //   registration_status: 'live',
  // category:"event",
  // },
  // {
  //   title: 'Ball and Pen Showdown',
  //   image: essay_img,
  //   slug: '',
  //   registration_status: 'live',
  // category:"event",
  // },
];
