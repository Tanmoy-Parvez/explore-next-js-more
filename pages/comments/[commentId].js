import Head from "next/head";

const CommentDetails = ({ comment }) => {
    
    return (
        <>
          <Head>
                <title>
                    Next.JS-Comments-{ comment?.id}
                </title>
            </Head>
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
        </>
    );
};

export default CommentDetails;

export const getStaticPaths = async() => { 
    const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=15");
    const data = await res.json();

    const paths = data.map(comment => {
        return {
            params: {
                commentId: `${comment.id}`,
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (id) => { 
    const { params } = id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`);
    const data = await res.json();
    console.log(data);
    return {
        props: {
            comment: data,
        }
    }
}
