
// export default Home
import React from 'react'
import Navbar from './shared/Navbar'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestCampaignFunding from './LatestCampaignFunding';
import LatestCampaignCards from './LatestCampaignCards';
import Footer from './shared/Footer';
// import { Upload } from 'lucide-react';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <CategoryCarousel/>
      <LatestCampaignFunding/>
      <LatestCampaignCards/>
      {/* <Upload/> */}
      <Footer/>
    </div>
  );
}

export default Home

// import React from 'react'
// import Navbar from './shared/Navbar'
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// function Home() {
//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-16">
//         {/* Tagline */}
//         <span className="bg-green-100 text-[#096e07] text-sm font-semibold px-4 py-1 rounded-full mb-4">
//           Empower Ideas, Fund Dreams 🌱
//         </span>

//         {/* Main Heading */}
//         <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
//           Start, Support & Grow <br />
//           <span className="text-[#096e07]">Your Dream Enovations</span>
//         </h1>

//         {/* Sub Text */}
//         <p className="text-gray-500 max-w-2xl mb-8">
//           Join the community of changemakers. Create campaigns, raise funds, or
//           support causes you care about — all in one place.
//         </p>

//         {/* Search Bar */}
//         <div className="flex items-center justify-between bg-white rounded-full shadow-md w-full max-w-lg px-4 py-2">
//           <Input
//             type="text"
//             placeholder="Search for campaigns, creators, or causes..."
//             className="border-0 focus:ring-0 focus:outline-none w-full"
//           />
//           <Button className="bg-[#096e07] hover:bg-[#05892a] rounded-full px-6">
//             Search
//           </Button>
//         </div>
//       </section>

//       {/* Latest Campaigns Section */}
//       <section className="text-center py-12 bg-gray-50">
//         <h2 className="text-2xl font-semibold mb-4">
//           🌟 Latest & Top Fundraising Campaigns
//         </h2>
//         <p className="text-gray-500">No Campaigns Available Yet</p>
//       </section>

//       {/* Footer */}
//       <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} CrowdfundPortal. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default Home