import Head from "next/head";
import Link from "next/link";

const Sports = () => {
    return (
        <>
            <Head>
                <title>
                    Next.JS-Blog/Sports
                </title>
            </Head>
            <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto mt-24">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link href="/blog">
                            <button className="btn btn-xs btn-outline">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Sports;