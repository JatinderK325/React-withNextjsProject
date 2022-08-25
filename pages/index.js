// our-domain.com/
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

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


function HomePage() {
    return (
        <Layout>
            <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>
        </Layout>
    );
}

export default HomePage;