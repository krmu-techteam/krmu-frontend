import Image from "next/image";

const CampusLocation = () => {
  return (
    <div
      data-slot="card"
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl overflow-hidden"
    >
      <div className="relative">
        <Image
          src="/campus-location.webp"
          alt="K.R. Mangalam University Campus Location - Sohna Road, Gurugram"
          className="w-full h-80 object-cover"
          width={552}
          height={320}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h4 className="text-lg mb-2">Campus Location</h4>
          <p className="text-sm bg-black/50 rounded-lg px-3 py-2 backdrop-blur-sm">
            📍 Sohna Road, Gurugram - Prime location with excellent connectivity
          </p>
        </div>
      </div>
      <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg text-gray-800">Interactive Map</h4>
            <p className="text-sm text-gray-600">
              Get directions and explore nearby amenities
            </p>
          </div>
          <button className="bg-university-red hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition-colors duration-300">
            Open in Maps
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusLocation;
