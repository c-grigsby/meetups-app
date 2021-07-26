import MeetupDetail from '../../components/meetups/MeetupDetail';  

const MeetUpDetails = () => {
    return (
        <MeetupDetail 
        image={'https://images.unsplash.com/photo-1589085947445-a491beee038d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
        title={'A First Meetup'}
        address={'27 Glenholme Dr. Norwalk, CT 06851'}
        description={'The Meetup Description'}
        />
    );
};

export default MeetUpDetails; 