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
    title: 'Bowling Alley',
    image: ba,
    slug: '',
    registration_status: 'upcoming',
  },
  {
    title: 'Startup Expo',
    image:
      'https://img.freepik.com/free-vector/people-starting-business-project-illustrated_23-2148865214.jpg?size=626&ext=jpg&ga=GA1.1.1629078878.1726675673&semt=ais_hybrid',
    slug: '',
    registration_status: 'upcoming',
    brightness_adj: true,
  },
  {
    title: 'Crack the Circuit',
    image: ctc,
    slug: '',
    registration_status: 'upcoming',
  },

  {
    title: 'Brick-O-Brick',
    image: bob,
    slug: '',
    registration_status: 'upcoming',
  },

  // {
  //   title: 'IGBC',
  //   image: cw,
  //   slug: '',
  //   registration_status: 'upcoming',
  // },
  {
    title: 'Walkathon & Cyclothon',
    image: cw,
    slug: '',
    registration_status: 'upcoming',
  },
  {
    title: 'Scavenger Hunt',
    image: th,
    slug: '',
    registration_status: 'upcoming',
  },
  {
    title: 'Jenga Palooza',
    image:
      'https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/01/31195901/shutterstock_559355647-1.jpg',
    slug: '',
    registration_status: 'upcoming',
    brightness_adj: true,
  },
  {
    title: 'Ball and Pen Showdown',
    image: essay_img,
    slug: '',
    registration_status: 'upcoming',
  },
];
