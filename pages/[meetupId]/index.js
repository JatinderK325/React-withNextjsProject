import { MongoClient, ObjectId } from "mongodb";
import Head from 'next/head';
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/meetupDetail";

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://jatinder:c0JEDfHimrRtXYry@cluster0.dnaxppe.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))

        // paths: [
        //     {
        //         params: {
        //             meetupId: 'm1',
        //         }
        //     },
        //     {
        //         params: {
        //             meetupId: 'm2',
        //         }
        //     }
        // ],
    };

}

// here we are fetching data for a meetup detail so we need to use 'getStaticProps()' here.
export async function getStaticProps(context) {
    // fetch data from an api for a single meetup.
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect('mongodb+srv://jatinder:c0JEDfHimrRtXYry@cluster0.dnaxppe.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

    client.close();


    return {
        props: {
            meetupData: {
                image: selectedMeetup.image,
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    };
}

export default MeetupDetails;