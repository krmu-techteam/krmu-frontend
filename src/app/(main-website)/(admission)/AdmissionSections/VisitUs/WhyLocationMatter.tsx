const WhyLocationMatter = () => {
  return (
    <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl text-gray-800 mb-2 font-bold">
          Why Our Location Matters
        </h3>
        <p className="text-gray-600">
          Strategic advantages of our Gurugram campus
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl text-university-blue mb-2 font-bold">
            40 min
          </div>
          <p className="text-gray-600 text-sm">From Delhi Airport</p>
        </div>
        <div>
          <div className="text-3xl text-university-red mb-2 font-bold">
            500+
          </div>
          <p className="text-gray-600 text-sm">IT Companies Nearby</p>
        </div>
        <div>
          <div className="text-3xl text-university-blue mb-2 font-bold">
            36 Min
          </div>
          <p className="text-gray-600 text-sm">From Metro </p>
        </div>
        <div>
          <div className="text-3xl text-university-red mb-2 font-bold">
            100+
          </div>
          <p className="text-gray-600 text-sm">MNC Offices in 20km</p>
        </div>
      </div>
    </div>
  );
};

export default WhyLocationMatter;
