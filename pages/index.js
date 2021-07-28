import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://cdn.pixabay.com/photo/2020/06/28/00/04/chicago-5347435_960_720.jpg',
        address: '175 North State Street Chicago, Illinois 60601',
        description: 'This is a first MeetUp!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://images.unsplash.com/photo-1502021680532-838cfc650323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80',
        address: 'Trolltunga, Norway',
        description: 'This is a second MeetUp!',
    },
];

function HompePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     //fetch data from API
//     return {
//         props: {
//             meetups:  DUMMY_MEETUPS 
//         },
//     };
// }

export async function getStaticProps() {
    //fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 1
    };
}

export default HompePage;
