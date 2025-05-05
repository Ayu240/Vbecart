import React from "react";

const About = () => {
  return (
    <section className="bg-white p-4 mt">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">About Us</h1>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 mt-2">
          {/* Our Story */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Our Story</h2>
            <p className="text-sm text-black">
              <strong>Our Brand</strong> was founded to create stylish, quality fashion for everyone. We’re committed to sustainability, innovation, and customer satisfaction.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Vision & Mission</h2>
            <p className="text-sm text-black">
              We aim to lead the fashion industry with affordable, comfortable, and trendy designs while upholding ethical and sustainable values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
