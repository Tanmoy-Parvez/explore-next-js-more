
const CommentsList = ({ comments }) => {
    
    return (
        <div className="grid grid-cols-3 gap-4 mx-auto container mt-5">
            {
                comments.map(comment => <div key={comment.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{comment?.body.length>100 ? comment.body.slice(0,100) + '...':comment.body}</h2>
                        <h3>{comment?.name}</h3>
                        <h3>{comment?.email}</h3>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CommentsList;

export const getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=15");
    const data = await res.json();

    return {
        props: {
            comments: data.slice(0,3),
        }
    }
}