import PatternDivider from "@/components/patterns/PatternDivider";
import { Link } from "wouter";

const ArFeatures = () => {
  const timePeriods = [
    { period: "10th Century", description: "Original construction and early development" },
    { period: "11th Century", description: "Peak prosperity during the Karakhanid era" },
    { period: "13th Century", description: "Post-Mongol invasion period" },
    { period: "19th Century", description: "Before modern conservation efforts" },
    { period: "Present Day", description: "Current state as a historical monument" }
  ];

  const virtualGuideFeatures = [
    "Historically accurate clothing and appearance",
    "Narration in multiple languages (Kyrgyz, Russian, English)",
    "Interactive dialogue options to learn more about specific topics",
    "Animations demonstrating historical crafts and activities",
    "Augmented information panels with additional details"
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#1A3A63] text-white py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1633422488318-660653952011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="AR visualization" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-center">
            AR Features
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto text-center">
            Bringing Kyrgyzstan's heritage to life through cutting-edge augmented reality
          </p>
        </div>
      </div>

      <PatternDivider />

      {/* Time Travel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-6">AR Time Travel</h2>
              <h3 className="font-['Montserrat'] font-semibold text-2xl text-[#C75D3A] mb-4">Travel Through Time</h3>
              <p className="mb-4">
                Our AR application allows you to visualize historical sites at different points in time. By simply moving a time slider, you can see how the Burana Tower and its surrounding complex evolved over centuries.
              </p>
              
              <h4 className="font-['Montserrat'] font-medium text-xl mb-3">Time Periods Available:</h4>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                {timePeriods.map((period, index) => (
                  <li key={index}><strong>{period.period}:</strong> {period.description}</li>
                ))}
              </ol>
              
              <div className="prose max-w-none">
                <p>
                  Our AR time travel feature uses historical records, archaeological data, and expert consultations to create accurate reconstructions of how Burana Tower and its surroundings appeared throughout different eras. 
                </p>
                <p>
                  As you move the time slider in our app, you'll witness buildings appear and disappear, architectural styles change, and the landscape transform—all while standing in the exact location where history unfolded.
                </p>
              </div>
            </div>
            <div className="border-4 border-white shadow-xl rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="AR visualization example" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* Interactive Storytelling Section */}
      <section className="py-16 bg-[#E8DBC5] bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 border-4 border-white shadow-xl rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1633422488318-660653952011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Virtual character guide example" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-6">Interactive Storytelling</h2>
              <h3 className="font-['Montserrat'] font-semibold text-2xl text-[#C75D3A] mb-4">Meet Your Virtual Guides</h3>
              <p className="mb-4">
                Meet virtual characters who will guide you through the history of Burana. These NPCs (non-player characters) represent historical figures from different eras who lived or passed through Balasagun.
              </p>
              
              <h4 className="font-['Montserrat'] font-medium text-xl mb-3">Virtual Guide Features:</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {virtualGuideFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <div className="prose max-w-none">
                <p>
                  Our virtual guides include merchants from the Silk Road, local craftspeople, religious figures, and nomadic travelers who passed through Balasagun. Each character provides unique perspectives on the site's history and significance.
                </p>
                <p>
                  You can interact with these virtual guides by asking questions, requesting demonstrations of historical crafts, or simply listening to their stories about life during their time period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* Technical Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-12 text-center">Technical Requirements</h2>
          
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-[#1A3A63] text-white">
                <tr>
                  <th className="py-3 px-6 text-left" colSpan={2}>Device Requirements</th>
                  <th className="py-3 px-6 text-left">iOS</th>
                  <th className="py-3 px-6 text-left">Android</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-6" rowSpan={2}>Smartphone</td>
                  <td className="py-3 px-6">Minimum</td>
                  <td className="py-3 px-6">iPhone 8 or newer</td>
                  <td className="py-3 px-6">Android 9.0+ with ARCore support</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-6">Recommended</td>
                  <td className="py-3 px-6">iPhone 12 or newer</td>
                  <td className="py-3 px-6">Android 11.0+ with ARCore support</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-6" rowSpan={2}>Tablet</td>
                  <td className="py-3 px-6">Minimum</td>
                  <td className="py-3 px-6">iPad (6th gen) or newer</td>
                  <td className="py-3 px-6">Android 9.0+ tablet with ARCore support</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Recommended</td>
                  <td className="py-3 px-6">iPad Pro or iPad Air</td>
                  <td className="py-3 px-6">Samsung Galaxy Tab S7 or newer</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#E8DBC5] bg-opacity-30 p-6 rounded-lg">
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-4 text-[#1A3A63]">App Size & Installation</h3>
              <ul className="space-y-3">
                <li><strong>App Size:</strong> Approximately 250MB</li>
                <li><strong>Additional Data:</strong> Up to 500MB for full site data</li>
                <li><strong>Offline Mode:</strong> Available after initial download</li>
                <li><strong>Updates:</strong> Regular content additions</li>
              </ul>
            </div>
            
            <div className="bg-[#E8DBC5] bg-opacity-30 p-6 rounded-lg">
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-4 text-[#1A3A63]">Performance Considerations</h3>
              <ul className="space-y-3">
                <li><strong>Battery Usage:</strong> Moderate to high</li>
                <li><strong>Recommended Usage:</strong> 1-2 hour sessions</li>
                <li><strong>Temperature:</strong> App may cause device warming</li>
                <li><strong>Memory:</strong> 3GB RAM recommended</li>
              </ul>
            </div>
            
            <div className="bg-[#E8DBC5] bg-opacity-30 p-6 rounded-lg">
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-4 text-[#1A3A63]">Connectivity</h3>
              <ul className="space-y-3">
                <li><strong>Initial Setup:</strong> Internet connection required</li>
                <li><strong>On-site Usage:</strong> Offline mode available</li>
                <li><strong>Location Services:</strong> Required for positioning</li>
                <li><strong>Optional Features:</strong> Cloud saves, community sharing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* How It Works Section */}
      <section className="py-16 bg-[#1A3A63] text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl mb-12 text-center">How AR Nomad Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#C75D3A] flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-camera text-2xl"></i>
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-4">1. Scan the Environment</h3>
              <p>
                Point your device camera at the historical site or designated marker. The app will recognize your location and orientation.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#C75D3A] flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-magic text-2xl"></i>
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-4">2. See History Unfold</h3>
              <p>
                Watch as digital reconstructions and information appear on your screen, overlaid on the real-world view.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#C75D3A] flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hand-pointer text-2xl"></i>
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-4">3. Interact & Learn</h3>
              <p>
                Use the time slider, interact with virtual guides, and explore information panels to learn about the site's history.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/burana-tower" className="inline-block bg-[#C75D3A] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-all transform hover:scale-105">
              Explore Burana Tower
            </Link>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-[#E8DBC5] bg-opacity-30 p-6 rounded-lg">
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">How does the AR experience work?</h3>
              <p>
                Our AR application uses your device's camera to recognize the physical location or special markers. It then overlays digital reconstructions and information on your screen, allowing you to see both the present-day site and historical reconstructions simultaneously.
              </p>
            </div>
            
            <div className="bg-[#E8DBC5] bg-opacity-30 p-6 rounded-lg">
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">Do I need internet access to use the app?</h3>
              <p>
                Initial download requires internet access, but most features can be used offline once downloaded. Some advanced features like real-time updates may require an internet connection.
              </p>
            </div>
            
            <div className="bg-[#E8DBC5] bg-opacity-30 p-6 rounded-lg">
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">Is the app available in multiple languages?</h3>
              <p>
                Yes, the app supports Kyrgyz, Russian, and English languages, with plans to add more in the future.
              </p>
            </div>
            
            <div className="bg-[#E8DBC5] bg-opacity-30 p-6 rounded-lg">
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">How accurate are the historical reconstructions?</h3>
              <p>
                All reconstructions are based on archaeological evidence, historical records, and expert consultations. While some aspects may involve educated interpretations, we strive for maximum historical accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* CTA Section */}
      <section className="py-16 bg-[#1A3A63] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Ready to Experience History in AR?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our AR application brings Kyrgyzstan's cultural heritage to life. Start your journey with Burana Tower and stay tuned for more historical sites.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="bg-[#C75D3A] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105 inline-block">
              Download App Soon
            </a>
            <Link href="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1A3A63] text-white font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105 inline-block">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArFeatures;
