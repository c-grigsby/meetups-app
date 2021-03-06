import { Fragment } from 'react';
import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

const MeetUpDetails = ({ image, title, address, description }) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <MeetupDetail
                address={address}
                description={description}
                image={image}
                title={title}
            />
        </Fragment>
    );
};

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        `mongodb+srv://chris:${process.env.MONGO_DB_AUTH}@appdb.8lo9i.mongodb.net/MeetUpsDB?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetUpsCollection = db.collection('MeetUps');
    const meetups = await meetUpsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map((meetup) => ({
            params: {
                meetupId: meetup._id.toString(),
            },
        })),
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        `mongodb+srv://chris:${process.env.MONGO_DB_AUTH}@appdb.8lo9i.mongodb.net/MeetUpsDB?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetUpsCollection = db.collection('MeetUps');
    const selectedMeetup = await meetUpsCollection.findOne({
        _id: ObjectId(meetupId),
    });
    client.close();

    return {
        props: {
            address: selectedMeetup.address,
            description: selectedMeetup.description,
            image: selectedMeetup.image,
            title: selectedMeetup.title,
        },
    };
}

export default MeetUpDetails;
