
const NewsByCategory = ({ news, category }) => {
    return (
        <div>
            <h1>News of {category}</h1>
            {
                news.map(newsItem => <div key={newsItem.id}>
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.description}</p>
                    <hr />
                </div>
                )
            }
        </div>
    );
};

export default NewsByCategory;

export const getServerSideProps = async (context) => {
    const { params } = context;
    const { category } = params;
    const response = await fetch(`http://localhost:5000/news?category=${category}`);
    const data = await response.json();

    return {
        props: {
            news: data,
            category
        }
    }
}