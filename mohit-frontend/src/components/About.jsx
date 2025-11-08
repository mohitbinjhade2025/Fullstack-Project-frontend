import React from "react";
import Navbar from "./shared/Navbar";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Empowering Ideas, Connecting Dreamers 💡
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          CraftLift is a community-driven crowdfunding platform that helps
          creators, innovators, and changemakers bring their ideas to life.
          Whether it’s technology, art, education, or social impact — we make
          innovation possible through the power of people.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
              alt="Our Mission"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission 🚀
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We believe that every great idea deserves a chance. Our mission is
              to bridge the gap between visionaries and the supporters who can
              make their dreams a reality. With transparency, trust, and
              technology, we empower creators to take bold steps forward.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vision 🌍
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To create a world where creativity and innovation have no
              barriers. We envision a global community where ideas flourish, and
              every individual can contribute to a brighter, more sustainable
              future.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Our Vision"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Meet Our Team 👥
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Mohit Binjhade",
                role: "Founder & Lead Developer",
                img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              },
              {
                name: "AAA",
                role: "UI/UX Designer",
                img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              },
              {
                name: "BBB",
                role: "Marketing Head",
                img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all "
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-green-600 py-14 text-center text-white">
        <h2 className="text-3xl font-semibold mb-3">
          Ready to bring your idea to life?
        </h2>
        <p className="mb-6 text-gray-100">
          Start your crowdfunding campaign today and inspire the world with your
          creativity.
        </p>
        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          <Link to="/createcampaign">Start a Campaign</Link>
        </button>
      </section>
    </div>
  );
}

export default About;
