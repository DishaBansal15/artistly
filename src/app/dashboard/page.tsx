"use client";

import { useEffect, useRef, useState } from "react";
import artistData from "@/data/artists.json";
import Header from "@/components/Header";
import ArtistCard from "@/components/ArtistCard";

// Define artist type
type Artist = {
  name: string;
  category: string;
  location: string;
  price: string;
  image?: string;
};

export default function DashboardPage() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedArtist(null);
      }
    };
    if (selectedArtist) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedArtist]);

  return (
    <main className="px-6 py-12 md:px-20 md:py-20 bg-white min-h-screen">
      <Header />
      <div className="mb-8" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-10 tracking-tight">
  Manager Dashboard
</h1>

      <div className="overflow-x-auto shadow-md rounded-xl">
        <table className="min-w-full text-sm bg-white">
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-left">
            <tr>
              <th className="py-3 px-4 font-medium">Name</th>
              <th className="py-3 px-4 font-medium">Category</th>
              <th className="py-3 px-4 font-medium">City</th>
              <th className="py-3 px-4 font-medium">Fee</th>
              <th className="py-3 px-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {artistData.map((artist: Artist, index) => (
              <tr
  key={index}
  className={`transition duration-200 ${
    index % 2 === 0 ? "bg-white" : "bg-purple-50"
  } hover:bg-purple-100`}
>

                <td className="py-3 px-4">{artist.name}</td>
                <td className="py-3 px-4">{artist.category}</td>
                <td className="py-3 px-4">{artist.location}</td>
                <td className="py-3 px-4">{artist.price}</td>
                <td className="py-3 px-4">
                  <button
                    className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:from-indigo-600 hover:to-purple-700 transition"
                    onClick={() => setSelectedArtist(artist)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal with card */}
      {selectedArtist && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="relative w-[95%] max-w-xl bg-white rounded-2xl shadow-2xl p-0"
          >
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500 transition"
            >
              &times;
            </button>

            <ArtistCard
              name={selectedArtist.name}
              category={selectedArtist.category}
              location={selectedArtist.location}
              price={selectedArtist.price}
              image={selectedArtist.image}
            />
          </div>
        </div>
      )}
    </main>
  );
}
