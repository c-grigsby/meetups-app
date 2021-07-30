import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetUpDetails = () => {
    return (
        <MeetupDetail
            image={
                'https://cdn.pixabay.com/photo/2020/06/28/00/04/chicago-5347435_960_720.jpg'
            }
            title={'A First Meetup'}
            address={'175 North State Street Chicago, Illinois 60601'}
            description={'The Meetup Description'}
        />
    );
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                address: '175 North State Street Chicago, Illinois 60601',
                description: 'The Meetup Description',
                id: meetupId,
                image: 'https://cdn.pixabay.com/photo/2020/06/28/00/04/chicago-5347435_960_720.jpg',
                title: 'A First Meetup',
            },
        },
    };
}

export default MeetUpDetails;
