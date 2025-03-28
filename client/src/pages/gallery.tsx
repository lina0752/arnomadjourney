import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?auto=format&fit=crop&q=80",
    title: "Kyrgyz Mountains",
    description: "The majestic landscape surrounding historical sites",
    category: "landscapes"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1655785209672-93304fb97b34?auto=format&fit=crop&q=80",
    title: "Traditional Yurt",
    description: "Ancient nomadic dwelling replicated in AR experiences",
    category: "culture"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80",
    title: "Historical Artifacts",
    description: "Items discovered at Burana site, digitally preserved",
    category: "artifacts"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1566138884171-7692f5138744?auto=format&fit=crop&q=80",
    title: "Balbal Statues",
    description: "Ancient stone warriors surrounding Burana",
    category: "artifacts"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1575898631003-968df049a478?auto=format&fit=crop&q=80",
    title: "Cultural Patterns",
    description: "Traditional designs incorporated into our AR interface",
    category: "culture"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1588672225204-792c8db480e4?auto=format&fit=crop&q=80",
    title: "AR Experience",
    description: "Visitors engaging with our technology on-site",
    category: "ar"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1568124917617-152d93110f71?auto=format&fit=crop&q=80",
    title: "Burana Tower",
    description: "The iconic minaret standing as a testament to history",
    category: "burana"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80",
    title: "AR Visualization",
    description: "AR reconstruction of historical buildings",
    category: "ar"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1602766165062-0241252187d6?auto=format&fit=crop&q=80",
    title: "Traditional Handicrafts",
    description: "Ancient crafting techniques preserved in digital form",
    category: "culture"
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-8">
      {/* Page Header */}
      <div className="relative h-[40vh] bg-cover bg-center mb-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1575898631003-968df049a478?auto=format&fit=crop&q=80')"}}>
        <div className="absolute inset-0 bg-[#333333]/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-bold text-[#F5F2E9] mb-4">
              Gallery
            </h1>
            <p className="text-xl text-[#F5F2E9]">
              Visual exploration of Kyrgyzstan's cultural heritage and our AR projects
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640]">
            Explore Our Collection
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              className="text-sm md:text-base"
            >
              All
            </Button>
            <Button 
              variant={filter === "burana" ? "default" : "outline"} 
              onClick={() => setFilter("burana")}
              className="text-sm md:text-base"
            >
              Burana Tower
            </Button>
            <Button 
              variant={filter === "landscapes" ? "default" : "outline"} 
              onClick={() => setFilter("landscapes")}
              className="text-sm md:text-base"
            >
              Landscapes
            </Button>
            <Button 
              variant={filter === "culture" ? "default" : "outline"} 
              onClick={() => setFilter("culture")}
              className="text-sm md:text-base"
            >
              Cultural Heritage
            </Button>
            <Button 
              variant={filter === "artifacts" ? "default" : "outline"} 
              onClick={() => setFilter("artifacts")}
              className="text-sm md:text-base"
            >
              Artifacts
            </Button>
            <Button 
              variant={filter === "ar" ? "default" : "outline"} 
              onClick={() => setFilter("ar")}
              className="text-sm md:text-base"
            >
              AR Technology
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {filteredItems.map(item => (
              <div key={item.id} className="rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-[#F5F2E9]">
                  <h3 className="font-['Playfair_Display',serif] font-bold mb-1">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640]">
            AR Reconstructions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Our AR reconstructions are created using a combination of:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Archaeological evidence from excavations</li>
                <li>Historical accounts and documentation</li>
                <li>Analysis of similar structures from the same period</li>
                <li>Consultation with experts in Central Asian architecture</li>
                <li>Advanced 3D modeling and texturing techniques</li>
              </ul>
              <p className="mb-4">
                Each model goes through rigorous historical verification to ensure accuracy in details such as building materials, construction techniques, and architectural styles typical of the period.
              </p>
              <p>
                The resulting AR experiences provide visitors with historically accurate representations of how these sites appeared during different periods, bringing history to life in an engaging and educational way.
              </p>
            </div>
            <div className="bg-[#F5F2E9] p-4 rounded-lg shadow-md">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#C05640] text-[#F5F2E9]">
                    <th className="p-2 text-left">Time Period</th>
                    <th className="p-2 text-left">Available AR Assets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-2">9th-10th Century</td>
                    <td className="p-2">Original tower, early city layout, caravanserai</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2">11th Century</td>
                    <td className="p-2">Complete city, marketplace, religious buildings</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2">12th Century</td>
                    <td className="p-2">Expanded fortifications, royal quarters</td>
                  </tr>
                  <tr>
                    <td className="p-2">13th-14th Century</td>
                    <td className="p-2">Decline period, partial ruins, abandonment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <Link href="/ar-features">
            <Button variant="default" className="mr-4">
              Learn About AR Features
            </Button>
          </Link>
          <Link href="/burana-tower">
            <Button variant="secondary">
              Explore Burana Tower
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
