import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Wifi, Car, Trees, Coffee, Mountain, Sunset, Star, Sparkles, Heart, Eye, Calendar, Users, Bed, Bath, Camera, Utensils, ShowerHead, Sofa, Home as HomeIcon, Activity, Map, ArrowRight, CheckCircle } from "lucide-react";
import GallerySection from "@/components/gallery-section";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-200 flex-shrink-0">
                 <Image src="/logo.jpg" alt="Logo" width={50} height={50} className="w-full h-full object-cover" />
               </div>
               <span className="font-serif font-bold text-xl text-emerald-800">Tunnel Corner Cottage</span>
             </div>
            <div className="hidden md:flex items-center gap-8">
              {["About", "Rooms", "Gallery", "Activities", "Location", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                  {item}
                </a>
              ))}
              <Button className="bg-emerald-600 hover:bg-emerald-700 btn-glow">Book Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img3.jpg"
            alt="Tunnel Corner Cottage at sunset"
            fill
            className="object-cover parallax"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
        </div>
        
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4 pt-20 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 fade-in-up">
              <div className="floating">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl pulse-glow">
                  <Image
                    src="/logo.jpg"
                    alt="Tunnel Corner Cottage Logo"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg fade-in-up-delay-1 leading-tight">
              <span className="inline-block">Tunnel</span>{" "}
              <span className="inline-block text-shadow-glow">Corner</span>{" "}
              <span className="inline-block gradient-text">Cottage</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 font-light fade-in-up-delay-2 text-shadow-lg">
              <Sparkles className="inline w-5 h-5 mr-2 text-yellow-300 animate-pulse" />
              Luxury Eco Retreat in Ramboda, Sri Lanka
              <Sparkles className="inline w-5 h-5 ml-2 text-yellow-300 animate-pulse" />
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 fade-in-up-delay-3 leading-relaxed">
              Experience tranquility nestled in the lush forests of Sri Lanka's hill country. 
              Your perfect escape awaits in nature's embrace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center fade-in-up-delay-3">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg btn-glow">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-pulse" />
                Book Your Stay
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 font-semibold px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-sm bg-white/10">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Explore Gallery
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-br from-white via-emerald-25 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-emerald-800 mb-8 gradient-text">
              Your Forest Sanctuary
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover a unique blend of luxury and nature at Tunnel Corner Cottage, 
              where modern comfort meets the pristine beauty of Sri Lanka's central highlands.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-serif text-4xl font-bold text-emerald-800 mb-8">
                <Trees className="inline w-8 h-8 mr-3 text-emerald-600" />
                Immerse in Nature's Beauty
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Wake up to the melodious sounds of tropical birds, breathe in the fresh mountain air, 
                and witness breathtaking sunrises and sunsets from your private balcony.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our eco-friendly cottage is designed to minimize environmental impact while maximizing your comfort 
                and connection with the natural world around you.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-4 py-2 text-sm font-medium hover:shadow-lg transition-shadow">
                  🌿 Eco-Friendly
                </Badge>
                <Badge variant="secondary" className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-4 py-2 text-sm font-medium hover:shadow-lg transition-shadow">
                  🌲 Forest Views
                </Badge>
                <Badge variant="secondary" className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-4 py-2 text-sm font-medium hover:shadow-lg transition-shadow">
                  🏡 Private Balcony
                </Badge>
                <Badge variant="secondary" className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-4 py-2 text-sm font-medium hover:shadow-lg transition-shadow">
                  🏔️ Mountain Air
                </Badge>
              </div>
              <div className="flex items-center gap-3 text-emerald-700 bg-emerald-50 p-4 rounded-lg">
                <MapPin className="w-6 h-6" />
                <span className="font-semibold text-lg">Ramboda, Sri Lanka</span>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <Image
                src="/img1.jpg"
                alt="Tunnel Corner Cottage exterior"
                width={700}
                height={500}
                className="relative rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-emerald-800 mb-4">Personalized Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience warm Sri Lankan hospitality with personalized attention to make your stay unforgettable.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trees className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-emerald-800 mb-4">Sustainable Tourism</h3>
                <p className="text-gray-600 leading-relaxed">
                  Support eco-friendly practices while enjoying luxury accommodations in harmony with nature.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mountain className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-emerald-800 mb-4">Prime Location</h3>
                <p className="text-gray-600 leading-relaxed">
                  Perfectly positioned in the heart of Sri Lanka's tea country with easy access to attractions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rooms & Accommodation */}
      <section id="rooms" className="py-24 px-4 bg-gradient-to-br from-emerald-50 via-teal-25 to-emerald-100 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-emerald-800 mb-8">
              <HomeIcon className="inline w-8 h-8 mr-3 text-emerald-600" />
              Luxury Accommodations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Comfort and elegance in every corner of your forest retreat
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Master Suite */}
            <Card className="card-hover bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
              <div className="relative h-80">
                <Image src="/img10.jpg" alt="Master Suite" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-600 text-white">Premium Suite</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-serif text-3xl font-bold text-emerald-800 mb-4">Forest View Suite</h3>
                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bed className="w-5 h-5" />
                    <span>King Bed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>2-4 Guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bath className="w-5 h-5" />
                    <span>En-suite</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Spacious suite with panoramic forest views, private balcony, and modern amenities. 
                  Perfect for couples or small families seeking luxury in nature.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Private Balcony</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Forest Views</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Modern Bathroom</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Tea/Coffee Station</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Standard Room */}
            <Card className="card-hover bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
              <div className="relative h-80">
                <Image src="/img12.jpg" alt="Deluxe Room" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Deluxe Room</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-serif text-3xl font-bold text-emerald-800 mb-4">Garden View Room</h3>
                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bed className="w-5 h-5" />
                    <span>Queen Bed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>2 Guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <ShowerHead className="w-5 h-5" />
                    <span>Shared Bath</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comfortable room with garden views and access to shared facilities. 
                  Perfect for budget-conscious travelers who don't want to compromise on comfort.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Garden Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Nature Views</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Shared Lounge</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Continental Breakfast</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Common Areas */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-xl text-center">
              <CardContent className="p-6">
                <Sofa className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-emerald-800 mb-2">Common Lounge</h3>
                <p className="text-gray-600 text-sm">Relax in our cozy common area with stunning forest views</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-xl text-center">
              <CardContent className="p-6">
                <Utensils className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-emerald-800 mb-2">Dining Area</h3>
                <p className="text-gray-600 text-sm">Enjoy meals with panoramic mountain and forest views</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-xl text-center">
              <CardContent className="p-6">
                <Trees className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-emerald-800 mb-2">Garden Terrace</h3>
                <p className="text-gray-600 text-sm">Private outdoor space surrounded by lush tropical gardens</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <GallerySection />

      {/* Activities & Experiences */}
      <section id="activities" className="py-24 px-4 bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-emerald-800 mb-8">
              <Activity className="inline w-8 h-8 mr-3 text-emerald-600" />
              Experiences & Activities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Immerse yourself in the natural wonders of Ramboda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/img21.jpg",
                title: "Nature Walks",
                description: "Guided forest walks to discover local flora and fauna",
                icon: Trees,
                color: "emerald"
              },
              {
                image: "/img22.jpg", 
                title: "Bird Watching",
                description: "Spot exotic tropical birds in their natural habitat",
                icon: Eye,
                color: "blue"
              },
              {
                image: "/img23.jpg",
                title: "Tea Plantation Tours",
                description: "Visit nearby tea estates and learn about Ceylon tea",
                icon: Coffee,
                color: "amber"
              },
              {
                image: "/img24.jpg",
                title: "Waterfall Hikes",
                description: "Trek to stunning waterfalls in the surrounding hills",
                icon: Mountain,
                color: "slate"
              },
              {
                image: "/img25.jpg",
                title: "Photography Tours",
                description: "Capture the perfect shots of scenic landscapes",
                icon: Camera,
                color: "purple"
              },
              {
                image: "/img26.jpg",
                title: "Sunset Viewing",
                description: "Experience breathtaking sunsets from prime viewpoints",
                icon: Sunset,
                color: "orange"
              }
            ].map((activity, index) => (
              <Card key={index} className="card-hover bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                <div className="relative h-48">
                  <Image src={activity.image} alt={activity.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                                         <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                       <activity.icon className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-emerald-800 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                  <Button variant="outline" className="w-full hover:bg-emerald-50">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section id="location" className="py-24 px-4 bg-gradient-to-br from-white via-emerald-25 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-emerald-800 mb-8">
              <Map className="inline w-8 h-8 mr-3 text-emerald-600" />
              Our Location
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Perfectly positioned in the heart of Sri Lanka's tea country
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Getting Here Card */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-emerald-800 mb-6">Getting Here</h3>
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-800 mb-1">Address</h4>
                      <p className="text-gray-600">Ramboda, Nuwara Eliya District, Sri Lanka</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Car className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-800 mb-1">By Car</h4>
                      <p className="text-gray-600">2.5 hours from Colombo via A1 highway<br />45 minutes from Kandy</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Mountain className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-800 mb-1">Elevation</h4>
                      <p className="text-gray-600">1,200 meters above sea level<br />Cool mountain climate year-round</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attractions Card */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-emerald-800 mb-6">Nearby Attractions</h3>
                <div className="space-y-3 flex-grow">
                  {[
                    { name: "Ramboda Falls", distance: "5 mins walk" },
                    { name: "Tea Factory", distance: "10 mins drive" },
                    { name: "Nuwara Eliya Town", distance: "30 mins drive" },
                    { name: "Horton Plains", distance: "1 hour drive" },
                    { name: "Adam's Peak", distance: "1.5 hours drive" }
                  ].map((attraction, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-emerald-100 last:border-0">
                      <span className="text-gray-700">{attraction.name}</span>
                      <span className="text-emerald-600 font-medium">{attraction.distance}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.674!2d80.4!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDgwwrAyNCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Button asChild className="bg-white/90 text-emerald-800 hover:bg-white shadow-lg">
                      <a 
                        href="https://www.google.com/maps/place/Ramboda,+Sri+Lanka/@6.7833,80.4,15z" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Map className="w-4 h-4 mr-2" />
                        Open in Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Amenities */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-50 via-teal-25 to-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Premium Amenities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Everything you need for a perfect mountain retreat
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Wifi, title: "High-Speed WiFi", description: "Stay connected with complimentary high-speed internet throughout the property", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Car, title: "Free Parking", description: "Secure on-site parking for all guests with 24/7 security monitoring", color: "text-gray-600", bg: "bg-gray-50" },
              { icon: Trees, title: "Forest Access", description: "Direct access to hiking trails and nature walks from the property", color: "text-emerald-600", bg: "bg-emerald-50" },
              { icon: Coffee, title: "Tea & Coffee", description: "Premium Ceylon tea and freshly ground coffee available 24/7", color: "text-amber-600", bg: "bg-amber-50" },
              { icon: Mountain, title: "Mountain Views", description: "Panoramic views of the surrounding hills and tea plantations", color: "text-slate-600", bg: "bg-slate-50" },
              { icon: Sunset, title: "Sunset Terrace", description: "Private terrace with unobstructed views of spectacular sunsets", color: "text-orange-600", bg: "bg-orange-50" },
              { icon: Utensils, title: "Local Cuisine", description: "Authentic Sri Lankan meals prepared with fresh local ingredients", color: "text-red-600", bg: "bg-red-50" },
              { icon: ShowerHead, title: "Hot Water", description: "24/7 hot water supply with eco-friendly solar heating system", color: "text-teal-600", bg: "bg-teal-50" },
              { icon: Heart, title: "Wellness Services", description: "On-request massage and wellness treatments in natural surroundings", color: "text-pink-600", bg: "bg-pink-50" }
            ].map((amenity, index) => (
              <Card key={index} className="text-center card-hover border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <div className={`w-20 h-20 ${amenity.bg} rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110`}>
                    <amenity.icon className={`w-10 h-10 ${amenity.color}`} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-emerald-800 mb-4">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-24 px-4 bg-gradient-to-br from-white via-emerald-25 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-emerald-800 mb-8">
              <Calendar className="inline w-8 h-8 mr-3 text-emerald-600" />
              Booking Information
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-emerald-800 mb-6">Rates & Packages</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-emerald-800">Forest View Suite</h4>
                      <p className="text-sm text-gray-600">Per night, includes breakfast</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-emerald-800">$120</span>
                      <p className="text-sm text-gray-600">USD</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-emerald-800">Garden View Room</h4>
                      <p className="text-sm text-gray-600">Per night, includes breakfast</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-emerald-800">$80</span>
                      <p className="text-sm text-gray-600">USD</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-emerald-800 mb-6">Booking Policies</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-emerald-800">Check-in: 2:00 PM</h4>
                      <p className="text-sm text-gray-600">Early check-in available on request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-emerald-800">Check-out: 11:00 AM</h4>
                      <p className="text-sm text-gray-600">Late check-out available on request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-emerald-800">Free Cancellation</h4>
                      <p className="text-sm text-gray-600">Up to 48 hours before arrival</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-emerald-800">Minimum Stay</h4>
                      <p className="text-sm text-gray-600">2 nights on weekends, 1 night weekdays</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold px-16 py-4 text-xl btn-glow shadow-2xl">
              <Calendar className="w-6 h-6 mr-3" />
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-emerald-800 mb-16">
            What Our Guests Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="card-hover bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "An absolutely magical experience! The cottage is beautifully designed and the 
                  forest setting is breathtaking. We felt completely relaxed and recharged."
                </blockquote>
                <cite className="font-bold text-emerald-800">- Sarah & Mark, UK</cite>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "Perfect getaway from city life. The hospitality was exceptional and the 
                  location couldn't be better. Already planning our next visit!"
                </blockquote>
                <cite className="font-bold text-emerald-800">- Raj & Priya, India</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Social */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-emerald-800 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-12">
            <Sparkles className="inline w-8 h-8 mr-3 text-yellow-300" />
            Plan Your Escape
          </h2>
          <p className="text-2xl mb-16 opacity-90 leading-relaxed">
            Ready to experience the magic of Tunnel Corner Cottage?
          </p>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-emerald-300" />
                  <span className="text-lg">Ramboda, Nuwara Eliya, Sri Lanka</span>
                </div>
                <div className="flex items-center justify-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Phone className="w-6 h-6 text-emerald-300" />
                  <span className="text-lg">+94 77 123 4567</span>
                </div>
                <div className="flex items-center justify-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-emerald-300" />
                  <span className="text-lg">info@tunnelcornercottage.lk</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-bold mb-8">Follow Us</h3>
              <p className="text-lg mb-8 opacity-90">Stay updated with our latest photos and availability</p>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white hover:text-emerald-800 font-semibold px-8 py-4 text-lg backdrop-blur-sm bg-white/10">
                <a 
                  href="https://www.facebook.com/profile.php?id=61570014249681" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                  Visit our Facebook Page
                </a>
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-white to-emerald-50 text-emerald-800 hover:from-emerald-50 hover:to-white font-bold px-16 py-4 text-xl btn-glow shadow-2xl">
              <Heart className="w-6 h-6 mr-3 text-red-500 animate-pulse" />
              Book Your Dream Stay
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-4 rounded-full"></div>
          </div>
          <p className="text-emerald-200 text-lg">
            © {new Date().getFullYear()} Tunnel Corner Cottage. All rights reserved.
          </p>
          <p className="text-emerald-300 mt-2 text-sm">
            🌿 Eco-friendly luxury retreat in Ramboda, Sri Lanka 🏔️
          </p>
        </div>
      </footer>
    </div>
  );
}

