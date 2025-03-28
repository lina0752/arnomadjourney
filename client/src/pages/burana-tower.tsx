import PatternDivider from "@/components/patterns/PatternDivider";
import { Link } from "wouter";

const BuranaTower = () => {
  const timelineEvents = [
    { period: "9th-10th Century", description: "Construction of the city of Balasagun" },
    { period: "11th Century", description: "Burana Tower reaches its peak as an important center" },
    { period: "13th Century", description: "Decline following Mongol invasions" },
    { period: "14th-19th Century", description: "Gradual abandonment and deterioration" },
    { period: "20th Century", description: "Archaeological excavations and preservation" }
  ];

  const artifacts = [
    { 
      title: "Balbals (Stone Warriors)", 
      description: "Stone statues representing fallen warriors from the 6th-10th centuries.",
      image: "https://images.unsplash.com/photo-1561316441-5d59765d2e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    { 
      title: "Petroglyphs", 
      description: "Ancient rock carvings discovered near the Burana site.",
      image: "https://images.unsplash.com/photo-1571406172995-9af87d2044da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    },
    { 
      title: "Ceramic Artifacts", 
      description: "Pottery and ceramic items from daily life in Balasagun.",
      image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#1A3A63] text-white py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625470793672-577d77cb50be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Burana Tower" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-center">
            Burana Tower
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto text-center">
            A window into Kyrgyzstan's ancient past and the first site in our AR Nomad project
          </p>
        </div>
      </div>

      <PatternDivider />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-6">The History of Burana Tower</h2>
              
              <div className="prose max-w-none">
                <p>
                  The Burana Tower is an iconic 11th-century minaret located in the Chuy Valley, about 80 km east of Bishkek, the capital of Kyrgyzstan. It is one of the earliest examples of Islamic architecture in Central Asia and the only remaining structure from the ancient city of Balasagun.
                </p>
                
                <p>
                  Balasagun was founded by the Sogdians, a people of Iranian origin, and later became one of the capitals of the Karakhanid Empire, which ruled Central Asia from the 10th to the 13th centuries. The tower was part of a larger complex that included a mosque, mausoleum, and other buildings that have not survived to this day.
                </p>
                
                <p>
                  Originally standing at about 45 meters high, the tower has been partially destroyed by earthquakes over the centuries. Today, it stands at about 25 meters tall after restoration work in the 1970s. The tower served both as a minaret for calling the faithful to prayer and as a lookout tower to warn of approaching enemies.
                </p>
                
                <p>
                  The site was an important center along the Silk Road, connecting trade between China, the Middle East, and Europe. The surrounding area contains a collection of ancient balbal stones (stone warriors) and petroglyphs that provide insight into the spiritual beliefs and cultural practices of the nomadic tribes that inhabited the region.
                </p>
              </div>
              
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-3 text-[#C75D3A] mt-8">Historical Timeline</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {timelineEvents.map((event, index) => (
                  <li key={index}><strong>{event.period}:</strong> {event.description}</li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden shadow-xl mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1625470793672-577d77cb50be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Burana Tower" 
                    className="w-full h-auto"
                  />
                  <div className="p-4 bg-[#E8DBC5] bg-opacity-30">
                    <h3 className="font-['Montserrat'] font-semibold text-lg mb-2">Quick Facts</h3>
                    <ul className="space-y-2">
                      <li><strong>Location:</strong> Chuy Valley, Kyrgyzstan</li>
                      <li><strong>Built:</strong> 10th-11th century</li>
                      <li><strong>Original Height:</strong> ~45 meters</li>
                      <li><strong>Current Height:</strong> ~25 meters</li>
                      <li><strong>UNESCO Status:</strong> Tentative List</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-[#1A3A63] text-white rounded-lg p-6">
                  <h3 className="font-['Montserrat'] font-semibold text-lg mb-4">Visit Burana in AR</h3>
                  <p className="mb-4">Experience how Burana Tower looked in its heyday through our augmented reality application.</p>
                  <Link href="/ar-features" className="block bg-[#C75D3A] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-center transition-all">
                    Explore AR Features
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* Artifacts Section */}
      <section className="py-16 bg-[#E8DBC5] bg-opacity-20">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-10 text-center">Notable Artifacts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artifacts.map((artifact, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={artifact.image} 
                  alt={artifact.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">{artifact.title}</h3>
                  <p>{artifact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* Map and Visiting Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-6">Visiting Information</h2>
              
              <div className="prose max-w-none">
                <p>
                  The Burana Tower is open to visitors throughout the year. The site includes a small museum with artifacts from the area, and visitors can climb inside the tower on a narrow staircase to enjoy views of the surrounding countryside.
                </p>
                
                <h3 className="font-['Montserrat'] font-semibold text-xl mb-3 text-[#C75D3A]">Opening Hours & Admission</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Hours:</strong> 8:00 AM - 5:00 PM, daily</li>
                  <li><strong>Entrance Fee:</strong> 150 KGS (~$1.75 USD) per person</li>
                  <li><strong>Museum Fee:</strong> 50 KGS (~$0.60 USD) additional</li>
                  <li><strong>Tower Climbing:</strong> Included in entrance fee</li>
                </ul>
                
                <h3 className="font-['Montserrat'] font-semibold text-xl mb-3 text-[#C75D3A]">Getting There</h3>
                <p>
                  The Burana Tower is located approximately 80 km east of Bishkek. The site can be reached by:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Organized Tour:</strong> Most convenient option from Bishkek</li>
                  <li><strong>Taxi:</strong> Negotiate a round trip from Bishkek (~$40-50 USD)</li>
                  <li><strong>Public Transport:</strong> Take a marshrutka (minibus) to Tokmok, then a taxi to the tower</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <Link href="/ar-features" className="inline-block bg-[#1A3A63] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-all">
                  Use AR at Burana
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.3211518782967!2d75.24956761542803!3d42.74490671674754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3886ca37c5536b05%3A0x29012f91c7c67e88!2sBurana%20Tower!5e0!3m2!1sen!2sus!4v1625180216000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  aria-hidden="false"
                  title="Burana Tower Location"
                ></iframe>
              </div>
              
              <div className="bg-[#E8DBC5] bg-opacity-50 p-6 rounded-lg mt-6">
                <h3 className="font-['Montserrat'] font-semibold text-lg mb-4">Best Time to Visit</h3>
                <p className="mb-4">
                  The best time to visit Burana Tower is during late spring (May-June) and early autumn (September-October) when the weather is pleasant and the surrounding steppe is either blooming with wildflowers or turning golden.
                </p>
                <p>
                  Summer months can be hot, while winter can see snow and very cold temperatures. However, the site is less crowded during these seasons, offering a more solitary experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* CTA Section */}
      <section className="py-16 bg-[#1A3A63] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Experience Burana Tower in Augmented Reality</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            See how this ancient monument looked throughout history, from its construction to the present day, with our innovative AR application.
          </p>
          <div className="flex justify-center">
            <Link href="/ar-features" className="bg-[#C75D3A] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105">
              Explore AR Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuranaTower;
