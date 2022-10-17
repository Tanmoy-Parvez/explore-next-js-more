import Link from "next/link";

const News = () => {
    return (
        <div className="card w-96 glass mx-auto mt-24">
            <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <Link href="/blog">
                        <button className="btn btn-xs btn-outline">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default News;