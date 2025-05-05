import React, { useState, useEffect } from 'react';

const Start = () => {
    const images = [
        "https://i.pinimg.com/736x/20/7d/fa/207dfae2b452e49dad9b9696b57a91a1.jpg",
        "https://i.pinimg.com/736x/21/e7/eb/21e7eb1fcbbb04dae8afaac8394f6335.jpg",
        "https://i.pinimg.com/736x/1a/a4/4b/1aa44b8fc884511367d1c70691cada5b.jpg",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-white text-black font-sans relative">

            {/* Navbar */}
            <header className="flex justify-between items-center px-6 md:px-12 py-4 border-b gap-2">
                <h1 className="text-2xl font-bold tracking-wide">Vibecart</h1>
                <nav className="flex gap-6 text-sm font-medium">
                    <a href="#" className="hover:text-gray-500">HOME</a>
                    <a href="#" className="hover:text-gray-500">COLLECTIONS</a>
                    <a href="#" className="hover:text-gray-500">ABOUT</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 ">

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                    <p className="text-sm text-gray-500">Let fashion reign!</p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Inspire with your <br /> <span className="text-gray-800">style</span>
                    </h2>
                    <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition mb-2">
                        Shop Now
                    </button>
                </div>

                {/* Hero Image */}
                <div className="w-full md:w-1/2 flex justify-center items-end md:mb-0">
                    <img
                        src={images[current]}
                        alt="Hero Fashion"
                        className="w-[300px] md:w-[400px] lg:w-[450px] h-auto object-cover transition-all duration-500"
                    />
                </div>
            </section>

            {/* Footer Banner */}
            <div className="w-full bg-black text-white text-center py-2 text-xs tracking-widest">
                • CLASSY FASHION • CLASSY FASHION • CLASSY FASHION • CLASSY FASHION •
            </div>
        </div>
    );
};

export default Start;
