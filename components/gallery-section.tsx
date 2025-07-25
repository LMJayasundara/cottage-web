'use client';

import { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Camera, Eye } from "lucide-react";

const galleryImages = [
  { src: "/img4.jpg", title: "Cozy Interior", category: "interior" },
  { src: "/img5.jpg", title: "Garden View", category: "exterior" },
  { src: "/img6.jpg", title: "Peaceful Setting", category: "nature" },
  { src: "/img7.jpg", title: "Modern Comfort", category: "interior" },
  { src: "/img8.jpg", title: "Forest Path", category: "nature" },
  { src: "/img9.jpg", title: "Scenic Balcony", category: "exterior" },
  { src: "/img10.jpg", title: "Luxury Amenities", category: "amenities" },
  { src: "/img11.jpg", title: "Mountain Vista", category: "nature" },
  { src: "/img12.jpg", title: "Elegant Decor", category: "interior" },
  { src: "/img13.jpg", title: "Natural Beauty", category: "nature" },
  { src: "/img14.jpg", title: "Comfortable Living", category: "interior" },
  { src: "/img15.jpg", title: "Outdoor Space", category: "exterior" },
  { src: "/img16.jpg", title: "Serene Environment", category: "nature" },
  { src: "/img17.jpg", title: "Private Retreat", category: "exterior" },
  { src: "/img18.jpg", title: "Modern Facilities", category: "amenities" },
  { src: "/img19.jpg", title: "Forest Escape", category: "nature" },
  { src: "/img20.jpg", title: "Cozy Atmosphere", category: "interior" },
  { src: "/img21.jpg", title: "Scenic Views", category: "nature" },
  { src: "/img22.jpg", title: "Relaxation Space", category: "interior" },
  { src: "/img23.jpg", title: "Natural Surroundings", category: "exterior" },
  { src: "/img24.jpg", title: "Peaceful Haven", category: "nature" },
  { src: "/img25.jpg", title: "Comfort Zone", category: "interior" },
  { src: "/img26.jpg", title: "Garden Paradise", category: "exterior" },
  { src: "/img27.jpg", title: "Premium Experience", category: "amenities" },
  { src: "/img28.jpg", title: "Forest Cottage", category: "exterior" },
  { src: "/img29.jpg", title: "Luxury Interior", category: "interior" },
  { src: "/img30.jpg", title: "Nature's Beauty", category: "nature" },
  { src: "/img31.jpg", title: "Tranquil Setting", category: "nature" },
  { src: "/img32.jpg", title: "Modern Comfort", category: "amenities" },
  { src: "/img33.jpg", title: "Scenic Landscape", category: "nature" },
  { src: "/img34.jpg", title: "Cozy Retreat", category: "interior" },
  { src: "/img35.jpg", title: "Mountain Air", category: "nature" },
  { src: "/img36.jpg", title: "Elegant Space", category: "interior" },
  { src: "/img37.jpg", title: "Perfect Getaway", category: "exterior" }
];

const categories = ["all", "interior", "exterior", "nature", "amenities"];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <section id="gallery" className="py-24 px-4 bg-gradient-to-br from-white via-emerald-25 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-emerald-800 mb-8">
            <Camera className="inline w-8 h-8 mr-3 text-emerald-600" />
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 mb-8">
            Discover the beauty and tranquility of Tunnel Corner Cottage
          </p>

          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={
                  activeFilter === filter 
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                    : "hover:bg-emerald-50 text-emerald-700 border-emerald-200"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={`${activeFilter}-${index}`}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ 
                height: index % 7 === 0 ? '300px' : index % 5 === 0 ? '250px' : '200px' 
              }}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg">{image.title}</h3>
                <p className="text-sm opacity-80 capitalize">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Results count */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-6">
            Showing {filteredImages.length} {activeFilter === "all" ? "photos" : `${activeFilter} photos`}
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 btn-glow">
            <Eye className="w-5 h-5 mr-2" />
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
} 