import Head from "next/head";
import Link from "next/link";

const CommentsList = ({ comments }) => {
    
    return (
        <>
            <Head>
                <title>
                    Next.JS-Comments
                </title>
            </Head>
            <div className="grid grid-cols-3 gap-4 mx-auto container mt-5 bg-gray-800 p-5">
                {
                    comments.map(comment => <div key={comment.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{comment?.body.length > 100 ? comment.body.slice(0, 100) + '...' : comment.body}</h2>
                            <div className="card-actions justify-end">
                                <Link href={`/comments/${comment?.id}`}>
                                    <button className="btn btn-outline">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default CommentsList;

export const getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=15");
    const data = await res.json();

    return {
        props: {
            comments: data,
        }
    }
}