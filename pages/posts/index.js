
const PostList = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <div key={post.id} className="card text-white w-full my-5 bg-gray-500 shadow-xl">
                    <div className="card-body">
                        <p className="">Post Id: {post?.id}</p>
                        <h2 className="text-xl">{post?.title}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline">Details</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PostList;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        props: {
            posts: data,
        }
    }
}