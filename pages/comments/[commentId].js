
const CommentDetails = ({ comment }) => {
    console.log(comment);
    return (
        <div>
            <h1>This is details page</h1>
            
        </div>
    );
};

export default CommentDetails;

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`);
    const data = await res.json();
    console.log(data);
    return {
        props: {
            comment: data,
        }
    }
}

export const getStaticPaths = () => { 
    return {
        paths: [
            {
                params: {
                    commentId: "1"
                }
            },
            {
                params: {
                    commentId: "2"
                }
            },
            {
                params: {
                    commentId: "3"
                }
            },
        ],
        fallback: false,
    }
}


