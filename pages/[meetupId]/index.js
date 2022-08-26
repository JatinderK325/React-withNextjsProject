import MeetupDetail from "../../components/meetups/meetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
            title='First Meetup'
            address='Some street 4, Some City'
            description='This is a first meetup'
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            }
        ],
    };

}

// here we are fetching data for a meetup detail so we need to use 'getStaticProps()' here.
export async function getStaticProps(context) {
    // fetch data from an api
    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                id: meetupId,
                title: 'First Meetup',
                address: 'Some street 4, Some City',
                description: 'This is a first meetup'
            }
        }
    };
}

export default MeetupDetails;