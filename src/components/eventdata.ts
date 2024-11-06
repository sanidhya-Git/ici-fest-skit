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
  jegga,
  fab,
  tower_img,
} from '../assets';

interface EventDataProps {
  title: string;
  image: string;
  slug: string;
  registration_status: 'live' | 'closed' | 'reopened' | 'upcoming';
  brightness_adj?: boolean;
  category: 'event' | 'workshop' | 'exhibition';
}

export const EventData: EventDataProps[] = [
  {
    title: 'Application of Science',
    image:
      'https://img.freepik.com/free-photo/real-estate-desk-with-keys_23-2147653337.jpg?t=st=1729793363~exp=1729796963~hmac=d22ce8786ef61f51f46dcd643cd720a258e142c1d48b540a3dd35aaf4be00fde&w=996',
    slug: 'application_of_science',
    registration_status: 'live',
    category: 'exhibition',
    brightness_adj: true,
  },
  {
    title: 'Nirman Me Navachaar',
    image:
      'https://img.freepik.com/free-vector/green-energy-vector-concept_1308-130351.jpg?t=st=1729764563~exp=1729768163~hmac=42c7476c8ee2fc8017ef0e27c40af7cbf6772b8bf33d304cd88bad1820f114a2&w=1380',
    slug: 'nirwan_me_navachaar',
    registration_status: 'live',
    category: 'workshop',
    brightness_adj: true,
  },
  {
    title: 'Beyond The Canvas Workshop',
    image: jw,
    slug: 'beyond_the_canvas_workshop',
    registration_status: 'live',
    category: 'workshop',
    brightness_adj: true,
  },
  {
    title: 'Beyond The Canvas Exhibition',
    image: jw,
    slug: 'beyond_the_canvas_exhibition',
    registration_status: 'live',
    category: 'exhibition',
    brightness_adj: true,
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
      'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768577/ici-24/rzsjhzz4aqalbcvlat4z.jpg',
    brightness_adj: true,
    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'Crack The Circuit',
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
    category: 'workshop',
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
    image: fab,
    slug: 'fabricoffantacy',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Jenga Palooza',
    image: jegga,
    slug: 'jengaplooza',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Joist Kwik',
    image:
      'https://img.freepik.com/free-photo/porto-bridge-from-low-angle_181624-29992.jpg?t=st=1729850995~exp=1729854595~hmac=32328a4a0d8c81bc7b10a50301d23bc5d7befd61e7a144f4715d13c5b5eeed41&w=826',
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
    category: 'exhibition',
  },

  {
    title: 'Startup Mela',
    image:
      'https://img.freepik.com/free-vector/people-starting-business-project-illustrated_23-2148865214.jpg?size=626&ext=jpg&ga=GA1.1.1629078878.1726675673&semt=ais_hybrid',
    slug: 'startup_mela',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Tower Craft',
    image: tower_img,
    slug: 'tower_craft',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Crack The Cad',
    image: ctc,
    slug: 'crackthecad',
    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'Web-A-Thon',
    image:
      'https://img.freepik.com/free-vector/illustration-technology-vector_53876-18164.jpg?t=st=1729705272~exp=1729708872~hmac=1b09a832880511706404cbc40a7010b4b06e88054f0235fd3d9cf0d7ad32f35f&w=900',
    slug: 'web_a_thon',
    registration_status: 'live',
    brightness_adj: true,
    category: 'event',
  },
  {
    title: 'Mudaventure',
    image: mud_img,
    slug: 'the-mud-adventure',
    registration_status: 'live',
    brightness_adj: true,
    category: 'event',
  },
  {
    title: 'Robo Soccer',
    image:
      'https://res.cloudinary.com/dfpbty6rt/image/upload/v1729768573/ici-24/gxrngsxdakvcg6zhgy3r.png',
    slug: 'robo_soccer',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
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
    title: 'Robo Drag Race',
    image:
      'https://img.freepik.com/free-photo/f1-racing-24-hours-le-mans-render-3d-illustration_654080-341.jpg?t=st=1729766478~exp=1729770078~hmac=ad2a47280657868a146a3d1165bf05c71705c63787604ce54e92d5cb89a5fe44&w=1060',
    slug: 'drag_race',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },

  {
    title: 'Kabad Se Jugaad',
    image: inno_img,
    slug: 'kabad_se_jugad',
    registration_status: 'live',
    category: 'event',
  },

  {
    title: 'Essay Writing',
    image: essay_img,
    slug: 'essay_writing',
    registration_status: 'live',
    category: 'event',
  },
  {
    title: 'EV Workshop',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRogqHTRuFThuZEpUiecfxCdIJ282eioFeA&s",
    slug: 'ev_workshop',
    registration_status: 'live',
    category: 'workshop',
    brightness_adj: true,
  },
  {
    title: 'Poster Making',
    image: "https://img.freepik.com/free-photo/hands-working_1162-121.jpg",
    slug: 'poster_making',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },
  {
    title: 'Reel Making',
    image: "https://img.freepik.com/free-photo/people-working-together-new-movie_23-2149066340.jpg",
    slug: 'reel_making',
    registration_status: 'live',
    category: 'event',
    brightness_adj: true,
  },

  // {
  //   title: 'Tug Of War',
  //   image:
  //     'https://img.freepik.com/free-photo/mature-people-tug-war_53876-15214.jpg?t=st=1729831871~exp=1729835471~hmac=7d2c1f5f387e473c60e91432db756ea557cb95d329b1171c9c0655a393c8b0bc&w=900',
  //   slug: 'tug_of_war',
  //   registration_status: 'live',
  //   category: 'event',
  //   brightness_adj: true,
  // },
];
