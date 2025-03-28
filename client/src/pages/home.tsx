import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { scrollToSection } from "@/lib/utils";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-[80vh] bg-cover bg-center" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80')"}}
      >
        <div className="absolute inset-0 bg-[#333333]/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-bold text-[#F5F2E9] mb-4">
              Explore Kyrgyzstan's Cultural Heritage
            </h1>
            <p className="text-xl text-[#F5F2E9] mb-8">
              Travel through time with augmented reality and discover the rich history of Kyrgyzstan's most significant historical sites.
            </p>
            <Button 
              variant="default" 
              className="text-base py-3 px-6" 
              onClick={() => scrollToSection("arfeatures")}
            >
              Discover AR Features
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-['Playfair_Display',serif] font-bold text-[#333333] mb-4">
                The AR Nomad Project
              </h2>
              <p className="text-lg mb-4">
                AR Nomad transforms Kyrgyzstan's cultural heritage into a digital, interactive, and educational experience.
              </p>
              <p className="mb-4">
                Using augmented reality (AR), users can "travel through time" and see how historical sites looked in the past. We begin with the Burana Tower, one of the country's most significant historical monuments.
              </p>
              <p>
                Our AR reconstruction showcases how the fortress evolved over centuries, with virtual characters narrating its history and bringing the past to life.
              </p>
            </div>
            <div className="cultural-border" style={{
              borderWidth: "3px",
              borderStyle: "solid",
              borderImage: "linear-gradient(45deg, #C05640, #E6B325, #2A6D7E, #C05640) 1"
            }}>
              <img 
                src="https://images.unsplash.com/photo-1598601279536-e35bea9e3721?auto=format&fit=crop&q=80" 
                alt="Traditional Kyrgyz patterns and landscape" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Burana Tower Section */}
      <section id="burana" className="py-16 px-4 bg-[#2A6D7E]/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-['Playfair_Display',serif] font-bold text-[#333333] mb-8 text-center">
            Burana Tower: A Journey Through Time
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-3 text-[#C05640]">
                Historical Significance
              </h3>
              <p>
                The Burana Tower is all that remains of the ancient city of Balasagun, which was established in the 9th century by the Karakhanids. It was an important stop on the Silk Road.
              </p>
            </div>
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-3 text-[#C05640]">
                Architectural Marvel
              </h3>
              <p>
                Originally standing at 45 meters tall, today the tower reaches approximately 25 meters. It represents Central Asian architecture with its distinctive minaret style.
              </p>
            </div>
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-3 text-[#C05640]">
                Cultural Heritage
              </h3>
              <p>
                The site includes a museum displaying artifacts from the region, including balbals (stone warriors) and various archaeological findings from the ancient city.
              </p>
            </div>
          </div>
          
          {/* Table with merged cells */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-[#F5F2E9] rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#C05640] text-[#F5F2E9]">
                  <th className="p-3 text-left" colSpan={2}>Burana Tower Timeline</th>
                  <th className="p-3 text-left">Significant Events</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3" rowSpan={2}>9th-10th Century</td>
                  <td className="p-3">9th Century</td>
                  <td className="p-3">Establishment of Balasagun city</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Late 10th Century</td>
                  <td className="p-3">Construction of the minaret</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3" colSpan={2}>11th-12th Century</td>
                  <td className="p-3">Golden age of the Karakhanid Empire</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3" rowSpan={2}>13th-14th Century</td>
                  <td className="p-3">1218</td>
                  <td className="p-3">Destruction by Genghis Khan's army</td>
                </tr>
                <tr>
                  <td className="p-3">14th Century</td>
                  <td className="p-3">Complete abandonment of the city</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1568124917617-152d93110f71?auto=format&fit=crop&q=80" 
                alt="Burana Tower" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-3 text-[#C05640]">
                Exploring with AR Technology
              </h3>
              <p className="mb-3">
                Our AR application allows visitors to see the Burana Tower as it would have appeared in different historical periods:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Original 45-meter tower structure</li>
                <li>Surrounding buildings of the ancient city</li>
                <li>Daily life in Balasagun during the 11th century</li>
                <li>Military fortifications and defensive structures</li>
                <li>Reconstruction of earthquake damage over time</li>
              </ul>
              <p>
                By pointing your device at the existing tower, history comes alive through detailed 3D reconstructions based on archaeological evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AR Features Section */}
      <section id="arfeatures" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-['Playfair_Display',serif] font-bold text-[#333333] mb-8 text-center">
            AR Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-['Playfair_Display',serif] font-bold mb-4 text-[#C05640]">
                How Our AR Technology Works
              </h3>
              <p className="mb-4">
                AR Nomad uses advanced augmented reality to overlay digital content onto the real world, creating an immersive educational experience.
              </p>
              
              <ol className="list-decimal pl-5 mb-4">
                <li className="mb-2"><strong>Scan the Environment:</strong> The app uses your device's camera to recognize the Burana Tower and surrounding landscape.</li>
                <li className="mb-2"><strong>Choose a Time Period:</strong> Select which historical era you want to explore, from the 9th to the 14th century.</li>
                <li className="mb-2"><strong>Witness History:</strong> Watch as the ancient city of Balasagun is reconstructed around you in 3D.</li>
                <li className="mb-2"><strong>Interact with NPCs:</strong> Engage with virtual historical characters who share stories and information.</li>
                <li className="mb-2"><strong>Learn Through Experience:</strong> Educational content is seamlessly integrated into the immersive experience.</li>
              </ol>
              
              <p>
                All reconstructions are historically accurate, developed in collaboration with archaeologists and historians specializing in Central Asian history.
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="font-['Playfair_Display',serif] font-bold mb-2">3D Reconstruction</h4>
              <p>Highly detailed models of historical structures based on archaeological evidence</p>
            </div>
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="font-['Playfair_Display',serif] font-bold mb-2">Interactive NPCs</h4>
              <p>Virtual characters representing historical figures from different eras</p>
            </div>
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-['Playfair_Display',serif] font-bold mb-2">Time Travel</h4>
              <p>View how the site transformed across different centuries</p>
            </div>
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="font-['Playfair_Display',serif] font-bold mb-2">Offline Maps</h4>
              <p>Access historical maps and information without internet connection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-[#2A6D7E]/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-['Playfair_Display',serif] font-bold text-[#333333] mb-8 text-center">
            Gallery
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?auto=format&fit=crop&q=80" 
                alt="Kyrgyzstan landscape with mountains" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-[#F5F2E9]">
                <h4 className="font-['Playfair_Display',serif] font-bold mb-1">Kyrgyz Mountains</h4>
                <p className="text-sm">The majestic landscape surrounding historical sites</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1655785209672-93304fb97b34?auto=format&fit=crop&q=80" 
                alt="Traditional Kyrgyz yurt" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-[#F5F2E9]">
                <h4 className="font-['Playfair_Display',serif] font-bold mb-1">Traditional Yurt</h4>
                <p className="text-sm">Ancient nomadic dwelling replicated in AR experiences</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80" 
                alt="Archaeological artifacts" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-[#F5F2E9]">
                <h4 className="font-['Playfair_Display',serif] font-bold mb-1">Historical Artifacts</h4>
                <p className="text-sm">Items discovered at Burana site, digitally preserved</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1566138884171-7692f5138744?auto=format&fit=crop&q=80" 
                alt="Stone warrior statues (balbals)" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-[#F5F2E9]">
                <h4 className="font-['Playfair_Display',serif] font-bold mb-1">Balbal Statues</h4>
                <p className="text-sm">Ancient stone warriors surrounding Burana</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1575898631003-968df049a478?auto=format&fit=crop&q=80" 
                alt="Traditional Kyrgyz patterns" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-[#F5F2E9]">
                <h4 className="font-['Playfair_Display',serif] font-bold mb-1">Cultural Patterns</h4>
                <p className="text-sm">Traditional designs incorporated into our AR interface</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1588672225204-792c8db480e4?auto=format&fit=crop&q=80" 
                alt="Person using AR app" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-[#F5F2E9]">
                <h4 className="font-['Playfair_Display',serif] font-bold mb-1">AR Experience</h4>
                <p className="text-sm">Visitors engaging with our technology on-site</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="secondary" className="text-base px-6 py-3">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-['Playfair_Display',serif] font-bold text-[#333333] mb-8 text-center">
            About AR Nomad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="cultural-border" style={{
              borderWidth: "3px",
              borderStyle: "solid",
              borderImage: "linear-gradient(45deg, #C05640, #E6B325, #2A6D7E, #C05640) 1"
            }}>
              <img 
                src="https://images.unsplash.com/photo-1618078204713-ab5d7d493da3?auto=format&fit=crop&q=80" 
                alt="Team working on AR project" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-['Playfair_Display',serif] font-bold mb-4 text-[#C05640]">
                Our Mission
              </h3>
              <p className="mb-4">
                AR Nomad aims to preserve and promote Kyrgyzstan's rich cultural heritage through innovative technology. We believe that by making history interactive and accessible, we can inspire appreciation for cultural heritage among both locals and visitors.
              </p>
              <p className="mb-4">Our team combines expertise in:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Archaeology and historical research</li>
                <li>3D modeling and augmented reality development</li>
                <li>Cultural preservation and education</li>
                <li>Sustainable tourism practices</li>
              </ul>
              <p>
                We work closely with local communities, historical experts, and educational institutions to ensure accuracy and cultural sensitivity in all our projects.
              </p>
            </div>
          </div>
          
          <div className="bg-[#F5F2E9] p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640] text-center">
              Future Plans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-['Playfair_Display',serif] font-bold mb-2">Expansion to New Sites</h4>
                <p>We're planning to expand our AR experience to other historical locations across Kyrgyzstan, including:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Tash Rabat Caravanserai</li>
                  <li>Uzgen Architecture Complex</li>
                  <li>Ancient petroglyphs of Cholpon-Ata</li>
                </ul>
              </div>
              <div>
                <h4 className="font-['Playfair_Display',serif] font-bold mb-2">Educational Programs</h4>
                <p>Development of curriculum materials for schools, allowing students to explore cultural heritage through interactive technology.</p>
              </div>
              <div>
                <h4 className="font-['Playfair_Display',serif] font-bold mb-2">Community Involvement</h4>
                <p>Training local guides and community members to utilize AR technology and contribute their own historical knowledge to the platform.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#C05640]/10 p-8 rounded-lg">
            <h3 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640] text-center">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">We welcome collaboration with:</p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Educational institutions</li>
                  <li>Historical research organizations</li>
                  <li>Tourism boards and cultural heritage sites</li>
                  <li>Technology companies and developers</li>
                </ul>
                
                <div className="mt-6">
                  <a href="mailto:info@arnomad.kg" className="text-[#2A6D7E] hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@arnomad.kg
                  </a>
                </div>
                <div className="mt-2">
                  <a href="tel:+996312123456" className="text-[#2A6D7E] hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +996 312 123456
                  </a>
                </div>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-1">Name</label>
                  <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C05640] focus:border-[#C05640]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-1">Email</label>
                  <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C05640] focus:border-[#C05640]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C05640] focus:border-[#C05640]"></textarea>
                </div>
                <Button type="submit" variant="default" className="text-base px-4 py-2">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
