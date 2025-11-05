import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import CampaignList from "./CampaignList";

function Campaigns() {
  // Placeholder array to simulate campaigns; you can replace it with fetched data later
  const CampaignArray = [1, 2, 3, 4, 5];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Container */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar (Filter Section) */}
          <div className="w-full md:w-[0%]">
            <FilterCard />
          </div>

          {/* Campaigns Section */}
          <div className="flex-1 h-[88vh] overflow-y-auto pb-6">
            {CampaignArray.length <= 0 ? (
              <div className="text-center text-gray-500 mt-10">
                No campaigns found.
              </div>
            ) : (
              <CampaignList />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;

