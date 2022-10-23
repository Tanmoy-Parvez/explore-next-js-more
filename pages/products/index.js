import Head from "next/head";

const ProductList = ({ products}) => {
    return (
        <div>
            <Head>
                <title>Next.JS-Product List</title>
            </Head>
            
        </div>
    );
};

export default ProductList;

export const getStaticProps = async () => {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    // console.log(data);
    return {
        props: {
            products: data,
        }
    };
};