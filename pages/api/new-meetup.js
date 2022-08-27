// /api/new-meetup
// POST/api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // connect returns a promise hence we can turn our handler function into async function to use await. This gives us connected client.
        const client = await MongoClient.connect('mongodb+srv://jatinder:jatinder123@cluster0.dnaxppe.mongodb.net/meetups?retryWrites=true&w=majority');
        console.log(client);

        // on this client object, we can call db method to get hold of that database to which we are connecting here.
        const db = client.db();

        // now on this database, we can get access to our meetupscollections. Mongodb is a nosql database that works with collections full of documents. collections are kind of tables and documents are enteries in these tables.
        // so we have collection that holds multiple documents.
        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        // to close the database connection once we are done.
        client.close();

        // we need to use 'res' object to send back a response.
        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;
