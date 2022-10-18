
const Banner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" alt="" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" alt="" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" alt="" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" alt="abc" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;