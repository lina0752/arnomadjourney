import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const ArFeatures = () => {
  return (
    <div className="pt-8">
      {/* Page Header */}
      <div className="relative h-[40vh] bg-cover bg-center mb-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80')"}}>
        <div className="absolute inset-0 bg-[#333333]/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-bold text-[#F5F2E9] mb-4">
              AR Features
            </h1>
            <p className="text-xl text-[#F5F2E9]">
              Experience Kyrgyzstan's cultural heritage through cutting-edge augmented reality
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-4 text-[#C05640]">
              How Our AR Technology Works
            </h2>
            <p className="mb-4">
              AR Nomad uses advanced augmented reality to overlay digital content onto the real world, creating an immersive educational experience that brings Kyrgyzstan's rich history to life.
            </p>
            
            <ol className="list-decimal pl-5 mb-4">
              <li className="mb-2">
                <strong>Scan the Environment:</strong> The app uses your device's camera to recognize the Burana Tower and surrounding landscape, creating a spatial map of the area.
              </li>
              <li className="mb-2">
                <strong>Choose a Time Period:</strong> Select which historical era you want to explore, from the 9th to the 14th century, each showing different aspects of the site's development.
              </li>
              <li className="mb-2">
                <strong>Witness History:</strong> Watch as the ancient city of Balasagun is reconstructed around you in 3D, with buildings, people, and activities appearing in their historical context.
              </li>
              <li className="mb-2">
                <strong>Interact with NPCs:</strong> Engage with virtual historical characters who share stories and information about life during their time period.
              </li>
              <li className="mb-2">
                <strong>Learn Through Experience:</strong> Educational content is seamlessly integrated into the immersive experience, with historical facts, cultural insights, and archaeological information.
              </li>
            </ol>
            
            <p>
              All reconstructions are historically accurate, developed in collaboration with archaeologists and historians specializing in Central Asian history and the Karakhanid period.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80" 
              alt="AR visualization concept" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <h2 className="text-3xl font-['Playfair_Display',serif] font-bold text-[#333333] mb-8 text-center">
          Key AR Features
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-['Playfair_Display',serif] font-bold mb-2">3D Reconstruction</h3>
            <p>Highly detailed models of historical structures based on archaeological evidence and historical records</p>
          </div>
          <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-['Playfair_Display',serif] font-bold mb-2">Interactive NPCs</h3>
            <p>Virtual characters representing historical figures from different eras who share stories and knowledge</p>
          </div>
          <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-['Playfair_Display',serif] font-bold mb-2">Time Travel</h3>
            <p>View how the site transformed across different centuries, from construction to its eventual decline</p>
          </div>
          <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="font-['Playfair_Display',serif] font-bold mb-2">Offline Maps</h3>
            <p>Access historical maps and information without internet connection during your visit</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640]">
            Technical Specifications
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-[#F5F2E9] rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#C05640] text-[#F5F2E9]">
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left">Details</th>
                  <th className="p-3 text-left">Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3"><strong>Device Compatibility</strong></td>
                  <td className="p-3">iOS 14+ and Android 9.0+</td>
                  <td className="p-3">Camera, gyroscope, accelerometer</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3"><strong>3D Reconstruction</strong></td>
                  <td className="p-3">High-detail models with 4K textures</td>
                  <td className="p-3">Mid-range GPU or better</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3"><strong>Tracking Accuracy</strong></td>
                  <td className="p-3">Within 10cm spatial mapping</td>
                  <td className="p-3">Good lighting conditions</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3"><strong>NPC Interactions</strong></td>
                  <td className="p-3">Voice recognition and AI responses</td>
                  <td className="p-3">Microphone, internet for full features</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3" rowSpan={2}><strong>Storage</strong></td>
                  <td className="p-3">Initial download: 200MB</td>
                  <td className="p-3" rowSpan={2}>500MB free space recommended</td>
                </tr>
                <tr>
                  <td className="p-3">Full experience with all sites: 450MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640]">
            User Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-3">Immersive Learning</h3>
              <p className="mb-3">
                Our AR experience is designed to be both educational and engaging, making learning about historical sites feel like a journey through time rather than reading a textbook.
              </p>
              <p>
                Studies show that immersive learning experiences lead to:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>65% better information retention</li>
                <li>Increased engagement with cultural heritage</li>
                <li>Greater appreciation for historical preservation</li>
                <li>Deeper understanding of historical context</li>
              </ul>
            </div>
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-3">Personalized Journeys</h3>
              <p className="mb-3">
                The AR Nomad app adapts to different user interests, allowing visitors to focus on aspects of history that intrigue them most:
              </p>
              <ul className="list-disc pl-5">
                <li><strong>Architecture enthusiasts</strong> can explore construction techniques and building designs</li>
                <li><strong>History buffs</strong> can dive deep into political and social developments</li>
                <li><strong>Cultural explorers</strong> can learn about daily life, clothing, and traditions</li>
                <li><strong>Adventure seekers</strong> can participate in interactive quests and challenges</li>
                <li><strong>Academics</strong> can access detailed archaeological data and research information</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F2E9] p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640] text-center">
            Upcoming AR Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-['Playfair_Display',serif] font-bold mb-2">Multiplayer Experience</h3>
              <p>Coming in 2024, groups will be able to share the same AR experience, seeing each other as historical avatars and collaborating on learning activities.</p>
            </div>
            <div>
              <h3 className="font-['Playfair_Display',serif] font-bold mb-2">Artifact Scanner</h3>
              <p>Visitors will be able to scan archaeological artifacts to learn their history, original purpose, and cultural significance through detailed 3D overlays.</p>
            </div>
            <div>
              <h3 className="font-['Playfair_Display',serif] font-bold mb-2">Time-lapse Simulations</h3>
              <p>Watch accelerated reconstructions showing how sites were built, flourished, declined, and were eventually restored over centuries.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <Button className="text-base py-3 px-6">
            Download AR Nomad App
          </Button>
          <p className="mt-2 text-sm text-gray-600">
            Available on iOS and Android devices
          </p>
        </div>

        <div className="text-center mb-12">
          <Link href="/burana-tower">
            <Button variant="secondary" className="text-base px-6 py-3 mr-4">
              Explore Burana Tower
            </Button>
          </Link>
          <Link href="/gallery">
            <Button variant="outline" className="text-base px-6 py-3">
              View Gallery
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArFeatures;
