
const Banner = () => {
    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className="hero min-h-[480px]" style={{ backgroundImage: 'url(https://i.ibb.co/SJh3xyD/showing-good-results-group-young-freelancers-office-have-conversation-smiling.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold">Stitching Stories: Embroidered Artistry</h1>
                            <p className="mb-5">Explore intricate threads of tradition and innovation in our curated embroidery collection. Discover exquisite floral motifs and bold designs</p>
                            <button className="px-8 rounded-none btn border-2 border-[#b18b5e] text-white bg-transparent ">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-[480px]" style={{ backgroundImage: 'url(https://i.ibb.co/tDMt0YX/group-people-working-out-business-plan-office.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold">Cozy Creations: Knit & Crochet Delights</h1>
                            <p className="mb-5">Wrap yourself in warmth with our knit and crochet collection. From stylish scarves to cuddly amigurumi, find your perfect handmade creation.

                            </p>
                            <button className="px-8 rounded-none btn border-2 border-[#b18b5e] text-white bg-transparent">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-[480px]" style={{ backgroundImage: 'url(https://i.ibb.co/R9rGpC0/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold">Quilted Whispers: Patchwork Wonders</h1>
                            <p className="mb-5">Delve into the world of quilting with our patchwork wonders. Each quilt tells a tale of craftsmanship and creativity.
                            </p>
                            <button className="px-8 rounded-none btn border-2 border-[#b18b5e] text-white bg-transparent">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero min-h-[480px]" style={{ backgroundImage: 'url(https://i.ibb.co/k4dw5gp/modern-equipped-computer-lab-1.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold">Flexible Co-working Spaces for Entrepreneurs</h1>
                            <p className="mb-5">Find flexible co-working spaces designed for entrepreneurs. Offering convenience, community, and affordability, these spaces empower individuals and small teams to work, connect, and grow together in dynamic shared environments.</p>
                            <button className="px-8 rounded-none btn border-2 border-blue-600 text-white bg-transparent">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;