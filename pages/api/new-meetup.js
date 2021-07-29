import { MongoClient } from 'mongodb';

// POST /api/new-meetup
const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const data = req.body;
            const client = await MongoClient.connect(
                'mongodb+srv://chris:Z162UNFNgfW2T3MF@meetupsdb.8lo9i.mongodb.net/MeetUps?retryWrites=true&w=majority'
            );

            const db = client.db();
            const meetUpsCollection = db.collection('MeetUps');
            const result = await meetUpsCollection.insertOne(data);
            console.log(result);

            client.close();

            res.status(201).json({ message: 'MeetUp Posted!' });
        } catch (err) {
            console.log('There has been an Error: ', err);
        }
    }
};

export default handler;
