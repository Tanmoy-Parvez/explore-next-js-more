import Link from "next/link";

const Blog = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Welcome to Blog Page</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link href="/blog/news">
                        <button className="btn btn-outline mr-2">News Blog</button>
                    </Link>
                    <Link href="/blog/sports">
                        <button className="btn btn-outline mr-2">Sports Blog</button>
                    </Link>
                    <div className="mt-5">
                        <Link href="/">
                            <button className="btn btn-xs btn-outline">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;