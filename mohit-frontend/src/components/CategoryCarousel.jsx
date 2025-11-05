import React from "react";

function CategoryCarousel() {
  const categories = [
    "Education",
    "Health",
    "Environment",
    "Technology",
    "Community",
  ];

  return (
    <section className="bg-gray-50 py-10 text-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        🌍 Explore Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-white shadow-md border rounded-full px-6 py-3 text-gray-700 font-medium cursor-pointer hover:bg-green-600 hover:text-white transition"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryCarousel;
