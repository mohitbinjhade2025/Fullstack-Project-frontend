// import React from 'react'
// import Navbar from './shared/Navbar';
// import LatestCampaignCards from './LatestCampaignCards';
// import Campaigns from './Campaigns';
// import CampaignList from './CampaignList';

// const randomCampaign = [1];
// function Browse() {
//   return (
//     <div>
//         <Navbar/>
//         <div className="max-w-7xl mx-auto my-10">
//             <h1>Search Results ({randomCampaign.length})</h1>
//             <div className="grid grid-cols-3 gap-4">
//                 {
//                     randomCampaign.map((item, index)=>{
//                         return(
//                             <CampaignList/>
//                         )
//                     })
//                 }

//             </div>

//         </div>
//     </div>
//   )
// }

// export default Browse


import React from 'react'
import Navbar from './shared/Navbar'
import CampaignList from './CampaignList'

const randomCampaign = [1]

function Browse() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto my-12 px-4 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Search Results ({randomCampaign.length})
        </h1>

        {/* Campaign Section */}
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

