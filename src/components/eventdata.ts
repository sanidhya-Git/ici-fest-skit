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
} from '../assets';

interface EventDataProps {
  title: string;
  image: string;
  slug: string;
  registration_status: 'live' | 'closed' | 'reopened' | 'upcoming';
  brightness_adj?: boolean;
}

export const EventData: EventDataProps[] = [
  {
    title: 'beyond the canvas',
    image: jw,
    slug: 'beyond_the_canvas',
    registration_status: 'live',
  },
  {
    title: 'Bowling Alley',
    image: ba,
    slug: 'bowling_alley',
    registration_status: 'live',
  },
  {
    title: 'Brick-O-Brick',
    image: bob,
    slug: 'brick-o-brick',
    registration_status: 'live',
  },
  {
    title: 'coordination Clash',
    image: essay_img,
    slug: 'coordination_clash',
    registration_status: 'live',
  },
  {
    title: 'crack the circuit',
    image: essay_img,
    slug: 'crackthecircuit',
    registration_status: 'live',
  },
  {
    title: 'drone workshop',
    image: essay_img,
    slug: 'drone_workshop',
    registration_status: 'live',
  },
  {
    title: 'E - Gamming (VALORANT)',
    image: essay_img,
    slug: 'egamingvalorant',
    registration_status: 'live',
  },
  {
    title: 'E - Gamming (BGMI)',
    image: essay_img,
    slug: 'egamingbgmi',
    registration_status: 'live',
  },
  {
    title: 'Engine Exotics',
    image: essay_img,
    slug: 'engine_exotics',
    registration_status: 'live',
  },
  {
    title: 'Fabric Of Fantasy',
    image: essay_img,
    slug: 'fabricoffantacy',
    registration_status: 'live',
  },
  {
    title: 'Jenga Palooza',
    image:
      'https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/01/31195901/shutterstock_559355647-1.jpg',
    slug: 'jengaplooza',
    registration_status: 'live',
    brightness_adj: true,
  },
  {
    title: 'joist Kwik',
    image: essay_img,
    slug: 'joist_kwik',
    registration_status: 'live',
  },
  {
    title: 'MUN',
    image: essay_img,
    slug: 'ici_mun',
    registration_status: 'live',
  },
  {
    title: 'Quiz-A-Thon',
    image: essay_img,
    slug: 'quiz_a_thon',
    registration_status: 'live',
  },
  {
    title: 'Scavenger Hunt',
    image: th,
    slug: 'scavenger_hunt',
    registration_status: 'live',
  },
  {
    title: 'Tech Connect The Exhibition',
    image: essay_img,
    slug: 'techconnect',
    registration_status: 'live',
  },

  {
    title: ' The Pitch Perfect',
    image:
      'https://img.freepik.com/free-vector/people-starting-business-project-illustrated_23-2148865214.jpg?size=626&ext=jpg&ga=GA1.1.1629078878.1726675673&semt=ais_hybrid',
    slug: 'pitch_perfect',
    registration_status: 'live',
    brightness_adj: true,
  },
  {
    title: 'Tower Craft',
    image: th,
    slug: 'tower_craft',
    registration_status: 'live',
  },
  {
    title: 'Web-A-Thon',
    image: 'https://img.freepik.com/free-photo/web-hosting-development-connection-networking-concept_53876-165256.jpg?t=st=1729614322~exp=1729617922~hmac=a6a47a473a62c2d4ab1a7f32a2c1f64a341e5eff534c1c860644df55b62a43a3&w=826',
    slug: 'webathon',
    registration_status: 'live',
  },
  {
    title: 'Crack the Circuit',
    image: ctc,
    slug: 'crackthecircuit',
    registration_status: 'live',
  },



  // {
  //   title: 'IGBC',
  //   image: cw,
  //   slug: '',
  //   registration_status: 'live',
  // },
  // {
  //   title: 'Walkathon & Cyclothon',
  //   image: cw,
  //   slug: '',
  //   registration_status: 'live',
  // },




  // {
  //   title: 'Ball and Pen Showdown',
  //   image: essay_img,
  //   slug: '',
  //   registration_status: 'live',
  // },
  // {
  //   title: 'Ball and Pen Showdown',
  //   image: essay_img,
  //   slug: '',
  //   registration_status: 'live',
  // },
  // {
  //   title: 'Ball and Pen Showdown',
  //   image: essay_img,
  //   slug: '',
  //   registration_status: 'live',
  // },
  // {
  //   title: 'Ball and Pen Showdown',
  //   image: essay_img,
  //   slug: '',
  //   registration_status: 'live',
  // },
  // {
  //   title: 'Ball and Pen Showdown',
  //   image: essay_img,
  //   slug: '',
  //   registration_status: 'live',
  // },
];
