
import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Edit, Mail, Phone, Heart, Folder } from "lucide-react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const user = {
    name: "Mohit Binjhade",
    email: "mohitbinjhade9@gmail.com",
    phone: "+91 7828832922",
    bio: "Passionate about supporting creative ideas and community projects.",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    totalDonations: 5,
    campaignsCreated: 2,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} alt="user avatar" />
            </Avatar>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                {user.name}
              </h1>
              <p className="text-gray-600">{user.bio}</p>
              <div className="mt-3 space-y-1">
                <p className="flex items-center gap-2 text-gray-700">
                  <Mail size={18} /> {user.email}
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone size={18} /> {user.phone}
                </p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 flex items-center gap-2">
            <Edit size={18} /> Edit Profile
          </Button>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-blue-50 rounded-xl flex flex-col items-center shadow-sm">
            <Heart className="text-blue-600 mb-2" size={28} />
            <h2 className="text-xl font-semibold">{user.totalDonations}</h2>
            <p className="text-gray-600">Campaigns Donated</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl flex flex-col items-center shadow-sm">
            <Folder className="text-green-600 mb-2" size={28} />
            <h2 className="text-xl font-semibold">{user.campaignsCreated}</h2>
            <p className="text-gray-600"><Link to="/Campaign">Campaigns Created</Link></p>
          </div>
        </div>

        {/* Campaign History */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">My Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((campaign) => (
              <div
                key={campaign}
                className="p-5 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50"
              >
                <img
                  src="https://source.unsplash.com/random/400x250?crowdfunding"
                  alt="campaign"
                  className="rounded-xl mb-4 w-full h-40 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  Campaign Title {campaign}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  This is a short description of your campaign.
                </p>
                <Button className="mt-3 w-full"><Link to="/Campaign">View Details</Link></Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
