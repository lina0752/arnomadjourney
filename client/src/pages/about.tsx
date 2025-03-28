import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const About = () => {
  return (
    <div className="pt-8">
      {/* Page Header */}
      <div className="relative h-[40vh] bg-cover bg-center mb-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1618078204713-ab5d7d493da3?auto=format&fit=crop&q=80')"}}>
        <div className="absolute inset-0 bg-[#333333]/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-bold text-[#F5F2E9] mb-4">
              About AR Nomad
            </h1>
            <p className="text-xl text-[#F5F2E9]">
              Our mission, team, and vision for preserving cultural heritage
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
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
            <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-4 text-[#C05640]">
              Our Mission
            </h2>
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

        <div className="mb-16">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640]">
            Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-1">Adilet Askerov</h3>
              <p className="text-[#C05640] mb-2">Founder & Lead Developer</p>
              <p className="text-sm mb-4">
                Expert in AR development with a background in cultural heritage preservation. Led projects across Central Asia.
              </p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-[#2A6D7E] hover:text-[#C05640]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#2A6D7E] hover:text-[#C05640]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-1">Dr. Ainura Tolomusheva</h3>
              <p className="text-[#C05640] mb-2">Historical Research Director</p>
              <p className="text-sm mb-4">
                Archaeologist specialized in Silk Road settlements with over 15 years of field experience at Burana Tower.
              </p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-[#2A6D7E] hover:text-[#C05640]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#2A6D7E] hover:text-[#C05640]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#C05640]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#C05640]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-1">Bakyt Nurmatov</h3>
              <p className="text-[#C05640] mb-2">3D Artist & AR Developer</p>
              <p className="text-sm mb-4">
                Creates detailed 3D reconstructions of historical structures based on archaeological evidence.
              </p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-[#2A6D7E] hover:text-[#C05640]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#2A6D7E] hover:text-[#C05640]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F2E9] p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640] text-center">
            Future Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-['Playfair_Display',serif] font-bold mb-2">Expansion to New Sites</h3>
              <p>We're planning to expand our AR experience to other historical locations across Kyrgyzstan, including:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Tash Rabat Caravanserai</li>
                <li>Uzgen Architecture Complex</li>
                <li>Ancient petroglyphs of Cholpon-Ata</li>
                <li>Manas Ordo complex</li>
                <li>Suleiman-Too sacred mountain</li>
              </ul>
            </div>
            <div>
              <h3 className="font-['Playfair_Display',serif] font-bold mb-2">Educational Programs</h3>
              <p>Development of curriculum materials for schools, allowing students to explore cultural heritage through interactive technology.</p>
              <p className="mt-2">Our educational initiatives include:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Classroom AR kits for schools</li>
                <li>Teacher training workshops</li>
                <li>Student hackathons for cultural preservation</li>
                <li>Virtual field trips for remote learning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-['Playfair_Display',serif] font-bold mb-2">Community Involvement</h3>
              <p>Training local guides and community members to utilize AR technology and contribute their own historical knowledge to the platform.</p>
              <p className="mt-2">We believe in empowering local communities through:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Local storyteller recordings</li>
                <li>Community-sourced historical photos</li>
                <li>Training in digital preservation techniques</li>
                <li>Revenue sharing with local heritage sites</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640]">
            Partners & Collaborators
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-[#F5F2E9] rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#C05640] text-[#F5F2E9]">
                  <th className="p-3 text-left">Organization</th>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Kyrgyz National Museum</td>
                  <td className="p-3">Cultural Institution</td>
                  <td className="p-3">Historical artifacts, documentation, expertise</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">University of Central Asia</td>
                  <td className="p-3">Academic Institution</td>
                  <td className="p-3">Research support, student involvement</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Ministry of Culture</td>
                  <td className="p-3">Government</td>
                  <td className="p-3">Project funding, site access permissions</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Tourism Board of Kyrgyzstan</td>
                  <td className="p-3">Government</td>
                  <td className="p-3">Promotion, integration with tourist routes</td>
                </tr>
                <tr>
                  <td className="p-3" colSpan={2}>Local Communities near Heritage Sites</td>
                  <td className="p-3">Traditional knowledge, oral histories, site guidance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#C05640]/10 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640] text-center">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">We welcome collaboration with:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Educational institutions</li>
                <li>Historical research organizations</li>
                <li>Tourism boards and cultural heritage sites</li>
                <li>Technology companies and developers</li>
                <li>Government agencies focused on cultural preservation</li>
                <li>NGOs working in education and heritage</li>
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
              <div className="mt-2">
                <a href="#" className="text-[#2A6D7E] hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  76 Toktogul St, Bishkek, Kyrgyzstan
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
                <label htmlFor="subject" className="block text-sm font-medium text-[#333333] mb-1">Subject</label>
                <select id="subject" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C05640] focus:border-[#C05640]">
                  <option value="">Select a subject</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="research">Research Collaboration</option>
                  <option value="support">Technical Support</option>
                  <option value="general">General Inquiry</option>
                </select>
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

        <div className="text-center mb-12">
          <Link href="/">
            <Button variant="secondary" className="text-base px-6 py-3 mr-4">
              Back to Home
            </Button>
          </Link>
          <Link href="/ar-features">
            <Button variant="outline" className="text-base px-6 py-3">
              Explore AR Features
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
