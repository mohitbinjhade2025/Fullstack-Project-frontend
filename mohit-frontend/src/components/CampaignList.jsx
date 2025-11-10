import React, { useEffect, useState } from "react";
import { Bookmark, Clock } from "lucide-react";
import { Button } from "./ui/button";
import FilterCard from "./FilterCard";
import axios from "axios";
import defaultImage from "../assets/image.jpg";




const campaignsData = [
  {
    id: 1,
    title: "Delphinium: Bittersweet Cozy Farming RPG",
    creator: "Sev",
    category: "Gaming",
    image:
      "https://media.istockphoto.com/id/1744748227/photo/video-game-mock-up-screen-gameplay-of-3d-open-world-sandbox-fantasy-video-game-footage-of-rpg.jpg?s=1024x1024&w=is&k=20&c=YWXSSwbIUfZpxqB2l5c--MpsFJ4A-xh0qblBSJxwMEo=",
    goal: "$50,000",
    raised: "$73,500",
    funded: "147%",
    daysLeft: 22,
    tech: "Unity, C#",
    description:
      "Delphinium blends farming, exploration, and emotional storytelling in a relaxing RPG world where your choices shape relationships, seasons, and the fate of your cozy countryside village.",
  },
  {
    id: 2,
    title: "Mental Wellness AI Tracker",
    creator: "MindWell Co.",
    category: "Health & Wellness",
    image:
      "https://media.istockphoto.com/id/2198252709/photo/incident-management-risk-mitigation-process-concept-icons-represent-processes-of-incident.jpg?s=1024x1024&w=is&k=20&c=f-LmGPr6QBpF5PxCZZi5lmVxFx6uEztPvGXIrxJE6xU=",
    goal: 30000,
    raised: 27500,
    daysLeft: 5,
    description:
      "An AI-powered app that helps users monitor mood changes, reduce stress, and build mindfulness habits using real-time emotional analytics and personalized wellness recommendations.",
  },
  {
    id: 3,
    title: "Wonderland’s War Duel",
    creator: "Druid City Games",
    category: "Board Games",
    image:
      "https://media.istockphoto.com/id/1267012364/vector/the-knight-with-twin-swords.jpg?s=1024x1024&w=is&k=20&c=azhh7sSmUh6fEC8OBSoM9O3sgEpjA5D2sQf5BG6VXBg=",
    goal: "$30,000",
    raised: "$668,400",
    funded: "2228%",
    daysLeft: 4,
    tech: "Illustrator, InDesign",
    description:
      "A strategic board game set in a twisted Wonderland, where players battle for glory using unique character abilities, tactical card play, and immersive storytelling art.",
  },
  {
    id: 4,
    title: "AI Science Innovators",
    creator: "Dr. Maya Singh",
    category: "Science & AI",
    image:
      "https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=IIZaVsQl6mMcOPgyPrVm8ZlCSBwKdwWju4TTnM7BM4Q=",
    goal: "$100,000",
    raised: "$92,000",
    funded: "92%",
    daysLeft: 10,
    tech: "TensorFlow, Python",
    description:
      "An AI-powered research initiative aimed at accelerating scientific discovery through data-driven analysis, machine learning, and open collaboration with global academic communities.",
  },
  {
    id: 5,
    title: "EcoSmart Homes",
    creator: "Green Future Labs",
    category: "Environment Tech",
    image:
      "https://media.istockphoto.com/id/1145222376/photo/modern-smart-house-with-infographics.jpg?s=1024x1024&w=is&k=20&c=amd3fE-IjKBAao8xtT2KHJBcC-ZzoFYCfSnipLhY8T8=",
    goal: "$120,000",
    raised: "$108,500",
    funded: "90%",
    daysLeft: 15,
    tech: "IoT, React, Node.js",
    description:
      "EcoSmart Homes introduces AI-based energy optimization for modern housing, integrating IoT sensors to reduce power waste and promote sustainable, green living for families worldwide.",
  },
  {
    id: 6,
    title: "EduVision: AI for Learning",
    creator: "TechEd Studio",
    category: "Education",
    image:
      "https://media.istockphoto.com/id/1472526754/photo/youngsters-with-limitless-learning-opportunities-who-can-study-from-anywhere-in-the-world.jpg?s=1024x1024&w=is&k=20&c=ik-fcr2Deqgi7w_U82zkzQOoiOgcUIDhKniZu3SyOBI=",
    goal: "$70,000",
    raised: "$84,300",
    funded: "120%",
    daysLeft: 18,
    tech: "Machine Learning, Next.js",
    description:
      "EduVision revolutionizes online learning through adaptive AI that personalizes lessons, tracks student growth, and enhances engagement using interactive, data-driven education models.",
  },
  {
    id: 7,
    title: "AI-Powered Research Assistant",
    creator: "NeuroTech Labs",
    category: "Science & AI",
    image:
      "https://media.istockphoto.com/id/2240110090/photo/ai-everyday-life-concept-businesswoman-using-artificial-intelligence-for-global-knowledge.jpg?s=1024x1024&w=is&k=20&c=BFuTQgNhj6Aeku5mz1kZvk5Osf7jbEm6TpFt1dBJO54=",
    goal: 25000,
    raised: 18700,
    daysLeft: 12,
    description:
      "An intelligent research assistant that uses natural language processing to summarize papers, find related studies, and speed up innovation for scientists and students worldwide.",
  },
  {
    id: 8,
    title: "Next-Gen Solar Charging Tech",
    creator: "EcoCharge",
    category: "Technology",
    image:
      "https://media.istockphoto.com/id/2234508993/vector/two-workers-inspect-solar-panels-in-renewable-energy-facility-showcasing-teamwork-and.jpg?s=1024x1024&w=is&k=20&c=53GdvelaeuQlX4dSCqgcjZDzghpP7AzTNGoSARMbbJk=",
    goal: 40000,
    raised: 31200,
    daysLeft: 25,
    description:
      "EcoCharge develops advanced solar charging systems using nanotech materials that boost energy efficiency and make renewable energy accessible for all portable electronic devices.",
  },
];


function CampaignList() {

  const [campaigns, setCampaigns] = useState([]);


  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/campaign/get", {
          withCredentials: true,
        });
        console.log("Campaigns fetched:", res.data);
        console.log(" Campaigns fetched:", res.data.campaigns);
        setCampaigns(res.data.campaigns || []);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
      }
    };

    fetchCampaigns(); 
  }, []);


  const [filters, setFilters] = useState({
    category: "All",
    search: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredCampaigns = campaignsData.filter((c) => {
    const matchCategory =
      filters.category === "All" || c.category === filters.category;
    const matchSearch = c.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="w-full px-8 py-12 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Explore Top Campaigns 
      </h2>

      <div className="flex justify-center mb-10">
        <div className="w-full max-w-3xl">
          <FilterCard onFilterChange={handleFilterChange} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {filteredCampaigns.map((campaign) => {
          const fundedPercent = Math.round(
            (campaign.raised / campaign.goal) * 100
          );

          return (
            <div
              key={campaign._id}
              className="relative w-[330px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 h-[460px] flex flex-col justify-between"
            >
              <div className="relative overflow-hidden">
                <img src={ campaign.image || defaultImage } alt={campaign.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-md"
                >
                  <Bookmark className="h-4 w-4 text-gray-800" />
                </Button>
              </div>

              <div className="h-1.5 bg-gray-200">
                <div
                  className="h-1.5 bg-green-600 rounded-r-full transition-all duration-700 ease-in-out"
                  style={{
                    width: `${Math.min(
                      Math.round((campaign.collectedFund / campaign.targetFund) * 100),
                      100
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="p-5 relative flex-grow">
                <p className="text-xs text-green-700 font-semibold mb-1 uppercase">
                  {campaign.category || "General"}
                </p>

                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {campaign.title}
                </h3>

                <p className="text-sm text-gray-600 mb-2">
                  By {campaign.organizer || "Unknown Organizer"}
                </p>

                <p className="text-sm text-gray-700 line-clamp-2">
                  {campaign.description}
                </p>
                <div className="absolute inset-0 bg-white/95 p-5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 rounded-xl flex flex-col justify-center">
                  <p className="text-sm text-gray-800 mb-1">
                    <strong>Goal:</strong> ${campaign.goalAmount}
                  </p>

                  {/* <p className="text-sm text-gray-800 mb-1">
                    <strong>Raised:</strong> ${campaign.collectedFund.toLocaleString()}
                  </p> */}

                  <p className="text-sm text-gray-800 mb-1">
                    <strong>Status:</strong> {campaign.status}
                  </p>

                  <p className="text-sm text-gray-800 flex items-center gap-3">
                    <Clock className="h-4 w-4 text-gray-600" />
                    {new Date(campaign.createdAt).toLocaleDateString()}
                  </p>

                  <div className="flex justify-center mt-4 gap-3">
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
                    >
                      View Details
                    </Button>
                    <Button className="bg-green-700 hover:bg-green-800 text-white">
                      Back Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          );
        })}

        {filteredCampaigns.length === 0 && (
          <p className="text-gray-500 text-lg mt-10 col-span-full">
            No campaigns found. Try changing filters.
          </p>
        )}
      </div>
    </div>
  );
}

export default CampaignList;
