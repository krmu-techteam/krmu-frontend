const VirtualTour = () => {
  return (
    <div
      data-slot="card"
      className="flex flex-col gap-6 rounded-xl border-0 shadow-xl bg-gradient-to-r from-university-blue to-university-red text-white"
    >
      <div
        data-slot="card-content"
        className="[&amp;:last-child]:pb-6 p-8 text-center"
      >
        <h3 className="text-2xl mb-4">Virtual Campus Tour</h3>
        <p className="mb-6 text-blue-100">
          {`Can't visit in person? Take our interactive virtual tour
                      and explore our beautiful campus from anywhere.`}
        </p>
        <button className="bg-white text-university-blue hover:bg-gray-100 px-8 py-3 rounded-full transition-colors duration-300">
          Start Virtual Tour
        </button>
      </div>
    </div>
  );
};

export default VirtualTour;
