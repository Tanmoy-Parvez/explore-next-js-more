
const EventsList = ({ eventList }) => {
    console.log(eventList);

    const handleFilterByCategory = async () => {
        
    }

    return (
        <div className="text-center">
            <h1 className="text-3xl text-center text-white">You have {eventList.length} events to enjoy.</h1>
            <button className="btn mt-5" onClick={handleFilterByCategory}>Filter by Sports Category</button>
            {
                eventList.map(event => <div key={event.id}>
                    <div className="card w-96 bg-base-100 shadow-xl mt-5 mx-auto">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button className="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <p>Title: {event.title}</p>
                            <p>Description: {event.description}</p>
                            <p>Category: {event.category}</p>
                            <p>Date: {event.date}</p>
                        </div>
                    </div>
                </div>)
            }
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