// our-domain.com/
import { Fragment } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
// import Layout from "../components/layout/Layout";

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of highly active React Meetups!"
                />
            </Head>
            {/* <Layout> */}
            <MeetupList meetups={props.meetups}></MeetupList>
            {/* </Layout> */}
        </Fragment>
    );
}

/*
// ----- server side rendering(SSR) ---
export async function getServerSideProps(context){
    const req = context.req;
    const res = context.res;

    // fetch data from an API

    // then returns an object
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
} */

// ----- static generation ----
// we can use this function only in the components of 'pages' folder. If nextJs finds this function then it will first of all always call this function before it calls the component function.

export async function getStaticProps() {
    // fetch data(meetups) from an API.
    const client = await MongoClient.connect('mongodb+srv://jatinder:c0JEDfHimrRtXYry@cluster0.dnaxppe.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    // once we are done with the data we need, we need to return an object always.
    return {
        // set props property here. props holds the other object which will be the props object that we receive in our component function i.e 'HomePage'.
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        // this property is used when we want to re-generate pre-rendered page every 10 seconds in order to get updated if there are data changes.
        revalidate: 1
    };
}

export default HomePage;