
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