import Avatar1 from '../../assets/images/avatar1.jpg';
import Avatar2 from '../../assets/images/avatar2.png';

const Data = [
  {
    time: {
      startTime: '08:45',
      endTime: '09:30',
    },
    title: 'Check-in, hang out in Tech Garden wi....',
    borderColor: '#eeee00',
    fav: true,
  },
  {
    time: {
      startTime: '08:45',
      endTime: '08:55',
    },
    title: 'Welcome Tivoli Partner Summit 2020',
    fav: true,
    attendes: [
      {
        avatar: Avatar1,
        name: 'Martin Hugosson',
        designation: 'CEO, Anneksia',
      },
      {
        avatar: Avatar2,
        name: 'Maddy Savage',
        designation: 'Journalist and Moderator',
      },
    ],
  },
];

export default Data;
