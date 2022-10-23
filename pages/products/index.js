import Head from "next/head";

const ProductList = ({ products }) => {
    return (
        <div>
            <Head>
                <title>Next.JS-Product List</title>
            </Head>
            <div className="grid grid-cols-3">
                {
                    products.map(product =>
                        <div key={product.id} className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{product?.name}</h2>
                                <p>$ {product?.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
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
        },
        revalidate: 10,
    };
};