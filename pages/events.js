
const EventsList = ({ eventList }) => {
    console.log(eventList);
    return (
        <div>
            <h1 className="text-3xl text-center text-white">You have { eventList.length} events to enjoy.</h1>
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