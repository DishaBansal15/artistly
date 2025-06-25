"use client";

import { useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import artistData from "@/data/artists.json";
import Header from '@/components/Header';

const uniqueCategories = [...new Set(artistData.map((a) => a.category))];
const uniqueLocations = [...new Set(artistData.map((a) => a.location))];

export default function ArtistsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const filteredArtists = artistData.filter((artist) => {
    return (
      (selectedCategory === "" || artist.category === selectedCategory) &&
      (locationQuery === "" || artist.location.toLowerCase().includes(locationQuery.toLowerCase()))
    );
  });

  return (
    
    <main className="px-6 py-12 md:px-20 md:py-20 bg-white min-h-screen">
         <Header />
         <div className="mb-8" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-10 tracking-tight">
  Explore Artists
</h1>


    <div className="flex flex-col md:flex-row gap-4 mb-8 w-full">
  {/* Category Dropdown - Improved for small screens */}
<div className="w-full md:w-1/3 min-w-0"> {/* Ensures parent respects boundaries */}
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="
      w-full px-4 py-2 
      border border-gray-300 rounded-md 
      bg-white text-gray-700 
      shadow-sm focus:outline-none 
      focus:ring-2 focus:ring-indigo-500 
      transition
      truncate              /* Truncates long text */
      max-w-full           /* Prevents overflow */
    "
  >
    <option disabled value="">🎭 Select Category</option>
    {uniqueCategories.map((cat) => (
      <option 
        key={cat} 
        value={cat}
        className="truncate" /* Truncates options in dropdown */
      >
        {cat}
      </option>
    ))}
  </select>
</div>

  {/* Location Input */}
  <input
    type="text"
    placeholder="Search by location..."
    value={locationQuery}
    onChange={(e) => setLocationQuery(e.target.value)}
    className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
  />
</div>



      {/* Artist Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.map((artist, index) => (
         <ArtistCard
  key={index}
  name={artist.name}
  category={artist.category}
  price={artist.price}
  location={artist.location}
  image={artist.image}
/>

        ))}
      </div>
    </main>
  );
}
