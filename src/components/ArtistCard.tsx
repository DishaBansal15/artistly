import Image from "next/image";

interface Artist {
  name: string;
  category: string;
  price: string;
  location: string;
  image?: string;
}

const ArtistCard = ({ name, category, price, location, image }: Artist) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center border border-gray-200 rounded-xl bg-white transition-all duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 p-4 gap-4">
      
      {/* Image - Always on top (mobile), left (desktop) */}
      {image && (
        <div className="w-full sm:w-40 sm:h-40 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
          <Image
            src={image}
            alt={name}
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Details */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-gray-600 mt-1">📍 {location}</p>
        <p className="text-indigo-600 mt-1 font-medium">{price}</p>

        <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
        Ask for Quote
        </button>
      </div>
    </div>
  );
};

export default ArtistCard;
