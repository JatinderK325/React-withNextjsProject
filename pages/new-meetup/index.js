// our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const addMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    };

    return (
        // <Layout> - we can utilize _app.js and wrap it with <Layout> in order to make it easy to get <Layout> wrapper in different components instead of wrapping each component with <Layout> manually.
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        // </Layout>
    );
}

export default NewMeetupPage;