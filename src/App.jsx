import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Users, BookOpen, Home, MapPin, Phone, Mail, Sparkles, Award, Utensils, Bed, GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';

export default function ISKCONWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCity, setActiveCity] = useState(0);
  const images = [
  '/xpression.jpg',
  '/image2.jpg',
  '/image3.jpg',
  // Add your image paths here
];
  const cities = [
    { name: 'Kanpur', color: 'from-orange-500 to-pink-500' },
    { name: 'Orai', color: 'from-blue-500 to-green-500' },
    { name: 'Etawah', color: 'from-pink-500 to-orange-500' },
    { name: 'Lucknow', color: 'from-green-500 to-blue-500' },
    { name: 'Prayagraj', color: 'from-orange-500 to-blue-500' },
    { name: 'Gorakhpur', color: 'from-pink-500 to-green-500' }
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % cities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
            
                <img
  src="easy-logo.png" 
  alt="Easy Logo"
  className="h-20 w-60 object-contain"
/>

              
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  ISKCON EASY
                </h1>
                <p className="text-xs text-gray-600">Sri Sri Radha Madhav Temple</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Centers', 'Xpression', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                  {item}
                </a>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-4 py-4">
            {['Home', 'About', 'Centers', 'Xpression', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Divine Movement
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Spreading Divinity
                </span>
                <br />
                <span className="text-gray-800">Through Krishna's Love</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fulfilling Srila Prabhupada's vision of divine consciousness, we empower youth with spiritual wisdom and practical skills across Uttar Pradesh.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all flex items-center space-x-2">
                  <span>Join Our Movement</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                <div className="aspect-square bg-gradient-to-br from-orange-100 via-pink-100 to-blue-100 rounded-2xl flex items-center justify-center">
  <img
    src={images[index]}
    alt="Changing visual"
    className="w-full h-full object-cover rounded-2xl"
  />
</div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Presence</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {cities.map((city, idx) => (
                      <span
                        key={city.name}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                          idx === activeCity
                            ? `bg-gradient-to-r ${city.color} text-white transform scale-110`
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {city.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                What We Offer
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Holistic development through spirituality and practical life skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bed,
                title: 'Accommodation',
                desc: 'Comfortable living spaces for devotees and seekers',
                color: 'from-orange-500 to-pink-500'
              },
              {
                icon: Utensils,
                title: 'Prasadam',
                desc: 'Sanctified vegetarian meals prepared with love',
                color: 'from-blue-500 to-green-500'
              },
              {
                icon: GraduationCap,
                title: 'Skill Training',
                desc: 'Professional development and career guidance',
                color: 'from-pink-500 to-orange-500'
              },
              {
                icon: Heart,
                title: 'Spirituality',
                desc: 'Our core: Krishna consciousness and divine wisdom',
                color: 'from-green-500 to-blue-500'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-opacity-50"
                style={{ borderColor: idx === 3 ? '#f97316' : 'transparent' }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 via-pink-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Srila Prabhupada's Vision
                  </span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our ultimate goal is to spread the divine consciousness of Shri Krishna as envisioned by Srila Prabhupada. Through the grace of Sri Sri Radha Madhav Temple in Kanpur, we are transforming lives across Uttar Pradesh.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  While we provide practical skills, career counseling, and life necessities, our true essence lies in <span className="font-bold text-orange-600">spirituality</span> – connecting souls with the Supreme Lord Krishna.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Sparkles className="text-white" fill="white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Sri Sri Radha Madhav Temple</p>
                    <p className="text-gray-600">ISKCON Kanpur</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-200 via-pink-200 to-blue-200 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <Heart size={100} className="text-orange-500" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Hare Krishna</h3>
                  <p className="text-gray-700 italic">Divine Love, Eternal Bliss</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
<section id="centers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Our Centers
              </span>
            </h2>
            <p className="text-xl text-gray-600">Spreading across 6 cities in Uttar Pradesh</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city, idx) => (
              <div
                key={city.name}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${city.color} opacity-10 rounded-bl-full pointer-events-none`}></div>
                <MapPin className={`w-12 h-12 mb-4 text-orange-500`} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{city.name}</h3>
                <p className="text-gray-600 mb-4">Skill Training & Spiritual Center</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Xpression Youth Fest */}
      <section id="xpression" className="py-20 bg-gradient-to-br from-pink-100 via-orange-50 to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-12">
                <div className="inline-block mb-6">
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    BIGGEST YOUTH FESTIVAL
                  </span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-blue-600 bg-clip-text text-transparent">
                    Xpression Youth Fest
                  </span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The biggest youth festival of Uttar Pradesh! A grand celebration where spirituality meets creativity, culture meets devotion, and thousands of young hearts unite in Krishna consciousness.
                </p>
                <div className="space-y-4 mb-8">
                  {['Cultural Performances', 'Spiritual Workshops', 'Music & Dance', 'Youth Competitions'].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Award className="text-white" size={16} />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all">
                  Register Now
                </button>
              </div>
              <div className="bg-gradient-to-br from-pink-200 via-orange-200 to-blue-200 p-12 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-56 h-56 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl">
                    <Users size={120} className="text-orange-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">100,000+</h3>
                  <p className="text-gray-700 text-lg">Youth Participants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Connect With Us
              </span>
            </h2>
            <p className="text-xl text-gray-600">Begin your spiritual journey today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Call Us', info: '+91 7080007011' },
              { icon: Mail, title: 'Email Us', info: 'info@iskconeasy.com' },
              { icon: MapPin, title: 'Visit Us', info: 'Radha Madhav Temple, Kanpur' }
            ].map((contact, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
              <img
  src="easy-logo.png" 
  alt="Easy Logo"
  className="h-20 w-60 object-contain"
/>
            </div>
            <h3 className="text-2xl font-bold">ISKCON EASY</h3>
          </div>
          <p className="text-gray-400 mb-4">Sri Sri Radha Madhav Temple, Kanpur</p>
          <p className="text-gray-500 text-sm">© 2025 ISKCON EASY. Spreading Krishna Consciousness with Love</p>
          <p className="text-orange-400 mt-4 font-semibold">Hare Krishna Hare Krishna Krishna Krishna Hare Hare</p>
        </div>
      </footer>
    </div>
  );
}