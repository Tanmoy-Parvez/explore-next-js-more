
const CommentDetails = ({ comment }) => {
    console.log(comment);
    return (
        <div>
            <h1>This is details page</h1>
            
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
