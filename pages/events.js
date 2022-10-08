
const EventsList = ({ eventList }) => {
    console.log(eventList);
    return (
        <div>
            <h1>This is event page</h1>
        </div>
    );
};

export default EventsList;

export const getServerSideProps = async () => { 

    const res = await fetch(`http://localhost:5000/events`);
    const data = await res.json();
    return {
        props: {
            eventList: data,
        }
    }
}