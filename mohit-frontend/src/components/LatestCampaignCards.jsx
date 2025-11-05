// // import React from 'react'

// // function LatestCampaignCards() {
// //   return (
// //     <div>LatestCampaignCards</div>
// //   )
// // }

// // export default LatestCampaignCards

// import React from "react";
// import { Button } from "@/components/ui/button";

// function LatestCampaignCards() {
//   const campaigns = [
//     {
//       id: 1,
//       title: "Help Build a Village School",
//       creator: "Aarav Sharma",
//       description: "Raising funds to construct a school for underprivileged children.",
//       image: "https://images.unsplash.com/photo-1600172454284-b74b6a9e1a2b",
//       raised: 4200,
//       goal: 100000,
//     },
//     {
//       id: 2,
//       title: "Support Local Farmers",
//       creator: "GreenGrow Initiative",
//       description: "Helping small farmers access organic fertilizers and irrigation tools.",
//       image: "https://images.unsplash.com/photo-1594183610500-3b4b7a9d08c7",
//       raised: 2500,
//       goal: 80000,
//     },
//     {
//       id: 3,
//       title: "AI-Powered Health Diagnostics",
//       creator: "NeuraHealth Labs",
//       description:
//         "Developing an AI tool that can predict early signs of diseases using medical imaging.",
//       image: "https://images.unsplash.com/photo-1581091215367-59ab6c0a0b1d",
//       raised: 7500,
//       goal: 150000,
//     },
//     {
//       id: 5,
//       title: "Climate Data Intelligence",
//       creator: "EcoAI Research",
//       description:
//         "Using AI models to forecast and mitigate climate risks in rural India.",
//       image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
//       raised: 9200,
//       goal: 180000,
//     },
//     {
//       id: 5,
//       title: "Tech for Rural Students",
//       creator: "EduTech Foundation",
//       description: "Supplying used laptops and digital learning tools for students.",
//       image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
//       raised: 3000,
//       goal: 90000,
//     },
//     {
//       id: 6,
//       title: "Save The Stray Animals",
//       creator: "Paws & Care",
//       description: "Funding for shelter, vaccination, and food for stray animals.",
//       image: "https://images.unsplash.com/photo-1601758124095-0c5b9da9aa1d",
//       raised: 4800,
//       goal: 100000,
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           🌟 Latest & Top Fundraising Campaigns
//         </h2>

//         {/* Campaign Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {campaigns.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
//             >
//               {/* Image */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover"
//               />

//               {/* Content */}
//               <div className="p-5 text-left">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-3">By {item.creator}</p>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {item.description.length > 80
//                     ? item.description.slice(0, 80) + "..."
//                     : item.description}
//                 </p>

//                 {/* Progress Bar */}
//                 <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
//                   <div
//                     className="bg-green-600 h-2.5 rounded-full"
//                     style={{
//                       width: `${(item.raised / item.goal) * 100}%`,
//                     }}
//                   ></div>
//                 </div>
//                 <p className="text-sm text-gray-600 mb-4">
//                   ₹{item.raised.toLocaleString()} raised of ₹
//                   {item.goal.toLocaleString()}
//                 </p>

//                 <Button className="w-full bg-green-600 hover:bg-green-700">
//                   View Campaign
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LatestCampaignCards;


import React from "react";
import { Clock } from "lucide-react";

const campaigns = [
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
  },
  {
    id: 2,
    title: "Mental Wellness AI Tracker",
    creator: "MindWell Co.",
    category: "Health & Wellness",
    image: "https://media.istockphoto.com/id/2198252709/photo/incident-management-risk-mitigation-process-concept-icons-represent-processes-of-incident.jpg?s=1024x1024&w=is&k=20&c=f-LmGPr6QBpF5PxCZZi5lmVxFx6uEztPvGXIrxJE6xU=",
    goal: 30000,
    raised: 27500,
    daysLeft: 5,
    description:
      "An AI-driven mood tracker promoting mental well-being through guided journaling and mindfulness insights.",
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
  },
  {
    id: 7,
    title: "AI-Powered Research Assistant",
    creator: "NeuroTech Labs",
    category: "Science & AI",
    image: "https://media.istockphoto.com/id/2240110090/photo/ai-everyday-life-concept-businesswoman-using-artificial-intelligence-for-global-knowledge.jpg?s=1024x1024&w=is&k=20&c=BFuTQgNhj6Aeku5mz1kZvk5Osf7jbEm6TpFt1dBJO54=",
    goal: 25000,
    raised: 18700,
    daysLeft: 12,
  },
  {
    id: 8,
    title: "Next-Gen Solar Charging Tech",
    creator: "EcoCharge",
    category: "Technology",
    image: "https://media.istockphoto.com/id/2234508993/vector/two-workers-inspect-solar-panels-in-renewable-energy-facility-showcasing-teamwork-and.jpg?s=1024x1024&w=is&k=20&c=53GdvelaeuQlX4dSCqgcjZDzghpP7AzTNGoSARMbbJk=",
    goal: 40000,
    raised: 31200,
    daysLeft: 25,
  },
];

const LatestCampaignCards = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          🌟 Latest & Top Fundraising Campaigns
        </h2>
        <p className="text-gray-500 mt-2">
          Explore trending campaigns making a real-world impact.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {campaigns.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-out cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />

            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                by <span className="font-medium text-gray-700">{item.creator}</span>
              </p>

              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                {item.daysLeft} days left • {item.funded} funded
              </div>

              <div className="text-sm text-gray-600">
                🎯 <span className="font-medium">Goal:</span> {item.goal}
              </div>
              <div className="text-sm text-gray-600">
                💰 <span className="font-medium">Raised:</span> {item.raised}
              </div>
              <div className="text-sm text-gray-600">
                🧠 <span className="font-medium">Tech Used:</span> {item.tech}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestCampaignCards;
