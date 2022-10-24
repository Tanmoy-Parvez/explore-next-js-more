
const NewsList = () => {
    return (
        <div>
            
        </div>
    );
};

export default NewsList;

export const getServerSideProps = async () => {
    const response = await fetch("http://localhost:5000/news");
    const data = await response.json();
    console.log(data);
    return {
        props: {
            
        }
    }
}