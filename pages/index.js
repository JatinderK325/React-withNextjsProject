// our-domain.com/
import MeetupList from "../components/meetups/MeetupList";
// import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Rue number 5, 1234 city',
        escription: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Rue number 100, 1234 city',
        escription: 'This is a second meetup!'
    },
];


function HomePage(props) {
    return (
        // <Layout>
        <MeetupList meetups={props.meetups}></MeetupList>
        // </Layout>
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
    // fetch data from an API
    // once we are done with the data we need, we need to return an object always.
    return {
        // set props property here. props holds the other object which will be the props object that we receive in our component function i.e 'HomePage'.
        props: {
            meetups: DUMMY_MEETUPS
        },
        // this property is used when we want to re-generate pre-rendered page every 10 seconds in order to get updated if there are data changes.
        revalidate: 10
    };
}

export default HomePage;