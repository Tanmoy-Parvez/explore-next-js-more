
const CommentDetails = ({ comment }) => {
    
    return (
        <div className="flex justify-center mt-20">
            <div className="card w-3/5 bg-base-100 shadow-xl image-full">
                <figure><img className="w-full" src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body text-center mt-20">
                    <h2 className="card-title">{comment?.body}</h2>
                    <h3>{comment?.name}</h3>
                    <h3>{comment?.email}</h3>
                </div>
            </div>
        </div>
    );
};

export default CommentDetails;

export const getStaticPaths = () => { 
    return {
        paths: [
            {
                params: {
                    commentId: "1"
                },
            }
        ],
        fallback: false,
    }
}

export const getStaticProps = async () => { 
    const res = await fetch("https://jsonplaceholder.typicode.com/comments/1");
    const data = await res.json();
    console.log(data);
    return {
        props: {
            comment: data,
        }
    }
}
