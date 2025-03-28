import { Link } from "wouter";
import PatternDivider from "@/components/patterns/PatternDivider";

const Home = () => {
  const features = [
    {
      icon: "fas fa-clock",
      title: "Time Travel",
      description: "See how historical sites appeared throughout different time periods, from ancient to modern."
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Educational Experience",
      description: "Learn from virtual characters who narrate historical events and cultural significance."
    },
    {
      icon: "fas fa-globe-asia",
      title: "Cultural Preservation",
      description: "Help preserve Kyrgyzstan's rich cultural heritage through digital documentation and storytelling."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <header id="home" className="relative bg-[#1A3A63] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1570654231374-9294e3dfbd2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Kyrgyzstan mountain landscape" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              Experience Kyrgyzstan's Heritage Through Augmented Reality
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Travel through time and witness the evolution of historical sites as they appeared throughout history.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/ar-features" className="bg-[#C75D3A] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105 inline-block">
                Explore AR Features
              </Link>
              <Link href="/burana-tower" className="bg-white hover:bg-[#E8DBC5] text-[#1A3A63] font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105 inline-block">
                Discover Burana
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#1A3A63] mb-6">Reviving History Through Technology</h2>
            <p className="text-lg">
              The AR Nomad project transforms Kyrgyzstan's cultural heritage into a digital, interactive, and educational experience. Using augmented reality, we bring history to life in ways never before possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#E8DBC5] bg-opacity-30 p-6 rounded-lg text-center transition-all hover:shadow-lg hover:transform hover:scale-105">
                <div className="bg-[#1A3A63] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* Burana Tower Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1625470793672-577d77cb50be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Burana Tower" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#1A3A63] mb-6">Burana Tower: Our First AR Project</h2>
              <p className="mb-4">
                The Burana Tower, located near the town of Tokmok in northern Kyrgyzstan, is one of the country's most significant historical monuments. This ancient minaret dates back to the 10th century and was part of the ancient city of Balasagun.
              </p>
              <p className="mb-4">
                Our AR reconstruction showcases how this fortress complex evolved over centuries, from its glory days as a bustling Silk Road city to its current state as an archaeological site.
              </p>
              
              <Link href="/burana-tower" className="inline-block bg-[#C75D3A] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-all transform hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* Gallery Preview */}
      <section className="py-16 bg-[#E8DBC5] bg-opacity-20">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#1A3A63] text-center mb-12">Featured Heritage Sites</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
              <img 
                src="https://images.unsplash.com/photo-1618142990632-1afb1bd67e7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Kyrgyzstan yurt camp in mountains" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="font-['Montserrat'] font-semibold text-lg mb-1">Traditional Yurt Camp</h3>
                <p className="text-sm text-gray-600">Nomadic heritage preserved in the mountain regions</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
              <img 
                src="https://images.unsplash.com/photo-1625470793672-577d77cb50be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Burana Tower" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="font-['Montserrat'] font-semibold text-lg mb-1">Burana Tower</h3>
                <p className="text-sm text-gray-600">Ancient minaret from the 10th century</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
              <img 
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Mountain lake in Kyrgyzstan" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="font-['Montserrat'] font-semibold text-lg mb-1">Natural Heritage</h3>
                <p className="text-sm text-gray-600">Pristine landscapes that shape cultural identity</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-block bg-[#1A3A63] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-all transform hover:scale-105">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* CTA Section */}
      <section className="py-16 bg-[#1A3A63] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Ready to Experience Kyrgyzstan's Heritage?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Explore our AR features and learn about Burana Tower, the first of many historical sites we're bringing to life through augmented reality.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/ar-features" className="bg-[#C75D3A] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105 inline-block">
              Explore AR Features
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1A3A63] text-white font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105 inline-block">
              About Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
