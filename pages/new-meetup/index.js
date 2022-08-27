// our-domain.com/new-meetup
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData) {
        // sending request to our own internal api '/api/new-meetup' for adding new meetup in the database.
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        console.log(data);
        router.push('/');

    };

    return (
        // <Layout> - we can utilize _app.js and wrap it with <Layout> in order to make it easy to get <Layout> wrapper in different components instead of wrapping each component with <Layout> manually.
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        // </Layout>
    );
}

export default NewMeetupPage;