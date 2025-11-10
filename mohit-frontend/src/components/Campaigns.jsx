import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import CampaignList from "./CampaignList";

function Campaigns() {
  const CampaignArray = [1, 2, 3, 4, 5];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[0%]">
            <FilterCard />
          </div>
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

