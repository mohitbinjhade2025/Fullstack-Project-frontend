import React, { useState } from "react";

function FilterCard({ onFilterChange }) {
  const [filters, setFilters] = useState({
    category: "All",
    search: "",
  });

  const handleChange = (e) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
      <input
        type="text"
        name="search"
        placeholder="Search campaigns..."
        value={filters.search}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        <option value="All">All Categories</option>
        <option value="Science & AI">Science & AI</option>
        <option value="Technology">Technology</option>
        <option value="Education">Education</option>
        <option value="Health & Wellness">Health & Wellness</option>
        <option value="Environment">Environment</option>
      </select>
    </div>
  );
}

export default FilterCard;
