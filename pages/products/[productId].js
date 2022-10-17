import { useRouter } from 'next/router';
import Link from "next/link";
import Header from "../../components/Header/Header";

const ProductId = () => {
    const router = useRouter();
    const productNo = router.query.productId;
    return (
    <>
        <Header />
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-24">
            <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <h2>Details of product {productNo}</h2>
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link href="/">
                        <button className="btn btn-xs btn-outline">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
        
    );
};

export default ProductId;