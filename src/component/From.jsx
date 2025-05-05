import React from 'react';

const ContactPage = () => {
  return (
    <section className=" bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section: Contact Info + Map */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">207-8767-452</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Whatsapp</h3>
              <p className="text-gray-700">082-123-234-345</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center overflow-hidden">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-700">support@yoursite.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Our Shop</h3>
              <p className="text-gray-700">2443 Oak Ridge Omaha, QA 45065</p>
            </div>
          </div>

          <div className="w-full h-64">

            <img className="w-full h-full rounded-lg shadow"
              src="https://miro.medium.com/v2/resize:fit:2000/1*4S3ToRO1EkFWwTbvlUKt8Q.png"
              alt="Location Map"
            />
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to us with any questions or inquiries. We're here to help!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <textarea
              placeholder="Type Here..."
              rows={5}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
