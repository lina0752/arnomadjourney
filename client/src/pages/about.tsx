import PatternDivider from "@/components/patterns/PatternDivider";
import { Link } from "wouter";

const About = () => {
  const faqs = [
    {
      question: "How does the AR experience work?",
      answer: "Our AR application uses your device's camera to recognize the physical location or special markers. It then overlays digital reconstructions and information on your screen, allowing you to see both the present-day site and historical reconstructions simultaneously."
    },
    {
      question: "Do I need internet access to use the app?",
      answer: "Initial download requires internet access, but most features can be used offline once downloaded. Some advanced features like real-time updates may require an internet connection."
    },
    {
      question: "Is the app available in multiple languages?",
      answer: "Yes, the app supports Kyrgyz, Russian, and English languages, with plans to add more in the future."
    },
    {
      question: "How accurate are the historical reconstructions?",
      answer: "All reconstructions are based on archaeological evidence, historical records, and expert consultations. While some aspects may involve educated interpretations, we strive for maximum historical accuracy."
    }
  ];

  const futureSites = [
    "Tash Rabat Caravanserai",
    "Ancient petroglyphs of Cholpon-Ata",
    "Uzgen Architecture Complex",
    "Shah-Fazil Mausoleum",
    "Manas Ordo Complex"
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#1A3A63] text-white py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="AR Team" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-center">
            About AR Nomad
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto text-center">
            The team behind Kyrgyzstan's cultural heritage AR experience
          </p>
        </div>
      </div>

      <PatternDivider />

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-6">Our Mission</h2>
              <div className="prose max-w-none">
                <p>
                  AR Nomad aims to preserve and promote Kyrgyzstan's rich cultural heritage through innovative digital technologies. We believe that augmented reality can bridge the gap between the past and present, making history more accessible and engaging for everyone.
                </p>
                
                <p>
                  Our team is dedicated to creating historically accurate and educationally valuable AR experiences that showcase the beauty and significance of Kyrgyzstan's cultural sites. By combining cutting-edge technology with rigorous historical research, we bring the past to life in ways never before possible.
                </p>
                
                <p>
                  We work closely with historians, archaeologists, and cultural preservation experts to ensure that our reconstructions are as accurate as possible, while also making them engaging and accessible to audiences of all ages and backgrounds.
                </p>
              </div>
              
              <h3 className="font-['Montserrat'] font-semibold text-2xl text-[#C75D3A] mb-4 mt-8">Future Plans</h3>
              <p className="mb-4">
                While our initial focus is on the Burana Tower, we plan to expand our AR experiences to other significant historical sites across Kyrgyzstan:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {futureSites.map((site, index) => (
                  <li key={index}>{site}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#E8DBC5] bg-opacity-30 p-8 rounded-lg shadow-xl">
              <h3 className="font-['Montserrat'] font-semibold text-2xl text-[#1A3A63] mb-6 text-center">Our Core Values</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#1A3A63] text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-book text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-semibold text-lg mb-1">Historical Accuracy</h4>
                    <p className="text-sm">We are committed to historical fidelity in all our reconstructions, based on rigorous research and expert consultation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#1A3A63] text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-hand-holding-heart text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-semibold text-lg mb-1">Cultural Preservation</h4>
                    <p className="text-sm">We work to digitally document and preserve Kyrgyzstan's cultural heritage for future generations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#1A3A63] text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-chalkboard-teacher text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-semibold text-lg mb-1">Educational Impact</h4>
                    <p className="text-sm">We create experiences that educate and inspire, making learning about history engaging and interactive.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#1A3A63] text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-globe text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-semibold text-lg mb-1">Global Accessibility</h4>
                    <p className="text-sm">We strive to make Kyrgyzstan's heritage accessible to people around the world through technology.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* Team Section */}
      <section className="py-16 bg-[#E8DBC5] bg-opacity-20">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Aibek Japarov" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-['Montserrat'] font-semibold text-xl mb-1">Aibek Japarov</h3>
                <p className="text-[#C75D3A] font-medium mb-3">Project Lead & Developer</p>
                <p className="text-sm mb-4">
                  "Our goal is to make Kyrgyz history interactive and accessible to everyone through technology."
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-[#1A3A63] hover:text-[#C75D3A]">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-[#1A3A63] hover:text-[#C75D3A]">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a href="mailto:a.japarov@example.com" className="text-[#1A3A63] hover:text-[#C75D3A]">
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" 
                alt="Ainura Karimova" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-['Montserrat'] font-semibold text-xl mb-1">Ainura Karimova</h3>
                <p className="text-[#C75D3A] font-medium mb-3">Historical Researcher</p>
                <p className="text-sm mb-4">
                  "We consult with archaeologists and historians to ensure our reconstructions are as accurate as possible."
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-[#1A3A63] hover:text-[#C75D3A]">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-[#1A3A63] hover:text-[#C75D3A]">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a href="mailto:a.karimova@example.com" className="text-[#1A3A63] hover:text-[#C75D3A]">
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Timur Aliyev" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-['Montserrat'] font-semibold text-xl mb-1">Timur Aliyev</h3>
                <p className="text-[#C75D3A] font-medium mb-3">AR Technical Lead</p>
                <p className="text-sm mb-4">
                  "The technology we're using allows us to create immersive experiences that bring history to life."
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-[#1A3A63] hover:text-[#C75D3A]">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-[#1A3A63] hover:text-[#C75D3A]">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a href="mailto:t.aliyev@example.com" className="text-[#1A3A63] hover:text-[#C75D3A]">
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-6 inline-block">
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-4 text-[#1A3A63]">Join Our Team</h3>
              <p className="mb-4">
                We're always looking for passionate historians, developers, and designers to join our mission.
              </p>
              <a href="mailto:careers@arnomad.kg" className="inline-block bg-[#1A3A63] hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-md transition-all">
                Contact Us About Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      <PatternDivider />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl text-[#1A3A63] mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#E8DBC5] bg-opacity-30 p-6 rounded-lg">
                <h4 className="font-['Montserrat'] font-semibold text-xl mb-2">{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PatternDivider />
      
      {/* Contact Section */}
      <section className="py-16 bg-[#1A3A63] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl mb-6">Contact Us</h2>
              <p className="mb-8">
                Have questions, feedback, or want to learn more about our AR projects? Get in touch with our team using the contact information below or the form on this page.
              </p>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-8">
                <h3 className="font-['Montserrat'] font-semibold text-xl mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <i className="fas fa-envelope text-[#C75D3A] mr-3 w-6"></i>
                    <a href="mailto:info@arnomad.kg" className="hover:text-[#C75D3A] transition-colors">info@arnomad.kg</a>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-phone text-[#C75D3A] mr-3 w-6"></i>
                    <a href="tel:+996700123456" className="hover:text-[#C75D3A] transition-colors">+996 (700) 123-456</a>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-map-marker-alt text-[#C75D3A] mr-3 w-6"></i>
                    <span>Bishkek, Kyrgyzstan</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-users text-[#C75D3A] mr-3 w-6"></i>
                    <span>Digital Heritage Group KG-21</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="font-['Montserrat'] font-semibold text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-white hover:text-[#C75D3A] transition-colors">
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#C75D3A] transition-colors">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#C75D3A] transition-colors">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#C75D3A] transition-colors">
                    <i className="fab fa-youtube text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form className="bg-white text-dark p-8 rounded-lg shadow-xl">
                <h3 className="font-['Montserrat'] font-semibold text-2xl text-[#1A3A63] mb-6 text-center">Send Us a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A3A63]"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-1 font-medium">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A3A63]"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-1 font-medium">Subject</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A3A63]">
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-1 font-medium">Message</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A3A63]"
                      rows={5}
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="subscribe" className="mr-2" />
                    <label htmlFor="subscribe">Subscribe to our newsletter</label>
                  </div>
                  
                  <button type="submit" className="w-full bg-[#C75D3A] hover:bg-opacity-90 text-white font-bold py-3 rounded-md transition-all">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
