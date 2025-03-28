import PatternDivider from "@/components/patterns/PatternDivider";

const Gallery = () => {
  const galleryImages = [
    {
      title: "Burana Tower",
      description: "Ancient minaret from the 10th century",
      image: "https://images.unsplash.com/photo-1625470793672-577d77cb50be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Traditional Yurt Camp",
      description: "Nomadic heritage preserved in the mountain regions",
      image: "https://images.unsplash.com/photo-1618142990632-1afb1bd67e7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Traditional Clothing",
      description: "Colorful attire representing cultural identity",
      image: "https://images.unsplash.com/photo-1565451957627-063bba156e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Natural Heritage",
      description: "Pristine landscapes that shape cultural identity",
      image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "AR Development",
      description: "Our team working on AR implementations",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Historical Artifacts",
      description: "Ancient items preserved from Silk Road era",
      image: "https://images.unsplash.com/photo-1561316441-5d59765d2e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "User Testing",
      description: "Visitors experiencing our AR application",
      image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Mountain Lake",
      description: "Sacred natural sites in Kyrgyzstan's landscape",
      image: "https://images.unsplash.com/photo-1570898644525-66de97344ee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Petroglyphs",
      description: "Ancient rock art preserved in Kyrgyzstan",
      image: "https://images.unsplash.com/photo-1571406172995-9af87d2044da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    }
  ];

  const categories = [
    { name: "All", count: galleryImages.length },
    { name: "Historical Sites", count: 2 },
    { name: "Natural Heritage", count: 2 },
    { name: "Cultural Items", count: 2 },
    { name: "AR Technology", count: 2 },
    { name: "People", count: 1 }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#1A3A63] text-white py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
            alt="Kyrgyzstan heritage" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-center">
            Heritage Gallery
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto text-center">
            Explore the rich cultural and historical heritage of Kyrgyzstan through our curated collection of images
          </p>
        </div>
      </div>

      <PatternDivider />

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 min-w-max pb-2">
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  className={`px-4 py-2 rounded-md font-['Montserrat'] font-medium transition-colors ${
                    index === 0 
                      ? 'bg-[#1A3A63] text-white' 
                      : 'bg-[#E8DBC5] bg-opacity-30 hover:bg-opacity-50 text-[#1A3A63]'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
          
          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                <img 
                  src={image.image} 
                  alt={image.title} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-['Montserrat'] font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* Featured Collection */}
      <section className="py-16 bg-[#E8DBC5] bg-opacity-20">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-12 text-center">Featured Collection: Silk Road Heritage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-2xl text-[#C75D3A] mb-4">The Silk Road in Kyrgyzstan</h3>
              <p className="mb-4">
                For centuries, Kyrgyzstan was a crucial part of the Silk Road, the ancient network of trade routes that connected East and West. Caravans passed through the Tian Shan mountains, establishing trading posts and cultural exchanges that shaped the region's identity.
              </p>
              
              <p className="mb-4">
                The Burana Tower was one of many important landmarks along this route, serving both as a navigational beacon and as a symbol of the prosperity that trade brought to the region.
              </p>
              
              <h4 className="font-['Montserrat'] font-medium text-xl mb-3">Key Silk Road Sites in Kyrgyzstan:</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Tash Rabat Caravanserai:</strong> A stone inn that provided shelter for travelers</li>
                <li><strong>Burana Tower:</strong> The remains of ancient Balasagun</li>
                <li><strong>Uzgen Architecture Complex:</strong> Includes minarets and mausoleums</li>
                <li><strong>Manas Ordo:</strong> Cultural complex dedicated to the Kyrgyz hero Manas</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1625470793672-577d77cb50be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Burana Tower" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1561316441-5d59765d2e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Historical artifacts" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1565451957627-063bba156e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Traditional clothing" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1571406172995-9af87d2044da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" 
                alt="Petroglyphs" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* Submit Photo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#1A3A63] text-white rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="font-['Montserrat'] font-bold text-3xl mb-6 text-center">Share Your Heritage Photos</h2>
            <p className="mb-6 text-center">
              Have you visited Burana Tower or other historical sites in Kyrgyzstan? Share your photos with us to be featured in our gallery!
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md focus:outline-none text-gray-800"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md focus:outline-none text-gray-800"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Photo Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md focus:outline-none text-gray-800"
                  placeholder="Where was this photo taken?"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Description</label>
                <textarea
                  className="w-full px-4 py-2 rounded-md focus:outline-none text-gray-800"
                  rows={4}
                  placeholder="Tell us about this photo"
                ></textarea>
              </div>
              
              <div className="bg-white bg-opacity-10 p-4 rounded-md">
                <label className="block mb-2 font-medium">Upload Photo</label>
                <div className="border-2 border-dashed border-white border-opacity-50 rounded-md p-8 text-center">
                  <i className="fas fa-cloud-upload-alt text-3xl mb-2"></i>
                  <p>Drag and drop your photo here, or click to browse</p>
                  <input type="file" className="hidden" />
                  <button type="button" className="mt-4 bg-white text-[#1A3A63] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                    Select File
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <button type="submit" className="bg-[#C75D3A] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105">
                  Submit Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
