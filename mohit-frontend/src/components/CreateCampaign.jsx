import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Link } from "react-router-dom";

const CreateCampaign = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    goalAmount: "",
    category: "",
    deadline: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Campaign Submitted:", form);
    alert("Campaign submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Create a New Campaign
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campaign Title */}
          <div>
            <Label htmlFor="title" className="text-gray-700 font-medium">
              Campaign Title
            </Label>
            <Input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter campaign title"
              className="mt-2"
              required
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="text-gray-700 font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write about your campaign..."
              className="mt-2 h-28"
              required
            />
          </div>

          {/* Goal Amount */}
          <div>
            <Label htmlFor="goalAmount" className="text-gray-700 font-medium">
              Goal Amount (₹)
            </Label>
            <Input
              id="goalAmount"
              name="goalAmount"
              type="number"
              value={form.goalAmount}
              onChange={handleChange}
              placeholder="Enter target amount"
              className="mt-2"
              required
            />
          </div>

          {/* Category */}
          <div>
            <Label htmlFor="category" className="text-gray-700 font-medium">
              Category
            </Label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="environment">Environment</option>
              <option value="technology">Technology</option>
              <option value="community">Community</option>
            </select>
          </div>

          {/* Deadline */}
          <div>
            <Label htmlFor="deadline" className="text-gray-700 font-medium">
              Deadline
            </Label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              value={form.deadline}
              onChange={handleChange}
              className="mt-2"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <Label htmlFor="image" className="text-gray-700 font-medium">
              Upload Campaign Image
            </Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-2"
            />
            {form.image && (
              <img
                src={URL.createObjectURL(form.image)}
                alt="Preview"
                className="mt-3 w-40 h-40 object-cover rounded-lg border"
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <Button type="submit" className="w-full py-3 text-lg">
              <Link to="/Campaign">Create Campaign</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
