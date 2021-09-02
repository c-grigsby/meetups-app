import { MongoClient } from 'mongodb';
// POST /api/new-meetup
const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const data = req.body;
            const client = await MongoClient.connect(
                `mongodb+srv://chris:${process.env.MONGO_DB_AUTH}@appdb.8lo9i.mongodb.net/MeetUpsDB?retryWrites=true&w=majority`
            );
            const db = client.db();
            const meetUpsCollection = db.collection('MeetUps');
            const result = await meetUpsCollection.insertOne(data);
            console.log(result);
            client.close();

            res.status(201).json({ message: 'MeetUp Posted!' });
        } catch (err) {
            console.log('There has been an -ERROR-', err);
        }
    }
};

export default handler;
