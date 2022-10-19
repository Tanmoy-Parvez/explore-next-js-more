
const PostDetails = ({post}) => {
    return (
        <div>
            <div className="card text-white w-full my-5 bg-gray-500 shadow-xl">
                <div className="card-body">
                    <p className="">Post Id: {post?.id}</p>
                    <h2 className="text-xl">{post?.title}</h2>
                    <p className="text-xl">{post?.body}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    return {
        props: {
            post: data,
        }
    }
}

export const getStaticPaths = async () => { 
    return {
        paths: [
            {
                params: {
                    postId: '1',
                },
            }
        ],
        fallback: false,
    }
}