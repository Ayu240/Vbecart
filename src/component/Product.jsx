import React, { useState } from "react";

const products = [
  {
    title: "T-Shirt",
    price: "$55.99",
    image: "https://i.pinimg.com/736x/12/36/ad/1236ad818c0561546a861e5a97dc37b1.jpg",
    descr: "A stylish and comfortable casual shirt for men..."
  },
  {
    title: "Shirts",
    price: "$55.99",
    image: "https://i.pinimg.com/736x/c1/11/3e/c1113e1caab69f830d29b6a7467c0212.jpg",
  },
  {
    title: "womens's casual jeans",
    price: "$45.99",
    image: "https://i.pinimg.com/736x/01/28/64/012864819277d4448b71b9c9d72ac023.jpg",
  },
  {
    title: "Jeans for Men's",
    price: "$55.99",
    image: "https://i.pinimg.com/736x/a1/d7/84/a1d7840ad9c93d88e9704da027f50e01.jpg",
  },
  {
    title: "Mens's Casual Shirt",
    price: "$55.99",
    image: "https://img.fantaskycdn.com/52edc0fc378a411f89e8e44759a0798b_750x.jpeg",
    descr: "A stylish and comfortable casual shirt for men..."
  },
  {
    title: "Primium Brand shrits",
    price: "$55.99",
    image: "https://i.pinimg.com/736x/4c/6e/a8/4c6ea85bec9a25c43b159af08d4361cb.jpg",
  },
  {
    title: "Casual Shoes",
    price: "$55.99",
    image: "https://i.pinimg.com/736x/9b/d0/94/9bd09460359d13117b72cbf563d5a3b8.jpg",
  },
  {
    title: "Shoes",
    price: "$55.99",
    image: "https://i.pinimg.com/736x/ef/3b/fc/ef3bfcd0d06ddb441bb3d1a65cad2884.jpg",
  },
];

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(products);

  const handleSearch = () => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <section className="mt">
        <h1 className="text-4xl font-bold  text-gray-800">
          FEATURED PRODUCTS
        </h1>

        <div className="flex justify-between items-center">
          <div className="flex gap-6 font-extralight jsustify-center items-center">
            <a href="">Men</a>
            <a href="">Women</a>
          </div>

          <div className="flex gap-4 items-center mt-2">
            <input
              type="text"
              placeholder="Search product..."
              className="border px-2 py-1 text-sm rounded shadow-sm w-48"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600  "
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

        </div>
      </section>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide mb-8 p-2">
        {filtered.map((product, index) => (
          <div
            key={index}
            className="min-w-[200px] bg-gray-100 rounded-lg shadow-md p-6 flex-shrink-0 text-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-contain mb-3"
            />
            <h3 className="text-md font-semibold text-gray-700">{product.title}</h3>
            {/* <p className="text-black font-bold">{product.price}</p> */}
          </div>
        ))}
      </div>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide mb-8 p-2">
        <section className="flex flex-col items-center justify-center ">
          <div className="min-w-[280px] bg-gray-100 rounded-xl p-6 flex-shrink-0 flex flex-col justify-between items-center text-center">

            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-400 leading-snug">
                THIS SUMMER <br />
                <span className="text-black tracking-wide mt-1">SEASON SALE</span> <br />
                IS LIVE 
              </h2>
              <button className="bg-red-500 text-white w-full border-4 rounded  py-2">
            DISCOVER MORE
          </button>
            </div>
          </div>

        </section>

        <div className="min-w-[280px] bg-gray-100 rounded-xl p-4 flex-shrink-0 flex flex-col items-center text-center shadow-lg">
          <img
            src="https://i.pinimg.com/736x/a1/90/d3/a190d34ccbf2ad7a1f0f59f3fe39c8e6.jpg"
            alt="T-Shirt"
            className="mb-4 w-full h-60 object-cover rounded-lg"
          />
          <p className="text-sm font-medium">
            STYLISH T-SHIRT
          </p>
          <p className="text-red-500 font-semibold mt-1">Starting at Just $9.99</p>
        </div>

        <div className="min-w-[280px] bg-gray-100 rounded-xl p-4 flex-shrink-0 flex flex-col items-center text-center shadow-lg">
          <img
            src="https://i.pinimg.com/736x/bb/1d/35/bb1d351257d05978c2ecaf37e4190042.jpg"
            alt="T-Shirt"
            className="mb-4 w-full h-60 object-cover rounded-lg"
          />
          <p className="text-sm font-medium text-center">
            JEANS
          </p>
          <p className="text-red-500 font-semibold mt-1">Starting at Just $19.99</p>
        </div>

        <div className="min-w-[280px] bg-gray-100 rounded-xl p-4 flex-shrink-0 flex flex-col justify-between items-center text-center shadow-lg">
          <img
            src="https://i.pinimg.com/736x/83/4c/5f/834c5f1811664c52a3e63bc863be9e86.jpg"
            alt="Skater"
            className="w-full h-60 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-600 mt-1">  SKATER STYLE <br />
          NOW IN STOCK</p>
          <button className="bg-red-500 text-white w-full border-4 rounded  py-2">
            DISCOVER MORE
          </button>

        </div>


      </div>
    </div>
  );
};

export default LandingPage;
