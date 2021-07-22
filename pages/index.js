import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://images.unsplash.com/photo-1589085947445-a491beee038d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    address: '27 Glenholme Dr. Norwalk, CT 06851',
    description: 'This is a first MeetUp!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://images.unsplash.com/photo-1592427161906-c1db4ba75bc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    address: '201 E Randolph St, Chicago, IL 60602',
    description: 'This is a second MeetUp!',
  },
];

function HompePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HompePage;