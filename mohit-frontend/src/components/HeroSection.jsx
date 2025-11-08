import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-white px-6 py-16">
      {/* Tagline */}
      <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
        Empower Ideas, Fund Dreams 🌱
      </span>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
        Start, Support & Grow <br />
        <span className="text-green-700">Your Dream Idea</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 max-w-2xl mb-8">
        Join the community of changemakers. Create campaigns, raise funds, or
        support causes you care about — all in one place.
      </p>

      {/* Search Bar */}
      <div className="flex items-center justify-between bg-white rounded-full shadow-md w-full max-w-lg px-4 py-2">
        <Input
          type="text"
          placeholder="Search for campaigns, creators, or causes..."
          className="border-0 focus:ring-0 focus:outline-none w-full"
        />
        <Button className="bg-green-700 hover:bg-green-800 rounded-full px-6">
          <Link to="/campaign">Search</Link>
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
