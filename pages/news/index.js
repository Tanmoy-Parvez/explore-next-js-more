
const NewsList = ({newses}) => {
    return (
        <div>
            <h1>All update news are here</h1>
            {
                newses.map(news => <h3 key={news.id}>{news.id}. {news.title}</h3>)
            }
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
           newses: data, 
        }
    }
}