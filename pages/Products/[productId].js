import { useRouter } from "next/router";

const ProductId = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <h1>Dynamic Product: {productId}</h1>
        </div>
    );
};

export default ProductId;