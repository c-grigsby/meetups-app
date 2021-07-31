import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
    const client = await MongoClient.connect(
        'mongodb+srv://chris:deC3ToZOX3LcJhwS@appdb.8lo9i.mongodb.net/MeetUpsDB?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetUpsCollection = db.collection('MeetUps');
    const meetups = await meetUpsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
                description: meetup.description,
            })),
        },
        revalidate: 1,
    };
}

export default HomePage;
