import React from 'react'
import Navbar from './shared/Navbar'
import CampaignList from './CampaignList'

const randomCampaign = [1]

function Browse() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto my-12 px-4 flex flex-col items-center text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Search Results ({randomCampaign.length})
        </h1>
        <div className="flex justify-center w-full">
          <div className="w-full md:w-4/5 lg:w-3/4">
            {randomCampaign.map((item, index) => (
              <CampaignList key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse

