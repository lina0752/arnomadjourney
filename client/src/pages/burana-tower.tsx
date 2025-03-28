import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const BuranaTower = () => {
  return (
    <div className="pt-8">
      {/* Page Header */}
      <div className="relative h-[40vh] bg-cover bg-center mb-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1568124917617-152d93110f71?auto=format&fit=crop&q=80')"}}>
        <div className="absolute inset-0 bg-[#333333]/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-bold text-[#F5F2E9] mb-4">
              Burana Tower
            </h1>
            <p className="text-xl text-[#F5F2E9]">
              A Journey Through Time: Exploring the historical minaret and ancient city of Balasagun
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-3 text-[#C05640]">
              Historical Significance
            </h3>
            <p>
              The Burana Tower is all that remains of the ancient city of Balasagun, which was established in the 9th century by the Karakhanids. It was an important stop on the Silk Road and served as a beacon for travelers.
            </p>
            <p className="mt-2">
              Balasagun was one of the capitals of the Karakhanid Empire, a significant power in Central Asia during the 10th-12th centuries.
            </p>
          </div>
          <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-3 text-[#C05640]">
              Architectural Marvel
            </h3>
            <p>
              Originally standing at 45 meters tall, today the tower reaches approximately 25 meters. It represents Central Asian architecture with its distinctive minaret style.
            </p>
            <p className="mt-2">
              The tower's design includes intricate brickwork patterns and a narrow spiral staircase inside that visitors can climb for panoramic views of the surrounding landscape.
            </p>
          </div>
          <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-['Playfair_Display',serif] font-bold mb-3 text-[#C05640]">
              Cultural Heritage
            </h3>
            <p>
              The site includes a museum displaying artifacts from the region, including balbals (stone warriors) and various archaeological findings from the ancient city.
            </p>
            <p className="mt-2">
              In 1976, the site was designated as the Burana Archaeological-Architectural Museum Complex, protecting this crucial piece of Kyrgyz heritage.
            </p>
          </div>
        </div>
          
        {/* Table with merged cells */}
        <div className="overflow-x-auto mb-12">
          <h3 className="text-2xl font-['Playfair_Display',serif] font-bold mb-4 text-[#C05640]">
            Historical Timeline
          </h3>
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
              <tr className="border-b border-gray-200">
                <td className="p-3" colSpan={2}>19th Century</td>
                <td className="p-3">Rediscovery by European explorers</td>
              </tr>
              <tr>
                <td className="p-3" colSpan={2}>1970s</td>
                <td className="p-3">Major restoration work and museum establishment</td>
              </tr>
            </tbody>
          </table>
        </div>
          
        <div className="mb-12">
          <h3 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640]">
            Explore Burana Tower with AR
          </h3>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1568124917617-152d93110f71?auto=format&fit=crop&q=80" 
                alt="Burana Tower" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-xl font-['Playfair_Display',serif] font-bold mb-3 text-[#C05640]">
                Exploring with AR Technology
              </h4>
              <p className="mb-3">
                Our AR application allows visitors to see the Burana Tower as it would have appeared in different historical periods:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Original 45-meter tower structure before earthquake damage</li>
                <li>Surrounding buildings of the ancient city of Balasagun</li>
                <li>Daily life in Balasagun during the 11th century</li>
                <li>Military fortifications and defensive structures</li>
                <li>Reconstruction of earthquake damage over time</li>
                <li>Historical figures and their stories through interactive NPCs</li>
              </ul>
              <p>
                By pointing your device at the existing tower, history comes alive through detailed 3D reconstructions based on archaeological evidence.
              </p>
              <div className="mt-6">
                <Link href="/ar-features">
                  <Button variant="default" className="mr-4">Learn About AR Features</Button>
                </Link>
                <Button variant="outline">Download App</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-['Playfair_Display',serif] font-bold mb-6 text-[#C05640]">
            Visiting Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md">
              <h4 className="font-['Playfair_Display',serif] font-bold mb-3">Location & Access</h4>
              <p className="mb-2">
                Burana Tower is located approximately 80 km east of Bishkek, near the town of Tokmok.
              </p>
              <ul className="list-disc pl-5 mb-3">
                <li>By car: 1-1.5 hour drive from Bishkek</li>
                <li>By public transport: Marshrutkas (minibuses) available from Bishkek's eastern bus station</li>
                <li>Guided tours: Multiple tour operators offer day trips from Bishkek</li>
              </ul>
              <p>
                For a more immersive experience, download our AR app before your visit!
              </p>
            </div>
            <div className="bg-[#F5F2E9] p-6 rounded-lg shadow-md">
              <h4 className="font-['Playfair_Display',serif] font-bold mb-3">Opening Hours & Fees</h4>
              <p className="mb-2">
                <strong>Opening Hours:</strong>
              </p>
              <ul className="list-disc pl-5 mb-3">
                <li>Summer (April-October): 8:00 AM - 6:00 PM</li>
                <li>Winter (November-March): 9:00 AM - 5:00 PM</li>
                <li>Open every day including holidays</li>
              </ul>
              <p className="mb-2">
                <strong>Entrance Fees:</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>Adults: 150 KGS</li>
                <li>Students: 75 KGS</li>
                <li>Children under 12: Free</li>
                <li>Museum access: Additional 50 KGS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <Link href="/gallery">
            <Button variant="secondary" className="text-base px-6 py-3">
              View Burana Tower Gallery
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuranaTower;
